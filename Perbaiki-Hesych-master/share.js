let _bundle = null;
let _revealed = new Set();

// Parse bundle from URL hash
function parseBundle(){
  try{
    const hash = window.location.hash.slice(1);
    if(!hash) return null;
    return JSON.parse(atob(hash));
  }catch(e){ return null; }
}

function showState(id){
  ['stateLoading','stateError','stateUnlock','stateResult']
    .forEach(s=>document.getElementById(s).style.display = s===id?'block':'none');
}

function toggleEye(){
  const input = document.getElementById('passphraseInput');
  const icon = document.getElementById('eyeIcon');
  if(input.type==='password'){
    input.type='text';
    icon.innerHTML='<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
  } else {
    input.type='password';
    icon.innerHTML='<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  }
}

async function deriveKey(passphrase, saltB64){
  const saltBytes = Uint8Array.from(atob(saltB64), c=>c.charCodeAt(0));
  const keyMaterial = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(passphrase),
    {name:'PBKDF2'}, false, ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    {name:'PBKDF2', salt:saltBytes, iterations:600000, hash:'SHA-256'},
    keyMaterial,
    {name:'AES-GCM', length:256},
    false, ['encrypt','decrypt']
  );
}

async function doUnlock(){
  const passphrase = document.getElementById('passphraseInput').value;
  const msg = document.getElementById('unlockMsg');
  const btn = document.getElementById('unlockBtn');

  if(!passphrase){ msg.textContent='Enter passphrase'; msg.className='msg err'; return; }

  // M2 FIX: check expiry before running expensive PBKDF2 (bundle v:2 only)
  if(_bundle.v === 2 && _bundle.exp && Date.now() > _bundle.exp){
    showState('stateError');
    document.getElementById('errorTitle').textContent = 'Link Expired';
    document.getElementById('errorDesc').textContent = 'This shared link has expired. Ask the sender to generate a new one.';
    return;
  }

  btn.disabled=true;
  btn.innerHTML='<span style="opacity:.6">Decrypting…</span>';
  msg.textContent='';

  try{
    const key = await deriveKey(passphrase, _bundle.s);
    const iv = Uint8Array.from(atob(_bundle.iv), c=>c.charCodeAt(0));
    const data = Uint8Array.from(atob(_bundle.d), c=>c.charCodeAt(0));
    const dec = await crypto.subtle.decrypt({name:'AES-GCM', iv}, key, data);
    const payload = JSON.parse(new TextDecoder().decode(dec));

    // Check expiry
    if(payload.exp && Date.now() > payload.exp){
      showState('stateError');
      document.getElementById('errorTitle').textContent = 'Link Expired';
      document.getElementById('errorDesc').textContent = 'This shared link has expired. Ask the sender to generate a new one.';
      return;
    }

    renderResult(payload);
  }catch(e){
    msg.textContent = 'Wrong passphrase. Try again.';
    msg.className = 'msg err';
    btn.disabled=false;
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg> View Password`;
  }
}

// C3 FIX: renderResult now builds DOM with createElement + textContent/addEventListener.
// No user-controlled data is ever interpolated into HTML strings or inline onclick attributes.
const _fieldValues = {}; // store values by field id for safe access

function renderResult(payload){
  document.getElementById('resultTitle').textContent = payload.title || 'Shared Item';

  const fields = [];
  if(payload.username) fields.push({label:'USERNAME', value:payload.username, type:'text', id:'username'});
  if(payload.password) fields.push({label:'PASSWORD', value:payload.password, type:'password', id:'password'});
  if(payload.notes) fields.push({label:'NOTES', value:payload.notes, type:'text', id:'notes'});
  if(payload.totp) fields.push({label:'2FA SECRET', value:payload.totp, type:'password', id:'totp'});

  const container = document.getElementById('resultFields');
  container.innerHTML = '';

  fields.forEach(f => {
    // Store value safely — never in DOM attributes
    _fieldValues[f.id] = f.value;

    const row = document.createElement('div');
    row.className = 'field-row';

    const labelEl = document.createElement('div');
    labelEl.className = 'field-row-label';
    labelEl.textContent = f.label; // safe: label is hardcoded above, not user data

    const valueEl = document.createElement('div');
    valueEl.className = 'field-row-value' + (f.type === 'password' ? ' masked' : '');
    valueEl.id = 'val-' + f.id;

    // Text node for the value display
    const textNode = document.createTextNode(f.type === 'password' ? '••••••••' : f.value);
    valueEl.appendChild(textNode);

    // Reveal button (password fields only)
    if(f.type === 'password'){
      const revealBtn = document.createElement('button');
      revealBtn.className = 'reveal-btn';
      revealBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
      revealBtn.addEventListener('click', () => toggleReveal(f.id));
      valueEl.appendChild(revealBtn);
    }

    // Copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
    copyBtn.addEventListener('click', () => copyField(f.id, copyBtn));
    valueEl.appendChild(copyBtn);

    row.appendChild(labelEl);
    row.appendChild(valueEl);
    container.appendChild(row);
  });

  // Expiry countdown
  if(payload.exp){
    const rem = payload.exp - Date.now();
    const dot = document.getElementById('expiryDot');
    const txt = document.getElementById('expiryText');
    const hrs = Math.floor(rem/3600000);
    const mins = Math.floor((rem%3600000)/60000);
    if(rem < 3600000){ dot.className='expiry-dot warn'; }
    txt.textContent = hrs > 0
      ? `Expires in ${hrs}h ${mins}m`
      : `Expires in ${mins} minutes`;
  }

  // C3 FIX: strip URL fragment from address bar after successful decrypt
  // Prevents encrypted bundle from staying in browser history
  history.replaceState(null, '', location.pathname);

  showState('stateResult');
}

function toggleReveal(id){
  const el = document.getElementById('val-'+id);
  if(!el) return;
  const value = _fieldValues[id] || '';
  if(_revealed.has(id)){
    _revealed.delete(id);
    el.classList.add('masked');
    el.firstChild.textContent = '••••••••';
  } else {
    _revealed.add(id);
    el.classList.remove('masked');
    el.firstChild.textContent = value;
  }
}

async function copyField(id, btn){
  const value = _fieldValues[id] || '';
  try{
    await navigator.clipboard.writeText(value);
    const orig = btn.innerHTML;
    btn.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
    setTimeout(()=>btn.innerHTML=orig, 1500);
  }catch(e){}
}

function escHtml(str){
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Init
window.addEventListener('DOMContentLoaded', ()=>{
  // Apply theme: localStorage (returning user) → system preference → dark default
  const theme = localStorage.getItem('hesych_theme')
    || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  if(theme !== 'dark') document.documentElement.setAttribute('data-theme', theme);

  _bundle = parseBundle();
  if(!_bundle || (_bundle.v !== 1 && _bundle.v !== 2)){
    showState('stateError');
    document.getElementById('errorTitle').textContent = 'Invalid Link';
    document.getElementById('errorDesc').textContent = 'This link is invalid or has been corrupted.';
    return;
  }
  // M2 FIX: pre-decrypt expiry check for v:2 bundles
  if(_bundle.v === 2 && _bundle.exp && Date.now() > _bundle.exp){
    showState('stateError');
    document.getElementById('errorTitle').textContent = 'Link Expired';
    document.getElementById('errorDesc').textContent = 'This shared link has expired. Ask the sender to generate a new one.';
    return;
  }

  // Wire up event listeners (replaces inline onclick/onkeydown handlers)
  document.getElementById('passphraseInput').addEventListener('keydown', e => {
    if(e.key === 'Enter') doUnlock();
  });
  document.getElementById('eyeToggleBtn').addEventListener('click', toggleEye);
  document.getElementById('unlockBtn').addEventListener('click', doUnlock);

  showState('stateUnlock');
});
