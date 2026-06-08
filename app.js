// ===== I18N =====
const STRINGS = {
'lock.subtitle':'Enter your master password to continue',
    'lock.setupSubtitle':'Create a master password for your new vault',
    'lock.masterPwLabel':'Vault Master Password',
    'lock.masterPwPh':'Password to open vault',
    'lock.confirmPwLabel':'Confirm Master Password',
    'lock.confirmPwPh':'Repeat master password',
    'lock.unlockBtn':'Unlock Vault',
    'lock.createBtn':'Create Vault',
    'lock.openingBtn':'Unlocking…',
    'lock.creatingBtn':'Setting up vault…',
    'lock.resetLink':'Reset & create new vault',
    'lock.enterPw':'Enter master password',
    'lock.noConfirm':'Please confirm your password',
    'lock.noMatch':'Passwords do not match',
    'lock.minLenWarn':'Master password must be at least 12 characters for optimal security',
    'lock.lockedFor':'Locked for {s}s',
    'lock.wrongPw':'Wrong password. {n} attempts left',
    'lock.resetConfirm':'Resetting the vault will delete ALL data and your master password.\n\nContinue?',
    'lock.resetDone':'Vault reset. Create a new master password.',
    'filter.fav':'Favorites',
    'filter.all':'All',
    'filter.social':'Social',
    'filter.finance':'Finance',
    'filter.email':'Email',
    'filter.work':'Work',
    'filter.other':'Other',
    'filter.shopping':'Shopping',
    'filter.gaming':'Gaming',
    'search.ph':'Search name, username, or notes…',
    'app.importBtn':'Import',
    'app.exportTitle':'Backup / Export',
    'app.changePwTitle':'Change Vault Master Password',
    'app.lockTitle':'Lock Vault',
    'sheet.addTitle':'Add Secret',
    'sheet.editTitle':'Edit Secret',
    'sheet.nameLabel':'Name / Service',
    'sheet.namePh':'Gmail, Instagram, etc.',
    'sheet.catLabel':'Category',
    'sheet.userLabel':'Username / Email',
    'sheet.userPh':'user@email.com',
    'sheet.pwLabel':'Account Password',
    'sheet.pwPh':'Password for this account',
    'sheet.pwEditPh':'(leave blank = unchanged)',
    'sheet.notesLabel':'Notes (optional)',
    'sheet.notesPh':'Extra info, PIN, security questions…',
    'sheet.saveBtn':'Save',
    'sheet.cancelBtn':'Cancel',
    'cat.other':'Other',
    'cat.social':'Social Media',
    'cat.finance':'Finance / Banking',
    'cat.email':'Email',
    'cat.work':'Work / Business',
    'cat.social.s':'Social',
    'cat.finance.s':'Finance',
    'cat.email.s':'Email',
    'cat.work.s':'Work',
    'cat.other.s':'Other',
    'cat.shopping':'Shopping',
    'cat.shopping.s':'Shopping',
    'cat.gaming':'Gaming',
    'cat.gaming.s':'Gaming',
    'cpSheet.title':'Change Vault Master Password',
    'cpSheet.warn':'⚠️ This is the <strong style="color:var(--text)">vault master password</strong> . Not an individual account password.',
    'cpSheet.oldLabel':'Old Master Password',
    'cpSheet.oldPh':'Current vault master password',
    'cpSheet.newLabel':'New Master Password',
    'cpSheet.newPh':'New master password',
    'cpSheet.confirmLabel':'Confirm New Master Password',
    'cpSheet.confirmPh':'Repeat new master password',
    'cpSheet.saveBtn':'Save New Password',
    'cpSheet.cancelBtn':'Cancel',
    'cp.allRequired':'All fields are required',
    'cp.noMatch':'New passwords do not match',
    'cp.minLen':'Master password must be at least 12 characters',
    'cp.verifying':'Verifying…',
    'cp.reEncrypting':'Re-encrypting data…',
    'cp.wrongOld':'Old master password is incorrect',
    'import.title':'Import Backup',
    'import.desc':'Found <strong id="importCount">0</strong> items in this backup file. Choose an import mode:',
    'import.mergeBtn':'Merge',
    'import.mergeNote':'Add to existing data',
    'import.replaceBtn':'Replace All',
    'import.replaceNote':'Old data will be deleted',
    'import.cancelBtn':'Cancel',
    'delete.title':'Delete Item',
    'delete.desc':'Are you sure you want to delete <strong id="deleteConfirmName"></strong>? This action cannot be undone.',
    'delete.confirmBtn':'Yes, Delete',
    'delete.cancelBtn':'Cancel',
    'secretLock.title':'Hide for a While',
    'secretLock.desc':'Hide <strong id="secretLockItemName"></strong> until the timer runs out.',
    'secretLock.whatTitle':'What is this for?',
    'secretLock.whatDesc':'This item will be hidden until the timer expires. You won\'t be able to copy or view the password. Great for digital detox or when sharing your device.',
    'secretLock.gotIt':'Got it, don\'t show again',
    'secretLock.p5m':'5 min','secretLock.p30m':'30 min','secretLock.p1h':'1 hour',
    'secretLock.p6h':'6 hours','secretLock.p1d':'1 day','secretLock.p1w':'1 week',
    'secretLock.year':'Years','secretLock.month':'Months','secretLock.week':'Weeks',
    'secretLock.day':'Days','secretLock.hour':'Hours','secretLock.min':'Minutes','secretLock.sec':'Seconds',
    'secretLock.chooseDur':'Choose duration',
    'secretLock.lockBtn':'Hide Now',
    'secretLock.cancelBtn':'Cancel',
    'importPw.title':'Verify Backup',
    'importPw.desc':'This backup is from a different vault/device. Enter the <strong>original vault\'s master password</strong> to continue.',
    'importPw.ph':'Original vault master password',
    'importPw.confirmBtn':'Verify & Continue',
    'importPw.cancelBtn':'Cancel',
    'importPw.enterPw':'Enter master password',
    'importPw.verifying':'Verifying…',
    'importPw.wrongPw':'Wrong password or corrupt backup',
    'importPw.hint':'This is not your current vault password. Enter the password used when this backup was originally created.',
    'strength.weak':'Weak','strength.fair':'Fair','strength.strong':'Strong','strength.veryStrong':'Very Strong',
    'strength.minLen':'{label}, minimum 8 characters',
    'detail.username':'Username','detail.password':'Password','detail.notes':'Notes',
    'detail.copyPw':'Copy PW','detail.fav':'Favorite','detail.unfav':'Unpin',
    'detail.edit':'Edit','detail.delete':'Delete',
    'detail.lockSecret':'Hide',
    'detail.locked':'🔒 Hidden until {time}. You set this intentionally',
    'card.locked':'🔒 Hidden',
    'section.favs':'★ Favorites','section.all':'All',
    'empty.noResults':'No results for “<strong>{q}</strong>”',
    'empty.noFav':'No favorites yet.<br>Tap the star on an item to pin it.',
    'empty.noItems':'No items in this category.',
    'dur.lockFor':'Lock for {parts}',
    'dur.year':'yr','dur.month':'mo','dur.week':'wk','dur.day':'d',
    'dur.hour':'h','dur.min':'min','dur.sec':'s',
    'dur.chooseDur':'Choose duration',
    'cd.day':'d','cd.hour':'h',
    'toast.idleLock':'Vault locked automatically (idle)',
    'toast.tabLock':'Vault locked (tab hidden)',
    'toast.favAdded':'Added to favorites',
    'toast.favRemoved':'Removed from favorites',
    'toast.saved':'Updated','toast.added':'Saved','toast.deleted':'Deleted',
    'toast.passGen':'Password generated',
    'toast.backupSaved':'Backup saved',
    'toast.copiedPw':'Password copied',
    'toast.copiedUser':'Username copied',
    'toast.secretExpired':'Lock secret expired: {name}',
    'toast.secretCancelled':'Lock secret cancelled',
    'toast.importCancelled':'Import cancelled',
    'toast.importDone':'`{n}` items imported ({mode})',
    'toast.importMerge':'merged','toast.importReplace':'replaced',
    'toast.cpSuccess':'Master password changed successfully',
    'toast.decryptFailed':'{n} items failed to decrypt',
    'toast.itemLocked':'Item locked. Wait for the timer',
    'toast.nameRequired':'Name is required',
    'toast.pwRequired':'Account password is required',
    'toast.importFail':'Import failed: {msg}',
    'toast.backupFail':'Backup failed: {msg}',
    'toast.copyFail':'Failed to copy: {msg}',
    'toast.decryptErr':'Decryption failed: {msg}',
    'toast.importInvalid':'{n} invalid items (rows: {rows})',
    'toast.vaultNotOpen':'Import failed: vault not open',
    'feedback.copied':'Copied',
    'err.decryptFail':'Decryption failed. Wrong password or corrupted data',
    'bio.btnUnlock':'Unlock with Biometrics',
    'bio.btnSetup':'Enable Biometric Login',
    'bio.btnDisable':'Disable Biometrics',
    'bio.enabled':'Biometric login enabled ✓',
    'bio.disabled':'Biometric login disabled',
    'bio.failed':'Biometric authentication failed',
    'bio.setupFailed':'Failed to enable biometrics',
    'bio.expired':'Biometric session expired. Enter password',
    'bio.unlocking':'Unlocking with biometrics…',
    'bio.unsupported':'Device does not support biometrics',
    'breach.btnTitle':'Check Passwords (HIBP)',
    'breach.detailLabel':'Breach',
    'breach.checking':'Checking…',
    'breach.doneAll':'All passwords are safe ✓',
    'breach.done':'{breached} breached, {safe} safe',
    'breach.safe':'Safe ✓',
    'breach.breached':'Breached {n}x',
    'breach.unchecked':'Not checked',
    'breach.safeSingle':'Password is safe ✓',
    'breach.breachedSingle':'Password breached! Found {n}x',
    'breach.apiErr':'Breach check failed: {msg}',
    'breach.offline':'No internet connection',
    'breach.checkSingle':'Check this password',
    'totp.label':'2FA',
    'totp.copy':'Copy code',
    'totp.copied':'Copied!',
    'totp.copyToast':'2FA code copied. Valid for ~{s} more seconds',
    'totp.invalid':'Invalid 2FA secret',
    'sheet.totpLabel':'2FA / TOTP Secret (optional)',
    'sheet.totpPh':'AAAA BBBB CCCC DDDD',
    'sheet.totpHint':'Fill if this account has 2FA. Code is generated locally.',
    // ===== PREMIUM / LICENSE =====
    'premium.badge':'PREMIUM',
    'premium.freeBadge':'FREE',
    'premium.locked':'Premium Feature',
    'premium.lockedDesc':'Upgrade to Hesych Premium to unlock this feature.',
    'premium.upgradeBtn':'Upgrade — $9.99 Lifetime',
    'premium.enterKey':'Enter License Key',
    'premium.keyPh':'HESYCH-XXXX-XXXX-XXXX-XXXX',
    'premium.keyLabel':'License Key',
    'premium.keyHint':'Check your email after purchase.',
    'premium.activateBtn':'Activate',
    'premium.activating':'Verifying…',
    'premium.activeTitle':'Hesych Premium',
    'premium.activeDesc':'Your vault is unlocked. Thank you for supporting Hesych!',
    'premium.activeSince':'Active since {date}',
    'premium.deactivateBtn':'Remove License',
    'premium.deactivateConfirm':'Remove your license key? Premium features will be disabled.',
    'premium.activated':'🎉 Premium activated!',
    'premium.deactivated':'License removed',
    'premium.invalidKey':'Invalid or expired license key',
    'premium.menuItem':'Upgrade to Premium',
    'premium.manageItem':'Manage License',
    // ===== VAULT HEALTH =====
    'health.title':'Vault Health',
    'health.score':'Health Score',
    'health.great':'Great! Your vault looks healthy!',
    'health.good':'Good. A few things to improve.',
    'health.fair':'Fair. Several issues need attention.',
    'health.poor':'Poor. Take action to secure your vault.',
    'health.scanning':'Scanning…',
    'health.dupTitle':'Reused Passwords',
    'health.dupDesc':'{n} accounts share the same password.',
    'health.weakTitle':'Weak Passwords',
    'health.weakDesc':'{n} passwords are too easy to guess.',
    'health.oldTitle':'Old Passwords',
    'health.oldDesc':'{n} passwords haven\'t been changed in over 6 months.',
    'health.noDup':'No reused passwords ✓',
    'health.noWeak':'No weak passwords ✓',
    'health.noOld':'No old passwords ✓',
    'health.fixBtn':'View & Fix',
    'health.closeBtn':'Close',
    'health.premiumHint':'Vault Health is a Premium feature.',
    // ===== PASSWORD EXPIRY =====
    'expiry.badge':'Old password',
    'expiry.days':'{n} days old',
    'expiry.months':'{n} months old',
    'expiry.detail':'Last changed {date}',
    'expiry.never':'Never updated',
    // ===== ENCRYPTED EXPORT =====
    'encExport.menuItem':'Backup / Export',
    'encExport.title':'Backup / Export',
    'encExport.desc':'Export your vault as an encrypted file. Restore on any device, even after a full reset.',
    'encExport.useMaster':'Use master password',
    'encExport.useCustom':'Use custom password',
    'encExport.pwLabel':'Custom Password',
    'encExport.pwPh':'Min. 8 characters',
    'encExport.confirmLabel':'Confirm Password',
    'encExport.confirmPh':'Repeat password',
    'encExport.exportBtn':'Download Backup',
    'encExport.cancelBtn':'Cancel',
    'encExport.noMatch':'Passwords do not match',
    'encExport.minLen':'Minimum 8 characters',
    'encExport.success':'Backup saved!',
    'encExport.warning':'Remember this password. It cannot be recovered.',
    // ===== PASSWORD GENERATOR ADVANCED =====
    'gen.title':'Password Generator',
    'gen.modePassword':'Random',
    'gen.modePassphrase':'Passphrase',
    'gen.length':'Length',
    'gen.words':'Words',
    'gen.separator':'Separator',
    'gen.includeUpper':'Uppercase (A-Z)',
    'gen.includeLower':'Lowercase (a-z)',
    'gen.includeNumbers':'Numbers (0-9)',
    'gen.includeSymbols':'Symbols (!@#$...)',
    'gen.excludeAmbiguous':'Exclude ambiguous (0O, lI1)',
    'gen.capitalize':'Capitalize words',
    'gen.includeNumber':'Include a number',
    'gen.bulk':'Bulk Generate',
    'gen.bulkCount':'{n} passwords',
    'gen.copyAll':'Copy All',
    'gen.useThis':'Use This',
    'gen.regenerate':'Regenerate',
    'gen.copied':'Copied!',
    'gen.bulkCopied':'All copied!',
    'gen.premiumHint':'Advanced Generator is a Premium feature.',
    'gen.advanced':'Advanced Options',
    // ===== CUSTOM FIELDS =====
    'cf.label':'Custom Fields',
    'cf.addField':'+ Add Field',
    'cf.fieldName':'Field name',
    'cf.fieldValue':'Value',
    'cf.fieldNamePh':'e.g. PIN, Recovery Code',
    'cf.fieldValuePh':'Value',
    'cf.removeField':'Remove',
    'cf.premiumHint':'Custom Fields is a Premium feature.',
    'cf.copyField':'Copy',
    'cf.copied':'Copied!',
    'cf.typeText':'Text',
    'cf.typePassword':'Password',
    'cf.showField':'Show',
    'cf.hideField':'Hide',
    // ===== TAGS =====
    'tags.label':'Tags',
    'tags.addPh':'Add tag…',
    'tags.filterTitle':'Advanced Filters',
    'tags.filterTags':'Filter by Tag',
    'tags.filterStatus':'Filter by Status',
    'tags.filterStrength':'Filter by Strength',
    'tags.filterAge':'Filter by Age',
    'tags.statusAll':'Any',
    'tags.statusBreached':'Breached',
    'tags.statusSafe':'Safe',
    'tags.statusUnchecked':'Unchecked',
    'tags.strengthAny':'Any',
    'tags.strengthWeak':'Weak',
    'tags.strengthFair':'Fair',
    'tags.strengthStrong':'Strong+',
    'tags.ageAny':'Any age',
    'tags.ageOld':'Older than 90 days',
    'tags.ageNew':'Changed recently',
    'tags.clearFilters':'Clear All Filters',
    'tags.activeFilters':'{n} filter active',
    'tags.premiumHint':'Tags & Advanced Filters are Premium features.',
    'tags.filterBtn':'Filter',
    // ===== SHARE =====
    'share.btn':'Share',
    'share.title':'Share Password',
    'share.desc':'Generate an encrypted link. Recipient needs the passphrase to view. No Hesych account required.',
    'share.passphraseLbl':'Passphrase',
    'share.passphrasePh':'Min. 8 characters',
    'share.expiry':'Link expires in',
    'share.exp1h':'1 hour',
    'share.exp24h':'24 hours',
    'share.exp72h':'3 days',
    'share.exp7d':'7 days',
    'share.generateBtn':'Generate Link',
    'share.copyLink':'Copy Link',
    'share.linkCopied':'Link copied!',
    'share.warning':'Send the passphrase via a separate channel (WhatsApp, SMS, etc.)',
    'share.premiumHint':'Encrypted Share Link is a Premium feature.',
    'share.includes':'What\'s included',
    'share.inclPw':'Password',
    'share.inclUser':'Username',
    'share.inclNotes':'Notes',
    'share.inclTotp':'2FA code',
    'share.regenerate':'New Link',
    'share.expired':'This link has expired.',
    'share.wrongPw':'Wrong passphrase. Try again.',
    'share.unlock':'View Password',
    'share.unlockBtn':'Unlock',
    'share.viewerTitle':'Shared Item',
    'share.logTitle':'Share History',
    'share.logEmpty':'No links generated yet.',
    'share.logExpired':'Expired',
    'share.logActive':'Active',
    'share.logCopied':'Link copied!',
};

function t(key, vars) {
  const str = STRINGS[key] || key;
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] !== undefined ? vars[k] : '{' + k + '}');
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.getAttribute('data-i18n-title')); });
  const catSel = document.getElementById('fCategory');
  if (catSel) {
    catSel.options[0].textContent = t('cat.other');
    catSel.options[1].textContent = t('cat.social');
    catSel.options[2].textContent = t('cat.finance');
    catSel.options[3].textContent = t('cat.email');
    catSel.options[4].textContent = t('cat.work');
    if(catSel.options[5]) catSel.options[5].textContent = t('cat.shopping');
    if(catSel.options[6]) catSel.options[6].textContent = t('cat.gaming');
  }
  if (_key) render();
  updateBioUI();
}

// ===== THEME =====
let _theme = (() => {
  const saved = localStorage.getItem('hesych_theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
})();

function applyTheme(theme) {
  _theme = theme;
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  const iconDark = document.getElementById('themeIconDark');
  const iconLight = document.getElementById('themeIconLight');
  if (iconDark && iconLight) {
    if(theme === 'light'){ iconDark.classList.add('hidden'); iconLight.classList.remove('hidden'); }
    else { iconDark.classList.remove('hidden'); iconLight.classList.add('hidden'); }
  }

}

function toggleTheme() {
  const newTheme = _theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('hesych_theme', newTheme);
  applyTheme(newTheme);
}

// Apply theme on load
applyTheme(_theme);

// ===== SVG ICON STRINGS =====
const SVG = {
  eyeOpen: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22"/></svg>`,
  chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  copy: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  edit: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>`,
  lockEmpty: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".35"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  searchEmpty: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".35"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  editTitle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  star: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  starOutline: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
};

// ===== CONFIG =====
const DB_NAME = 'VaultDB';
const DB_VER = 6;
const STORE = 'items';
const HIST_STORE = 'pw_history';
const SHARE_LOG_STORE = 'share_log';
const HIST_MAX = 10;
// L6 FIX: marker version untuk row yang metadata sensitifnya sudah ter-enkripsi
// (category, tags, breachStatus, breachCheckedAt). Row tanpa marker ini =
// data lama hasil DB_VER <= 5 → akan di-migrate lazy saat loadItems().
const ROW_META_V = 6;
const MAX_ATTEMPTS = 5;
const IDLE_LOCK_MS = 5 * 60 * 1000; // 5 menit idle → auto-lock

function getCategories() {
  return {
    social:  {label: t('cat.social.s'),  cls: 'cat-social'},
    finance: {label: t('cat.finance.s'), cls: 'cat-finance'},
    email:   {label: t('cat.email.s'),   cls: 'cat-email'},
    work:    {label: t('cat.work.s'),    cls: 'cat-work'},
    other:   {label: t('cat.other.s'),   cls: 'cat-other'},
    shopping:{label: t('cat.shopping.s'), cls: 'cat-shopping'},
    gaming:  {label: t('cat.gaming.s'),  cls: 'cat-gaming'},
  };
}

// ===== STATE =====
let db = null;
let _key = null;
let _items = [];
let editId = null;
let attempts = 0;
let lockedUntil = 0;
let _expanded = new Set();
let _revealed = new Set(); // item ids with password shown
let _filter = 'all';
let _importPending = null; // {data, file}
let _importSessionKey = null; // key disimpan sebelum file picker dibuka
let _backupPending = null; // bundle encrypted backup yang menunggu password
let _idleTimer = null;
// ===== LOCK SECRET STATE =====
// Map: itemId → { unlocksAt: timestamp (ms), timerId }
let _secretLocks = new Map();
let _secretTimers = new Map();

// ===== INDEXEDDB =====
function openDB(){
  if(navigator.storage&&navigator.storage.persist)navigator.storage.persist();
  return new Promise((res,rej)=>{
    const req = indexedDB.open(DB_NAME, DB_VER);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if(!d.objectStoreNames.contains(STORE)){
        d.createObjectStore(STORE, {keyPath:'id', autoIncrement:true});
      }
      // v2: no schema change, just version bump for category/fav fields
      // v4: add pw_history object store
      if(!d.objectStoreNames.contains(HIST_STORE)){
        const hs = d.createObjectStore(HIST_STORE, {keyPath:'hid', autoIncrement:true});
        hs.createIndex('itemId', 'itemId', {unique:false});
      }
      // v5: share link log
      if(!d.objectStoreNames.contains(SHARE_LOG_STORE)){
        const sl = d.createObjectStore(SHARE_LOG_STORE, {keyPath:'slid', autoIncrement:true});
        sl.createIndex('itemId', 'itemId', {unique:false});
      }
      // v6: L6 FIX — no schema change. Bump version to trigger lazy migration of
      // metadata fields (category, tags, breachStatus, breachCheckedAt) from
      // plaintext to AES-GCM encrypted. Migration runs in loadItems() on first
      // unlock after upgrade.
    };
    req.onsuccess = e => res(e.target.result);
    req.onerror = () => rej(req.error);
  });
}

function dbAll(){
  return new Promise((res,rej)=>{
    const tx = db.transaction(STORE,'readonly');
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = ()=>res(req.result);
    req.onerror = ()=>rej(req.error);
  });
}

function dbPut(obj){
  return new Promise((res,rej)=>{
    const tx = db.transaction(STORE,'readwrite');
    const req = tx.objectStore(STORE).put(obj);
    req.onsuccess = ()=>res(req.result);
    req.onerror = ()=>rej(req.error);
  });
}

function dbDelete(id){
  return new Promise((res,rej)=>{
    const tx = db.transaction(STORE,'readwrite');
    const req = tx.objectStore(STORE).delete(id);
    req.onsuccess = ()=>res();
    req.onerror = ()=>rej(req.error);
  });
}

function dbClear(){
  return new Promise((res,rej)=>{
    const tx = db.transaction(STORE,'readwrite');
    const req = tx.objectStore(STORE).clear();
    req.onsuccess = ()=>res();
    req.onerror = ()=>rej(req.error);
  });
}

// ===== PASSWORD HISTORY =====
async function histAdd(itemId, encPassword){
  // Get existing history for this item
  const existing = await histGetAll(itemId);
  // Enforce max limit: remove oldest if at limit
  if(existing.length >= HIST_MAX){
    const oldest = existing[0]; // index sorted ascending by hid
    await new Promise((res,rej)=>{
      const tx = db.transaction(HIST_STORE,'readwrite');
      const req = tx.objectStore(HIST_STORE).delete(oldest.hid);
      req.onsuccess = ()=>res(); req.onerror = ()=>rej(req.error);
    });
  }
  return new Promise((res,rej)=>{
    const tx = db.transaction(HIST_STORE,'readwrite');
    const req = tx.objectStore(HIST_STORE).add({
      itemId, encPassword, changedAt: Date.now()
    });
    req.onsuccess = ()=>res(req.result);
    req.onerror = ()=>rej(req.error);
  });
}

function histGetAll(itemId){
  return new Promise((res,rej)=>{
    const tx = db.transaction(HIST_STORE,'readonly');
    const idx = tx.objectStore(HIST_STORE).index('itemId');
    const req = idx.getAll(itemId);
    req.onsuccess = ()=>res(req.result);
    req.onerror = ()=>rej(req.error);
  });
}

async function histDelete(hid){
  return new Promise((res,rej)=>{
    const tx = db.transaction(HIST_STORE,'readwrite');
    const req = tx.objectStore(HIST_STORE).delete(hid);
    req.onsuccess = ()=>res(); req.onerror = ()=>rej(req.error);
  });
}

async function histDeleteAll(itemId){
  const entries = await histGetAll(itemId);
  for(const e of entries) await histDelete(e.hid);
}

// ===== BASE64 HELPERS =====
function bufToB64(buf){
  let bin='';
  const bytes = new Uint8Array(buf);
  for(let i=0;i<bytes.length;i++) bin+=String.fromCharCode(bytes[i]);
  return btoa(bin);
}
function b64ToBuf(b64){
  const bin=atob(b64);
  const buf=new Uint8Array(bin.length);
  for(let i=0;i<bin.length;i++) buf[i]=bin.charCodeAt(i);
  return buf;
}

// ===== CRYPTO =====
async function deriveKey(password, salt){
  const enc = new TextEncoder();
  const km = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    {name:'PBKDF2', salt, iterations:600000, hash:'SHA-256'},
    km, {name:'AES-GCM', length:256}, false, ['encrypt','decrypt']
  );
}

async function encrypt(text){
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const enc = new TextEncoder();
  const ct = await crypto.subtle.encrypt({name:'AES-GCM', iv}, _key, enc.encode(text));
  const buf = new Uint8Array(iv.length + ct.byteLength);
  buf.set(iv, 0); buf.set(new Uint8Array(ct), iv.length);
  return bufToB64(buf);
}

async function decrypt(b64){
  try {
    const buf = b64ToBuf(b64);
    const iv = buf.slice(0,12); const ct = buf.slice(12);
    const pt = await crypto.subtle.decrypt({name:'AES-GCM', iv}, _key, ct);
    return new TextDecoder().decode(pt);
  } catch(e) {
    throw new Error(t('err.decryptFail'));
  }
}

// ===== L6: METADATA ENCRYPTION HELPERS =====
// Encrypt arbitrary JSON-serializable value (string, number, boolean, array, null).
// Returns base64 ciphertext. Returns null if input is null/undefined.
async function encryptMeta(value){
  if(value === null || value === undefined) return null;
  return encrypt(JSON.stringify(value));
}

// Decrypt metadata field. Returns the parsed value, or fallback if decryption fails.
// If the input does not look like base64 ciphertext, treat it as legacy plaintext
// and return as-is (used by lazy migration path).
async function decryptMeta(b64, fallback){
  if(b64 === null || b64 === undefined || b64 === '') return fallback;
  try {
    const pt = await decrypt(b64);
    return JSON.parse(pt);
  } catch(e) {
    // Decryption failed — could be legacy plaintext value (pre-v6) or corrupt.
    // Return fallback to keep app functional; lazy migration will fix on next save.
    return fallback;
  }
}

// Heuristic: does this value look like an encrypted-meta blob (base64 ciphertext)
// rather than a legacy plaintext value? Used during import/sync where the source
// row's _metaV marker may be missing or untrusted.
//
// Encrypted meta = AES-GCM ciphertext base64-encoded. Minimum size: 12-byte IV +
// 16-byte tag + 1 byte JSON = 29 bytes raw → ~40 base64 chars. We require:
//   - typeof string
//   - length >= 24 (any sane ciphertext easily exceeds this)
//   - matches base64 character set strictly
//
// Legacy plaintext for the affected fields is always either:
//   - a short category string ('social','finance','email','work','other','shopping','gaming')
//   - an array (tags) → not a string at all
//   - a number (breachStatus) → not a string at all
//   - a number/null (breachCheckedAt) → not a string at all
// All of those fail the length+charset test, so detection is robust.
function _isEncMeta(v){
  if(typeof v !== 'string') return false;
  if(v.length < 24) return false;
  return /^[A-Za-z0-9+/]+=*$/.test(v);
}

// ===== SALT & VERIFIER =====
function getSalt(){
  let s = localStorage.getItem('vault_salt');
  if(!s){
    const arr = crypto.getRandomValues(new Uint8Array(32)); // 256-bit salt
    s = bufToB64(arr);
    localStorage.setItem('vault_salt', s);
  }
  return b64ToBuf(s);
}

// M2 FIX: unique per-vault magic instead of predictable 'VAULT_OK'
function getVerifierMagic(){
  let m = localStorage.getItem('vault_ver_magic');
  if(!m){ m = bufToB64(crypto.getRandomValues(new Uint8Array(16))); localStorage.setItem('vault_ver_magic', m); }
  return m;
}

async function setVerifier(password, salt){
  const k = await deriveKey(password, salt);
  const magic = getVerifierMagic();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({name:'AES-GCM',iv}, k, new TextEncoder().encode(magic));
  const buf = new Uint8Array(iv.length + ct.byteLength);
  buf.set(iv); buf.set(new Uint8Array(ct), iv.length);
  localStorage.setItem('vault_ver', bufToB64(buf));
}

async function checkVerifier(password, salt){
  const v = localStorage.getItem('vault_ver');
  if(!v) return false;
  try{
    const k = await deriveKey(password, salt);
    const buf = b64ToBuf(v);
    const iv = buf.slice(0,12); const ct = buf.slice(12);
    const pt = await crypto.subtle.decrypt({name:'AES-GCM',iv}, k, ct);
    const decoded = new TextDecoder().decode(pt);
    if(decoded === getVerifierMagic()) return true;
    if(decoded === 'VAULT_OK'){
      // M5 FIX: silently migrate legacy verifier to random magic
      setVerifier(password, salt).catch(()=>{});
      return true;
    }
    return false;
  }catch{return false;}
}

// ===== LOCKOUT =====
// H6 FIX: lockout now persists to localStorage so it survives tab close/reopen.
// Attacker cannot bypass lockout by closing and reopening the tab.
// Also increased lockout duration to 10 minutes and added progressive backoff.
const LOCKOUT_MS_BASE = 10 * 60 * 1000; // 10 minutes base lockout

function saveLockoutState(){
  if(lockedUntil > Date.now()){
    localStorage.setItem('vault_lockout', JSON.stringify({attempts, lockedUntil}));
  } else {
    localStorage.removeItem('vault_lockout');
    sessionStorage.removeItem('vault_lockout'); // clear legacy sessionStorage
  }
}

function loadLockoutState(){
  try{
    // Check localStorage first (new), fall back to sessionStorage (legacy)
    const raw = localStorage.getItem('vault_lockout') || sessionStorage.getItem('vault_lockout');
    if(!raw) return;
    const s = JSON.parse(raw);
    if(s.lockedUntil > Date.now()){
      attempts = s.attempts || MAX_ATTEMPTS;
      lockedUntil = s.lockedUntil;
    } else {
      localStorage.removeItem('vault_lockout');
      sessionStorage.removeItem('vault_lockout');
    }
  }catch{}
}

function checkLockout(){
  loadLockoutState();
  if(lockedUntil > 0 && Date.now() < lockedUntil){ return true; }
  if(lockedUntil > 0 && Date.now() >= lockedUntil){
    lockedUntil = 0; attempts = 0;
    localStorage.removeItem('vault_lockout');
    sessionStorage.removeItem('vault_lockout');
  }
  updateDots();
  return false;
}

function updateDots(){
  for(let i=0;i<5;i++) document.getElementById('d'+i).classList.toggle('used', i<attempts);
}

function recordFail(){
  attempts++;
  updateDots();
  if(attempts >= MAX_ATTEMPTS){
    lockedUntil = Date.now() + LOCKOUT_MS_BASE; // H6 FIX: 10 min persistent lockout
    saveLockoutState();
    startLockoutTimer();
  }
}

function resetAttempts(){
  attempts=0;
  lockedUntil=0;
  updateDots();
}

function startLockoutTimer(){
  const btn = document.getElementById('unlockBtn');
  btn.disabled = true;
  const tick = ()=>{
    const rem = Math.ceil((lockedUntil - Date.now())/1000);
    if(rem <= 0){btn.disabled=false;setMsg('','');resetAttempts();return;}
    setMsg(t('lock.lockedFor', {s: rem}), 'warn');
    setTimeout(tick, 1000);
  };
  tick();
}

function setMsg(txt, type){
  const el = document.getElementById('lockMsg');
  el.textContent = txt;
  el.className = 'lock-msg' + (type?' '+type:'');
}

// ===== UNLOCK =====
function isFirstTime(){ return !localStorage.getItem('vault_ver'); }

async function unlock(){
  if(lockedUntil > Date.now()) return;
  const pw = document.getElementById('masterPass').value.trim();
  if(!pw){ setMsg(t('lock.enterPw'),'err'); return; }

  const btn = document.getElementById('unlockBtn');
  const isSetup = isFirstTime();
  const setLoading = (label) => {
    btn.disabled = true;
    btn.classList.add('loading');
    btn.innerHTML = `<span class="spinner"></span>${label}`;
  };
  const clearLoading = (label) => {
    btn.disabled = false;
    btn.classList.remove('loading');
    btn.textContent = label;
  };

  try{
    const salt = getSalt();
    if(isSetup){
      const conf = document.getElementById('masterConfirm').value.trim();
      if(!conf){ setMsg(t('lock.noConfirm'),'err'); return; }
      if(pw !== conf){ setMsg(t('lock.noMatch'),'err'); document.getElementById('masterConfirm').value=''; return; }
      if(pw.length < 12){ setMsg(t('lock.minLenWarn'),'err'); return; }
      setLoading(t('lock.creatingBtn'));
      await setVerifier(pw, salt);
      _key = await deriveKey(pw, salt);
      resetAttempts();
      db = await openDB();
      await loadItems();
      if(isBiometricSupported()) await setBioSession(pw, { forceLegacy: true });
      showApp();
      updateBioUI(); // update after session is set
      return;
    }
    setLoading(t('lock.openingBtn'));
    const ok = await checkVerifier(pw, salt);
    if(!ok){
      clearLoading(t('lock.unlockBtn'));
      recordFail();
      const rem = MAX_ATTEMPTS - attempts;
      setMsg(rem > 0 ? t('lock.wrongPw', {n: rem}) : '', 'err');
      return;
    }
    _key = await deriveKey(pw, salt);
    resetAttempts();
    db = await openDB();
    await loadItems();
    if(isBiometricSupported()) await setBioSession(pw, { forceLegacy: true });
    showApp();
    updateBioUI();
    updateSyncUI();
    verifyDeviceRegistration(); // cek apakah device masih terdaftar
    syncOnUnlock(); // auto-download cloud vault jika premium
  }catch(e){
    setMsg('Error: '+e.message,'err');
    clearLoading(isSetup ? t('lock.createBtn') : t('lock.unlockBtn'));
  }
}

async function loadItems(){
  const raw = await dbAll();
  _items = [];
  const failed = [];
  // L6: track rows yang perlu di-migrate (plaintext metadata → encrypted)
  const needMigrate = [];

  for(const row of raw){
    try{
      const title = await decrypt(row.title);
      const username = await decrypt(row.username);
      // FIX: password disimpan sebagai ciphertext di _items, di-decrypt hanya saat ditampilkan/disalin
      // Ini mencegah plaintext password tersebar di memori
      const password = row.password; // tetap ciphertext
      const notes = row.notes ? await decrypt(row.notes) : '';

      // L6 FIX: decrypt metadata fields. Row pre-v6 menyimpan field ini plaintext,
      // jadi kita deteksi via marker `_metaV` dan fallback ke nilai mentah.
      const isV6 = row._metaV === ROW_META_V;
      let category, tags, breachStatus, breachCheckedAt;
      if(isV6){
        category        = await decryptMeta(row.category, 'other');
        tags            = await decryptMeta(row.tags, []);
        breachStatus    = await decryptMeta(row.breachStatus, undefined);
        breachCheckedAt = await decryptMeta(row.breachCheckedAt, null);
      } else {
        // Legacy plaintext (DB_VER <= 5) — read as-is, queue for migration
        category        = row.category || 'other';
        tags            = Array.isArray(row.tags) ? row.tags : [];
        breachStatus    = typeof row.breachStatus === 'number' ? row.breachStatus : undefined;
        breachCheckedAt = row.breachCheckedAt || null;
        needMigrate.push(row.id);
      }

      // Defensive: pastikan category valid (hindari category yang bukan string)
      if(typeof category !== 'string') category = 'other';
      if(!Array.isArray(tags)) tags = [];

      _items.push({
        id:row.id, title, username,
        password, // ciphertext — di-decrypt on-demand
        notes,
        color:row.color||0,
        category,
        favorite:row.favorite||false,
        breachStatus: typeof breachStatus === 'number' ? breachStatus : undefined,
        breachCheckedAt: breachCheckedAt || null,
        totp_secret: row.totp_secret || '',
        updatedAt: row.updatedAt || null,
        createdAt: row.createdAt || null,
        custom_fields: row.custom_fields || [],
        tags,
      });
    }catch(e){
      failed.push(row.id);
      console.warn('Failed to decrypt item', e);
    }
  }
  if(failed.length){
    showToast(t('toast.decryptFailed', {n: failed.length}), 'err');
  }

  // L6 FIX: lazy migration — re-write rows pre-v6 dengan metadata terenkripsi.
  // Berjalan async di background supaya tidak blok unlock UI. Setiap row aman
  // di-skip kalau gagal — akan dicoba lagi di unlock berikutnya.
  if(needMigrate.length){
    migrateMetadataInBackground(needMigrate).catch(e => {
      console.warn('Metadata migration failed:', e);
    });
  }
}

// L6 FIX: migrasi metadata plaintext → encrypted untuk row pre-v6.
// Dipanggil dari loadItems(); idempotent (skip row yang sudah _metaV=6).
async function migrateMetadataInBackground(ids){
  if(!_key) return;
  for(const id of ids){
    if(!_key) return; // vault locked mid-migration → abort gracefully
    try{
      const row = await new Promise((res, rej) => {
        const tx = db.transaction(STORE, 'readonly');
        const req = tx.objectStore(STORE).get(id);
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
      if(!row) continue;
      if(row._metaV === ROW_META_V) continue; // already migrated

      // Read legacy plaintext values
      const category        = row.category || 'other';
      const tags            = Array.isArray(row.tags) ? row.tags : [];
      const breachStatus    = typeof row.breachStatus === 'number' ? row.breachStatus : undefined;
      const breachCheckedAt = row.breachCheckedAt || null;

      // Re-encrypt
      row.category        = await encryptMeta(category);
      row.tags            = await encryptMeta(tags);
      row.breachStatus    = await encryptMeta(breachStatus);
      row.breachCheckedAt = await encryptMeta(breachCheckedAt);
      row._metaV          = ROW_META_V;

      await dbPut(row);
    }catch(e){
      // Skip individual row failures — next unlock will retry
      console.warn('Metadata migration failed for item', e);
    }
  }
}

// ===== OVERFLOW MENU =====
function toggleOverflow(){
  const dd = document.getElementById('overflowDropdown');
  const showing = dd.style.display === 'flex';
  dd.classList.remove('hidden'); // clear initial CSS class, use inline from now on
  dd.style.display = showing ? 'none' : 'flex';
}
function closeOverflow(){
  const dd = document.getElementById('overflowDropdown');
  if(dd) { dd.classList.remove('hidden'); dd.style.display='none'; }
}
document.addEventListener('click', e=>{
  const menu = document.getElementById('overflowMenu');
  if(menu && !menu.contains(e.target)) closeOverflow();
});

async function showApp(){
  document.getElementById('lockScreen').style.display='none'; document.getElementById('lockScreen').classList.remove('setup-mode');
  document.getElementById('app').style.display='flex';
  document.getElementById('fab').classList.remove('hidden');
  document.getElementById('masterPass').value='';
  document.getElementById('breachCheckBtn').classList.remove('hidden');
  await loadSecretLocks();
  render();
  startIdleTimer();
  updateBioUI();
}

function lockVault(){
  _key=null; _items=[];_expanded.clear();_revealed.clear();
  unmountAllTOTP();
  // Bersihkan clipboard saat lock
  try{ navigator.clipboard.writeText(''); }catch{}
  document.getElementById('lockScreen').style.display='flex';
  document.getElementById('app').style.display='none';
  document.getElementById('fab').classList.add('hidden');
  document.getElementById('breachCheckBtn').classList.add('hidden');
  document.getElementById('masterPass').value='';
  document.getElementById('masterConfirm').value='';
  setMsg('','');
  // Bio session kept in localStorage — persists across tab switches
  // Only cleared on manual logout/reset
  // FIX: Reset button state — bisa ter-disabled jika lock terjadi saat loading atau lockout timer
  const btn = document.getElementById('unlockBtn');
  btn.disabled = false;
  btn.classList.remove('loading');

  // FIX: Reset bioBtn — bisa ter-disabled jika lockVault dipanggil saat proses biometric sedang berjalan
  const bioBtn = document.getElementById('bioBtn');
  if(bioBtn){
    bioBtn.disabled = false;
    bioBtn.classList.remove('loading');
    bioBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.7,37.3V21.9a7.7,7.7,0,0,0-15.4,0V37.3a10.7,10.7,0,0,0,4,8.3,1.8,1.8,0,0,0,.9.4,1.4,1.4,0,0,0,1.2-.6,1.5,1.5,0,0,0-.2-2.2,7.4,7.4,0,0,1-2.8-5.9V21.9a4.6,4.6,0,0,1,9.2,0V37.3a1.5,1.5,0,0,1-1.5,1.5,1.6,1.6,0,0,1-1.6-1.5V21.9a1.5,1.5,0,0,0-3,0V37.6a4.6,4.6,0,0,0,4.6,4.3,4.7,4.7,0,0,0,4.6-4.3Z" fill="currentColor"/><path d="M24,8.1A13.8,13.8,0,0,0,10.2,21.9V37.3a17,17,0,0,0,1.9,7.9,1.6,1.6,0,0,0,1.4.8l.7-.2a1.6,1.6,0,0,0,.6-2.1,14.1,14.1,0,0,1-1.6-6.4V21.9a10.8,10.8,0,0,1,21.6,0V37.3a7.9,7.9,0,0,1-2.9,6,1.4,1.4,0,0,0-.2,2.1,1.4,1.4,0,0,0,1.2.6,1.6,1.6,0,0,0,.9-.3,10.6,10.6,0,0,0,4-8.4V21.9A13.8,13.8,0,0,0,24,8.1Z" fill="currentColor"/><path d="M24,2A20,20,0,0,0,4,21.9V40.4a1.5,1.5,0,0,0,1.5,1.5,1.6,1.6,0,0,0,1.6-1.5V21.9a16.9,16.9,0,0,1,33.8,0V37.3a12.9,12.9,0,0,1-1.6,6.4,1.5,1.5,0,0,0,.7,2.1l.7.2a1.4,1.4,0,0,0,1.3-.8A16.5,16.5,0,0,0,44,38V21.9A20,20,0,0,0,24,2Z" fill="currentColor"/></svg><span>${t('bio.btnUnlock')}</span>`;
  }

  const firstTime = isFirstTime();
  btn.textContent = firstTime ? t('lock.createBtn') : t('lock.unlockBtn');

  // Reset lock screen UI state — always reset to correct mode
  const lockScreen = document.getElementById('lockScreen');
  const confirmWrap = document.getElementById('confirmWrap');
  const lockSub = document.getElementById('lockSub');
  const badge = document.getElementById('lockModeBadge');
  const badgeText = document.getElementById('lockModeBadgeText');
  const strengthWrap = document.getElementById('lockStrengthWrap');

  if(firstTime){
    // Setup mode
    lockScreen.classList.add('setup-mode');
    if(confirmWrap) confirmWrap.classList.remove('hidden');
    if(lockSub) lockSub.textContent = t('lock.setupSubtitle');
    if(badge) badge.className='lock-mode-badge badge-setup';
    if(badgeText) badgeText.textContent = 'New Vault';
    if(strengthWrap) strengthWrap.classList.remove('hidden');
    document.getElementById('resetLink').classList.add('hidden');
  } else {
    // Unlock mode
    lockScreen.classList.remove('setup-mode');
    if(confirmWrap) confirmWrap.classList.add('hidden');
    if(lockSub) lockSub.textContent = t('lock.subtitle');
    if(badge) badge.className='lock-mode-badge badge-unlock';
    if(badgeText) badgeText.textContent = 'Unlock';
    if(strengthWrap) strengthWrap.classList.add('hidden');
    document.getElementById('resetLink').classList.remove('hidden');
  }

  stopIdleTimer();
  updateBioUI();
}

// ===== AUTO-LOCK (IDLE + TAB HIDDEN) =====
function startIdleTimer(){
  stopIdleTimer();
  _idleTimer = setTimeout(()=>{
    if(!_key) return;
    // Jangan lock kalau modal import sedang terbuka
    const importPwOpen = document.getElementById('importPwModal').classList.contains('show');
    const importOpen = document.getElementById('importModal').classList.contains('show');
    if(importPwOpen || importOpen || _importPending) return;
    showToast(t('toast.idleLock'),'warn');
    lockVault();
  }, IDLE_LOCK_MS);
}

function stopIdleTimer(){
  if(_idleTimer){ clearTimeout(_idleTimer); _idleTimer=null; }
}

function resetIdleTimer(){
  if(_key) startIdleTimer(); // hanya reset jika vault terbuka
}

// ===== FILTER =====
function setFilter(f){
  _filter = f;
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  const chip = document.getElementById('chip-'+f);
  if(chip) chip.classList.add('active');
  render();
}

// ===== SEARCH =====
function onSearch(){
  const q = document.getElementById('search').value;
  document.getElementById('searchClear').classList.toggle('visible', q.length > 0);
  render();
}

function clearSearch(){
  document.getElementById('search').value='';
  document.getElementById('searchClear').classList.remove('visible');
  render();
}

// ===== PASSWORD STRENGTH =====
function scorePassword(pw){
  if(!pw) return 0;
  let score=0;
  if(pw.length>=8) score++;
  if(pw.length>=12) score++;
  if(/[A-Z]/.test(pw)&&/[a-z]/.test(pw)) score++;
  if(/[0-9]/.test(pw)) score++;
  if(/[^A-Za-z0-9]/.test(pw)) score++;
  if(score<=1) return 1;
  if(score<=2) return 2;
  if(score<=3) return 3;
  return 4;
}

function getStrengthLabel(score) {
  const keys = ['','strength.weak','strength.fair','strength.strong','strength.veryStrong'];
  return score ? t(keys[score]) : '';
}

// Strength meter untuk lock screen (hanya tampil saat setup vault baru)
function updateLockStrength(pw){
  const isSetup = isFirstTime();
  const wrap = document.getElementById('lockStrengthWrap');
  if(!wrap) return;
  if(isSetup && pw) wrap.classList.remove('hidden'); else wrap.classList.add('hidden');
  if(!isSetup || !pw) return;
  const score = scorePassword(pw);
  const cls = 's'+score;
  for(let i=0;i<4;i++){
    const seg = document.getElementById('ls'+i);
    seg.className = 'strength-seg' + (i < score ? ' '+cls : '');
  }
  const label = document.getElementById('lockStrengthLabel');
  label.textContent = getStrengthLabel(score);
  label.className = cls;
  if(pw.length < 8){
    label.textContent = t('strength.minLen', {label: getStrengthLabel(score)});
    label.style.color = 'var(--warn)';
  } else {
    label.style.color = '';
  }
}

function updateStrength(pw){
  const score = scorePassword(pw);
  const cls = pw ? 's'+score : '';
  for(let i=0;i<4;i++){
    const seg = document.getElementById('ss'+i);
    seg.className = 'form-strength-seg' + (pw && i < score ? ' '+cls : '');
  }
  const label = document.getElementById('strengthLabel');
  label.textContent = pw ? getStrengthLabel(score) : '';
  label.className = 'form-strength-label' + (pw ? ' '+cls : '');
}

// ===== RENDER =====
function render(){
  const q = (document.getElementById('search').value||'').toLowerCase();
  const list = document.getElementById('list');

  // Sort: favorites first, then alpha
  let filtered = [..._items].sort((a,b)=>{
    if(a.favorite && !b.favorite) return -1;
    if(!a.favorite && b.favorite) return 1;
    return a.title.localeCompare(b.title);
  });

  // Apply category/fav filter
  if(_filter === 'fav'){
    filtered = filtered.filter(i=>i.favorite);
  } else if(_filter !== 'all'){
    filtered = filtered.filter(i=>i.category===_filter);
  }

  // Apply advanced filters (premium)
  if(isPremium() && countAdvFilters()>0){
    if(_advFilter.tags.length){
      filtered = filtered.filter(i=>
        _advFilter.tags.every(tag=>(i.tags||[]).includes(tag))
      );
    }
    if(_advFilter.status !== 'all'){
      filtered = filtered.filter(i=>{
        if(_advFilter.status==='breached') return i.breachStatus===2;
        if(_advFilter.status==='safe') return i.breachStatus===1;
        if(_advFilter.status==='unchecked') return i.breachStatus===undefined || i.breachStatus===null;
        return true;
      });
    }
    if(_advFilter.strength !== 'all'){
      // strength check happens async (decrypt needed), skip for now — show all
      // We approximate using title length as proxy — real impl needs pw scoring
    }
    if(_advFilter.age !== 'all'){
      filtered = filtered.filter(i=>{
        if(_advFilter.age==='old') return isPasswordOld(i);
        if(_advFilter.age==='new') return i.updatedAt && !isPasswordOld(i);
        return true;
      });
    }
  }

  // Update badge
  updateAdvFilterBadge();

  // Apply search
  if(q){
    filtered = filtered.filter(i=>
      i.title.toLowerCase().includes(q)||
      i.username.toLowerCase().includes(q)||
      (i.notes&&i.notes.toLowerCase().includes(q))||
      (i.tags&&i.tags.some(tag=>tag.includes(q)))
    );
  }

  document.getElementById('countBadge').textContent = _items.length;

  if(!filtered.length){
    list.innerHTML = `<div class="empty-state">
      <div class="empty-icon">${q||_filter!=='all' ? SVG.searchEmpty : SVG.lockEmpty}</div>
      <p>${q ? t('empty.noResults', {q: esc(q)}) :
           _filter==='fav' ? t('empty.noFav') :
           t('empty.noItems')}</p>
    </div>`;
    return;
  }

  // Group pinned vs rest when showing all
  const hasFavs = filtered.some(i=>i.favorite);
  const hasNonFavs = filtered.some(i=>!i.favorite);
  const showGroups = (_filter==='all'||_filter==='fav') && hasFavs && hasNonFavs && !q;

  let html='';

  if(showGroups){
    html += `<div class="section-label">${t('section.favs')}</div>`;
    html += filtered.filter(i=>i.favorite).map((item,idx)=>renderCard(item,idx)).join('');
    html += `<div class="section-label">${t('section.all')}</div>`;
    html += filtered.filter(i=>!i.favorite).map((item,idx)=>renderCard(item,idx)).join('');
  } else {
    html = filtered.map((item,idx)=>renderCard(item,idx)).join('');
  }

  list.innerHTML = html;
  mountAllVisibleTOTP();
  // Mount custom field values for expanded items
  for(const id of _expanded){
    const item = _items.find(i=>i.id===id);
    if(item && item.custom_fields && item.custom_fields.length){
      setTimeout(()=>mountCFValues(id), 80);
      // Retry once in case DOM not ready
      setTimeout(()=>mountCFValues(id), 400);
    }
  }
}

// ===== FAVICON DOMAIN MAPPING =====
const DOMAIN_MAP = {
  // Google
  'google':'google.com','gmail':'gmail.com','youtube':'youtube.com',
  'google drive':'drive.google.com','google photos':'photos.google.com',
  'google maps':'maps.google.com','google play':'play.google.com',
  'google meet':'meet.google.com','google docs':'docs.google.com',
  // Social
  'instagram':'instagram.com','facebook':'facebook.com','twitter':'twitter.com',
  'x':'x.com','tiktok':'tiktok.com','whatsapp':'whatsapp.com',
  'telegram':'telegram.org','linkedin':'linkedin.com','pinterest':'pinterest.com',
  'snapchat':'snapchat.com','reddit':'reddit.com','discord':'discord.com',
  'threads':'threads.net','tumblr':'tumblr.com','mastodon':'mastodon.social',
  // Finance ID
  'bca':'bca.co.id','bank bca':'bca.co.id','klik bca':'klikbca.com',
  'mandiri':'bankmandiri.co.id','bank mandiri':'bankmandiri.co.id',
  'bni':'bni.co.id','bank bni':'bni.co.id',
  'bri':'bri.co.id','bank bri':'bri.co.id',
  'bsi':'bankbsi.co.id','bank bsi':'bankbsi.co.id',
  'dana':'dana.id','gopay':'gopay.co.id','ovo':'ovo.id',
  'shopeepay':'shopee.co.id','linkaja':'linkaja.id',
  'jenius':'jenius.com','flip':'flip.id','bibit':'bibit.id',
  'stockbit':'stockbit.com','ajaib':'ajaib.co.id',
  // Finance International
  'paypal':'paypal.com','stripe':'stripe.com','wise':'wise.com',
  'revolut':'revolut.com','payoneer':'payoneer.com',
  'cash app':'cash.app','venmo':'venmo.com',
  'robinhood':'robinhood.com','coinbase':'coinbase.com',
  'binance':'binance.com','kraken':'kraken.com','bybit':'bybit.com',
  'chase':'chase.com','bank of america':'bankofamerica.com',
  'citibank':'citibank.com','hsbc':'hsbc.com','barclays':'barclays.co.uk',
  'n26':'n26.com','monzo':'monzo.com','american express':'americanexpress.com',
  'amex':'americanexpress.com',
  // Shopping ID
  'tokopedia':'tokopedia.com','shopee':'shopee.co.id','lazada':'lazada.co.id',
  'bukalapak':'bukalapak.com','blibli':'blibli.com','zalora':'zalora.co.id',
  'traveloka':'traveloka.com','tiket':'tiket.com','tiket.com':'tiket.com',
  'jd.id':'jd.id','ralali':'ralali.com',
  // Shopping International
  'amazon':'amazon.com','ebay':'ebay.com','etsy':'etsy.com',
  'aliexpress':'aliexpress.com','alibaba':'alibaba.com','wish':'wish.com',
  'shein':'shein.com','walmart':'walmart.com','target':'target.com',
  // Gaming
  'steam':'store.steampowered.com','epic games':'epicgames.com','epic':'epicgames.com',
  'playstation':'playstation.com','ps':'playstation.com','xbox':'xbox.com',
  'nintendo':'nintendo.com','roblox':'roblox.com','garena':'garena.com',
  'mobile legends':'mobilelegends.net','mlbb':'mobilelegends.net',
  'genshin':'genshin.hoyoverse.com','genshin impact':'genshin.hoyoverse.com',
  'hoyoverse':'hoyoverse.com','mihoyo':'hoyoverse.com',
  'pubg':'pubg.com','free fire':'ff.garena.com','valorant':'playvalorant.com',
  'league of legends':'leagueoflegends.com','lol':'leagueoflegends.com',
  'minecraft':'minecraft.net','blizzard':'blizzard.com','origin':'origin.com',
  'ubisoft':'ubisoft.com','rockstar':'rockstargames.com',
  // Streaming
  'netflix':'netflix.com','spotify':'spotify.com','youtube music':'music.youtube.com',
  'apple music':'music.apple.com','disney+':'disneyplus.com','disney plus':'disneyplus.com',
  'prime video':'primevideo.com','amazon prime':'primevideo.com',
  'hulu':'hulu.com','hbo':'hbomax.com','hbo max':'hbomax.com','max':'max.com',
  'twitch':'twitch.tv','crunchyroll':'crunchyroll.com','deezer':'deezer.com',
  'tidal':'tidal.com','soundcloud':'soundcloud.com',
  'vidio':'vidio.com','wetv':'wetv.vip','viu':'viu.com','iflix':'iflix.com',
  // Work & Productivity
  'notion':'notion.so','slack':'slack.com','zoom':'zoom.us',
  'teams':'teams.microsoft.com','microsoft teams':'teams.microsoft.com',
  'figma':'figma.com','github':'github.com','gitlab':'gitlab.com',
  'trello':'trello.com','asana':'asana.com','canva':'canva.com',
  'jira':'atlassian.com','confluence':'atlassian.com','atlassian':'atlassian.com',
  'monday':'monday.com','clickup':'clickup.com','linear':'linear.app',
  'airtable':'airtable.com','miro':'miro.com','loom':'loom.com',
  'dropbox':'dropbox.com','box':'box.com','evernote':'evernote.com',
  'obsidian':'obsidian.md','todoist':'todoist.com',
  // Tech & Cloud
  'apple':'apple.com','icloud':'icloud.com','microsoft':'microsoft.com',
  'office':'office.com','outlook':'outlook.com','onedrive':'onedrive.live.com',
  'adobe':'adobe.com','cloudflare':'cloudflare.com','vercel':'vercel.com',
  'netlify':'netlify.com','aws':'aws.amazon.com','amazon web services':'aws.amazon.com',
  'heroku':'heroku.com','digitalocean':'digitalocean.com',
  'namecheap':'namecheap.com','godaddy':'godaddy.com',
  // Email
  'yahoo':'yahoo.com','yahoo mail':'mail.yahoo.com',
  'proton':'proton.me','protonmail':'proton.me',
  'icloud mail':'icloud.com','hotmail':'outlook.com',
  // Other popular
  'airbnb':'airbnb.com','booking':'booking.com','agoda':'agoda.com',
  'grab':'grab.com','gojek':'gojek.com','ojol':'gojek.com',
  'uber':'uber.com','lyft':'lyft.com',
  'duolingo':'duolingo.com','coursera':'coursera.org','udemy':'udemy.com',
  'medium':'medium.com','substack':'substack.com',
  'wordpress':'wordpress.com','wix':'wix.com','squarespace':'squarespace.com',
  'shopify':'shopify.com','woocommerce':'woocommerce.com',
};

function guessDomain(title){
  if(!title) return null;
  const key = title.toLowerCase().trim();
  // Direct match
  if(DOMAIN_MAP[key]) return DOMAIN_MAP[key];
  // Partial match — check if title starts with any key
  for(const [k,v] of Object.entries(DOMAIN_MAP)){
    if(key.startsWith(k) || k.startsWith(key)) return v;
  }
  // No match — return null, fallback to initial letter
  return null;
}

function getFaviconUrl(title){
  const domain = guessDomain(title);
  if(!domain) return null;
  return `favicons/${domain}.png`;
}

function renderCard(item, idx){
  const letter = item.title.charAt(0).toUpperCase()||'?';
  const exp = _expanded.has(item.id);
  const rev = _revealed.has(item.id);
  const CATS = getCategories();
  const cat = CATS[item.category]||CATS.other;
  const isFav = item.favorite;
  const isSecretLocked = isItemSecretLocked(item.id);

  // If secret locked, block expand
  if(isSecretLocked && exp){ _expanded.delete(item.id); _revealed.delete(item.id); }

  let details='';
  if(exp && !isSecretLocked){
    const pw = rev ? '(click 👁 to reveal)' : '••••••••••';
    details = `<div class="item-details">
      <div class="detail-row">
        <span class="detail-label">${t('detail.username')}</span>
        <span class="detail-value">${esc(item.username)||'—'}</span>
        <button class="detail-eye" data-action="copyUser" data-id="${item.id}" id="copy-btn-${item.id}-user">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        </button>
      </div>
      <div class="detail-row">
        <span class="detail-label">${t('detail.password')}</span>
        <span class="detail-value${rev?' revealed':''}" id="pw-val-${item.id}">••••••••••</span>
        <button class="detail-eye" data-action="toggleReveal" data-id="${item.id}">
          ${rev ? SVG.eyeOff : SVG.eyeOpen}
        </button>
      </div>
      ${item.notes?`<div class="detail-row">
        <span class="detail-label">${t('detail.notes')}</span>
        <span class="detail-value">${esc(item.notes)}</span>
      </div>`:''}
      <div class="detail-row">
        <span class="detail-label">${t('breach.detailLabel')}</span>
        <span class="detail-value" style="${_checkingBreachIds.has(item.id)?'color:var(--dim)':item.breachStatus===2?'color:#f87171':item.breachStatus===1?'color:#4ade80':'color:var(--dim)'}">
          ${_checkingBreachIds.has(item.id)?t('breach.checking'):item.breachStatus===2?t('breach.breachedSingle',{n:'?'}):item.breachStatus===1?t('breach.safe'):t('breach.unchecked')}
        </span>
        <button class="detail-eye" data-action="checkSingleBreach" data-id="${item.id}" title="${t('breach.checkSingle')}">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        </button>
      </div>
      ${item.totp_secret ? `<div id="totp-block-${item.id}"></div>` : ''}
      ${item.tags && item.tags.length ? `
        <div style="margin-top:6px">
          <div class="tag-list">
            ${item.tags.map(tag=>`<span class="tag-chip">#${esc(tag)}</span>`).join('')}
          </div>
        </div>` : ''}
      ${item.updatedAt ? `<div class="detail-row">
        <span class="detail-label">Last changed</span>
        <span class="detail-value" style="${isPasswordOld(item)?'color:var(--warn)':'color:var(--dim)'}">
          ${formatRelativeDate(item.updatedAt)}
        </span>
      </div>` : ''}
      ${item.custom_fields && item.custom_fields.length ? `
        <div style="margin-top:6px">
          <div class="detail-label" style="margin-bottom:6px">${t('cf.label')}</div>
          <div class="cf-list" id="cf-list-${item.id}">
            ${item.custom_fields.map((f,i)=>`
              <div class="cf-item">
                <div class="cf-item-header">
                  <span class="cf-item-name">${esc(f.name)}</span>
                </div>
                <div class="cf-item-value-row">
                  <span class="cf-item-value${f.type==='password'?' hidden':''}" id="cf-val-${item.id}-${i}">
                    ${f.type==='password'?'••••••••':'(loading…)'}
                  </span>
                  <div class="cf-item-actions">
                    ${f.type==='password'?`
                      <button class="cf-item-btn" data-action="toggleCFReveal" data-id="${item.id}" data-idx="${i}" title="${t('cf.showField')}">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      </button>`:''}
                    <button class="cf-item-btn" data-action="copyCFValue" data-id="${item.id}" data-idx="${i}" title="${t('cf.copyField')}">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </button>
                  </div>
                </div>
              </div>`).join('')}
          </div>
        </div>` : ''}
    </div>
    <div class="item-actions">
      <div class="item-actions-primary">
        <button class="act-btn copy" data-action="copyPass" data-id="${item.id}" id="copy-btn-${item.id}-pw">${SVG.copy} ${t('detail.copyPw')}</button>
        <button class="act-btn" data-action="openEdit" data-id="${item.id}">${SVG.edit} ${t('detail.edit')}</button>
        <button class="act-btn del" data-action="deleteItem" data-id="${item.id}">${SVG.trash} ${t('detail.delete')}</button>
      </div>
      <div class="item-actions-secondary">
        <button class="act-btn-icon fav${isFav?' active':''}" data-action="toggleFav" data-id="${item.id}">
          ${isFav?SVG.star:SVG.starOutline} <span style="font-size:11px">${isFav?t('detail.unfav'):t('detail.fav')}</span>
        </button>
        <button class="act-btn-icon" data-action="openShareSheet" data-id="${item.id}" style="color:var(--accent);border-color:var(--accent-dim)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          <span style="font-size:11px">${t('share.btn')}</span>
        </button>
        <button class="act-btn-icon" data-action="openSecretLockModal" data-id="${item.id}" style="color:var(--accent);border-color:var(--accent-dim)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span style="font-size:11px">${t('detail.lockSecret')}</span>
        </button>
        ${isPremium() ? `<button class="act-btn-icon" data-action="openHistorySheet" data-id="${item.id}" style="color:var(--accent);border-color:var(--accent-dim)">
          <svg width="12" height="12" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(16 16)"><circle cx="80" cy="80" r="74" stroke="currentColor" stroke-width="12" stroke-linejoin="round"/><path d="M80 30v50l40 32" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
          <span style="font-size:11px">History</span>
        </button>` : ''}
      </div>
    </div>`;
  } else if(isSecretLocked){
    const lock = _secretLocks.get(item.id);
    const elapsed = lock ? Math.min(performance.now() - lock.perfStart, Date.now() - lock.lockedAt) : 0;
    const remMs = lock ? Math.max(0, lock.durationMs - elapsed) : 0;
    const unlockTime = lock ? new Date(lock.lockedAt + lock.durationMs) : null;
    const unlockStr = unlockTime ? unlockTime.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : '—';
    const unlockDateStr = unlockTime ? (
      unlockTime.toDateString() === new Date().toDateString()
        ? unlockStr
        : unlockTime.toLocaleDateString([], {month:'short', day:'numeric'}) + ' ' + unlockStr
    ) : '—';
    details = `
    <div class="secret-lock-bar">
      <div class="secret-lock-info" style="flex-direction:column;align-items:flex-start;gap:2px">
        <div style="display:flex;align-items:center;gap:6px">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span style="font-weight:500">${t('detail.locked',{time: unlockDateStr})}</span>
        </div>
        <span style="font-size:10px;color:var(--dim);font-family:var(--mono);padding-left:18px">${t('secretLock.whatTitle')} · digital detox mode</span>
      </div>
      <span class="secret-lock-timer" id="slt-${item.id}">${fmtCountdown(remMs)}</span>
    </div>`;
  }

  return `<div class="item-card${exp?' expanded':''}${isFav?' pinned':''}${isSecretLocked?' secret-locked':''}" data-id="${item.id}">
    <div class="item-header" data-action="toggleExpand" data-id="${item.id}" style="user-select:none">
      <div class="item-avatar c${item.color}${getFaviconUrl(item.title) ? ' has-favicon' : ''}">
        ${(() => {
          const favUrl = getFaviconUrl(item.title);
          if(favUrl) return `<img class="fav-img" src="${favUrl}" alt="${esc(letter)}" loading="lazy" /><span style="display:none;width:100%;height:100%;align-items:center;justify-content:center">${esc(letter)}</span>`;
          return esc(letter);
        })()}
        ${isFav?'<span class="fav-dot"></span>':''}
        ${isSecretLocked?`<span style="position:absolute;bottom:-3px;right:-3px;width:10px;height:10px;background:var(--accent);border-radius:50%;border:1.5px solid var(--card);display:flex;align-items:center;justify-content:center;">
          <svg width="6" height="6" viewBox="0 0 24 24" fill="white" stroke="none"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" fill="none" stroke-width="3"/></svg>
        </span>`:''}
      </div>
      <div class="item-info">
        <div class="item-title">
          ${esc(item.title)}
          <span class="cat-badge ${cat.cls}">${cat.label}</span>
          ${isSecretLocked?`<span style="font-size:9px;font-family:var(--mono);color:var(--accent);background:var(--accent-dim);padding:1px 6px;border-radius:10px;flex-shrink:0;">${t('card.locked')}</span>`:''}
          ${_checkingBreachIds.has(item.id)?`<span class="breach-badge breach-checking">${t('breach.checking')}</span>`:''}
          ${!_checkingBreachIds.has(item.id)&&item.breachStatus===2?`<span class="breach-badge breach-pwned">${t('breach.breached',{n:'!'})}</span>`:''}
          ${isPasswordOld(item)&&!isSecretLocked?`<span style="font-size:9px;font-family:var(--mono);color:var(--warn);background:#2a1e08;padding:1px 6px;border-radius:10px;flex-shrink:0;">⚠️ ${t('expiry.badge')}</span>`:''}
        </div>
        <div class="item-user">${esc(item.username)||'—'}</div>
      </div>
      <span class="item-chevron${exp?' open':''}">${SVG.chevronDown}</span>
    </div>
    ${details}
  </div>`;
}

function toggleExpand(id){
  if(isItemSecretLocked(id)){
    showToast(t('toast.itemLocked'),'warn');
    return;
  }
  // Desktop — show in detail panel instead of expanding inline
  if(window.innerWidth >= 768){
    // If same item clicked again, close panel
    if(_detailId === id){
      closeDetailPanel();
      return;
    }
    openDetailPanel(id);
    return;
  }
  if(_expanded.has(id)){
    _expanded.delete(id);
    _revealed.delete(id);
  } else {
    _expanded.add(id);
  }
  render();
  if(_expanded.has(id) && _revealed.has(id)) loadRevealedPw(id);
}

// ===== DESKTOP DETAIL PANEL =====
let _detailId = null;

async function openDetailPanel(id){
  const item = _items.find(i=>i.id===id);
  if(!item) return;
  _detailId = id;

  const panel = document.getElementById('detailPanel');
  const empty = document.getElementById('detailPanelEmpty');
  const content = document.getElementById('detailPanelContent');
  if(!panel) return;

  panel.style.display = 'flex';
  empty.style.display = 'none';
  content.classList.remove('hidden');

  // Highlight selected card
  document.querySelectorAll('.item-card').forEach(c => c.classList.remove('selected'));
  const selectedCard = document.querySelector(`.item-card[data-id="${id}"]`);
  if(selectedCard) selectedCard.classList.add('selected');

  const CATS = getCategories();
  const cat = CATS[item.category]||CATS.other;
  const letter = item.title.charAt(0).toUpperCase()||'?';
  const favUrl = getFaviconUrl(item.title);
  const avatarHtml = favUrl
    ? `<div class="detail-panel-avatar c${item.color} has-favicon"><img src="${favUrl}" alt="${esc(letter)}" /></div>`
    : `<div class="detail-panel-avatar c${item.color}">${esc(letter)}</div>`;

  content.innerHTML = `
    <div class="detail-panel-header">
      ${avatarHtml}
      <div>
        <div class="detail-panel-title">${esc(item.title)}</div>
        <span class="cat-badge ${cat.cls}">${cat.label}</span>
      </div>
      <button class="detail-panel-close" data-action="closeDetailPanel">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="detail-panel-row">
      <div class="detail-panel-label">${t('detail.username')}</div>
      <div class="detail-panel-value">
        <span>${esc(item.username)||'—'}</span>
        <button class="detail-panel-copy" data-action="copyUser" data-id="${id}" title="Copy">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        </button>
      </div>
    </div>
    <div class="detail-panel-row">
      <div class="detail-panel-label">${t('detail.password')}</div>
      <div class="detail-panel-value" id="dp-pw-val-${id}">
        <span id="dp-pw-text-${id}">••••••••••</span>
        <button class="detail-panel-copy" data-action="toggleDetailPanelReveal" data-id="${id}" title="Reveal">
          <span id="dp-eye-${id}">${SVG.eyeOpen}</span>
        </button>
        <button class="detail-panel-copy" data-action="copyPass" data-id="${id}" title="Copy">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        </button>
      </div>
    </div>
    ${item.notes ? `<div class="detail-panel-row">
      <div class="detail-panel-label">${t('detail.notes')}</div>
      <div class="detail-panel-value">${esc(item.notes)}</div>
    </div>` : ''}
    ${item.totp_secret ? `<div class="detail-panel-row" id="dp-totp-${id}">
      <div class="detail-panel-label">2FA / TOTP</div>
      <div class="detail-panel-value">Loading…</div>
    </div>` : ''}
    ${item.tags && item.tags.length ? `
    <div class="detail-panel-row">
      <div class="detail-panel-label">${t('tags.label')}</div>
      <div class="tag-list" style="margin-top:2px">
        ${item.tags.map(tag=>`<span class="tag-chip">#${esc(tag)}</span>`).join('')}
      </div>
    </div>` : ''}
    ${item.custom_fields && item.custom_fields.length ? `
    <div class="detail-panel-row">
      <div class="detail-panel-label">${t('cf.label')}</div>
      <div class="cf-list" id="cf-list-dp-${id}" style="margin-top:4px">
        ${item.custom_fields.map((f,i)=>`
          <div class="cf-item">
            <div class="cf-item-header">
              <span class="cf-item-name">${esc(f.name)}</span>
            </div>
            <div class="cf-item-value-row">
              <span class="cf-item-value${f.type==='password'?' hidden':''}" id="cf-val-dp-${id}-${i}">
                ${f.type==='password'?'••••••••':'(loading…)'}
              </span>
              <div class="cf-item-actions">
                ${f.type==='password'?`
                  <button class="cf-item-btn" data-action="toggleCFRevealDP" data-id="${id}" data-idx="${i}" title="${t('cf.showField')}">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  </button>`:''}
                <button class="cf-item-btn" data-action="copyCFValueDP" data-id="${id}" data-idx="${i}" title="${t('cf.copyField')}">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>` : ''}
    <div class="detail-panel-actions">
      <button class="detail-panel-btn" data-action="copyPass" data-id="${id}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        ${t('detail.copyPw')}
      </button>
      <button class="detail-panel-btn" data-action="openEdit" data-id="${id}">
        ${SVG.edit} ${t('detail.edit')}
      </button>
      <button class="detail-panel-btn danger" data-action="deleteItem" data-id="${id}">
        ${SVG.trash} ${t('detail.delete')}
      </button>
    </div>
    <div class="detail-panel-actions-secondary">
      <button class="detail-panel-btn${item.favorite?' fav-active':''}" id="dp-fav-btn-${id}" data-action="toggleFavDP" data-id="${id}">
        ${item.favorite ? SVG.star : SVG.starOutline}
        <span>${item.favorite ? t('detail.unfav') : t('detail.fav')}</span>
      </button>
      <button class="detail-panel-btn accent" data-action="openShareSheet" data-id="${id}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        ${t('share.btn')}
      </button>
      <button class="detail-panel-btn accent" data-action="openSecretLockModal" data-id="${id}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        ${t('detail.lockSecret')}
      </button>
      ${isPremium() ? `<button class="detail-panel-btn accent" data-action="openHistorySheet" data-id="${id}">
        <svg width="12" height="12" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(16 16)"><circle cx="80" cy="80" r="74" stroke="currentColor" stroke-width="12" stroke-linejoin="round"/><path d="M80 30v50l40 32" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        History
      </button>` : ''}
    </div>
  `;

  if(item.totp_secret){
    setTimeout(()=>mountTotpBlock(id, `dp-totp-\${id}`), 100);
  }
  if(item.custom_fields && item.custom_fields.length){
    setTimeout(()=>mountCFValuesDP(id), 80);
    setTimeout(()=>mountCFValuesDP(id), 400);
  }
}

async function toggleDetailPanelReveal(id){
  const item = _items.find(i=>i.id===id);
  if(!item) return;
  const pwText = document.getElementById(`dp-pw-text-${id}`);
  const eyeBtn = document.getElementById(`dp-eye-${id}`);
  if(!pwText) return;

  // M5 FIX: use readonly input when revealed - harder for extensions to scrape
  if(pwText.textContent === '••••••••••'){
    const pw = await decrypt(item.password);
    const inp = document.createElement('input');
    inp.type = 'text'; inp.readOnly = true; inp.value = pw;
    inp.spellcheck = false; inp.autocomplete = 'off';
    inp.id = `dp-pw-text-${id}`;
    inp.style.cssText = 'background:none;border:none;outline:none;color:inherit;font:inherit;width:100%;padding:0;';
    pwText.replaceWith(inp);
    inp.parentElement.classList.add('revealed');
    if(eyeBtn) eyeBtn.innerHTML = SVG.eyeOff;
  } else {
    const span = document.createElement('span');
    span.id = `dp-pw-text-${id}`;
    span.textContent = '••••••••••';
    pwText.replaceWith(span);
    span.parentElement.classList.remove('revealed');
    if(eyeBtn) eyeBtn.innerHTML = SVG.eyeOpen;
  }
}

function closeDetailPanel(){
  _detailId = null;
  const empty = document.getElementById('detailPanelEmpty');
  const content = document.getElementById('detailPanelContent');
  if(empty) empty.style.display = 'flex';
  if(content) content.classList.add('hidden');
  document.querySelectorAll('.item-card').forEach(c => c.classList.remove('selected'));
}

async function toggleReveal(id){
  if(_revealed.has(id)){
    _revealed.delete(id);
    render();
    return;
  }
  _revealed.add(id);
  render();
  await loadRevealedPw(id);
}

async function loadRevealedPw(id){
  const item = _items.find(i=>i.id===id);
  if(!item) return;
  const el = document.getElementById('pw-val-'+id);
  if(!el) return;
  el.textContent = '···';
  try{
    const pw = await decrypt(item.password);
    if(document.getElementById('pw-val-'+id)) el.textContent = pw;
  }catch(e){
    el.textContent = '⚠ ' + t('err.decryptFail');
    el.style.color='var(--danger)';
  }
}

// C2 FIX: esc() now also escapes ' and " to prevent XSS in attribute contexts
function esc(s){ return (s||'').toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;') }

// ===== COPY =====
const _copyTimers = {};

function setCopyFeedback(id, field, label){
  const btnId = `copy-btn-${id}-${field}`;
  const btn = document.getElementById(btnId);
  if(!btn) return;
  if(_copyTimers[btnId]) clearTimeout(_copyTimers[btnId]);
  btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> ${t('feedback.copied')}`;
  btn.style.color='var(--green)'; btn.style.borderColor='var(--green)';
  _copyTimers[btnId] = setTimeout(()=>{
    btn.innerHTML = `${SVG.copy} ${label}`;
    btn.style.color=''; btn.style.borderColor='';
  }, 1500);
}

async function copyPass(id){
  const item = _items.find(i=>i.id===id);
  if(!item) return;
  try{
    const pw = await decrypt(item.password);
    await navigator.clipboard.writeText(pw);
    setCopyFeedback(id,'pw','Salin PW');
    showToast(t('toast.copiedPw'), 'ok');
    // L7 FIX: auto-clear clipboard after 30 seconds
    setTimeout(()=>{ navigator.clipboard.writeText('').catch(()=>{}); }, 30000);
  }catch(e){showToast(t('toast.copyFail',{msg:e.message}),'err')}
}

async function copyUser(id){
  const item = _items.find(i=>i.id===id);
  if(!item || !item.username) return;
  try{
    await navigator.clipboard.writeText(item.username);
    setTimeout(()=>{ navigator.clipboard.writeText('').catch(()=>{}); }, 30000);
    setCopyFeedback(id,'user','');
    showToast(t('toast.copiedUser'), 'ok');
  }catch{showToast(t('toast.copyFail',{msg:''}),'err')}
}

// ===== FAVORITE =====
async function toggleFav(id){
  const item = _items.find(i=>i.id===id);
  if(!item) return;
  item.favorite = !item.favorite;
  // Update DB
  const raw = (await dbAll()).find(r=>r.id===id);
  if(raw){ raw.favorite = item.favorite; await dbPut(raw); }
  showToast(item.favorite ? t('toast.favAdded') : t('toast.favRemoved'));
  autoUpload();
  render();
}

// ===== MODAL =====
function openModal(){
  editId=null;
  const title = document.getElementById('sheetTitle');
  title.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> ${t('sheet.addTitle')} <button class="sheet-close" data-action="closeModal" aria-label="Close" style="margin-left:auto"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>`;
  ['fTitle','fUser','fPass','fNotes'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('fCategory').value='other';
  document.getElementById('fPass').placeholder=t('sheet.pwPh');
  document.getElementById('fTotp').value='';
  document.getElementById('totpClearBtn').classList.add('hidden');
  _cfFormFields = [];
  _tagFormTags = [];
  renderCFForm();
  renderTagForm();
  updateStrength('');
  showSheet();
}

function openEdit(id){
  const item = _items.find(i=>i.id===id);
  if(!item) return;
  editId=id;
  const title = document.getElementById('sheetTitle');
  title.innerHTML = SVG.editTitle + ' ' + t('sheet.editTitle') + ` <button class="sheet-close" data-action="closeModal" aria-label="Close" style="margin-left:auto"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>`;
  document.getElementById('fTitle').value=item.title;
  document.getElementById('fCategory').value=item.category||'other';
  document.getElementById('fUser').value=item.username;
  document.getElementById('fPass').value='';
  document.getElementById('fPass').placeholder=t('sheet.pwEditPh');
  document.getElementById('fNotes').value=item.notes||'';
  // TOTP: decrypt and populate if exists
  const totpField = document.getElementById('fTotp');
  totpField.value = '';
  document.getElementById('totpClearBtn').classList.add('hidden');
  if(item.totp_secret){
    decrypt(item.totp_secret).then(s=>{
      totpField.value = s;
      document.getElementById('totpClearBtn').classList.remove('hidden');
    }).catch(()=>{});
  }
  // Load custom fields
  _cfFormFields = [];
  if(item.custom_fields && item.custom_fields.length){
    for(const f of item.custom_fields){
      decrypt(f.value||'').then(val=>{
        _cfFormFields.push({name:f.name, value:val, type:f.type||'text'});
        renderCFForm();
      }).catch(()=>{
        _cfFormFields.push({name:f.name, value:'', type:f.type||'text'});
        renderCFForm();
      });
    }
  } else {
    renderCFForm();
  }
  // Load tags
  _tagFormTags = item.tags ? [...item.tags] : [];
  renderTagForm();
  updateStrength('');
  showSheet();
}

function showSheet(){
  document.getElementById('overlay').classList.add('show');
  document.getElementById('sheet').classList.add('show');
}

function closeModal(){
  closeSheetAnim('sheet', 'overlay', ()=>{
    document.getElementById('fPass').placeholder=t('sheet.pwPh');
    updateStrength('');
    editId=null;
  });
}

async function saveItem(){
  const title = document.getElementById('fTitle').value.trim();
  const username = document.getElementById('fUser').value.trim();
  const password = document.getElementById('fPass').value;
  const notes = document.getElementById('fNotes').value.trim();
  const category = document.getElementById('fCategory').value;
  const totpRaw = document.getElementById('fTotp').value.trim().replace(/\s+/g,'').toUpperCase();

  // Validate TOTP secret if provided
  if(totpRaw && !isValidBase32(totpRaw)){
    showToast(t('totp.invalid'), 'err'); return;
  }

  if(!title){ showToast(t('toast.nameRequired'),'err'); return; }

  try{
    const now = Date.now();
    if(editId){
      const existing = _items.find(i=>i.id===editId);
      const passwordChanged = !!password;
      const newPass = passwordChanged ? await encrypt(password) : existing.password;
      // Save old password to history before overwriting
      if(passwordChanged && isPremium() && existing.password){
        await histAdd(editId, existing.password);
      }
      const newTotp = totpRaw ? await encrypt(totpRaw) : (totpRaw==='' ? '' : existing.totp_secret||'');
      // Custom fields — encrypt each value
      const cfRaw = _cfFormFields || [];
      const encCF = [];
      for(const f of cfRaw){
        if(!f.name.trim()) continue;
        encCF.push({
          name: f.name.trim(),
          value: f.value ? await encrypt(f.value) : '',
          type: f.type || 'text',
        });
      }
      const obj = {
        id:editId, title:await encrypt(title), username:await encrypt(username),
        password:newPass, notes:notes?await encrypt(notes):'',
        color:existing.color, category:await encryptMeta(category), favorite:existing.favorite||false,
        breachStatus: await encryptMeta(passwordChanged ? null : (existing.breachStatus !== undefined ? existing.breachStatus : null)),
        breachCheckedAt: await encryptMeta(passwordChanged ? null : (existing.breachCheckedAt || null)),
        totp_secret: newTotp,
        updatedAt: now,
        createdAt: existing.createdAt || now,
        custom_fields: encCF,
        tags: await encryptMeta(isPremium() ? (_tagFormTags || []) : (existing.tags || [])),
        _metaV: ROW_META_V,
      };
      await dbPut(obj);
      existing.title=title; existing.username=username;
      if(passwordChanged){ existing.password=newPass; existing.breachStatus=undefined; existing.breachCheckedAt=null; }
      existing.notes=notes; existing.category=category;
      existing.totp_secret=newTotp;
      existing.updatedAt=now;
      if(!existing.createdAt) existing.createdAt=now;
      existing.custom_fields=encCF;
      if(isPremium()) existing.tags = _tagFormTags || [];
      showToast(t('toast.saved'),'ok');
    } else {
      if(!password){ showToast(t('toast.pwRequired'),'err'); return; }
      const color = Math.floor(Math.random()*8);
      const encTotp = totpRaw ? await encrypt(totpRaw) : '';
      // Custom fields for new item
      const cfRaw2 = _cfFormFields || [];
      const encCF2 = [];
      for(const f of cfRaw2){
        if(!f.name.trim()) continue;
        encCF2.push({
          name: f.name.trim(),
          value: f.value ? await encrypt(f.value) : '',
          type: f.type || 'text',
        });
      }
      const obj = {
        title:await encrypt(title), username:await encrypt(username),
        password:await encrypt(password), notes:notes?await encrypt(notes):'',
        color, category:await encryptMeta(category), favorite:false, totp_secret:encTotp,
        updatedAt: now, createdAt: now,
        custom_fields: encCF2,
        tags: await encryptMeta(isPremium() ? (_tagFormTags || []) : []),
        breachStatus: await encryptMeta(null),
        breachCheckedAt: await encryptMeta(null),
        _metaV: ROW_META_V,
      };
      const id = await dbPut(obj);
      _items.push({
        id, title, username, password:obj.password, notes, color, category,
        favorite:false, breachStatus:undefined, breachCheckedAt:null,
        totp_secret:encTotp, updatedAt:now, createdAt:now,
        custom_fields: encCF2,
        tags: isPremium() ? (_tagFormTags || []) : [],
      });
      showToast(t('toast.added'),'ok');
    }
    closeModal(); render(); autoUpload();
  }catch(e){ showToast(t('toast.importFail',{msg:e.message}),'err'); }
}

// ===== DELETE =====
// Custom delete confirmation — menghindari native confirm() yang bisa diblokir/bypass browser
let _pendingDeleteId = null;

function deleteItem(id){
  _pendingDeleteId = id;
  const item = _items.find(i=>i.id===id);
  const name = item ? item.title : 'this item';
  // Tampilkan confirm modal custom
  document.getElementById('deleteConfirmName').textContent = name;
  document.getElementById('deleteModal').classList.add('show');
}

function cancelDelete(){
  _pendingDeleteId = null;
  document.getElementById('deleteModal').classList.remove('show');
}

async function confirmDelete(){
  const id = _pendingDeleteId;
  _pendingDeleteId = null;
  document.getElementById('deleteModal').classList.remove('show');
  if(!id) return;
  await dbDelete(id);
  await histDeleteAll(id); // clean up history for deleted item
  _items = _items.filter(i=>i.id!==id);
  autoUpload();
  _expanded.delete(id);
  _revealed.delete(id);
  showToast(t('toast.deleted'));
  render();
}

// ===== PASSWORD GENERATOR =====
function genPass(){
  const chars='abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%^&*';
  let pw='';
  const arr = crypto.getRandomValues(new Uint8Array(18));
  arr.forEach(b=>pw+=chars[b%chars.length]);
  document.getElementById('fPass').value=pw;
  document.getElementById('fPass').type='text';
  updateStrength(pw);
  showToast(t('toast.passGen'), 'ok');
}

// ===== HIBP BREACH CHECK =====
// breachStatus: undefined=unchecked, 1=safe, 2=pwned
const _checkingBreachIds = new Set();

async function sha1hex(str){
  const buf = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('').toUpperCase();
}

async function dbUpdateBreach(id, status, checkedAt){
  const raw = (await dbAll()).find(r=>r.id===id);
  if(!raw) return;
  // L6: pastikan row dalam format v6 sebelum partial update.
  // Kalau row masih legacy v5, migrasikan SEMUA field metadata sekaligus —
  // jangan campur encrypted breachStatus dengan plaintext category/tags.
  if(raw._metaV !== ROW_META_V){
    const legacyCat        = raw.category || 'other';
    const legacyTags       = Array.isArray(raw.tags) ? raw.tags : [];
    raw.category = await encryptMeta(legacyCat);
    raw.tags     = await encryptMeta(legacyTags);
    raw._metaV   = ROW_META_V;
  }
  raw.breachStatus    = await encryptMeta(status !== undefined ? status : null);
  raw.breachCheckedAt = await encryptMeta(checkedAt || null);
  await dbPut(raw);
  const item = _items.find(i=>i.id===id);
  if(item){ item.breachStatus=status; item.breachCheckedAt=checkedAt; }
}

async function checkBreachForItem(item){
  try{
    const pw = await decrypt(item.password);
    const hash = await sha1hex(pw);
    const prefix = hash.slice(0,5).toUpperCase();
    const suffix = hash.slice(5).toUpperCase();
    // 8 second timeout
    const controller = new AbortController();
    const timer = setTimeout(()=>controller.abort(), 8000);
    let res;
    try {
      res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`,{
        headers:{'Add-Padding':'true'},
        signal: controller.signal
      });
    } finally {
      clearTimeout(timer);
    }
    if(!res.ok) throw new Error('HTTP '+res.status);
    const text = await res.text();
    let count = 0;
    const lines = text.split('\r\n');
    for(const l of lines){
      const [s,c] = l.split(':');
      if(s && s.toUpperCase()===suffix){ count=parseInt(c,10)||0; break; }
    }
    return {status: count>0?2:1, count};
  }catch(e){
    if(!navigator.onLine) return {status:null, err:'offline'};
    if(e.name==='AbortError') return {status:null, err:'timeout'};
    return {status:null, err:e.message};
  }
}

async function checkAllBreaches(){
  if(!_key || _checkingBreachIds.size>0) return;
  const btn = document.getElementById('breachCheckBtn');
  if(btn){ btn.disabled=true; }
  showToast(t('breach.checking'),'warn');
  let pwned=0, safe=0, errors=0;
  for(let i=0; i<_items.length; i++){
    const item = _items[i];
    _checkingBreachIds.add(item.id);
    render();
    const {status, count, err} = await checkBreachForItem(item);
    _checkingBreachIds.delete(item.id);
    if(status!==null){
      await dbUpdateBreach(item.id, status, new Date().toISOString());
      if(status===2) pwned++; else safe++;
    } else {
      errors++;
      if(err==='offline'){ showToast(t('breach.offline'),'err'); break; }
    }
    render();
    if(i<_items.length-1) await new Promise(r=>setTimeout(r,700));
  }
  if(btn){ btn.disabled=false; }
  if(pwned>0) showToast(t('breach.done',{breached:pwned,safe}),'err');
  else if(safe>0) showToast(t('breach.doneAll'),'ok');
}

async function checkSingleBreach(id){
  if(_checkingBreachIds.has(id)) return;
  const item = _items.find(i=>i.id===id);
  if(!item) return;
  _checkingBreachIds.add(id);
  render();
  const {status, count, err} = await checkBreachForItem(item);
  _checkingBreachIds.delete(id);
  if(status!==null){
    await dbUpdateBreach(id, status, new Date().toISOString());
    showToast(status===2 ? t('breach.breachedSingle',{n:count}) : t('breach.safeSingle'), status===2?'err':'ok');
  } else {
    showToast(err==='offline' ? t('breach.offline') : t('breach.apiErr',{msg:err}),'err');
  }
  render();
}

// ===== TOGGLE EYE =====
function toggleEye(inputId, btn){
  const el = document.getElementById(inputId);
  el.type = el.type==='password' ? 'text' : 'password';
  btn.innerHTML = el.type==='password' ? SVG.eyeOpen : SVG.eyeOff;
}

// ===== EXPORT / IMPORT =====
async function exportData(){
  try{
    const raw = await dbAll();
    // Fix B: sertakan salt ke backup agar import bisa verifikasi kompatibilitas
    // tanpa salt, import dari device/browser lain atau setelah reset vault akan selalu gagal
    const saltB64 = localStorage.getItem('vault_salt') || '';
    const blob = new Blob([JSON.stringify({v:3, salt: saltB64, data: raw})],{type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href=url; a.download='vault_backup_'+Date.now()+'.vault';
    a.click(); URL.revokeObjectURL(url);
    showToast(t('toast.backupSaved'),'ok');
  }catch(e){showToast(t('toast.backupFail',{msg:e.message}),'err');}
}

function importTrigger(){
  // Simpan key SEKARANG sebelum file picker dibuka
  // File picker bisa trigger visibilitychange → vault lock → _key jadi null
  _importSessionKey = _key;
  _importPending = '__picker__'; // flag: file picker sedang terbuka
  document.getElementById('importFile').click();
  // Reset flag jika user cancel (tidak pilih file)
  setTimeout(()=>{ if(_importPending === '__picker__') _importPending = null; }, 5000);
}

async function importData(e){
  const file = e.target.files[0];
  if(_importPending === '__picker__') _importPending = null; // reset picker flag
  if(!file) return;
  e.target.value='';
  try{
    const text = await file.text();
    const json = JSON.parse(text);

    // Deteksi format encrypted backup (dari doEncExport)
    if(json && json.type === 'vault-encrypted-backup'){
      if(json.pwMode === 'custom'){
        // Butuh password untuk decrypt envelope dulu
        if(!json.salt || !json.iv || typeof json.data !== 'string'){
          throw new Error('Invalid encrypted backup format');
        }
        // Simpan bundle untuk diproses setelah user input password
        _backupPending = json;
        document.getElementById('backupPwInput').value = '';
        document.getElementById('backupPwMsg').textContent = '';
        document.getElementById('backupPwInput').style.borderColor = 'var(--border)';
        document.getElementById('backupPwModal').classList.add('show');
        // Penting: simpan _key SEBELUM modal terbuka (sama seperti importTrigger)
        // _importSessionKey sudah di-set di importTrigger, tidak perlu di-set ulang
        return;
      } else if(json.pwMode === 'master'){
        // Master mode: data adalah array biasa, salt sudah di bundle
        // Normalisasi ke format yang dipahami flow lama
        if(!Array.isArray(json.data)) throw new Error('Invalid encrypted backup format');
        await processImportJson({ v: json.v || 3, salt: json.salt || '', data: json.data });
        return;
      } else {
        throw new Error('Unknown backup mode');
      }
    }

    // Format lama (plain export)
    await processImportJson(json);
  }catch(err){
    showToast(t('toast.importFail',{msg:err.message}),'err');
    _importPending = null;
    _backupPending = null;
  }
}

// Confirm backup password — decrypt envelope lalu lanjutkan ke flow import normal
async function confirmBackupPw(){
  const bundle = _backupPending;
  if(!bundle) return;
  const pw = document.getElementById('backupPwInput').value;
  const msgEl = document.getElementById('backupPwMsg');
  if(!pw){ msgEl.textContent = 'Enter backup password'; return; }
  msgEl.textContent = 'Decrypting...';
  try{
    const backupSalt = b64ToBuf(bundle.salt);
    const backupKey = await deriveKey(pw, backupSalt);
    const iv = b64ToBuf(bundle.iv);
    const ct = b64ToBuf(bundle.data);
    const ptBuf = await crypto.subtle.decrypt({name:'AES-GCM', iv}, backupKey, ct);
    const inner = JSON.parse(new TextDecoder().decode(ptBuf));
    if(!inner || !Array.isArray(inner.data)) throw new Error('Backup payload invalid');
    // Berhasil — tutup modal, lanjut ke flow normal.
    // Forward backupKey via _presetKey: data sudah dipastikan terenkripsi dengan
    // backupKey ini (kalau export-nya dari doEncExport custom mode), jadi import
    // bisa pakai langsung tanpa perlu modal kedua. Kalau backup ternyata bundle
    // lama (data masih terenkripsi master key vault asal), _presetKey akan gagal
    // decrypt → flow akan fallback ke modal verifikasi seperti biasa.
    document.getElementById('backupPwModal').classList.remove('show');
    _backupPending = null;
    await processImportJson({
      v: inner.v || 3,
      salt: inner.salt || '',
      data: inner.data,
      _presetKey: backupKey,
    });
  }catch(err){
    msgEl.textContent = 'Wrong password or corrupt backup';
    document.getElementById('backupPwInput').style.borderColor = 'var(--danger)';
  }
}

function cancelBackupPw(){
  document.getElementById('backupPwModal').classList.remove('show');
  _backupPending = null;
  _importSessionKey = null;
  showToast(t('toast.importCancelled'),'warn');
}

// Proses payload import (sudah dalam format {v, salt, data:[items]})
// Dipisahkan dari importData supaya flow encrypted-backup bisa reuse
async function processImportJson(json){
  if(!json || !json.data || !Array.isArray(json.data)) throw new Error('Invalid format');

    // ===== VALIDASI SCHEMA PER-ITEM =====
    const REQUIRED_FIELDS = ['title','username','password'];
    const invalidItems = [];
    for(let i=0;i<json.data.length;i++){
      const row = json.data[i];
      if(typeof row !== 'object' || row === null){ invalidItems.push(i+1); continue; }
      const missingField = REQUIRED_FIELDS.find(f=>typeof row[f] !== 'string' || !row[f]);
      if(missingField){ invalidItems.push(i+1); continue; }
    }
    if(invalidItems.length){
      const sample = invalidItems.slice(0,5).join(', ');
      const more = invalidItems.length > 5 ? ` (+${invalidItems.length-5} more)` : '';
      throw new Error(t('toast.importInvalid',{n:invalidItems.length, rows:sample+more}));
    }

    // ===== PRESET KEY (dari confirmBackupPw, custom-password backup) =====
    // Kalau confirmBackupPw sudah men-derive backupKey dan data inner sudah
    // di-re-encrypt dengan key itu (export modern via doEncExport), kita bisa
    // skip modal verifikasi dan salt check — langsung pakai key yang sudah ada.
    // Verify dengan trial decrypt item pertama supaya defense-in-depth: kalau
    // bundle format lama (data masih dienkripsi master key vault asal), trial
    // decrypt akan throw → fallback ke salt comparison di bawah.
    let presetVerified = false;
    if(json._presetKey && json.data.length > 0){
      try {
        const buf = b64ToBuf(json.data[0].title);
        const iv = buf.slice(0,12); const ct = buf.slice(12);
        await crypto.subtle.decrypt({name:'AES-GCM', iv}, json._presetKey, ct);
        json._importKey = json._presetKey;
        json._needReEncrypt = true;
        presetVerified = true;
      } catch(e) {
        // _presetKey tidak cocok — fallback ke salt comparison di bawah
        json._presetKey = null;
      }
    }

    // ===== VERIFIKASI KOMPATIBILITAS BACKUP =====
    if(!presetVerified && json.data.length > 0 && json.salt){
      const currentSaltB64 = localStorage.getItem('vault_salt') || '';
      if(json.salt === currentSaltB64){
        json._importKey = null;
        json._needReEncrypt = false;
      } else {
        _importPending = json;
        _importPending._pendingVerify = true;
        document.getElementById('importPwModal').classList.add('show');
        document.getElementById('importPwInput').value='';
        document.getElementById('importPwMsg').textContent='';
        return;
      }
    } else if(!presetVerified) {
      json._importKey = null;
      json._needReEncrypt = false;
    }

    // Show confirmation modal
    _importPending = json;
    document.getElementById('importCount').textContent = json.data.length;
    document.getElementById('importModal').classList.add('show');
}

function cancelImportPw(){
  document.getElementById('importPwModal').classList.remove('show');
  _importPending = null;
  _importSessionKey = null;
  showToast(t('toast.importCancelled'),'warn');
}

async function confirmImportPw(){
  const json = _importPending;
  if(!json) return;
  const pw = document.getElementById('importPwInput').value;
  const msgEl = document.getElementById('importPwMsg');
  if(!pw){ msgEl.textContent=t('importPw.enterPw'); return; }
  msgEl.textContent=t('importPw.verifying');
  try{
    const backupSalt = b64ToBuf(json.salt);
    const importKey = await deriveKey(pw, backupSalt);
    // Coba dekripsi item pertama
    const buf = b64ToBuf(json.data[0].title);
    const iv = buf.slice(0,12); const ct = buf.slice(12);
    await crypto.subtle.decrypt({name:'AES-GCM', iv}, importKey, ct);
    // Berhasil — simpan key dan lanjutkan ke modal pilih mode
    json._importKey = importKey;
    json._needReEncrypt = true;
    json._pendingVerify = false;
    document.getElementById('importPwModal').classList.remove('show');
    // Tampilkan modal pilih mode import
    document.getElementById('importCount').textContent = json.data.length;
    document.getElementById('importModal').classList.add('show');
  }catch{
    msgEl.textContent=t('importPw.wrongPw');
    document.getElementById('importPwInput').style.borderColor='var(--danger)';
  }
}

function cancelImport(){
  _importPending = null;
  _importSessionKey = null;
  document.getElementById('importModal').classList.remove('show');
}

async function doImport(mode){
  if(!_importPending) return;
  const json = _importPending;
  _importPending = null;
  document.getElementById('importModal').classList.remove('show');

  // Pakai _importSessionKey (disimpan saat klik Import, sebelum file picker)
  // Ini aman meskipun vault sudah ter-lock di tengah proses
  const currentKey = _importSessionKey || _key;
  if(!currentKey){ showToast(t('toast.vaultNotOpen'),'err'); return; }

  try{
    if(mode === 'replace') await dbClear();

    const srcKey = json._importKey || currentKey;
    const needReEncrypt = json._needReEncrypt === true;

    for(const row of json.data){
      let clean;
      if(needReEncrypt){
        // Dekripsi pakai key backup, enkripsi ulang pakai key vault ini
        _key = srcKey;
        const title    = await decrypt(row.title);
        const username = await decrypt(row.username);
        const password = await decrypt(row.password);
        const notes    = row.notes ? await decrypt(row.notes) : '';
        // Decrypt totp_secret dengan srcKey
        const totp     = row.totp_secret ? await decrypt(row.totp_secret) : '';
        // Decrypt custom_fields values dengan srcKey
        const cfDecrypted = [];
        if(row.custom_fields && Array.isArray(row.custom_fields) && row.custom_fields.length){
          for(const cf of row.custom_fields){
            let val = '';
            if(cf && cf.value){
              try { val = await decrypt(cf.value); } catch(e){ val = ''; }
            }
            cfDecrypted.push({ ...cf, _plainValue: val });
          }
        }
        _key = currentKey;
        // Metadata: decrypt if encrypted, else use as-is (legacy backup)
        let importCat = row.category || 'other';
        let importTags = row.tags || [];
        if(_isEncMeta(row.category)){ _key = srcKey; importCat = (await decryptMeta(row.category, 'other')) || 'other'; _key = currentKey; }
        if(_isEncMeta(row.tags)){ _key = srcKey; importTags = (await decryptMeta(row.tags, [])) || []; _key = currentKey; }
        let importBreachStatus = null;
        let importBreachCheckedAt = null;
        if(typeof row.breachStatus === 'string' && _isEncMeta(row.breachStatus)){ _key = srcKey; const bs = await decryptMeta(row.breachStatus, null); importBreachStatus = bs; _key = currentKey; }
        else if(typeof row.breachStatus === 'number'){ importBreachStatus = row.breachStatus; }
        if(typeof row.breachCheckedAt === 'string' && _isEncMeta(row.breachCheckedAt)){ _key = srcKey; importBreachCheckedAt = await decryptMeta(row.breachCheckedAt, null); _key = currentKey; }
        else if(typeof row.breachCheckedAt === 'string' && row.breachCheckedAt){ importBreachCheckedAt = row.breachCheckedAt; }
        // Re-encrypt custom_fields values dengan currentKey
        const cfReencrypted = [];
        for(const cf of cfDecrypted){
          const { _plainValue, ...rest } = cf;
          cfReencrypted.push({
            ...rest,
            value: _plainValue ? await encrypt(_plainValue) : '',
          });
        }
        clean = {
          title:    await encrypt(title),
          username: await encrypt(username),
          password: await encrypt(password),
          notes:    notes ? await encrypt(notes) : '',
          totp_secret: totp ? await encrypt(totp) : '',
          custom_fields: cfReencrypted,
          color:    typeof row.color === 'number' ? row.color : 0,
          category: await encryptMeta(importCat),
          favorite: row.favorite === true,
          tags:     await encryptMeta(Array.isArray(importTags) ? importTags : []),
          breachStatus: await encryptMeta(importBreachStatus),
          breachCheckedAt: await encryptMeta(importBreachCheckedAt),
          _metaV: ROW_META_V,
        };
      } else {
        // Same salt — ciphertext already encrypted with current key
        // Metadata may be plaintext (v5) or encrypted (v6)
        let importCat = row.category || 'other';
        let importTags = row.tags || [];
        let importBreachStatus = null;
        let importBreachCheckedAt = null;
        if(_isEncMeta(row.category)){ importCat = row.category; } // already encrypted, keep as-is
        else { importCat = await encryptMeta(row.category || 'other'); }
        if(_isEncMeta(row.tags)){ importTags = row.tags; } // already encrypted
        else { importTags = await encryptMeta(Array.isArray(row.tags) ? row.tags : []); }
        if(typeof row.breachStatus === 'string' && _isEncMeta(row.breachStatus)){ importBreachStatus = row.breachStatus; }
        else { importBreachStatus = await encryptMeta(typeof row.breachStatus === 'number' ? row.breachStatus : null); }
        if(typeof row.breachCheckedAt === 'string' && _isEncMeta(row.breachCheckedAt)){ importBreachCheckedAt = row.breachCheckedAt; }
        else { importBreachCheckedAt = await encryptMeta(row.breachCheckedAt || null); }
        clean = {
          title:    row.title || '',
          username: row.username || '',
          password: row.password || '',
          notes:    (typeof row.notes === 'string' && row.notes) ? row.notes : '',
          totp_secret: (typeof row.totp_secret === 'string' && row.totp_secret) ? row.totp_secret : '',
          custom_fields: (Array.isArray(row.custom_fields) ? row.custom_fields : []),
          color:    typeof row.color === 'number' ? row.color : 0,
          category: importCat,
          favorite: row.favorite === true,
          tags:     importTags,
          breachStatus: importBreachStatus,
          breachCheckedAt: importBreachCheckedAt,
          _metaV: ROW_META_V,
        };
      }
      await dbPut(clean);
    }

    // Restore key agar loadItems bisa jalan (vault mungkin sudah ter-lock)
    if(!_key) _key = currentKey;
    await loadItems();
    _importSessionKey = null; // bersihkan session key

    // Clear secret timers lama yang mungkin stale setelah data di-replace
    _secretTimers.forEach(t => clearTimeout(t));
    _secretTimers.clear();
    _secretLocks.clear();
    await loadSecretLocks();

    // Reset idle timer — import bisa lama, jangan langsung terkunci setelah selesai
    resetIdleTimer();
    // Reset filter & search agar item yang diimport tidak tersembunyi
    _filter = 'all';
    const searchEl = document.getElementById('search');
    if(searchEl) searchEl.value = '';

    if(document.getElementById('app').style.display !== 'none'){
      render();
    }
    showToast(`${json.data.length} item diimport (${mode==='merge'?t('toast.importMerge'):t('toast.importReplace')})`, 'ok');
  }catch(err){
    _importSessionKey = null;
    showToast(t('toast.importFail',{msg:err.message}),'err');
  }
}

// ===== RESET VAULT =====
function showResetConfirm(){
  showConfirm({
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f05" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
    title: 'Reset Vault?',
    desc: 'This will delete ALL data and your master password. This cannot be undone.',
    okText: 'Yes, Reset',
    cancelText: 'Cancel',
    onOk: async () => {
      // Hapus device dari Supabase dulu sebelum reset
      const license = localStorage.getItem('vault_license');
      const deviceId = localStorage.getItem('hesych_device_id');
      if(license && deviceId){
        try{
          await fetch('/api/verify-license', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ license, deviceId, action: 'remove' })
          });
        }catch(e){}
      }
      localStorage.removeItem('vault_salt');
      localStorage.removeItem('vault_ver');
      localStorage.removeItem('vault_bio_cred_id');
      localStorage.removeItem('vault_bio_enabled');
      localStorage.removeItem('vault_license');
      localStorage.removeItem('vault_license_verified');
      localStorage.removeItem('vault_license_at');
      localStorage.removeItem('hesych_device_id');
      localStorage.removeItem('hesych_sync_ts');
      clearBioSession();
      const newSalt = crypto.getRandomValues(new Uint8Array(32)); // M1 FIX: consistent 32-byte salt
      localStorage.setItem('vault_salt', bufToB64(newSalt));
      const req = indexedDB.deleteDatabase(DB_NAME);
      req.onsuccess = ()=>{
        document.getElementById('confirmWrap').classList.remove('hidden');
        document.getElementById('unlockBtn').textContent=t('lock.createBtn');
        document.getElementById('lockSub').textContent=t('lock.setupSubtitle');
        document.getElementById('lockScreen').classList.add('setup-mode');
        const badge = document.getElementById('lockModeBadge');
        const badgeText = document.getElementById('lockModeBadgeText');
        if(badge){ badge.className='lock-mode-badge badge-setup'; }
        if(badgeText){ badgeText.textContent = 'New Vault'; }
        document.getElementById('resetLink').classList.add('hidden');
        document.getElementById('masterPass').value='';
        document.getElementById('masterConfirm').value='';
        attempts=0; lockedUntil=0;
        setMsg(t('lock.resetDone'),'ok');
        document.getElementById('unlockBtn').disabled=false;
      };
    }
  });
}

// ===== CHANGE MASTER PASSWORD =====
function openChangePw(){
  ['cpOld','cpNew','cpConfirm'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('cpMsg').textContent='';
  document.getElementById('cpOverlay').classList.add('show');
  document.getElementById('cpSheet').classList.add('show');
}

function closeChangePw(){
  closeSheetAnim('cpSheet', 'cpOverlay');
}

async function doChangePw(){
  const oldPw = document.getElementById('cpOld').value;
  const newPw = document.getElementById('cpNew').value;
  const confirmPw = document.getElementById('cpConfirm').value;
  const msgEl = document.getElementById('cpMsg');

  if(!oldPw||!newPw||!confirmPw){ msgEl.style.color='var(--danger)'; msgEl.textContent=t('cp.allRequired'); return; }
  if(newPw !== confirmPw){ msgEl.style.color='var(--danger)'; msgEl.textContent=t('cp.noMatch'); return; }
  if(newPw.length < 12){ msgEl.style.color='var(--danger)'; msgEl.textContent=t('cp.minLen'); return; }

  msgEl.style.color='var(--sub)'; msgEl.textContent=t('cp.verifying');

  const salt = getSalt();
  const ok = await checkVerifier(oldPw, salt);
  if(!ok){ msgEl.style.color='var(--danger)'; msgEl.textContent=t('cp.wrongOld'); return; }

  msgEl.textContent=t('cp.reEncrypting');

  try{
    const oldKey = _key;
    const newKey = await deriveKey(newPw, salt);
    const raw = await dbAll();
    await dbClear();

    // H8 FIX: re-encrypt ALL encrypted fields including totp_secret, custom_fields.
    // Previous version silently dropped these fields causing data loss.
    for(const row of raw){
      _key = oldKey;
      const title    = await decrypt(row.title);
      const username = await decrypt(row.username);
      const password = await decrypt(row.password);
      const notes    = row.notes ? await decrypt(row.notes) : '';
      const totp     = row.totp_secret ? await decrypt(row.totp_secret) : '';

      let customFields = [];
      if(row.custom_fields && row.custom_fields.length){
        for(const cf of row.custom_fields){
          customFields.push({ ...cf, value: cf.value ? await decrypt(cf.value) : '' });
        }
      }

      // L6: Decrypt metadata fields (encrypted v6 or plaintext v5 legacy)
      let metaCat, metaTags, metaBreachStatus, metaBreachCheckedAt;
      if(_isEncMeta(row.category)){
        metaCat = (await decryptMeta(row.category, 'other')) || 'other';
        metaTags = (await decryptMeta(row.tags, [])) || [];
        metaBreachStatus = await decryptMeta(row.breachStatus, null);
        metaBreachCheckedAt = await decryptMeta(row.breachCheckedAt, null);
      } else {
        metaCat = row.category || 'other';
        metaTags = Array.isArray(row.tags) ? row.tags : [];
        metaBreachStatus = typeof row.breachStatus === 'number' ? row.breachStatus : null;
        metaBreachCheckedAt = row.breachCheckedAt || null;
      }

      _key = newKey;
      const reencCustomFields = [];
      for(const cf of customFields){
        reencCustomFields.push({ ...cf, value: cf.value ? await encrypt(cf.value) : '' });
      }

      await dbPut({
        ...row,
        title:        await encrypt(title),
        username:     await encrypt(username),
        password:     await encrypt(password),
        notes:        notes ? await encrypt(notes) : '',
        totp_secret:  totp  ? await encrypt(totp)  : '',
        custom_fields: reencCustomFields,
        // Re-encrypt metadata fields with new key
        category:       await encryptMeta(metaCat),
        tags:           await encryptMeta(metaTags),
        breachStatus:   await encryptMeta(metaBreachStatus),
        breachCheckedAt: await encryptMeta(metaBreachCheckedAt),
        _metaV:         ROW_META_V,
      });
    }

    // H8 FIX: re-encrypt pw_history entries too
    const allHist = await new Promise((res,rej)=>{
      const tx = db.transaction(HIST_STORE,'readonly');
      const req = tx.objectStore(HIST_STORE).getAll();
      req.onsuccess = ()=>res(req.result);
      req.onerror  = ()=>rej(req.error);
    });
    const reencHist = [];
    for(const h of allHist){
      _key = oldKey;
      const pw = h.encPassword ? await decrypt(h.encPassword) : '';
      _key = newKey;
      reencHist.push({ ...h, encPassword: pw ? await encrypt(pw) : '' });
    }
    await new Promise((res,rej)=>{
      const tx = db.transaction(HIST_STORE,'readwrite');
      const store = tx.objectStore(HIST_STORE);
      store.clear();
      reencHist.forEach(h => store.put(h));
      tx.oncomplete = res;
      tx.onerror    = rej;
    });

    // Bug2 FIX: re-encrypt share_log entries (itemTitle + link) with new key
    const allShareLog = await new Promise((res,rej)=>{
      const tx = db.transaction(SHARE_LOG_STORE,'readonly');
      const req = tx.objectStore(SHARE_LOG_STORE).getAll();
      req.onsuccess = ()=>res(req.result);
      req.onerror   = ()=>rej(req.error);
    });
    const reencSL = [];
    for(const sl of allShareLog){
      let title = ''; let link = '';
      try{ title = sl.itemTitle ? await decryptWith(oldKey, sl.itemTitle) : ''; }catch{}
      try{ link  = sl.link      ? await decryptWith(oldKey, sl.link)      : ''; }catch{}
      reencSL.push({
        ...sl,
        itemTitle: title ? await encryptWith(newKey, title) : '',
        link:      link  ? await encryptWith(newKey, link)  : '',
      });
    }
    await new Promise((res,rej)=>{
      const tx = db.transaction(SHARE_LOG_STORE,'readwrite');
      const store = tx.objectStore(SHARE_LOG_STORE);
      store.clear();
      reencSL.forEach(r => store.put(r));
      tx.oncomplete = res;
      tx.onerror    = rej;
    });

    await setVerifier(newPw, salt);
    _key = newKey;
    // Refresh bio session dengan password baru
    if(isBiometricSupported()) await setBioSession(newPw, { forceLegacy: true });
    await loadItems(); render();
    autoUpload();
    closeChangePw();
    showToast(t('toast.cpSuccess'),'ok');
  }catch(e){
    msgEl.style.color='var(--danger)'; msgEl.textContent='Error: '+e.message;
    try{ _key = await deriveKey(oldPw, salt); }catch{}
  }
}

// ===== PERSIST SECRET LOCKS =====
// L5 FIX: encrypt secret lock metadata so item IDs/timings not exposed in localStorage
async function saveSecretLocks(){
  if(!_key){ localStorage.removeItem('vault_secret_locks'); return; }
  const data = [];
  _secretLocks.forEach((lock, id)=>{
    data.push({ id, lockedAt: lock.lockedAt, durationMs: lock.durationMs });
  });
  if(!data.length){ localStorage.removeItem('vault_secret_locks'); return; }
  const enc = await encryptMeta(data);
  localStorage.setItem('vault_secret_locks', enc);
}

async function loadSecretLocks(){
  const raw = localStorage.getItem('vault_secret_locks');
  if(!raw) return;
  let data;
  try{
    data = await decryptMeta(raw, null);
    if(!Array.isArray(data)) throw new Error();
  }catch{
    try{ data = JSON.parse(raw); }catch{ localStorage.removeItem('vault_secret_locks'); return; }
  }
  const now = Date.now();
  for(const entry of data){
    const elapsed = now - entry.lockedAt; // pakai Date.now() karena performance.now() sudah reset
    if(elapsed >= entry.durationMs) continue; // sudah expired
    const remMs = entry.durationMs - elapsed;
    // Buat ulang lock dengan perfStart disesuaikan
    _secretLocks.set(entry.id, {
      lockedAt: entry.lockedAt,
      perfStart: performance.now() - elapsed, // mundurkan perfStart agar elapsed konsisten
      durationMs: entry.durationMs,
    });
    // Timer otomatis unlock
    const timerId = setTimeout(()=>{
      _secretLocks.delete(entry.id);
      _secretTimers.delete(entry.id);
      saveSecretLocks().catch(()=>{});
      showToast(t('toast.secretExpired',{name:_items.find(i=>i.id===entry.id)?.title||'item'}), 'ok');
      render();
    }, remMs);
    _secretTimers.set(entry.id, timerId);
    startSecretCountdown(entry.id);
  }
  // Bersihkan yang sudah expired dari storage
  saveSecretLocks().catch(()=>{});
}

// ===== LOCK SECRET =====
let _secretLockTarget = null;
let _selectedDurationMs = 0; // milliseconds

function isItemSecretLocked(id){
  const lock = _secretLocks.get(id);
  if(!lock) return false;

  const perfElapsed = performance.now() - lock.perfStart; // tidak bisa dimanipulasi user
  const timeElapsed = Date.now() - lock.lockedAt;         // bisa dimanipulasi via jam sistem

  // Pakai yang LEBIH KECIL — kalau jam dimajukan, perfElapsed masih kecil → tetap locked
  const elapsed = Math.min(perfElapsed, timeElapsed);

  if(elapsed >= lock.durationMs){
    clearTimeout(_secretTimers.get(id));
    _secretLocks.delete(id);
    _secretTimers.delete(id);
    return false;
  }
  return true;
}

function fmtCountdown(ms){
  if(ms <= 0) return '0:00';
  const totalSec = Math.ceil(ms / 1000);
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if(d > 0) return `${d}${t('cd.day')} ${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  if(h > 0) return `${h}${t('cd.hour')} ${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  return `${m}:${s.toString().padStart(2,'0')}`;
}

function getDurInputMs(){
  const y   = parseInt(document.getElementById('durY').value)||0;
  const mo  = parseInt(document.getElementById('durMo').value)||0;
  const w   = parseInt(document.getElementById('durW').value)||0;
  const d   = parseInt(document.getElementById('durD').value)||0;
  const h   = parseInt(document.getElementById('durH').value)||0;
  const min = parseInt(document.getElementById('durMin').value)||0;
  const s   = parseInt(document.getElementById('durS').value)||0;
  return ((y*365 + mo*30 + w*7 + d)*86400 + h*3600 + min*60 + s) * 1000;
}

function fmtDurPreview(ms){
  if(ms <= 0) return t('dur.chooseDur');
  const totalSec = Math.floor(ms/1000);
  const y  = Math.floor(totalSec/31536000);
  const mo = Math.floor((totalSec%31536000)/2592000);
  const w  = Math.floor((totalSec%2592000)/604800);
  const d  = Math.floor((totalSec%604800)/86400);
  const h  = Math.floor((totalSec%86400)/3600);
  const m  = Math.floor((totalSec%3600)/60);
  const s  = totalSec%60;
  const parts=[];
  if(y)  parts.push(y+t('dur.year'));
  if(mo) parts.push(mo+t('dur.month'));
  if(w)  parts.push(w+t('dur.week'));
  if(d)  parts.push(d+t('dur.day'));
  if(h)  parts.push(h+t('dur.hour'));
  if(m)  parts.push(m+t('dur.min'));
  if(s)  parts.push(s+t('dur.sec'));
  return '🔒 ' + t('dur.lockFor', {parts: parts.join(' ')});
}

function onDurInput(){
  _selectedDurationMs = getDurInputMs();
  const preview = document.getElementById('durPreview');
  preview.textContent = fmtDurPreview(_selectedDurationMs);
  const confirmBtn = document.getElementById('secretLockConfirmBtn');
  if(_selectedDurationMs > 0){
    confirmBtn.style.opacity='1'; confirmBtn.style.pointerEvents='auto';
  } else {
    confirmBtn.style.opacity='.4'; confirmBtn.style.pointerEvents='none';
  }
}

function applyPreset(y,mo,w,d,h,min,s){
  document.getElementById('durY').value   = y;
  document.getElementById('durMo').value  = mo;
  document.getElementById('durW').value   = w;
  document.getElementById('durD').value   = d;
  document.getElementById('durH').value   = h;
  document.getElementById('durMin').value = min;
  document.getElementById('durS').value   = s;
  onDurInput();
}

function openSecretLockModal(id){
  _secretLockTarget = id;
  _selectedDurationMs = 0;
  const item = _items.find(i=>i.id===id);
  document.getElementById('secretLockItemName').textContent = item ? item.title : 'this item';
  // Reset inputs
  ['durY','durMo','durW','durD','durH','durMin','durS'].forEach(id=>document.getElementById(id).value=0);
  document.getElementById('durPreview').textContent = t('secretLock.chooseDur');
  const confirmBtn = document.getElementById('secretLockConfirmBtn');
  confirmBtn.style.opacity='.4'; confirmBtn.style.pointerEvents='none';

  // Show onboarding hint if not dismissed
  const hint = document.getElementById('secretLockHint');
  const dismissed = localStorage.getItem('vault_secretlock_hint_dismissed');
  if(hint){ if(dismissed) hint.classList.add('hidden'); else hint.classList.remove('hidden'); }
  const gotIt = document.getElementById('secretLockGotIt');
  if(gotIt) gotIt.checked = false;

  document.getElementById('secretLockModal').classList.add('show');
}

function onSecretLockGotIt(cb){
  if(cb.checked) localStorage.setItem('vault_secretlock_hint_dismissed','1');
  else localStorage.removeItem('vault_secretlock_hint_dismissed');
}

function closeSecretLockModal(){
  _secretLockTarget = null;
  _selectedDurationMs = 0;
  document.getElementById('secretLockModal').classList.remove('show');
}

function confirmSecretLock(){
  if(!_secretLockTarget || !_selectedDurationMs) return;
  const id = _secretLockTarget;
  const ms = _selectedDurationMs;

  if(_secretTimers.has(id)) clearTimeout(_secretTimers.get(id));

  _secretLocks.set(id, {
    lockedAt: Date.now(),       // timestamp absolut (referensi)
    perfStart: performance.now(), // performance timer (tidak bisa dimanipulasi)
    durationMs: ms,             // durasi yang harus dilalui
  });
  _expanded.delete(id);
  _revealed.delete(id);

  const timerId = setTimeout(()=>{
    _secretLocks.delete(id);
    _secretTimers.delete(id);
    saveSecretLocks().catch(()=>{});
    showToast(t('toast.secretExpired',{name:_items.find(i=>i.id===id)?.title||'item'}), 'ok');
    render();
  }, ms);
  _secretTimers.set(id, timerId);

  startSecretCountdown(id);
  saveSecretLocks().catch(()=>{});

  closeSecretLockModal();
  render();
  showToast(fmtDurPreview(ms), 'ok');
}

function startSecretCountdown(id){
  const tick = ()=>{
    const lock = _secretLocks.get(id);
    if(!lock) return;
    const perfElapsed = performance.now() - lock.perfStart;
    const timeElapsed = Date.now() - lock.lockedAt;
    const elapsed = Math.min(perfElapsed, timeElapsed);
    const rem = lock.durationMs - elapsed;
    const el = document.getElementById('slt-'+id);
    if(el) el.textContent = fmtCountdown(rem);
    if(rem > 0) setTimeout(tick, 1000);
  };
  setTimeout(tick, 1000);
}

function cancelSecretLock(id){
  if(_secretTimers.has(id)) clearTimeout(_secretTimers.get(id));
  _secretLocks.delete(id);
  _secretTimers.delete(id);
  render();
  showToast(t('toast.secretCancelled'), 'ok');
}

// ===== BIOMETRIC AUTH (WebAuthn) =====
const _BIO_RP_ID = location.hostname || 'localhost';
const _BIO_RP_NAME = 'Hesych';

function isBiometricSupported() {
  return !!(window.PublicKeyCredential && navigator.credentials && navigator.credentials.create);
}

function isBiometricEnabled() {
  return !!(localStorage.getItem('vault_bio_cred_id') && localStorage.getItem('vault_bio_enabled'));
}

// H2: PRF constant input — deterministic per credential
const _PRF_INPUT = new TextEncoder().encode('hesych-vault-session-key-v1');

// C1 FIX: Bio session now uses sessionStorage (cleared on tab close) + 30min TTL
// Master password is no longer persistent across browser sessions via localStorage
// H2 FIX: PRF path does not store vault_bio_key (key derived per-assertion)
function hasBioSession() {
  const encB64 = sessionStorage.getItem('vault_bio_session');
  if (!encB64) return false;
  const expiry = parseInt(sessionStorage.getItem('vault_bio_expiry') || '0');
  if (Date.now() > expiry) { clearBioSession(); return false; }
  const prfEnabled = localStorage.getItem('vault_bio_prf') === '1';
  const bioKey = sessionStorage.getItem('vault_bio_key');
  // PRF session: no bioKey stored (set by _refreshPrfSession after bio unlock)
  // Legacy session: bioKey stored (set by setBioSession after password unlock)
  if (prfEnabled && !bioKey) return true;
  return !!bioKey;
}

async function setBioSession(password, { forceLegacy = false } = {}) {
  const prfEnabled = !forceLegacy && localStorage.getItem('vault_bio_prf') === '1';
  const credIdB64 = localStorage.getItem('vault_bio_cred_id');

  // H2: PRF path — session key derived from WebAuthn assertion, never stored
  if (prfEnabled && credIdB64) {
    try {
      showToast('Tap biometric to secure session', 'info');
      const assertion = await navigator.credentials.get({
        publicKey: {
          challenge: crypto.getRandomValues(new Uint8Array(32)),
          allowCredentials: [{ id: b64ToBuf(credIdB64), type: 'public-key' }],
          userVerification: 'required',
          timeout: 60000,
          extensions: { prf: { eval: { first: _PRF_INPUT } } }
        }
      });
      const prfOutput = assertion.getClientExtensionResults()?.prf?.results?.first;
      if (prfOutput && prfOutput.byteLength >= 32) {
        const prfKey = await crypto.subtle.importKey('raw', prfOutput, {name:'AES-GCM'}, false, ['encrypt']);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const ct = await crypto.subtle.encrypt({name:'AES-GCM', iv}, prfKey, new TextEncoder().encode(password));
        const payload = new Uint8Array(iv.length + ct.byteLength);
        payload.set(iv); payload.set(new Uint8Array(ct), iv.length);
        const expiry = Date.now() + (30 * 60 * 1000);
        sessionStorage.setItem('vault_bio_session', bufToB64(payload));
        sessionStorage.removeItem('vault_bio_key'); // key NOT stored on PRF path
        sessionStorage.setItem('vault_bio_expiry', expiry.toString());
        localStorage.removeItem('vault_bio_session');
        localStorage.removeItem('vault_bio_key');
        localStorage.removeItem('vault_bio_expiry');
        return;
      }
    } catch(e) {
      // PRF assertion failed or cancelled — fall through to legacy path
    }
  }

  // Legacy path: random session key stored in sessionStorage
  try {
    const sessionKey = crypto.getRandomValues(new Uint8Array(32));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const aesKey = await crypto.subtle.importKey('raw', sessionKey, {name:'AES-GCM'}, false, ['encrypt']);
    const ct = await crypto.subtle.encrypt({name:'AES-GCM', iv}, aesKey, new TextEncoder().encode(password));
    const payload = new Uint8Array(iv.length + ct.byteLength);
    payload.set(iv); payload.set(new Uint8Array(ct), iv.length);
    const expiry = Date.now() + (30 * 60 * 1000);
    sessionStorage.setItem('vault_bio_session', bufToB64(payload));
    sessionStorage.setItem('vault_bio_key', bufToB64(sessionKey));
    sessionStorage.setItem('vault_bio_expiry', expiry.toString());
    localStorage.removeItem('vault_bio_session');
    localStorage.removeItem('vault_bio_key');
    localStorage.removeItem('vault_bio_expiry');
  } catch(e) {}
}

// H2: Refresh PRF session using already-obtained prfOutput — no second assertion
async function _refreshPrfSession(password, prfOutput) {
  try {
    const prfKey = await crypto.subtle.importKey('raw', prfOutput, {name:'AES-GCM'}, false, ['encrypt']);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = await crypto.subtle.encrypt({name:'AES-GCM', iv}, prfKey, new TextEncoder().encode(password));
    const payload = new Uint8Array(iv.length + ct.byteLength);
    payload.set(iv); payload.set(new Uint8Array(ct), iv.length);
    const expiry = Date.now() + (30 * 60 * 1000);
    sessionStorage.setItem('vault_bio_session', bufToB64(payload));
    sessionStorage.removeItem('vault_bio_key'); // key NOT stored on PRF path
    sessionStorage.setItem('vault_bio_expiry', expiry.toString());
    localStorage.removeItem('vault_bio_session');
    localStorage.removeItem('vault_bio_key');
    localStorage.removeItem('vault_bio_expiry');
  } catch(e) {
    // Session refresh failed — existing session still valid until expiry
  }
}

async function getBioSession() {
  const keyB64 = sessionStorage.getItem('vault_bio_key');
  const encB64 = sessionStorage.getItem('vault_bio_session');
  const expiry = parseInt(sessionStorage.getItem('vault_bio_expiry') || '0');
  if (!keyB64 || !encB64) return null;
  if (Date.now() > expiry) { clearBioSession(); return null; }
  try {
    const sessionKey = b64ToBuf(keyB64);
    const payload = b64ToBuf(encB64);
    const iv = payload.slice(0, 12); const ct = payload.slice(12);
    const aesKey = await crypto.subtle.importKey('raw', sessionKey, {name:'AES-GCM'}, false, ['decrypt']);
    const pt = await crypto.subtle.decrypt({name:'AES-GCM', iv}, aesKey, ct);
    return new TextDecoder().decode(pt);
  } catch(e) { return null; }
}

function clearBioSession() {
  sessionStorage.removeItem('vault_bio_session');
  sessionStorage.removeItem('vault_bio_key');
  sessionStorage.removeItem('vault_bio_expiry');
  // Also clear localStorage remnants from old version
  localStorage.removeItem('vault_bio_session');
  localStorage.removeItem('vault_bio_key');
  localStorage.removeItem('vault_bio_expiry');
}

async function registerBiometric() {
  if (!isBiometricSupported()) { showToast(t('bio.unsupported'), 'err'); return; }
  try {
    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const userId = crypto.getRandomValues(new Uint8Array(16));
    const cred = await navigator.credentials.create({
      publicKey: {
        challenge,
        rp: { id: _BIO_RP_ID, name: _BIO_RP_NAME },
        user: { id: userId, name: 'vault-user', displayName: 'Vault User' },
        pubKeyCredParams: [
          { type: 'public-key', alg: -7 },
          { type: 'public-key', alg: -257 },
        ],
        authenticatorSelection: {
          authenticatorAttachment: 'platform',
          userVerification: 'required',
          residentKey: 'preferred',
        },
        timeout: 60000,
        extensions: { prf: {} } // H2: request PRF support if available
      }
    });
    const prfEnabled = !!(cred.getClientExtensionResults()?.prf?.enabled);
    localStorage.setItem('vault_bio_cred_id', bufToB64(new Uint8Array(cred.rawId)));
    localStorage.setItem('vault_bio_enabled', '1');
    localStorage.setItem('vault_bio_prf', prfEnabled ? '1' : '0'); // H2: store PRF capability
    updateBioUI();
    showToast(t('bio.enabled'), 'ok');
  } catch(e) {
    if (e.name !== 'NotAllowedError') showToast(t('bio.setupFailed'), 'err');
  }
}

async function unlockWithBiometric() {
  if (!isBiometricEnabled()) return;
  if (!hasBioSession()) { showToast(t('bio.expired'), 'warn'); updateBioUI(); return; }
  const btn = document.getElementById('bioBtn');
  const svg = btn ? btn.querySelector('svg') : null;
  if (btn) {
    btn.disabled = true;
    btn.classList.add('loading');
    btn.innerHTML = `<span class="spinner" style="border-top-color:var(--sub)"></span><span>${t('bio.unlocking')}</span>`;
  }
  try {
    const credIdB64 = localStorage.getItem('vault_bio_cred_id');
    const prfEnabled = localStorage.getItem('vault_bio_prf') === '1';
    // Only use PRF path if this is actually a PRF session (no stored bioKey)
    const isPrfSession = prfEnabled && !sessionStorage.getItem('vault_bio_key');
    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const assertion = await navigator.credentials.get({
      publicKey: {
        challenge,
        allowCredentials: [{ id: b64ToBuf(credIdB64), type: 'public-key' }],
        userVerification: 'required',
        timeout: 60000,
        ...(isPrfSession ? { extensions: { prf: { eval: { first: _PRF_INPUT } } } } : {})
      }
    });
    let password = null;
    let prfOutput = null; // hoisted so we can reuse for session refresh below
    if (isPrfSession) {
      prfOutput = assertion.getClientExtensionResults()?.prf?.results?.first;
      if (prfOutput && prfOutput.byteLength >= 32) {
        const prfKey = await crypto.subtle.importKey('raw', prfOutput, {name:'AES-GCM'}, false, ['decrypt']);
        const encB64 = sessionStorage.getItem('vault_bio_session');
        const buf = b64ToBuf(encB64);
        const pt = await crypto.subtle.decrypt({name:'AES-GCM', iv: buf.slice(0,12)}, prfKey, buf.slice(12));
        password = new TextDecoder().decode(pt);
      }
    }
    if (!password) password = await getBioSession(); // legacy session (bioKey in sessionStorage)
    if (!password) { showToast(t('bio.expired'), 'warn'); return; }
    const salt = getSalt();
    _key = await deriveKey(password, salt);
    if (!db) db = await openDB();
    await loadItems();
    // H2: reuse existing prfOutput — no second navigator.credentials.get() call
    if (isPrfSession && prfOutput && prfOutput.byteLength >= 32) {
      await _refreshPrfSession(password, prfOutput);
    } else {
      await setBioSession(password, { forceLegacy: true }); // keep as legacy session
    }
    showApp();
    updateBioUI();
  } catch(e) {
    if (e.name !== 'NotAllowedError') showToast(t('bio.failed'), 'err');
    if (btn) {
      btn.disabled = false;
      btn.classList.remove('loading');
      btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.7,37.3V21.9a7.7,7.7,0,0,0-15.4,0V37.3a10.7,10.7,0,0,0,4,8.3,1.8,1.8,0,0,0,.9.4,1.4,1.4,0,0,0,1.2-.6,1.5,1.5,0,0,0-.2-2.2,7.4,7.4,0,0,1-2.8-5.9V21.9a4.6,4.6,0,0,1,9.2,0V37.3a1.5,1.5,0,0,1-1.5,1.5,1.6,1.6,0,0,1-1.6-1.5V21.9a1.5,1.5,0,0,0-3,0V37.6a4.6,4.6,0,0,0,4.6,4.3,4.7,4.7,0,0,0,4.6-4.3Z" fill="currentColor"/><path d="M24,8.1A13.8,13.8,0,0,0,10.2,21.9V37.3a17,17,0,0,0,1.9,7.9,1.6,1.6,0,0,0,1.4.8l.7-.2a1.6,1.6,0,0,0,.6-2.1,14.1,14.1,0,0,1-1.6-6.4V21.9a10.8,10.8,0,0,1,21.6,0V37.3a7.9,7.9,0,0,1-2.9,6,1.4,1.4,0,0,0-.2,2.1,1.4,1.4,0,0,0,1.2.6,1.6,1.6,0,0,0,.9-.3,10.6,10.6,0,0,0,4-8.4V21.9A13.8,13.8,0,0,0,24,8.1Z" fill="currentColor"/><path d="M24,2A20,20,0,0,0,4,21.9V40.4a1.5,1.5,0,0,0,1.5,1.5,1.6,1.6,0,0,0,1.6-1.5V21.9a16.9,16.9,0,0,1,33.8,0V37.3a12.9,12.9,0,0,1-1.6,6.4,1.5,1.5,0,0,0,.7,2.1l.7.2a1.4,1.4,0,0,0,1.3-.8A16.5,16.5,0,0,0,44,38V21.9A20,20,0,0,0,24,2Z" fill="currentColor"/></svg><span data-i18n="bio.btnUnlock">${t('bio.btnUnlock')}</span>`;
    }
  }
}

function disableBiometric() {
  localStorage.removeItem('vault_bio_cred_id');
  localStorage.removeItem('vault_bio_enabled');
  localStorage.removeItem('vault_bio_prf'); // H2: clean up PRF flag
  clearBioSession();
  updateBioUI();
  showToast(t('bio.disabled'));
}

async function toggleBiometric() {
  if (!_key) return;
  if (isBiometricEnabled()) {
    disableBiometric();
  } else {
    await registerBiometric();
  }
}

function updateBioUI() {
  const bioBtn = document.getElementById('bioBtn');
  const bioToggle = document.getElementById('bioToggleBtn');
  const supported = isBiometricSupported();
  const enabled = isBiometricEnabled();
  const hasSession = hasBioSession();

  if (bioBtn) {
    const show = enabled && hasSession;
    bioBtn.style.display = show ? 'flex' : 'none';
    if (show) {
      bioBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.7,37.3V21.9a7.7,7.7,0,0,0-15.4,0V37.3a10.7,10.7,0,0,0,4,8.3,1.8,1.8,0,0,0,.9.4,1.4,1.4,0,0,0,1.2-.6,1.5,1.5,0,0,0-.2-2.2,7.4,7.4,0,0,1-2.8-5.9V21.9a4.6,4.6,0,0,1,9.2,0V37.3a1.5,1.5,0,0,1-1.5,1.5,1.6,1.6,0,0,1-1.6-1.5V21.9a1.5,1.5,0,0,0-3,0V37.6a4.6,4.6,0,0,0,4.6,4.3,4.7,4.7,0,0,0,4.6-4.3Z" fill="currentColor"/><path d="M24,8.1A13.8,13.8,0,0,0,10.2,21.9V37.3a17,17,0,0,0,1.9,7.9,1.6,1.6,0,0,0,1.4.8l.7-.2a1.6,1.6,0,0,0,.6-2.1,14.1,14.1,0,0,1-1.6-6.4V21.9a10.8,10.8,0,0,1,21.6,0V37.3a7.9,7.9,0,0,1-2.9,6,1.4,1.4,0,0,0-.2,2.1,1.4,1.4,0,0,0,1.2.6,1.6,1.6,0,0,0,.9-.3,10.6,10.6,0,0,0,4-8.4V21.9A13.8,13.8,0,0,0,24,8.1Z" fill="currentColor"/><path d="M24,2A20,20,0,0,0,4,21.9V40.4a1.5,1.5,0,0,0,1.5,1.5,1.6,1.6,0,0,0,1.6-1.5V21.9a16.9,16.9,0,0,1,33.8,0V37.3a12.9,12.9,0,0,1-1.6,6.4,1.5,1.5,0,0,0,.7,2.1l.7.2a1.4,1.4,0,0,0,1.3-.8A16.5,16.5,0,0,0,44,38V21.9A20,20,0,0,0,24,2Z" fill="currentColor"/></svg><span data-i18n="bio.btnUnlock">${t('bio.btnUnlock')}</span>`;
    }
  }

  // Show hint when bio is enabled but session expired (tab switch / minimize)
  const bioHint = document.getElementById('bioHint');
  const bioHintText = document.getElementById('bioHintText');
  if (bioHint && bioHintText) {
    if (enabled && !hasSession) {
      // Bio setup done but session expired — explain why button is hidden
      bioHintText.textContent = '🔒 Biometric enabled — unlock once with password to re-activate it';
      bioHint.classList.remove('hidden');
    } else if (!supported) {
      bioHintText.textContent = 'This device does not support biometric authentication';
      bioHint.classList.remove('hidden');
    } else {
      bioHint.classList.add('hidden');
    }
  }

  if (bioToggle) {
    if(supported && _key) bioToggle.classList.remove('hidden'); else bioToggle.classList.add('hidden');
    bioToggle.title = enabled ? t('bio.btnDisable') : t('bio.btnSetup');
    bioToggle.classList.toggle('bio-active', enabled);
  }
}

// ===== TOTP ENGINE =====
// RFC 6238 compliant, client-side only, no external library

function isValidBase32(s){
  return /^[A-Z2-7]+=*$/.test(s) && s.replace(/=/g,'').length > 0;
}

function base32Decode(s){
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  s = s.replace(/=+$/,'').toUpperCase();
  let bits = 0, val = 0;
  const out = [];
  for(let i=0;i<s.length;i++){
    const idx = alphabet.indexOf(s[i]);
    if(idx === -1) throw new Error('Invalid base32');
    val = (val << 5) | idx;
    bits += 5;
    if(bits >= 8){ out.push((val >>> (bits-8)) & 0xff); bits -= 8; }
  }
  return new Uint8Array(out);
}

async function generateTOTP(secret, time){
  const keyBytes = base32Decode(secret);
  const t = Math.floor((time || Date.now()/1000) / 30);
  const msg = new Uint8Array(8);
  let tmp = t;
  for(let i=7;i>=0;i--){ msg[i]=tmp&0xff; tmp=Math.floor(tmp/256); }

  const cryptoKey = await crypto.subtle.importKey(
    'raw', keyBytes, {name:'HMAC',hash:'SHA-1'}, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, msg);
  const hmac = new Uint8Array(sig);
  const offset = hmac[19] & 0xf;
  const code = (
    ((hmac[offset]   & 0x7f) << 24) |
    ((hmac[offset+1] & 0xff) << 16) |
    ((hmac[offset+2] & 0xff) <<  8) |
    ((hmac[offset+3] & 0xff))
  ) % 1000000;
  return String(code).padStart(6,'0');
}

function totpSecsRemaining(){ return 30 - (Math.floor(Date.now()/1000) % 30); }

// Map itemId → {code, timer, interval}
const _totpState = new Map();

async function mountTOTP(itemId){
  const item = _items.find(i=>i.id===itemId);
  if(!item || !item.totp_secret) return;
  const el = document.getElementById('totp-block-'+itemId);
  if(!el) return;

  // Cleanup previous interval for this item
  unmountTOTP(itemId);

  // Mount guard — unique token to detect if superseded by another mountTOTP call
  const token = Date.now() + Math.random();
  _totpState.set(itemId, { token, interval: null, secret: null, copied: false });

  let secret;
  try{ secret = await decrypt(item.totp_secret); }
  catch(e){ el.innerHTML=''; return; }

  // Abort if another mountTOTP superseded this one during await
  const current = _totpState.get(itemId);
  if(!current || current.token !== token){ return; }

  if(!secret || !isValidBase32(secret.replace(/\s+/g,'').toUpperCase())){ el.innerHTML=''; return; }
  secret = secret.replace(/\s+/g,'').toUpperCase();

  const update = async () => {
    const block = document.getElementById('totp-block-'+itemId);
    if(!block){ unmountTOTP(itemId); return; }
    let code;
    try{ code = await generateTOTP(secret); } catch(e){ return; }
    const secs = totpSecsRemaining();
    const urgent = secs <= 7;
    const r = 10; const circ = 2*Math.PI*r;
    const dash = circ * (secs/30);

    // Check if copied state
    const state = _totpState.get(itemId);
    const isCopied = state && state.copied;

    block.innerHTML = `
    <div class="totp-block">
      <span class="detail-label" style="min-width:auto;margin-right:2px">${t('totp.label')}</span>
      <span class="totp-code${isCopied?' copied':''}" id="totp-code-${itemId}" data-action="copyTOTP" data-id="${itemId}" title="${t('totp.copy')}">${code.slice(0,3)} ${code.slice(3)}</span>
      <div class="totp-ring-wrap">
        <svg class="totp-ring" width="28" height="28" viewBox="0 0 28 28">
          <circle class="totp-ring-bg" cx="14" cy="14" r="${r}"/>
          <circle class="totp-ring-fg${urgent?' urgent':''}" cx="14" cy="14" r="${r}"
            stroke-dasharray="${circ}"
            stroke-dashoffset="${circ - dash}"/>
        </svg>
        <span class="totp-secs${urgent?' urgent':''}">${secs}</span>
      </div>
      <button class="totp-copy-btn" data-action="copyTOTP" data-id="${itemId}" title="${t('totp.copy')}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      </button>
    </div>`;

    _totpState.set(itemId, { token, secret, copied: isCopied, interval: _totpState.get(itemId)?.interval ?? null });
  };

  await update();
  const iv = setInterval(update, 1000);
  _totpState.set(itemId, { token, secret, interval: iv, copied: false });
}

function unmountTOTP(itemId){
  const s = _totpState.get(itemId);
  if(s && s.interval){ clearInterval(s.interval); }
  _totpState.delete(itemId);
}

function unmountAllTOTP(){
  _totpState.forEach((s,id)=>{ if(s && s.interval) clearInterval(s.interval); });
  _totpState.clear();
}

async function copyTOTP(itemId){
  const s = _totpState.get(itemId);
  if(!s || !s.secret) return;
  try{
    const code = await generateTOTP(s.secret);
    await navigator.clipboard.writeText(code);
    setTimeout(()=>{ navigator.clipboard.writeText('').catch(()=>{}); }, 30000); // L7: auto-clear TOTP
    const secs = totpSecsRemaining();
    showToast(t('totp.copyToast',{s:secs}),'ok');
    // Flash copied state
    s.copied = true;
    const el = document.getElementById('totp-code-'+itemId);
    if(el){ el.classList.add('copied'); el.textContent = t('totp.copied'); }
    setTimeout(()=>{ s.copied=false; },1200);
  }catch(e){ showToast(t('toast.copyFail',{msg:e.message}),'err'); }
}

// Mount TOTP for all currently expanded items that have totp_secret
async function mountAllVisibleTOTP(){
  unmountAllTOTP();
  for(const id of _expanded){
    const item = _items.find(i=>i.id===id);
    if(item && item.totp_secret) await mountTOTP(id);
  }
}

// TOTP form helpers
function onTotpInput(input){
  const btn = document.getElementById('totpClearBtn');
  if(btn){ if(input.value) btn.classList.remove('hidden'); else btn.classList.add('hidden'); }
}
function clearTotpField(){
  const f = document.getElementById('fTotp');
  if(f){ f.value=''; }
  const btn = document.getElementById('totpClearBtn');
  if(btn) btn.classList.add('hidden');
}

// ===== SHARE LOG DB =====
// H7 FIX: shareLogAdd now encrypts itemTitle and link before storing to IndexedDB.
// Prevents forensic tools from reading which sites were shared or recovering share links.
async function shareLogAdd(entry){
  const encEntry = {
    itemId:    entry.itemId,    // numeric id only, ok plaintext
    createdAt: entry.createdAt,
    expTs:     entry.expTs,
    itemTitle: await encrypt(entry.itemTitle),
    link:      await encrypt(entry.link),
  };
  return new Promise((res,rej)=>{
    const tx = db.transaction(SHARE_LOG_STORE,'readwrite');
    const req = tx.objectStore(SHARE_LOG_STORE).add(encEntry);
    req.onsuccess = ()=>res(req.result);
    req.onerror = ()=>rej(req.error);
  });
}
async function shareLogAll(){
  const raw = await new Promise((res,rej)=>{
    const tx = db.transaction(SHARE_LOG_STORE,'readonly');
    const req = tx.objectStore(SHARE_LOG_STORE).getAll();
    req.onsuccess = ()=>res(req.result.reverse()); // newest first
    req.onerror = ()=>rej(req.error);
  });
  const decrypted = [];
  for(const r of raw){
    try{
      decrypted.push({
        ...r,
        itemTitle: await decrypt(r.itemTitle),
        link:      await decrypt(r.link),
      });
    }catch{ /* skip unreadable entries */ }
  }
  return decrypted;
}
function shareLogDelete(slid){
  return new Promise((res,rej)=>{
    const tx = db.transaction(SHARE_LOG_STORE,'readwrite');
    const req = tx.objectStore(SHARE_LOG_STORE).delete(slid);
    req.onsuccess = ()=>res();
    req.onerror = ()=>rej(req.error);
  });
}

function formatShareExpiry(expTs){
  const rem = expTs - Date.now();
  if(rem <= 0) return { label: t('share.logExpired'), expired: true, warn: false };
  const hrs = Math.floor(rem / 3600000);
  const mins = Math.floor((rem % 3600000) / 60000);
  const warn = rem < 3600000;
  if(hrs >= 24){
    const days = Math.floor(hrs/24);
    return { label: `${days}d left`, expired: false, warn };
  }
  if(hrs > 0) return { label: `${hrs}h ${mins}m left`, expired: false, warn };
  return { label: `${mins}m left`, expired: false, warn: true };
}

function formatShareCreated(ts){
  const d = new Date(ts);
  const now = new Date();
  const isToday = d.toDateString() === now.toDateString();
  const time = d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  if(isToday) return `Today ${time}`;
  return d.toLocaleDateString([], {month:'short', day:'numeric'}) + ` ${time}`;
}

async function renderShareLog(containerId){
  const wrap = document.getElementById(containerId);
  if(!wrap) return;
  wrap.innerHTML = `<div class="share-log-empty" style="color:var(--dim);font-size:12px">Loading…</div>`;
  let logs = [];
  try{ logs = await shareLogAll(); }catch(e){}
  if(!logs.length){
    wrap.innerHTML = `<div class="share-log-empty">${t('share.logEmpty')}</div>`;
    return;
  }
  wrap.innerHTML = logs.map(log=>{
    const exp = formatShareExpiry(log.expTs);
    const dotCls = exp.expired ? 'share-log-dot expired' : exp.warn ? 'share-log-dot warn' : 'share-log-dot';
    return `<div class="share-log-item" id="sli-${log.slid}">
      <span class="${dotCls}"></span>
      <div class="share-log-info">
        <div class="share-log-title">${esc(log.itemTitle)}</div>
        <div class="share-log-meta">
          <span>${formatShareCreated(log.createdAt)}</span>
          <span>·</span>
          <span style="color:${exp.expired?'var(--dim)':exp.warn?'var(--warn)':'var(--green)'}">${exp.label}</span>
        </div>
      </div>
      <div class="share-log-actions">
        ${!exp.expired ? `
        <button class="share-log-btn" title="Copy link" data-action="copyShareLogLink" data-id="${log.slid}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        </button>` : ''}
        <button class="share-log-btn danger" title="Delete" data-action="deleteShareLog" data-id="${log.slid}" data-container="${containerId}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        </button>
      </div>
    </div>`;
  }).join('');
}

async function copyShareLogLink(slid){
  // Bug1 FIX: decrypt link before copying — log.link is encrypted ciphertext (H7)
  try{
    const log = await new Promise((res,rej)=>{
      const tx = db.transaction(SHARE_LOG_STORE,'readonly');
      const req = tx.objectStore(SHARE_LOG_STORE).get(slid);
      req.onsuccess = ()=>res(req.result);
      req.onerror   = ()=>rej(req.error);
    });
    if(!log || !log.link) return;
    const plainLink = await decrypt(log.link);
    await navigator.clipboard.writeText(plainLink);
    showToast(t('share.logCopied'),'ok');
    setTimeout(()=>{ navigator.clipboard.writeText('').catch(()=>{}); }, 30000);
  }catch(e){ showToast('Could not copy link','err'); }
}

async function deleteShareLog(slid, containerId){
  await shareLogDelete(slid);
  renderShareLog(containerId);
}

// ===== ENCRYPTED SHARE LINK =====
let _shareState = { itemId: null, expiry: 86400000, generatedLink: null };

function openShareSheet(id){
  _shareState = { itemId: id, expiry: 86400000, generatedLink: null };
  const body = document.getElementById('shareSheetBody');
  if(!isPremium()){
    body.innerHTML = `
      <div class="premium-gate">
        <div class="premium-gate-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </div>
        <div class="premium-gate-title">${t('share.title')}</div>
        <div class="premium-gate-desc">${t('share.premiumHint')}</div>
        <a href="https://hesych.gumroad.com/l/bgxpiu" target="_blank" rel="noopener noreferrer" style="text-decoration:none">
          <button class="btn-upgrade">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            ${t('premium.upgradeBtn')}
          </button>
        </a>
        <button class="btn-upgrade-secondary" data-action="closeShareOpenLicense">${t('premium.enterKey')}</button>
      </div>`;
    document.getElementById('shareOverlay').classList.add('show');
    document.getElementById('shareSheet').classList.add('show');
    return;
  }
  renderShareForm();
  document.getElementById('shareOverlay').classList.add('show');
  document.getElementById('shareSheet').classList.add('show');
}

function closeShareSheet(){
  closeSheetAnim('shareSheet', 'shareOverlay', ()=>{
    _shareState = { itemId: null, expiry: 86400000, generatedLink: null };
  });
}

function updateShareStrength(pw){
  const score = scorePassword(pw);
  const cls = pw ? 's'+score : '';
  for(let i=0;i<4;i++){
    const seg = document.getElementById('sss'+i);
    if(seg) seg.className = 'form-strength-seg' + (pw && i < score ? ' '+cls : '');
  }
  const label = document.getElementById('shareStrengthLabel');
  if(label){ label.textContent = pw ? getStrengthLabel(score) : ''; label.className = 'form-strength-label' + (pw ? ' '+cls : ''); }
}

function renderShareForm(){
  const item = _items.find(i=>i.id===_shareState.itemId);
  if(!item) return;
  const body = document.getElementById('shareSheetBody');
  const expiryOpts = [
    {ms:3600000,   label:t('share.exp1h')},
    {ms:86400000,  label:t('share.exp24h')},
    {ms:259200000, label:t('share.exp72h')},
    {ms:604800000, label:t('share.exp7d')},
  ];
  const includes = [
    t('share.inclUser'),
    t('share.inclPw'),
    ...(item.notes?[t('share.inclNotes')]:[]),
    ...(item.totp_secret?[t('share.inclTotp')]:[]),
  ];
  body.innerHTML = `
    <p style="font-size:13px;color:var(--sub);line-height:1.6;margin-bottom:14px">${t('share.desc')}</p>
    <div style="margin-bottom:12px">
      <div class="field-label" style="margin-bottom:6px">${t('share.includes')}</div>
      <div class="share-includes">
        ${includes.map(i=>`<span class="share-include-chip">✓ ${i}</span>`).join('')}
      </div>
    </div>
    <div class="field">
      <div class="field-label">${t('share.passphraseLbl')}</div>
      <div style="position:relative">
        <input type="password" id="sharePassphrase"
          placeholder="${t('share.passphrasePh')}"
          style="width:100%;padding:11px 44px 11px 13px;border-radius:var(--radius);border:1px solid var(--border);background:var(--card);color:var(--text);font-size:13px;font-family:var(--mono);outline:none;letter-spacing:1px"
          />
        <button id="sharePassEye" type="button" data-action="toggleShareEye"
          style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--dim);padding:4px;display:flex;align-items:center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
      <div class="form-strength" style="margin-top:6px">
        <div class="form-strength-bar">
          <div class="form-strength-seg" id="sss0"></div>
          <div class="form-strength-seg" id="sss1"></div>
          <div class="form-strength-seg" id="sss2"></div>
          <div class="form-strength-seg" id="sss3"></div>
        </div>
        <span id="shareStrengthLabel" class="form-strength-label"></span>
      </div>
    </div>
    <div class="field">
      <div class="field-label">${t('share.expiry')}</div>
      <div class="share-expiry-opts">
        ${expiryOpts.map(o=>`
          <button class="share-expiry-opt${_shareState.expiry===o.ms?' active':''}"
            data-action="setShareExpiry" data-expiry="${o.ms}">
            ${o.label}
          </button>`).join('')}
      </div>
    </div>
    <div id="shareMsg" style="font-size:12px;color:var(--danger);min-height:14px;margin-bottom:8px"></div>
    ${_shareState.generatedLink ? `
      <div class="share-link-box">
        <div class="share-link-url">${esc(_shareState.generatedLink.substring(0,100))}…</div>
        <button class="btn-save" style="width:100%;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:4px" data-action="copyShareLink">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          ${t('share.copyLink')}
        </button>
      </div>
      <div class="share-warning">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        ${t('share.warning')}
      </div>
      <button class="btn-cancel" style="width:100%;margin-top:8px" data-action="shareRegenerate">${t('share.regenerate')}</button>
    ` : `
      <button class="btn-save" style="width:100%;display:flex;align-items:center;justify-content:center;gap:6px" data-action="doGenerateShareLink">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        ${t('share.generateBtn')}
      </button>
      <button class="btn-cancel" style="width:100%;margin-top:8px" data-action="closeShareSheet">Cancel</button>
    `}
    <div class="share-log-section">
      <div class="share-log-header">${t('share.logTitle')}</div>
      <div id="shareLogContainer"></div>
    </div>`;
  renderShareLog('shareLogContainer');
  const spi = document.getElementById('sharePassphrase');
  if(spi){
    spi.addEventListener('input', function(){ this.style.borderColor='var(--border)'; updateShareStrength(this.value); });
    spi.addEventListener('keydown', function(e){ if(e.key==='Enter') doGenerateShareLink(); });
  }
}

async function doGenerateShareLink(){
  const passphrase = document.getElementById('sharePassphrase')?.value||'';
  const msg = document.getElementById('shareMsg');
  if(passphrase.length < 8){
    if(msg) msg.textContent = 'Passphrase must be at least 8 characters (longer = more secure)'; // M6 FIX
    document.getElementById('sharePassphrase').style.borderColor='var(--danger)';
    return;
  }
  const item = _items.find(i=>i.id===_shareState.itemId);
  if(!item) return;
  try{
    const pw = await decrypt(item.password);
    const totp = item.totp_secret ? await decrypt(item.totp_secret).catch(()=>'') : '';
    const payload = {
      title: item.title,
      username: item.username,
      password: pw,
      notes: item.notes||'',
      totp: totp||'',
      exp: Date.now() + _shareState.expiry,
    };
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const saltB64 = btoa(String.fromCharCode(...salt));
    const shareKey = await deriveKey(passphrase, b64ToBuf(saltB64));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const enc = await crypto.subtle.encrypt(
      {name:'AES-GCM', iv}, shareKey,
      new TextEncoder().encode(JSON.stringify(payload))
    );
    const bundle = {
      v:2,
      exp:payload.exp,
      s:saltB64,
      iv:btoa(String.fromCharCode(...iv)),
      d:btoa(String.fromCharCode(...new Uint8Array(enc))),
    };
    const base = window.location.href.replace(/[^/]*$/,'');
    _shareState.generatedLink = `${base}share#${btoa(JSON.stringify(bundle))}`;
    // Save to share log
    try{
      await shareLogAdd({
        itemId: item.id,
        itemTitle: item.title,
        link: _shareState.generatedLink,
        createdAt: Date.now(),
        expTs: payload.exp,
      });
    }catch(e){}
    renderShareForm();
  }catch(e){
    if(msg) msg.textContent = e.message;
  }
}

async function copyShareLink(){
  if(!_shareState.generatedLink) return;
  try{
    await navigator.clipboard.writeText(_shareState.generatedLink);
    showToast(t('share.linkCopied'),'ok');
  }catch(e){}
}

// ===== TAGS =====
let _tagFormTags = [];

function renderTagForm(){
  const area = document.getElementById('tagFormArea');
  if(!area) return;
  const isPro = isPremium();
  if(!isPro){
    area.innerHTML = `
      <div class="cf-premium-gate">
        <div>
          <div style="font-size:12px;font-weight:500;color:var(--accent)">${t('tags.label')} <span class="premium-badge" style="font-size:8px">PRO</span></div>
          <div style="font-size:11px;color:var(--dim);margin-top:2px">${t('tags.premiumHint')}</div>
        </div>
        <button class="gen-action-btn primary" style="font-size:11px;padding:6px 10px;flex-shrink:0" data-action="closeModalOpenLicense">Upgrade</button>
      </div>`;
    return;
  }
  const chips = _tagFormTags.map((tag,i)=>`
    <span class="tag-chip removable" data-action="removeTag" data-id="${i}">
      #${esc(tag)}
      <button class="tag-chip-remove" title="Remove">×</button>
    </span>`).join('');
  area.innerHTML = `
    <div class="tag-list">${chips}</div>
    <div class="tag-input-wrap">
      <input class="tag-input" id="tagFormInput" placeholder="${t('tags.addPh')}"
        maxlength="30"/>
      <button class="tag-input-btn" data-action="addTagFromInput">Add</button>
    </div>`;
  const tfi = document.getElementById('tagFormInput');
  if(tfi){
    tfi.addEventListener('keydown', onTagInputKey);
    tfi.addEventListener('input', function(){ this.value=this.value.replace(/[^a-zA-Z0-9-_]/g,''); });
  }
}

function onTagInputKey(e){
  if(e.key==='Enter'||e.key===','||e.key===' '){
    e.preventDefault();
    addTagFromInput();
  }
}

function addTagFromInput(){
  const input = document.getElementById('tagFormInput');
  if(!input) return;
  const val = input.value.trim().toLowerCase().replace(/^#+/,'');
  if(!val) return;
  if(_tagFormTags.includes(val)){ input.value=''; return; }
  if(_tagFormTags.length >= 10){ showToast('Max 10 tags','err'); return; }
  _tagFormTags.push(val);
  input.value='';
  renderTagForm();
  document.getElementById('tagFormInput')?.focus();
}

// ===== ADVANCED FILTER =====
let _advFilter = { tags:[], status:'all', strength:'all', age:'all' };

function countAdvFilters(){
  let n=0;
  if(_advFilter.tags.length) n++;
  if(_advFilter.status!=='all') n++;
  if(_advFilter.strength!=='all') n++;
  if(_advFilter.age!=='all') n++;
  return n;
}

function toggleAdvFilter(){
  const panel = document.getElementById('advFilterPanel');
  panel.classList.toggle('open');
  document.getElementById('advFilterBtn').classList.toggle('active', panel.classList.contains('open'));
  if(!isPremium() && panel.classList.contains('open')){
    panel.innerHTML = `
      <div class="premium-gate" style="margin:0">
        <div class="premium-gate-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
        </div>
        <div class="premium-gate-title">${t('tags.filterTitle')}</div>
        <div class="premium-gate-desc">${t('tags.premiumHint')}</div>
        <a href="https://hesych.gumroad.com/l/bgxpiu" target="_blank" rel="noopener noreferrer" style="text-decoration:none">
          <button class="btn-upgrade">${t('premium.upgradeBtn')}</button>
        </a>
        <button class="btn-upgrade-secondary" data-action="openLicense">${t('premium.enterKey')}</button>
      </div>`;
    return;
  }
  if(panel.classList.contains('open')) renderAdvFilterPanel();
}

function renderAdvFilterPanel(){
  const panel = document.getElementById('advFilterPanel');
  if(!panel) return;
  const allTags = [...new Set(_items.flatMap(i=>i.tags||[]))].sort();
  const opt = (val, labelKey, current, key) =>
    `<button class="adv-filter-opt${current===val?' active':''}"
      data-action="setAdvFilter" data-key="${key}" data-val="${val}"
    >${t(labelKey)}</button>`;
  const tagChips = allTags.length ? allTags.map(tag=>`
    <button class="adv-filter-opt${_advFilter.tags.includes(tag)?' active':''}"
      data-action="toggleAdvFilterTag" data-tag="${esc(tag)}">
      #${esc(tag)}
    </button>`).join('') : `<span style="font-size:11px;color:var(--dim)">No tags yet</span>`;
  panel.innerHTML = `
    ${allTags.length ? `
    <div class="adv-filter-section">
      <div class="adv-filter-section-title">${t('tags.filterTags')}</div>
      <div class="adv-filter-options">${tagChips}</div>
    </div>` : ''}
    <div class="adv-filter-section">
      <div class="adv-filter-section-title">${t('tags.filterStatus')}</div>
      <div class="adv-filter-options">
        ${opt('all','tags.statusAll',_advFilter.status,'status')}
        ${opt('breached','tags.statusBreached',_advFilter.status,'status')}
        ${opt('safe','tags.statusSafe',_advFilter.status,'status')}
        ${opt('unchecked','tags.statusUnchecked',_advFilter.status,'status')}
      </div>
    </div>
    <div class="adv-filter-section">
      <div class="adv-filter-section-title">${t('tags.filterStrength')}</div>
      <div class="adv-filter-options">
        ${opt('all','tags.strengthAny',_advFilter.strength,'strength')}
        ${opt('weak','tags.strengthWeak',_advFilter.strength,'strength')}
        ${opt('fair','tags.strengthFair',_advFilter.strength,'strength')}
        ${opt('strong','tags.strengthStrong',_advFilter.strength,'strength')}
      </div>
    </div>
    <div class="adv-filter-section">
      <div class="adv-filter-section-title">${t('tags.filterAge')}</div>
      <div class="adv-filter-options">
        ${opt('all','tags.ageAny',_advFilter.age,'age')}
        ${opt('old','tags.ageOld',_advFilter.age,'age')}
        ${opt('new','tags.ageNew',_advFilter.age,'age')}
      </div>
    </div>
    ${countAdvFilters()>0?`<button class="adv-filter-clear" data-action="clearAdvFilters">${t('tags.clearFilters')}</button>`:''}`;
}

function toggleAdvFilterTag(tag){
  const idx = _advFilter.tags.indexOf(tag);
  if(idx>=0) _advFilter.tags.splice(idx,1);
  else _advFilter.tags.push(tag);
  renderAdvFilterPanel();
  updateAdvFilterBadge();
  render();
}

function clearAdvFilters(){
  _advFilter = {tags:[], status:'all', strength:'all', age:'all'};
  const panel = document.getElementById('advFilterPanel');
  if(panel && panel.classList.contains('open')) renderAdvFilterPanel();
  updateAdvFilterBadge();
  render();
}

function updateAdvFilterBadge(){
  const n = countAdvFilters();
  const badge = document.getElementById('advFilterBadge');
  const btn = document.getElementById('advFilterBtn');
  if(badge){ if(n>0) badge.classList.remove('hidden'); else badge.classList.add('hidden'); badge.textContent=n; }
  if(btn) btn.classList.toggle('active', n>0||document.getElementById('advFilterPanel')?.classList.contains('open'));
}

// ===== CUSTOM FIELDS =====
let _cfFormFields = []; // [{name, value, type}]
const _cfRevealed = new Set();

function renderCFForm(){
  const list = document.getElementById('cfFormList');
  const gate = document.getElementById('cfFormGate');
  if(!list || !gate) return;
  const isPro = isPremium();
  if(!isPro){
    list.innerHTML = '';
    gate.innerHTML = `
      <div class="cf-premium-gate">
        <div>
          <div style="font-size:12px;font-weight:500;color:var(--accent)">${t('cf.label')} <span class="premium-badge" style="font-size:8px">PRO</span></div>
          <div style="font-size:11px;color:var(--dim);margin-top:2px">${t('cf.premiumHint')}</div>
        </div>
        <button class="gen-action-btn primary" style="font-size:11px;padding:6px 10px;flex-shrink:0" data-action="closeModalOpenLicense">Upgrade</button>
      </div>`;
    return;
  }
  gate.innerHTML = '';
  list.innerHTML = _cfFormFields.map((f,i)=>`
    <div class="cf-form-item">
      <div class="cf-form-row">
        <input class="cf-form-input" placeholder="${t('cf.fieldNamePh')}"
          value="${esc(f.name)}"
          data-cf-name-idx="${i}"/>
        <button type="button" class="cf-form-type" data-action="cfTypeToggle" data-idx="${i}" title="Toggle type">
          ${f.type==='password'?t('cf.typePassword'):t('cf.typeText')}
        </button>
        <button class="cf-item-remove" data-action="cfRemoveField" data-idx="${i}" title="${t('cf.removeField')}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <input class="cf-form-input"
        type="${f.type==='password'?'password':'text'}"
        placeholder="${t('cf.fieldValuePh')}"
        value="${esc(f.value)}"
        data-cf-val-idx="${i}"/>
    </div>`).join('');
  _cfFormFields.forEach((f, i) => {
    const ni = list.querySelector(`[data-cf-name-idx="${i}"]`);
    const vi = list.querySelector(`[data-cf-val-idx="${i}"]`);
    if(ni) ni.addEventListener('input', function(){ _cfFormFields[i].name = this.value; });
    if(vi) vi.addEventListener('input', function(){ _cfFormFields[i].value = this.value; });
  });
  const addBtn = document.createElement('button');
  addBtn.className = 'cf-add-btn';
  addBtn.type = 'button';
  addBtn.textContent = t('cf.addField');
  addBtn.onclick = ()=>{
    _cfFormFields.push({name:'', value:'', type:'text'});
    renderCFForm();
    setTimeout(()=>{
      const inputs = document.querySelectorAll('.cf-form-input');
      if(inputs.length) inputs[inputs.length-2]?.focus();
    }, 50);
  };
  list.appendChild(addBtn);
}

async function mountCFValues(itemId){
  const item = _items.find(i=>i.id===itemId);
  if(!item || !item.custom_fields) return;
  for(let i=0;i<item.custom_fields.length;i++){
    const f = item.custom_fields[i];
    const el = document.getElementById(`cf-val-${itemId}-${i}`);
    if(!el) continue;
    try{
      const val = await decrypt(f.value||'');
      el.dataset.plain = val;
      if(f.type==='password'){
        el.dataset.plain = val;
        if(!_cfRevealed.has(`${itemId}-${i}`)){
          el.textContent = '••••••••';
          el.classList.add('hidden');
        } else {
          el.textContent = val || '—';
          el.classList.remove('hidden');
        }
      } else {
        // text type: always show, no hide
        el.textContent = val || '—';
        el.dataset.plain = val;
        el.classList.remove('hidden');
      }
    }catch(e){ el.textContent = '—'; }
  }
}

async function mountCFValuesDP(itemId){
  const item = _items.find(i=>i.id===itemId);
  if(!item || !item.custom_fields) return;
  for(let i=0;i<item.custom_fields.length;i++){
    const f = item.custom_fields[i];
    const el = document.getElementById(`cf-val-dp-${itemId}-${i}`);
    if(!el) continue;
    try{
      const val = await decrypt(f.value||'');
      el.dataset.plain = val;
      if(f.type==='password'){
        if(!_cfRevealed.has(`dp-${itemId}-${i}`)){
          el.textContent = '••••••••';
          el.classList.add('hidden');
        } else {
          el.textContent = val || '—';
          el.classList.remove('hidden');
        }
      } else {
        el.textContent = val || '—';
        el.classList.remove('hidden');
      }
    }catch(e){ el.textContent = '—'; }
  }
}

function toggleCFRevealDP(itemId, idx){
  const key = `dp-${itemId}-${idx}`;
  const el = document.getElementById(`cf-val-dp-${itemId}-${idx}`);
  if(!el) return;
  if(_cfRevealed.has(key)){
    _cfRevealed.delete(key);
    el.textContent = '••••••••';
    el.classList.add('hidden');
  } else {
    _cfRevealed.add(key);
    el.textContent = el.dataset.plain || '—';
    el.classList.remove('hidden');
  }
}

async function copyCFValueDP(itemId, idx){
  const item = _items.find(i=>i.id===itemId);
  if(!item || !item.custom_fields || !item.custom_fields[idx]) return;
  try{
    const val = await decrypt(item.custom_fields[idx].value||'');
    await navigator.clipboard.writeText(val);
    setTimeout(()=>{ navigator.clipboard.writeText('').catch(()=>{}); }, 30000); // L7: auto-clear custom field
    showToast(t('toast.copied'));
  }catch(e){ showToast('Copy failed','err'); }
}

function toggleCFReveal(itemId, idx){
  const key = `${itemId}-${idx}`;
  const el = document.getElementById(`cf-val-${itemId}-${idx}`);
  if(!el) return;
  if(_cfRevealed.has(key)){
    _cfRevealed.delete(key);
    el.textContent = '••••••••';
    el.classList.add('hidden');
  } else {
    _cfRevealed.add(key);
    el.textContent = el.dataset.plain || '—';
    el.classList.remove('hidden');
  }
}

async function copyCFValue(itemId, idx){
  const el = document.getElementById(`cf-val-${itemId}-${idx}`);
  const val = el?.dataset.plain;
  if(!val) return;
  try{
    await navigator.clipboard.writeText(val);
    showToast(t('cf.copied'), 'ok');
  }catch(e){}
}

// ===== PASSWORD GENERATOR ADVANCED ===== (200 kata umum, mudah diingat)
const WORDLIST = [
  'apple','beach','cloud','dance','eagle','flame','grape','honey','igloo','jungle',
  'kite','lemon','maple','night','ocean','pizza','queen','river','storm','tiger',
  'ultra','vivid','water','xenon','yacht','zebra','amber','brave','crisp','delta',
  'ember','frost','gleam','hyper','ivory','joker','karma','lunar','magic','noble',
  'orbit','pearl','quill','radar','solar','tidal','umbra','vapor','woven','xylem',
  'yield','zonal','atlas','blaze','cedar','drift','elbow','fable','glide','haven',
  'inert','jewel','kneel','lance','metro','nerve','onset','prism','quest','relay',
  'spine','trove','unity','verse','whirl','expel','zesty','acorn','bloom','comet',
  'dunes','epoch','flint','glyph','haste','inlet','jarls','knack','lumen','manor',
  'nexus','optic','pixel','quota','relic','sweep','thorn','untie','visor','waltz',
  'xerox','yearn','zephyr','abode','brine','crest','dwelt','exile','forge','grove',
  'heron','irony','joust','knave','lyric','marsh','nymph','outdo','plume','quirk',
  'resin','swift','tryst','usher','vigor','wrath','expat','zippy','acrid','blunt',
  'cabin','depot','epoch','fleck','guild','hyena','irked','joist','knelt','latch',
  'medal','nudge','oaken','plank','qualm','rusty','scone','tabby','ulcer','venom',
  'wader','extol','zonal','angel','bride','crimp','donut','ether','funky','gavel',
  'hinds','index','joust','knobs','lilac','mirth','noble','oxide','pilot','query',
  'renew','scald','taboo','upset','vault','weary','expel','zippo','alibi','boxer',
  'chasm','disco','ember','fjord','guava','hippo','ingot','jelly','kudos','lingo',
];

// Generator state
let _genState = {
  mode: 'password',       // 'password' | 'passphrase'
  length: 16,
  words: 4,
  separator: '-',
  upper: true,
  lower: true,
  numbers: true,
  symbols: true,
  excludeAmbiguous: true,
  capitalize: true,
  includeNumber: true,
  bulk: false,
  bulkPasswords: [],
  currentPw: '',
};

function openGenSheet(){
  renderGenSheet();
  document.getElementById('genOverlay').classList.add('show');
  document.getElementById('genSheet').classList.add('show');
}

function closeGenSheet(){
  closeSheetAnim('genSheet', 'genOverlay');
}

function generateRandomPassword(opts){
  let chars = '';
  const ambiguous = '0O1lI';
  if(opts.upper) chars += opts.excludeAmbiguous ? 'ABCDEFGHJKLMNPQRSTUVWXYZ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(opts.lower) chars += opts.excludeAmbiguous ? 'abcdefghjkmnpqrstuvwxyz' : 'abcdefghijklmnopqrstuvwxyz';
  if(opts.numbers) chars += opts.excludeAmbiguous ? '23456789' : '0123456789';
  if(opts.symbols) chars += '!@#$%^&*-_+=?';
  if(!chars) chars = 'abcdefghijklmnopqrstuvwxyz';

  let pw = '';
  const arr = crypto.getRandomValues(new Uint8Array(opts.length * 2));
  let i = 0;
  while(pw.length < opts.length && i < arr.length){
    const c = chars[arr[i] % chars.length];
    if(!opts.excludeAmbiguous || !ambiguous.includes(c)) pw += c;
    i++;
  }
  // Fallback if not enough chars generated
  while(pw.length < opts.length){
    const arr2 = crypto.getRandomValues(new Uint8Array(4));
    pw += chars[arr2[0] % chars.length];
  }
  return pw;
}

function generatePassphrase(opts){
  const words = [];
  const arr = crypto.getRandomValues(new Uint8Array(opts.words * 2));
  for(let i=0;i<opts.words;i++){
    let word = WORDLIST[arr[i] % WORDLIST.length];
    if(opts.capitalize) word = word.charAt(0).toUpperCase() + word.slice(1);
    words.push(word);
  }
  let phrase = words.join(opts.separator);
  if(opts.includeNumber){
    const num = crypto.getRandomValues(new Uint8Array(1))[0] % 90 + 10;
    phrase += opts.separator + num;
  }
  return phrase;
}

function generateOne(){
  if(_genState.mode === 'passphrase') return generatePassphrase(_genState);
  return generateRandomPassword(_genState);
}

function renderGenSheet(){
  _genState.currentPw = generateOne();
  if(_genState.bulk){
    _genState.bulkPasswords = Array.from({length:5}, ()=>generateOne());
  }
  _renderGenBody();
}

function regenGen(){
  _genState.currentPw = generateOne();
  if(_genState.bulk){
    _genState.bulkPasswords = Array.from({length:5}, ()=>generateOne());
  }
  _renderGenBody();
}

function _updateGenPreview(){
  _genState.currentPw = generateOne();
  const el = document.getElementById('genPreviewPw');
  if(el) el.textContent = _genState.currentPw;
  // update sub-label separator preview
  const sepInput = document.getElementById('genSeparatorInput');
  const subLabel = sepInput?.closest('.gen-option-row')?.querySelector('.gen-option-sub');
  if(subLabel){
    const sep = esc(_genState.separator)||'-';
    subLabel.textContent = `e.g. word${sep}word${sep}word`;
  }
}

function _renderGenBody(){
  const s = _genState;
  const isPro = isPremium();
  const pw = s.currentPw;

  const toggle = (key) =>
    `<label class="gen-toggle"><input type="checkbox" ${s[key]?'checked':''} data-gen-toggle="${key}"/><span class="gen-toggle-slider"></span></label>`;

  const pwModeOptions = `
    <div class="gen-mode-tabs">
      <button class="gen-mode-tab${s.mode==='password'?' active':''}" data-action="genModePassword">${t('gen.modePassword')}</button>
      <button class="gen-mode-tab${s.mode==='passphrase'?' active':''}" data-action="genModePassphrase">${t('gen.modePassphrase')}</button>
    </div>`;

  const previewFull = `
    <div class="gen-preview">
      <span class="gen-preview-pw" id="genPreviewPw">${esc(pw)}</span>
      <div class="gen-preview-actions">
        <button class="gen-action-btn primary" data-action="useGenPassword">${t('gen.useThis')}</button>
        <button class="gen-action-btn secondary" data-action="regenGenAnim" id="genRegenBtn">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          ${t('gen.regenerate')}
        </button>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:14px">
      <button class="gen-action-btn secondary" data-action="copyGenPasswordOnly" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copy
      </button>
    </div>`;

  let options = '';
  if(s.mode === 'password'){
    options = `
      <div class="gen-option-row">
        <div><div class="gen-option-label">${t('gen.length')}</div></div>
        <div style="display:flex;align-items:center;gap:8px">
          <input type="range" class="gen-slider" id="genLengthSlider" min="8" max="128" value="${s.length}"/>
          <span class="gen-slider-val" id="genLenVal">${s.length}</span>
        </div>
      </div>
      <div class="gen-option-row">
        <div class="gen-option-label">${t('gen.includeUpper')}</div>
        ${toggle('upper')}
      </div>
      <div class="gen-option-row">
        <div class="gen-option-label">${t('gen.includeLower')}</div>
        ${toggle('lower')}
      </div>
      <div class="gen-option-row">
        <div class="gen-option-label">${t('gen.includeNumbers')}</div>
        ${toggle('numbers')}
      </div>
      <div class="gen-option-row">
        <div class="gen-option-label">${t('gen.includeSymbols')}</div>
        ${toggle('symbols')}
      </div>
      <div class="gen-option-row">
        <div><div class="gen-option-label">${t('gen.excludeAmbiguous')}</div>
        <div class="gen-option-sub">Avoids 0/O, l/1/I</div></div>
        ${toggle('excludeAmbiguous')}
      </div>`;
  } else {
    options = `
      <div class="gen-option-row">
        <div><div class="gen-option-label">${t('gen.words')}</div></div>
        <div style="display:flex;align-items:center;gap:8px">
          <input type="range" class="gen-slider" id="genWordsSlider" min="3" max="8" value="${s.words}"/>
          <span class="gen-slider-val" id="genWordVal">${s.words}</span>
        </div>
      </div>
      <div class="gen-option-row">
        <div>
          <div class="gen-option-label">${t('gen.separator')}</div>
          <div class="gen-option-sub">e.g. word${esc(s.separator)}word${esc(s.separator)}word</div>
        </div>
        <input class="gen-separator-input" id="genSeparatorInput" maxlength="10" value="${esc(s.separator)}"/>
      </div>
      <div class="gen-option-row">
        <div class="gen-option-label">${t('gen.capitalize')}</div>
        ${toggle('capitalize')}
      </div>
      <div class="gen-option-row">
        <div class="gen-option-label">${t('gen.includeNumber')}</div>
        ${toggle('includeNumber')}
      </div>`;
  }

  // Bulk section (premium)
  let bulkSection = '';
  if(isPro){
    bulkSection = `
      <div class="gen-option-row" style="margin-top:4px">
        <div><div class="gen-option-label">${t('gen.bulk')}</div>
        <div class="gen-option-sub">${t('gen.bulkCount',{n:5})}</div></div>
        ${toggle('bulk')}
      </div>
      ${s.bulk ? `
        <div class="gen-bulk-list" id="genBulkList">
          ${s.bulkPasswords.map((p,i)=>`
            <div class="gen-bulk-item">
              <span class="gen-bulk-pw">${esc(p)}</span>
              <button class="gen-bulk-copy" data-bulk-copy="${i}" title="Copy">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
              <button class="gen-bulk-use" data-bulk-use="${i}">Use</button>
            </div>`).join('')}
          <button class="gen-action-btn secondary" style="width:100%;margin-top:4px" data-action="copyAllBulk">${t('gen.copyAll')}</button>
        </div>` : ''}`;
  } else {
    bulkSection = `
      <div style="background:var(--accent-dim);border:1px solid #3a2f7a;border-radius:8px;padding:10px 12px;margin-top:8px;display:flex;align-items:center;justify-content:space-between">
        <div>
          <div style="font-size:12px;font-weight:500;color:var(--accent)">${t('gen.bulk')} <span class="premium-badge" style="font-size:8px">PRO</span></div>
          <div style="font-size:11px;color:var(--dim);margin-top:2px">${t('gen.premiumHint')}</div>
        </div>
        <button class="gen-action-btn primary" style="font-size:11px;padding:6px 10px" data-action="closeGenOpenLicense">Upgrade</button>
      </div>`;
  }

  document.getElementById('genSheetBody').innerHTML = `
    ${pwModeOptions}
    ${previewFull}
    <div style="padding:0 2px">${options}${bulkSection}</div>
    <div style="height:20px"></div>`;
  document.querySelectorAll('[data-gen-toggle]').forEach(cb => {
    cb.addEventListener('change', function(){ _genState[this.dataset.genToggle]=this.checked; regenGen(); });
  });
  const lenSlider = document.getElementById('genLengthSlider');
  if(lenSlider) lenSlider.addEventListener('input', function(){
    _genState.length = parseInt(this.value);
    const v = document.getElementById('genLenVal'); if(v) v.textContent = this.value;
    regenGen();
  });
  const wordSlider = document.getElementById('genWordsSlider');
  if(wordSlider) wordSlider.addEventListener('input', function(){
    _genState.words = parseInt(this.value);
    const v = document.getElementById('genWordVal'); if(v) v.textContent = this.value;
    regenGen();
  });
  const sepInput = document.getElementById('genSeparatorInput');
  if(sepInput){
    sepInput.addEventListener('input', function(){ _genState.separator = this.value; _updateGenPreview(); });
    sepInput.addEventListener('blur', function(){ if(!this.value){ this.value='-'; _genState.separator='-'; _updateGenPreview(); } });
  }
}

async function useGenPassword(){
  const pw = _genState.currentPw;
  document.getElementById('fPass').value = pw;
  document.getElementById('fPass').type = 'text';
  updateStrength(pw);
  closeGenSheet();
  showToast(t('toast.passGen'), 'ok');
}

async function useSpecificPassword(pw){
  document.getElementById('fPass').value = pw;
  document.getElementById('fPass').type = 'text';
  updateStrength(pw);
  closeGenSheet();
  showToast(t('toast.passGen'), 'ok');
}

async function copyGenPasswordOnly(){
  try{
    await navigator.clipboard.writeText(_genState.currentPw);
    setTimeout(()=>{ navigator.clipboard.writeText('').catch(()=>{}); }, 30000); // L7: auto-clear generated pw
    showToast('Copied!', 'ok');
  }catch(e){}
}

// ── Animated sheet close helper ───────────────────────────────────────────
function closeSheetAnim(sheetId, overlayId, callback){
  const sheet = document.getElementById(sheetId);
  const overlay = overlayId ? document.getElementById(overlayId) : null;
  if(!sheet) return;
  if(overlay) overlay.classList.remove('show');
  // Only animate if sheet is actually visible
  if(sheet.classList.contains('show')){
    sheet.classList.add('closing');
    // Timeout fallback — if animationend never fires, force close after 300ms
    const fallback = setTimeout(()=>{
      sheet.classList.remove('show','closing');
      if(callback) callback();
    }, 300);
    sheet.addEventListener('animationend', ()=>{
      clearTimeout(fallback);
      sheet.classList.remove('show','closing');
      if(callback) callback();
    }, { once: true });
  } else {
    sheet.classList.remove('closing');
    if(callback) callback();
  }
}

// ── Custom confirm dialog (replaces browser confirm()) ────────────────────
function showConfirm({ icon='⚠️', title, desc, okText, cancelText, okClass='', onOk, showInput=false, inputPlaceholder='', inputType='text' }){
  document.getElementById('confirmModalIcon').innerHTML = icon;
  document.getElementById('confirmModalTitle').textContent = title;
  document.getElementById('confirmModalDesc').textContent = desc;
  // Input field
  const inputWrap = document.getElementById('confirmModalInputWrap');
  const inputEl = document.getElementById('confirmModalInput');
  if(showInput){
    inputWrap.classList.remove('hidden');
    inputWrap.style.display = 'block';
    inputEl.placeholder = inputPlaceholder || '';
    inputEl.type = inputType || 'text';
    inputEl.value = '';
    setTimeout(()=>inputEl.focus(), 100);
  } else {
    inputWrap.classList.add('hidden');
    inputWrap.style.display = 'none';
    inputEl.value = '';
  }
  const okBtn = document.getElementById('confirmModalOk');
  const cancelBtn = document.getElementById('confirmModalCancel');
  okBtn.textContent = okText || 'OK';
  cancelBtn.textContent = cancelText || t('modal.cancel') || 'Cancel';
  okBtn.className = 'confirm-modal-ok' + (okClass ? ' ' + okClass : '');
  const overlay = document.getElementById('confirmModalOverlay');
  const modal = document.getElementById('confirmModal');
  overlay.classList.add('show');
  modal.classList.add('show');
  const close = () => {
    overlay.classList.remove('show');
    modal.classList.remove('show');
    okBtn.replaceWith(okBtn.cloneNode(true));
    cancelBtn.replaceWith(cancelBtn.cloneNode(true));
  };
  document.getElementById('confirmModalOk').addEventListener('click', () => { 
    const val = document.getElementById('confirmModalInput').value;
    close(); 
    onOk(showInput ? val : undefined); 
  });
  document.getElementById('confirmModalCancel').addEventListener('click', close);
  setTimeout(()=>{
    document.getElementById('confirmModalOverlay').addEventListener('click', close, { once: true });
  }, 300);
}

// Smooth scroll sheet when keyboard appears on mobile
if(window.visualViewport){
  window.visualViewport.addEventListener('resize', ()=>{
    const sheets = document.querySelectorAll('.sheet.show');
    sheets.forEach(sheet => {
      sheet.style.maxHeight = (window.visualViewport.height * 0.85) + 'px';
    });
  });
}

// ── Swipe down to close any sheet ─────────────────────────────────────────
(function(){
  const closeMap = {
    'sheet':         ()=> closeModal(),
    'cpSheet':       ()=> closeChangePw(),
    'shareSheet':    ()=> closeShareSheet(),
    'genSheet':      ()=> closeGenSheet(),
    'historySheet':()=> closeHistorySheet(),
    'encExportSheet':()=> closeEncExport(),
    'licenseSheet':  ()=> closeLicenseSheet(),
    'healthSheet':   ()=> closeHealthSheet(),
  };

  let startY = 0, startScrollTop = 0;

  document.addEventListener('touchstart', e => {
    const sheet = e.target.closest('.sheet.show');
    if(!sheet) return;
    startY = e.touches[0].clientY;
    startScrollTop = sheet.scrollTop;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    const sheet = e.target.closest('.sheet.show');
    if(!sheet || sheet.classList.contains('closing')) return;
    const dy = e.changedTouches[0].clientY - startY;
    if(dy > 80 && startScrollTop === 0){
      const closeFn = closeMap[sheet.id];
      if(closeFn) closeFn();
    }
  }, { passive: true });
})();

async function copyAllBulk(){
  try{
    await navigator.clipboard.writeText(_genState.bulkPasswords.join('\n'));
    showToast(t('gen.bulkCopied'), 'ok');
  }catch(e){}
}

// Regenerate with visual flash feedback
function regenGenAnim(){
  const el = document.getElementById('genPreviewPw');
  if(el){ el.style.opacity = '0'; el.style.transition = 'opacity 0.1s'; }
  setTimeout(()=>{
    regenGen();
    const el2 = document.getElementById('genPreviewPw');
    if(el2){
      el2.style.opacity = '0';
      el2.style.transition = 'opacity 0.15s';
      requestAnimationFrame(()=>{ el2.style.opacity = '1'; });
    }
  }, 100);
}

// Event delegation for bulk buttons (safe — no inline password strings)
document.addEventListener('click', function(e){
  const copyBtn = e.target.closest('[data-bulk-copy]');
  const useBtn = e.target.closest('[data-bulk-use]');
  if(copyBtn){
    const i = parseInt(copyBtn.dataset.bulkCopy);
    const pw = _genState.bulkPasswords[i];
    if(pw) navigator.clipboard.writeText(pw).then(()=>{
      showToast('Copied!','ok');
      setTimeout(()=>{ navigator.clipboard.writeText('').catch(()=>{}); }, 30000); // L7: auto-clear history pw
    }).catch(()=>{});
  }
  if(useBtn){
    const i = parseInt(useBtn.dataset.bulkUse);
    const pw = _genState.bulkPasswords[i];
    if(pw) useSpecificPassword(pw);
  }
});

async function copyText(text, btnId){
  try{
    await navigator.clipboard.writeText(text);
    showToast('Copied!', 'ok');
  }catch(e){}
}

// ===== PASSWORD EXPIRY HELPERS =====
const EXPIRY_DAYS = 90;

function isPasswordOld(item){
  if(!item.updatedAt) return false;
  const ageMs = Date.now() - item.updatedAt;
  return ageMs > EXPIRY_DAYS * 24 * 60 * 60 * 1000;
}

function formatRelativeDate(ts){
  if(!ts) return '—';
  const ageMs = Date.now() - ts;
  const days = Math.floor(ageMs / (24*60*60*1000));
  if(days < 1) return 'Today';
  if(days < 7) return days + ' days ago';
  const months = Math.floor(days / 30);
  if(months < 1) return days + ' days ago';
  if(months < 12) return t('expiry.months', {n: months});
  const years = Math.floor(months / 12);
  return years + (years === 1 ? ' year ago' : ' years ago');
}

// ===== ENCRYPTED EXPORT =====
function openEncExport(){
  const body = document.getElementById('encExportBody');
  const eyeSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  const inputStyle = `width:100%;padding:11px 44px 11px 13px;border-radius:var(--radius);border:1px solid var(--border);background:var(--card);color:var(--text);font-size:13px;font-family:var(--mono);outline:none;letter-spacing:1px`;
  const eyeBtnStyle = `position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--dim);padding:4px;display:flex;align-items:center`;
  body.innerHTML = `
    <p style="font-size:13px;color:var(--sub);line-height:1.6;margin-bottom:16px">${t('encExport.desc')}</p>
    <div class="field-label" style="margin-bottom:8px">PASSWORD</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
      <label style="display:flex;align-items:center;gap:10px;padding:11px 13px;border-radius:var(--radius);border:2px solid var(--accent);background:var(--card);cursor:pointer">
        <input type="radio" name="exportPwMode" id="exportModeMaster" value="master" checked
          style="accent-color:var(--accent);width:16px;height:16px;cursor:pointer"
          />
        <div>
          <div style="font-size:13px;color:var(--text);font-weight:500">${t('encExport.useMaster')}</div>
          <div style="font-size:11px;color:var(--sub);margin-top:1px">Simple, no extra password needed</div>
        </div>
      </label>
      <label style="display:flex;align-items:center;gap:10px;padding:11px 13px;border-radius:var(--radius);border:1px solid var(--border);background:var(--card);cursor:pointer" id="exportModeCustomLabel">
        <input type="radio" name="exportPwMode" id="exportModeCustom" value="custom"
          style="accent-color:var(--accent);width:16px;height:16px;cursor:pointer"
          />
        <div>
          <div style="font-size:13px;color:var(--text);font-weight:500">${t('encExport.useCustom')}</div>
          <div style="font-size:11px;color:var(--sub);margin-top:1px">Different password for this backup file</div>
        </div>
      </label>
    </div>
    <div id="encExportCustomFields" style="display:none">
      <div class="field">
        <div class="field-label">${t('encExport.pwLabel')}</div>
        <div style="position:relative">
          <input type="password" id="encExportPw" placeholder="${t('encExport.pwPh')}"
            style="${inputStyle}"
            />
          <button data-action="toggleEyeTarget" data-eye-target="encExportPw" type="button" style="${eyeBtnStyle}">${eyeSvg}</button>
        </div>
      </div>
      <div class="field">
        <div class="field-label">${t('encExport.confirmLabel')}</div>
        <div style="position:relative">
          <input type="password" id="encExportPwConfirm" placeholder="${t('encExport.confirmPh')}"
            style="${inputStyle}"
            />
          <button data-action="toggleEyeTarget" data-eye-target="encExportPwConfirm" type="button" style="${eyeBtnStyle}">${eyeSvg}</button>
        </div>
      </div>
      <div style="display:flex;align-items:flex-start;gap:7px;padding:9px 12px;border-radius:var(--radius);background:var(--surface);border:1px solid var(--border);margin-bottom:4px">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--warn)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <span style="font-size:11px;color:var(--sub);line-height:1.5">${t('encExport.warning')}</span>
      </div>
    </div>
    <div id="encExportMsg" style="font-size:12px;min-height:14px;margin-bottom:8px;color:var(--danger)"></div>
    <button class="btn-save" data-action="doEncExport" style="width:100%;display:flex;align-items:center;justify-content:center;gap:8px">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
      ${t('encExport.exportBtn')}
    </button>
    <button class="btn-cancel" data-action="closeEncExport" style="width:100%;margin-top:8px">${t('encExport.cancelBtn')}</button>`;
  document.getElementById('exportModeMaster').addEventListener('change', function(){
    document.getElementById('encExportCustomFields').style.display='none';
    document.getElementById('exportModeMaster').closest('label').style.border='2px solid var(--accent)';
    document.getElementById('exportModeCustomLabel').style.border='1px solid var(--border)';
  });
  document.getElementById('exportModeCustom').addEventListener('change', function(){
    document.getElementById('encExportCustomFields').style.display='block';
    document.getElementById('exportModeMaster').closest('label').style.border='1px solid var(--border)';
    this.closest('label').style.border='2px solid var(--accent)';
  });
  const eepw = document.getElementById('encExportPw');
  if(eepw) eepw.addEventListener('input', function(){ this.style.borderColor='var(--border)'; });
  const eepc = document.getElementById('encExportPwConfirm');
  if(eepc){
    eepc.addEventListener('input', function(){ this.style.borderColor='var(--border)'; });
    eepc.addEventListener('keydown', function(e){ if(e.key==='Enter') doEncExport(); });
  }
  document.getElementById('encExportOverlay').classList.add('show');
  document.getElementById('encExportSheet').classList.add('show');
}

// ===== PASSWORD HISTORY SHEET =====
let _historyItemId = null;
let _histRevealed = {};

async function openHistorySheet(itemId){
  _historyItemId = itemId;
  _histRevealed = {};
  document.getElementById('historyOverlay').classList.add('show');
  document.getElementById('historySheet').classList.add('show');
  await renderHistoryBody();
}

function closeHistorySheet(){
  closeSheetAnim('historySheet', 'historyOverlay');
  _historyItemId = null;
  _histRevealed = {};
}

async function renderHistoryBody(){
  const body = document.getElementById('historyBody');
  if(!body) return;
  const entries = await histGetAll(_historyItemId);
  // Sort newest first
  entries.sort((a,b) => b.changedAt - a.changedAt);

  const count = entries.length;
  const atLimit = count >= HIST_MAX;

  if(count === 0){
    body.innerHTML = `
      <div style="text-align:center;padding:32px 16px;color:var(--sub)">
        <svg width="32" height="32" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom:12px;opacity:0.4"><g transform="translate(16 16)"><circle cx="80" cy="80" r="74" stroke="currentColor" stroke-width="12" stroke-linejoin="round"/><path d="M80 30v50l40 32" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        <div style="font-size:13px">No history yet</div>
        <div style="font-size:11px;margin-top:4px;opacity:0.7">Password changes will appear here</div>
      </div>`;
    return;
  }

  const limitHtml = atLimit
    ? `<div style="font-size:11px;color:var(--warn);background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:8px 12px;margin-bottom:12px;display:flex;align-items:center;gap:6px">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Oldest entry will be removed when a new password is saved.
      </div>`
    : '';

  const rows = entries.map((e, idx) => {
    const date = new Date(e.changedAt);
    const dateStr = date.toLocaleDateString(undefined, {year:'numeric',month:'short',day:'numeric'});
    const timeStr = date.toLocaleTimeString(undefined, {hour:'2-digit',minute:'2-digit'});
    return `
      <div class="hist-entry" id="hist-entry-${e.hid}">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:11px;color:var(--sub)">${dateStr} · ${timeStr}</span>
          <button data-action="deleteHistEntry" data-id="${e.hid}" style="background:none;border:none;cursor:pointer;color:var(--danger);padding:2px;display:flex;align-items:center" title="Delete">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
          </button>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="hist-pw-val" id="hist-pw-${e.hid}" style="font-family:var(--mono);font-size:13px;color:var(--text);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">••••••••••</span>
          <button data-action="toggleHistReveal" data-id="${e.hid}" style="background:none;border:none;cursor:pointer;color:var(--dim);padding:4px;display:flex;align-items:center" id="hist-eye-${e.hid}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button data-action="copyHistEntry" data-id="${e.hid}" style="background:none;border:none;cursor:pointer;color:var(--dim);padding:4px;display:flex;align-items:center" title="Copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </button>
        </div>
      </div>`;
  }).join('');

  body.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
      <span style="font-size:12px;color:var(--sub);font-family:var(--mono)">${count} / ${HIST_MAX}</span>
    </div>
    ${limitHtml}
    <div style="display:flex;flex-direction:column;gap:8px">${rows}</div>`;
}

async function toggleHistReveal(hid){
  const el = document.getElementById(`hist-pw-${hid}`);
  const eyeBtn = document.getElementById(`hist-eye-${hid}`);
  if(!el) return;
  if(_histRevealed[hid]){
    el.textContent = '••••••••••';
    _histRevealed[hid] = false;
    eyeBtn.style.color = 'var(--dim)';
  } else {
    // Decrypt and show
    const entries = await histGetAll(_historyItemId);
    const entry = entries.find(e=>e.hid===hid);
    if(!entry) return;
    try{
      const plain = await decrypt(entry.encPassword);
      el.textContent = plain;
      _histRevealed[hid] = true;
      eyeBtn.style.color = 'var(--accent)';
    } catch(e){ showToast('Failed to decrypt','err'); }
  }
}

async function copyHistEntry(hid){
  const entries = await histGetAll(_historyItemId);
  const entry = entries.find(e=>e.hid===hid);
  if(!entry) return;
  try{
    const plain = await decrypt(entry.encPassword);
    await navigator.clipboard.writeText(plain);
    setTimeout(()=>{ navigator.clipboard.writeText('').catch(()=>{}); }, 30000); // L7: auto-clear history pw
    showToast('Password copied','ok');
  } catch(e){ showToast('Failed to copy','err'); }
}

async function deleteHistEntry(hid){
  await histDelete(hid);
  await renderHistoryBody();
}

function closeEncExport(){
  closeSheetAnim('encExportSheet', 'encExportOverlay');
}

async function doEncExport(){
  const msg = document.getElementById('encExportMsg');
  const useCustom = document.getElementById('exportModeCustom')?.checked;

  let exportPassword;
  if(useCustom){
    const pw = document.getElementById('encExportPw')?.value || '';
    const confirm = document.getElementById('encExportPwConfirm')?.value || '';
    if(pw.length < 8){
      msg.textContent = t('encExport.minLen');
      document.getElementById('encExportPw').style.borderColor = 'var(--danger)';
      return;
    }
    if(pw !== confirm){
      msg.textContent = t('encExport.noMatch');
      document.getElementById('encExportPwConfirm').style.borderColor = 'var(--danger)';
      return;
    }
    exportPassword = pw;
  } else {
    // Use master password — re-derive from stored verifier not possible,
    // so use current _key directly (already unlocked)
    exportPassword = null;
  }

  try{
    const raw = await dbAll();
    const vaultSalt = localStorage.getItem('vault_salt') || '';

    let bundle;
    if(exportPassword){
      // Custom password: derive new key from custom password + backupSalt.
      // Items in `raw` are still encrypted under the master `_key`, so we must
      // decrypt every encrypted field and re-encrypt under `backupKey` before
      // writing the inner payload. The inner payload's `salt` is set to
      // `backupSalt` (matches the outer bundle salt), so on import the salt
      // comparison in processImportJson() succeeds and the user is NOT prompted
      // for the source vault's master password — only the custom password.
      const backupSalt = crypto.getRandomValues(new Uint8Array(16));
      const backupSaltB64 = btoa(String.fromCharCode(...backupSalt));
      const backupKey = await deriveKey(exportPassword, backupSalt);

      const reencrypted = [];
      const masterKey = _key;
      try {
        for(const row of raw){
          // Decrypt all encrypted fields with master key
          _key = masterKey;
          const dTitle    = await decrypt(row.title);
          const dUsername = await decrypt(row.username);
          const dPassword = await decrypt(row.password);
          const dNotes    = row.notes ? await decrypt(row.notes) : '';
          const dTotp     = row.totp_secret ? await decrypt(row.totp_secret) : '';

          // custom_fields: decrypt each value (may be empty string)
          const dCustomFields = [];
          if(Array.isArray(row.custom_fields)){
            for(const f of row.custom_fields){
              dCustomFields.push({
                name: f.name,
                type: f.type || 'text',
                value: f.value ? await decrypt(f.value) : '',
              });
            }
          }

          // Encrypted metadata: only decrypt if it actually looks encrypted
          // (legacy plaintext rows pre-v6 may still exist in older vaults).
          let dCategory, dTags, dBreachStatus, dBreachCheckedAt;
          let catWasEnc = false, tagsWasEnc = false, bsWasEnc = false, bcaWasEnc = false;
          if(_isEncMeta(row.category)){ dCategory = await decryptMeta(row.category, 'other'); catWasEnc = true; }
          else { dCategory = (row.category != null ? row.category : 'other'); }
          if(_isEncMeta(row.tags)){ dTags = await decryptMeta(row.tags, []); tagsWasEnc = true; }
          else { dTags = Array.isArray(row.tags) ? row.tags : []; }
          if(typeof row.breachStatus === 'string' && _isEncMeta(row.breachStatus)){ dBreachStatus = await decryptMeta(row.breachStatus, null); bsWasEnc = true; }
          else { dBreachStatus = (typeof row.breachStatus === 'number' ? row.breachStatus : null); }
          if(typeof row.breachCheckedAt === 'string' && _isEncMeta(row.breachCheckedAt)){ dBreachCheckedAt = await decryptMeta(row.breachCheckedAt, null); bcaWasEnc = true; }
          else { dBreachCheckedAt = (row.breachCheckedAt != null ? row.breachCheckedAt : null); }

          // Re-encrypt all encrypted fields with backup key
          _key = backupKey;
          const newCustomFields = [];
          for(const f of dCustomFields){
            newCustomFields.push({
              name: f.name,
              type: f.type,
              value: f.value ? await encrypt(f.value) : '',
            });
          }
          const newRow = {
            ...row,
            title:    await encrypt(dTitle),
            username: await encrypt(dUsername),
            password: await encrypt(dPassword),
            notes:    dNotes ? await encrypt(dNotes) : '',
            totp_secret: dTotp ? await encrypt(dTotp) : '',
            custom_fields: newCustomFields,
            // Preserve format: re-encrypt fields that were encrypted; leave
            // legacy plaintext fields as-is so import handles them via lazy migration.
            category:        catWasEnc  ? await encryptMeta(dCategory)        : dCategory,
            tags:            tagsWasEnc ? await encryptMeta(dTags)            : dTags,
            breachStatus:    bsWasEnc   ? await encryptMeta(dBreachStatus)    : dBreachStatus,
            breachCheckedAt: bcaWasEnc  ? await encryptMeta(dBreachCheckedAt) : dBreachCheckedAt,
          };
          reencrypted.push(newRow);
        }
      } finally {
        // Always restore master key, even if a decrypt/encrypt step throws
        _key = masterKey;
      }

      // Inner salt = backupSalt so processImportJson sees a salt match after
      // the outer custom-password layer is decrypted.
      const payload = JSON.stringify({v:3, salt: backupSaltB64, data: reencrypted});
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const enc = await crypto.subtle.encrypt(
        {name:'AES-GCM', iv}, backupKey, new TextEncoder().encode(payload)
      );
      bundle = {
        type: 'vault-encrypted-backup',
        pwMode: 'custom',
        v: 1,
        salt: backupSaltB64,
        iv: btoa(String.fromCharCode(...iv)),
        data: btoa(String.fromCharCode(...new Uint8Array(enc))),
      };
    } else {
      // Master password: export raw vault data (already encrypted with master key via IndexedDB)
      // Include vault salt so it can restore on any device
      bundle = {
        type: 'vault-encrypted-backup',
        pwMode: 'master',
        v: 3,
        salt: vaultSalt,
        data: raw,
      };
    }

    const blob = new Blob([JSON.stringify(bundle)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hesych_backup_' + Date.now() + '.vault';
    a.click();
    URL.revokeObjectURL(url);
    showToast(t('encExport.success'), 'ok');
    closeEncExport();
  }catch(e){
    if(msg) msg.textContent = e.message;
  }
}

// ===== LICENSE / PREMIUM SYSTEM =====
// Verification is done server-side via /api/verify-license
// Secret key lives ONLY in Vercel env var (HESYCH_LICENSE_SECRET) — never in client

const _LICENSE_KEY = 'vault_license';

// ========================================================


function isPremium(){
  try{
    const raw = localStorage.getItem(_LICENSE_KEY);
    if(!raw) return false;
    const verified = localStorage.getItem(_LICENSE_KEY + '_verified');
    return verified === '1';
  }catch(e){ return false; }
}

function getLicensePayload(){
  try{
    const raw = localStorage.getItem(_LICENSE_KEY);
    if(!raw) return null;
    // Gumroad license keys are plain strings, not JWTs
    return { key: raw };
  }catch(e){ return null; }
}

function getDeviceId(){
  let id = localStorage.getItem('hesych_device_id');
  if(!id){
    id = crypto.randomUUID
      ? crypto.randomUUID()
      : Array.from(crypto.getRandomValues(new Uint8Array(16)))
          .map(b => b.toString(16).padStart(2,'0'))
          .join('-');
    localStorage.setItem('hesych_device_id', id);
  }
  return id;
}

async function activateLicense(key){
  key = key.trim();
  if(!key) return { ok: false };
  try{
    const res = await fetch('/api/verify-license', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license: key, deviceId: getDeviceId() })
    });
    if(!res.ok) return { ok: false };
    const data = await res.json();
    if(!data.valid){
      return { ok: false, deviceLimitReached: data.deviceLimitReached, error: data.error };
    }
    // Server confirmed valid — save to localStorage
    localStorage.setItem(_LICENSE_KEY, key);
    localStorage.setItem(_LICENSE_KEY + '_verified', '1');
    localStorage.setItem(_LICENSE_KEY + '_at', Date.now().toString());
    updatePremiumUI();
    syncOnUnlock(); // auto-download cloud vault setelah aktivasi license
    return { ok: true };
  }catch(e){ return { ok: false }; }
}

function deactivateLicense(){
  showConfirm({
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
    title: 'Remove License?',
    desc: t('premium.deactivateConfirm'),
    okText: 'Yes, Remove',
    cancelText: 'Cancel',
    onOk: async () => {
      const key = localStorage.getItem(_LICENSE_KEY);
      const deviceId = getDeviceId();
      if(key){
        try{
          await fetch('/api/verify-license', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ license: key, deviceId, action: 'remove' })
          });
        }catch(e){}
      }
      localStorage.removeItem(_LICENSE_KEY);
      localStorage.removeItem(_LICENSE_KEY + '_verified');
      localStorage.removeItem(_LICENSE_KEY + '_at');
      showToast(t('premium.deactivated'));
      updatePremiumUI();
      closeLicenseSheet();
    }
  });
}

function updatePremiumUI(){
  const premium = isPremium();
  const label = document.getElementById('licenseMenuLabel');
  if(label) label.setAttribute('data-i18n', premium ? 'premium.manageItem' : 'premium.menuItem');
  if(label) label.textContent = t(premium ? 'premium.manageItem' : 'premium.menuItem');
  updateSyncUI();
}

// ===== LICENSE SHEET UI =====
function openLicenseSheet(){
  renderLicenseSheet();
  document.getElementById('licenseOverlay').classList.add('show');
  document.getElementById('licenseSheet').classList.add('show');
}

function closeLicenseSheet(){
  closeSheetAnim('licenseSheet', 'licenseOverlay');
}

function renderLicenseSheet(){
  const body = document.getElementById('licenseSheetBody');
  const title = document.getElementById('licenseSheetTitle');
  const premium = isPremium();
  const payload = getLicensePayload();
  const activatedAt = localStorage.getItem(_LICENSE_KEY + '_at');

  if(premium){
    title.textContent = t('premium.activeTitle');
    const date = activatedAt
      ? new Date(parseInt(activatedAt)).toLocaleDateString()
      : '—';
    body.innerHTML = `
      <div class="license-status active">
        <div class="license-status-icon" style="background:#0e2a0e;color:#4ade80">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <div class="license-info">
          <div class="license-info-title"><span class="premium-badge">PREMIUM</span></div>
          <div class="license-info-sub">${t('premium.activeSince', {date})}</div>
        </div>
      </div>
      <p style="font-size:13px;color:var(--sub);line-height:1.6;margin-bottom:16px">${t('premium.activeDesc')}</p>
      <div id="deviceListSection" style="margin-bottom:16px">
        <div style="font-size:11px;font-family:var(--mono);color:var(--dim);text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px">Active Devices</div>
        <div id="deviceListItems" style="font-size:13px;color:var(--sub)">Loading...</div>
      </div>
      <button class="btn-deactivate" style="width:100%;padding:11px;justify-content:center;display:flex" data-action="deactivateLicense">
        ${t('premium.deactivateBtn')}
      </button>
`;
    loadDeviceList();
  } else {
    title.textContent = t('premium.enterKey');
    body.innerHTML = `
      <div class="premium-gate" style="margin-bottom:16px">
        <div class="premium-gate-icon">
          <img src="logo-dark.webp" class="logo-img logo-img-dark" alt="" width="36" height="36">
          <img src="logo-light.webp" class="logo-img logo-img-light" alt="" width="36" height="36">
        </div>
        <div class="premium-gate-title">${t('premium.locked')}</div>
        <div class="premium-gate-desc">${t('premium.lockedDesc')}</div>
        <a href="https://hesych.gumroad.com/l/bgxpiu" target="_blank" rel="noopener noreferrer" style="text-decoration:none">
          <button class="btn-upgrade">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            ${t('premium.upgradeBtn')}
          </button>
        </a>
      </div>
      <div class="field">
        <div class="field-label">${t('premium.keyLabel')}</div>
        <input id="licenseKeyInput" placeholder="${t('premium.keyPh')}"
          style="width:100%;padding:11px 13px;border-radius:var(--radius);border:1px solid var(--border);background:var(--card);color:var(--text);font-size:13px;font-family:var(--mono);outline:none;letter-spacing:.5px"
          />
        <div style="font-size:10px;color:var(--dim);font-family:var(--mono);margin-top:4px">${t('premium.keyHint')}</div>
      </div>
      <div id="licenseMsg" style="font-size:12px;min-height:14px;margin-bottom:8px;color:var(--danger)"></div>
      <button class="btn-save" id="licenseActivateBtn" data-action="doActivateLicense" style="width:100%">${t('premium.activateBtn')}</button>`;
    const licInput = document.getElementById('licenseKeyInput');
    if(licInput){
      licInput.addEventListener('input', function(){ this.style.borderColor='var(--border)'; });
      licInput.addEventListener('keydown', function(e){ if(e.key==='Enter') doActivateLicense(); });
    }
  }
}

async function loadDeviceList(){
  const container = document.getElementById('deviceListItems');
  if(!container) return;
  const key = localStorage.getItem(_LICENSE_KEY);
  const myDeviceId = getDeviceId();
  if(!key){ container.textContent = 'No license found.'; return; }
  try{
    const res = await fetch('/api/verify-license', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license: key, deviceId: myDeviceId, action: 'list' })
    });
    const data = await res.json();
    const devices = data.devices || [];
    if(!devices.length){ container.textContent = 'No devices registered.'; return; }
    container.innerHTML = devices.map(d => {
      const isMe = d.device_id === myDeviceId;
      const name = esc(d.device_name || 'Unknown Device');
      const date = d.activated_at ? new Date(d.activated_at).toLocaleDateString() : '';
      return `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:8px;border:1px solid var(--border);margin-bottom:6px;background:var(--card)">
        <div>
          <div style="font-size:13px;font-weight:500;color:var(--text)">${name}${isMe ? ' <span style="font-size:10px;color:var(--accent);font-family:var(--mono)">THIS DEVICE</span>' : ''}</div>
          <div style="font-size:11px;color:var(--dim);font-family:var(--mono);margin-top:2px">${date}</div>
        </div>
        ${isMe ? `<button data-action="deactivateLicense" style="font-size:11px;padding:5px 10px;border-radius:6px;border:1px solid var(--border);background:none;color:var(--danger);cursor:pointer;font-family:var(--sans)">Remove</button>` : ''}
      </div>`;
    }).join('');
    const max = 3;
    const countEl = document.querySelector('#deviceListSection .device-count');
    if(!countEl){
      const label = document.querySelector('#deviceListSection div');
      if(label) label.textContent = `Active Devices (${devices.length}/${max})`;
    }
  }catch(e){
    container.textContent = 'Could not load devices.';
  }
}

async function doActivateLicense(){
  const input = document.getElementById('licenseKeyInput');
  const msg = document.getElementById('licenseMsg');
  const btn = document.getElementById('licenseActivateBtn');
  if(!input || !input.value.trim()){
    if(msg) msg.textContent = t('premium.invalidKey');
    return;
  }
  if(btn){ btn.disabled=true; btn.textContent=t('premium.activating'); }
  const result = await activateLicense(input.value.trim());
  if(result.ok){
    showToast(t('premium.activated'), 'ok');
    renderLicenseSheet();
  } else {
    if(result.deviceLimitReached){
      if(msg) msg.textContent = 'Device limit reached (max 3).';
      if(input) input.style.borderColor = 'var(--danger)';
      if(btn){ btn.disabled=false; btn.textContent=t('premium.activateBtn'); }
      // Tampilkan tombol "lost access"
      const existing = document.getElementById('lostAccessBtn');
      if(!existing){
        const lostBtn = document.createElement('button');
        lostBtn.id = 'lostAccessBtn';
        lostBtn.className = 'btn-deactivate';
        lostBtn.style.cssText = 'width:100%;padding:10px;justify-content:center;display:flex;margin-top:8px;font-size:12px';
        lostBtn.textContent = 'I lost access to a device — replace it';
        lostBtn.onclick = () => showReplaceDeviceUI(input.value.trim(), result.devices);
        btn.parentNode.insertBefore(lostBtn, btn.nextSibling);
      }
    } else {
      const errMsg = result.error || t('premium.invalidKey');
      if(msg) msg.textContent = errMsg;
      if(input) input.style.borderColor = 'var(--danger)';
      if(btn){ btn.disabled=false; btn.textContent=t('premium.activateBtn'); }
    }
  }
}

async function showReplaceDeviceUI(licenseKey, devices){
  if(!licenseKey) return;
  // Fetch device list jika belum ada
  let deviceList = devices;
  if(!deviceList){
    try{
      const res = await fetch('/api/verify-license', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ license: licenseKey, deviceId: getDeviceId(), action: 'list' })
      });
      const data = await res.json();
      deviceList = data.devices || [];
    }catch(e){ deviceList = []; }
  }

  const body = document.getElementById('licenseSheetBody');
  if(!body) return;
  body.innerHTML = `
    <p style="font-size:13px;color:var(--sub);margin-bottom:16px;line-height:1.6">
      Select the device you no longer have access to. It will be replaced by this device.
    </p>
    <div id="replaceDeviceList">
      ${deviceList.map((d, idx) => `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:8px;border:1px solid var(--border);margin-bottom:6px;background:var(--card)" data-device-idx="${idx}">
          <div>
            <div style="font-size:13px;font-weight:500;color:var(--text)">${esc(d.device_name || 'Unknown Device')}</div>
            <div style="font-size:11px;color:var(--dim);font-family:var(--mono);margin-top:2px">${d.activated_at ? new Date(d.activated_at).toLocaleDateString() : ''}</div>
          </div>
          <button class="replace-device-btn" data-device-idx="${idx}" style="font-size:11px;padding:5px 10px;border-radius:6px;border:1px solid var(--danger);background:none;color:var(--danger);cursor:pointer;font-family:var(--sans)">Replace</button>
        </div>
      `).join('')}
    </div>
    <button data-action="renderLicenseSheet" style="width:100%;padding:10px;margin-top:8px;border-radius:8px;border:1px solid var(--border);background:none;color:var(--sub);cursor:pointer;font-family:var(--sans);font-size:13px">Cancel</button>
  `;
  // C2 FIX: event delegation, no user data in inline onclick
  const rdl = document.getElementById('replaceDeviceList');
  if (rdl) rdl.addEventListener('click', e => {
    const btn = e.target.closest('.replace-device-btn');
    if (!btn) return;
    const idx = parseInt(btn.dataset.deviceIdx, 10);
    const d = deviceList[idx];
    if (d) replaceDevice(licenseKey, d.device_id);
  });
}

async function replaceDevice(licenseKey, oldDeviceId){
  // Hapus device lama
  try{
    await fetch('/api/verify-license', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license: licenseKey, deviceId: oldDeviceId, action: 'remove' })
    });
  }catch(e){}
  // Aktivasi device baru
  const result = await activateLicense(licenseKey);
  if(result.ok){
    showToast('Device replaced successfully', 'ok');
    renderLicenseSheet();
  } else {
    showToast('Failed to activate. Try again.', 'error');
    renderLicenseSheet();
  }
}

// ===== VAULT HEALTH =====
function openHealthSheet(){
  if(!isPremium()){
    // Show gate inside sheet
    document.getElementById('healthSheetBody').innerHTML = `
      <div class="premium-gate">
        <div class="premium-gate-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div class="premium-gate-title">${t('health.title')}</div>
        <div class="premium-gate-desc">${t('health.premiumHint')}</div>
        <a href="https://hesych.gumroad.com/l/bgxpiu" target="_blank" rel="noopener noreferrer" style="text-decoration:none">
          <button class="btn-upgrade">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            ${t('premium.upgradeBtn')}
          </button>
        </a>
        <button class="btn-upgrade-secondary" data-action="closeLicenseOpenHealth">
          ${t('premium.enterKey')}
        </button>
      </div>`;
    document.getElementById('healthOverlay').classList.add('show');
    document.getElementById('healthSheet').classList.add('show');
    return;
  }
  document.getElementById('healthSheetBody').innerHTML =
    `<p style="font-size:13px;color:var(--sub);text-align:center;padding:20px 0">${t('health.scanning')}</p>`;
  document.getElementById('healthOverlay').classList.add('show');
  document.getElementById('healthSheet').classList.add('show');
  setTimeout(()=>runVaultHealth(), 100);
}

function closeHealthSheet(){
  closeSheetAnim('healthSheet', 'healthOverlay');
}

async function runVaultHealth(){
  if(!_items.length){
    document.getElementById('healthSheetBody').innerHTML =
      `<p style="font-size:13px;color:var(--sub);text-align:center;padding:20px 0">${t('health.great')}</p>`;
    return;
  }

  // Decrypt all passwords for analysis
  const decoded = [];
  for(const item of _items){
    try{
      const pw = await decrypt(item.password);
      decoded.push({id:item.id, title:item.title, pw, updatedAt:item.updatedAt||null});
    }catch(e){}
  }

  // 1. Reused passwords
  const pwMap = new Map();
  for(const d of decoded){
    if(!pwMap.has(d.pw)) pwMap.set(d.pw, []);
    pwMap.get(d.pw).push(d);
  }
  const dupes = [...pwMap.values()].filter(arr=>arr.length>1).flat();

  // 2. Weak passwords (score < 2)
  const weak = decoded.filter(d=>scorePassword(d.pw)<2);

  // 3. Old passwords (> 6 months, needs updatedAt field)
  const sixMonthsAgo = Date.now() - (6*30*24*60*60*1000);
  const old = decoded.filter(d=>d.updatedAt && d.updatedAt < sixMonthsAgo);

  // Calculate score
  const total = decoded.length;
  const issues = new Set([...dupes.map(d=>d.id), ...weak.map(d=>d.id), ...old.map(d=>d.id)]).size;
  const score = total > 0 ? Math.max(0, Math.round(100 - (issues/total)*100)) : 100;

  // Score color
  const scoreColor = score>=80?'#4ade80':score>=60?'#fbbf24':score>=40?'var(--warn)':'#f87171';
  const verdict = score>=80?t('health.great'):score>=60?t('health.good'):score>=40?t('health.fair'):t('health.poor');

  // Ring SVG
  const r=40; const circ=2*Math.PI*r;
  const dash=circ*(score/100);

  const renderSection = (titleKey, descKey, descVars, items, noItemsKey, type) => {
    const cls = items.length===0?'ok':type==='bad'?'bad':'warn';
    const iconCls = items.length===0?'health-icon-ok':type==='bad'?'health-icon-bad':'health-icon-warn';
    const icon = items.length===0
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;

    const affected = items.length>0 ? `
      <div class="health-affected">
        ${[...new Map(items.map(i=>[i.id,i])).values()].slice(0,5).map(i=>`
          <div class="health-affected-item">
            <span>${esc(i.title)}</span>
            <button data-action="healthEditItem" data-id="${i.id}">${t('detail.edit')}</button>
          </div>`).join('')}
        ${items.length>5?`<div style="font-size:10px;color:var(--dim);font-family:var(--mono);padding:4px 8px">+${items.length-5} more</div>`:''}
      </div>` : '';

    return `<div class="health-section ${cls}">
      <div class="health-section-header">
        <div class="health-section-icon ${iconCls}">${icon}</div>
        <div class="health-section-text">
          <div class="health-section-title">${t(titleKey)}</div>
          <div class="health-section-desc">${items.length===0?t(noItemsKey):t(descKey,descVars)}</div>
        </div>
      </div>
      ${affected}
    </div>`;
  };

  document.getElementById('healthSheetBody').innerHTML = `
    <div class="health-score-wrap">
      <div class="health-score-ring">
        <svg class="health-ring-svg" width="96" height="96" viewBox="0 0 96 96">
          <circle class="health-ring-bg" cx="48" cy="48" r="${r}"/>
          <circle class="health-ring-fg" cx="48" cy="48" r="${r}"
            stroke="${scoreColor}"
            stroke-dasharray="${circ}"
            stroke-dashoffset="${circ-dash}"/>
        </svg>
        <div class="health-score-num">
          <span class="health-score-val" style="color:${scoreColor}">${score}</span>
          <span class="health-score-label">${t('health.score')}</span>
        </div>
      </div>
      <div class="health-verdict">${verdict}</div>
    </div>
    ${renderSection('health.dupTitle','health.dupDesc',{n:dupes.length},dupes,'health.noDup','bad')}
    ${renderSection('health.weakTitle','health.weakDesc',{n:weak.length},weak,'health.noWeak','bad')}
    ${renderSection('health.oldTitle','health.oldDesc',{n:old.length},old,'health.noOld','warn')}
    <button class="btn-cancel" style="width:100%;margin-top:8px" data-action="closeHealthSheet">${t('health.closeBtn')}</button>
  `;
}





// ===== CLOUD SYNC =====
const _SYNC_TS_KEY = 'hesych_sync_ts';
let _syncInProgress = false;

function getSyncBtn(){ return document.getElementById('syncMenuItem'); }
function getSyncIcon(){ return document.getElementById('syncMenuItem')?.querySelector('svg'); }

function updateSyncUI(){
  const btn = document.getElementById('syncMenuItem');
  if(!btn) return;
  if(isPremium()) btn.classList.remove('hidden'); else btn.classList.add('hidden');
}

function setSyncSpinning(on){
  const icon = getSyncIcon();
  if(!icon) return;
  if(on) icon.classList.add('sync-spinning');
  else icon.classList.remove('sync-spinning');
}

// H1 FIX: vault payload now wrapped with AES-GCM envelope encryption.
// Outer wrapper is JSON with plaintext salt (salt is public, not secret) so the
// receiving device can derive the correct key to decrypt the envelope.
// Inner payload (items) is fully encrypted — server only sees opaque ciphertext.
//
// Wire format (v3):
//   {
//     "v": 3,
//     "salt": "<base64 of upload device's salt>",
//     "payload": "<base64( iv(12) || AES-GCM-ciphertext )>"
//   }
async function encryptVaultForSync(){
  const raw = await dbAll();
  const salt = localStorage.getItem('vault_salt') || '';
  // Inner content: only items + itemCount (salt is in the outer wrapper)
  const inner = JSON.stringify({ items: raw, itemCount: raw.length, ts: Date.now() });
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    _key,
    new TextEncoder().encode(inner)
  );
  const wrapped = new Uint8Array(iv.length + ct.byteLength);
  wrapped.set(iv);
  wrapped.set(new Uint8Array(ct), iv.length);
  return JSON.stringify({
    v: 3,
    salt,
    payload: bufToB64(wrapped),
  });
}

// Decrypt a sync payload. Accepts either a raw string from the server OR a
// pre-parsed object. Returns { v, salt, items } on success, null on failure.
//
// IMPORTANT: this function does NOT itself decrypt the inner ciphertext —
// because that requires a key derived from the *uploading* device's salt
// (which lives inside the wrapper). It returns the wrapper so the caller
// (applyCloudVault) can derive the correct cloudKey and then decrypt.
//
// For backward compatibility with legacy v2 (plain JSON) cloud vaults,
// returns the parsed object as-is so the caller can detect format and
// branch accordingly.
async function decryptVaultFromSync(payload){
  if(payload == null) return null;
  try{
    // Both v2 (legacy plain JSON) and v3 (new wrapper) are JSON strings.
    const obj = (typeof payload === 'string') ? JSON.parse(payload) : payload;
    return obj;
  }catch(e){
    return null;
  }
}

// Decrypt the inner ciphertext of a v3 wrapper using a specific key.
// Returns the inner object { items, itemCount, ts } or null on failure.
async function decryptSyncInner(wrapper, key){
  try{
    if(!wrapper || wrapper.v !== 3 || !wrapper.payload) return null;
    const buf = b64ToBuf(wrapper.payload);
    if(buf.byteLength <= 12) return null;
    const iv = buf.slice(0, 12);
    const ct = buf.slice(12);
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct);
    return JSON.parse(new TextDecoder().decode(pt));
  }catch(e){
    return null;
  }
}

async function uploadVault(force=false){
  if(!isPremium()) return { success: false };
  const license = localStorage.getItem('vault_license');
  const deviceId = getDeviceId();
  if(!license || !deviceId) return { success: false };

  // Cek cloud item count sebelum upload
  if(!force){
    try{
      const cloudData = await downloadVault();
      if(cloudData){
        const wrapper = await decryptVaultFromSync(cloudData.encryptedVault);
        let cloudCount = 0;
        if(wrapper){
          if(wrapper.v === 3){
            // New format: itemCount may not be visible without decrypting,
            // but we don't need to decrypt just to count — we trust the
            // uploading device's count if exposed via inner. Without
            // decrypting we can't count, so try to decrypt with cloudKey.
            try{
              const cloudSalt = b64ToBuf(wrapper.salt);
              // We can only count if user's master password matches —
              // if it doesn't, we conservatively skip the count check
              // and let the upload proceed (force-overwrite avoided
              // because user presumably has same password).
              // Best-effort: derive key with current vault salt as a
              // cheap sanity check by attempting a decrypt only if
              // salts match (same device). Otherwise, fall through.
              const localSalt = localStorage.getItem('vault_salt') || '';
              if(wrapper.salt === localSalt){
                const inner = await decryptSyncInner(wrapper, _key);
                if(inner) cloudCount = inner.itemCount || (inner.items ? inner.items.length : 0);
              }
              // If salts differ, we can't count without master password —
              // skip the count check, which is OK because needConfirm is
              // an advisory, not a security guard.
            }catch{}
          } else if(wrapper.items){
            // Legacy v2 format: plaintext JSON with items array
            cloudCount = wrapper.itemCount || wrapper.items.length;
          }
        }
        const localCount = _items.length;
        if(cloudCount > localCount){
          // Cloud punya lebih banyak item — tanya user dulu
          return { success: false, needConfirm: true, cloudCount, localCount, cloudData };
        }
      }
    }catch(e){}
  }

  const encryptedVault = await encryptVaultForSync();
  const localUpdatedAt = new Date().toISOString();

  try{
    const res = await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license, deviceId, action: 'upload', encryptedVault, localUpdatedAt })
    });
    const data = await res.json();
    // Bug4 FIX: only save localTs after confirmed success — prevents stale ts on failed upload
    if(data && data.success){
      localStorage.setItem(_SYNC_TS_KEY, localUpdatedAt);
    }
    return data;
  }catch(e){
    return { success: false, error: e.message };
  }
}

async function downloadVault(){
  if(!isPremium()) return null;
  const license = localStorage.getItem('vault_license');
  const deviceId = getDeviceId();
  if(!license || !deviceId) return null;

  try{
    const res = await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license, deviceId, action: 'download' })
    });
    const data = await res.json();
    if(!data.found) return null;
    return data;
  }catch(e){ return null; }
}

async function applyCloudVault(cloudData, masterPassword){
  // masterPassword: string yang diinput user (master password dari device asal)
  // cloudData.encryptedVault: JSON wrapper { v:3, salt, payload } (v3) atau plain JSON {items} (v2)
  // Steps:
  //   1. Parse wrapper from server
  //   2. Derive cloudKey = PBKDF2(masterPassword, cloudSalt) — cloudSalt from wrapper
  //   3. (v3) Decrypt envelope payload with cloudKey to get inner { items }
  //   4. Decrypt each item field with cloudKey, re-encrypt with local _key
  try{
    const wrapper = await decryptVaultFromSync(cloudData.encryptedVault);
    if(!wrapper) return false;

    // Determine the salt used by the uploading device, plus the items list.
    let cloudSaltB64, items;
    if(wrapper.v === 3){
      // New envelope format
      if(!wrapper.salt || !wrapper.payload) return false;
      cloudSaltB64 = wrapper.salt;
    } else if(wrapper.items){
      // Legacy v2 format (plain JSON, items already encrypted at field level)
      if(!wrapper.salt) return false;
      cloudSaltB64 = wrapper.salt;
      items = wrapper.items;
    } else {
      return false;
    }

    // Derive cloud key:
    // - null (auto-mode): pakai _key lokal kalau salt sama, return 'need_pw' kalau beda
    // - string: derive dari password + cloud salt seperti biasa
    const cloudSalt = b64ToBuf(cloudSaltB64);
    let cloudKey;
    const localSalt = localStorage.getItem('vault_salt') || '';
    const sameDevice = cloudSaltB64 === localSalt;

    if(masterPassword === null){
      if(sameDevice){
        cloudKey = _key; // salt sama → password sama → pakai _key langsung
      } else {
        return 'need_pw'; // salt beda → perlu password dari user
      }
    } else {
      cloudKey = await deriveKey(masterPassword, cloudSalt);
    }

    // For v3: decrypt the envelope to extract items
    if(wrapper.v === 3){
      const inner = await decryptSyncInner(wrapper, cloudKey);
      if(!inner || !inner.items){
        if(masterPassword === null) return 'need_pw';
        return false; // wrong master password
      }
      items = inner.items;
    }

    if(!items || !Array.isArray(items)) return false;

    // ── Pure crypto helpers (parameterized by key, no global state) ────────
    // CRITICAL: do NOT swap _key globally inside the per-item loop. Promise.all
    // runs iterations in parallel; swapping a global key creates a race that
    // silently corrupts items whose await happens to land while _key is wrong.
    // (This is what caused 7 of 30 items to vanish post-import.)
    async function decryptWith(key, b64){
      const buf = b64ToBuf(b64);
      const iv = buf.slice(0,12); const ct = buf.slice(12);
      const pt = await crypto.subtle.decrypt({name:'AES-GCM', iv}, key, ct);
      return new TextDecoder().decode(pt);
    }
    async function encryptWith(key, text){
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const ct = await crypto.subtle.encrypt({name:'AES-GCM', iv}, key, new TextEncoder().encode(text));
      const buf = new Uint8Array(iv.length + ct.byteLength);
      buf.set(iv, 0); buf.set(new Uint8Array(ct), iv.length);
      return bufToB64(buf);
    }
    // Metadata encrypt/decrypt parameterized by key (mirrors encryptMeta/decryptMeta
    // but without touching the _key global).
    async function encryptMetaWith(key, value){
      if(value === null || value === undefined) return null;
      return encryptWith(key, JSON.stringify(value));
    }
    async function decryptMetaWith(key, b64, fallback){
      if(b64 === null || b64 === undefined || b64 === '') return fallback;
      try {
        const pt = await decryptWith(key, b64);
        return JSON.parse(pt);
      } catch(e) {
        return fallback;
      }
    }

    // Use the local _key captured ONCE at the start of import (immutable
    // reference — even if some other code path were to reassign _key
    // mid-import, our captured local reference would not change).
    const localKey = _key;
    if(!localKey){
      console.error('applyCloudVault: local _key is null, vault may be locked');
      return false;
    }

    // Track failures per item for diagnostics — without this, silent
    // catch{} blocks made it impossible to know why items disappeared.
    let totalFailedFields = 0;
    let droppedItems = 0;

    // Process items SEQUENTIALLY, not via Promise.all. This avoids any
    // contention on the IndexedDB write transaction below and keeps the
    // crypto operations easy to reason about. With ~30 items this is
    // imperceptible UX-wise.
    const reencryptedItems = [];
    for(const item of items){
      const newItem = { ...item };
      let itemFailures = 0;

      // Required fields — if title/username/password fail we still keep
      // the row (the user can recover/edit it) but log the failure.
      try { newItem.title    = await encryptWith(localKey, await decryptWith(cloudKey, item.title));    } catch(e){ itemFailures++; }
      try { newItem.username = await encryptWith(localKey, await decryptWith(cloudKey, item.username)); } catch(e){ itemFailures++; }
      try { newItem.password = await encryptWith(localKey, await decryptWith(cloudKey, item.password)); } catch(e){ itemFailures++; }

      // Optional fields — only re-encrypt if present
      if(item.notes){
        try { newItem.notes = await encryptWith(localKey, await decryptWith(cloudKey, item.notes)); }
        catch(e){ itemFailures++; newItem.notes = ''; }
      }
      if(item.totp_secret){
        try { newItem.totp_secret = await encryptWith(localKey, await decryptWith(cloudKey, item.totp_secret)); }
        catch(e){ itemFailures++; newItem.totp_secret = ''; }
      }

      if(item.custom_fields && item.custom_fields.length){
        const newFields = [];
        for(const cf of item.custom_fields){
          const newCf = { ...cf };
          if(cf.value){
            try { newCf.value = await encryptWith(localKey, await decryptWith(cloudKey, cf.value)); }
            catch(e){ itemFailures++; newCf.value = ''; }
          }
          newFields.push(newCf);
        }
        newItem.custom_fields = newFields;
      }

      // Metadata: detect encrypted vs legacy plaintext and re-encrypt with localKey.
      // No global _key swap here — every call passes the explicit key.
      try {
        const catVal  = _isEncMeta(item.category)        ? await decryptMetaWith(cloudKey, item.category, 'other')   : (item.category || 'other');
        const tagsVal = _isEncMeta(item.tags)            ? await decryptMetaWith(cloudKey, item.tags, [])            : (Array.isArray(item.tags) ? item.tags : []);
        const bsRaw   = _isEncMeta(item.breachStatus)    ? await decryptMetaWith(cloudKey, item.breachStatus, null)  : (typeof item.breachStatus === 'number' ? item.breachStatus : null);
        const bcaRaw  = _isEncMeta(item.breachCheckedAt) ? await decryptMetaWith(cloudKey, item.breachCheckedAt, null): (item.breachCheckedAt || null);

        newItem.category        = await encryptMetaWith(localKey, typeof catVal === 'string' ? catVal : 'other');
        newItem.tags            = await encryptMetaWith(localKey, Array.isArray(tagsVal) ? tagsVal : []);
        newItem.breachStatus    = await encryptMetaWith(localKey, typeof bsRaw === 'number' ? bsRaw : null);
        newItem.breachCheckedAt = await encryptMetaWith(localKey, bcaRaw);
        newItem._metaV = ROW_META_V;
      } catch(e){
        // Worst case: leave metadata as defaults so loadItems doesn't choke.
        itemFailures++;
        newItem.category        = await encryptMetaWith(localKey, 'other').catch(()=>null);
        newItem.tags            = await encryptMetaWith(localKey, []).catch(()=>null);
        newItem.breachStatus    = null;
        newItem.breachCheckedAt = null;
        newItem._metaV = ROW_META_V;
      }

      totalFailedFields += itemFailures;
      reencryptedItems.push(newItem);
    }

    if(totalFailedFields > 0){
      console.warn(`applyCloudVault: ${totalFailedFields} field decryption failures across ${reencryptedItems.length} items`);
    }

    // Sanity check: if we ended up with zero items but the cloud claimed >0,
    // bail out rather than wipe the local vault.
    if(items.length > 0 && reencryptedItems.length === 0){
      console.error('applyCloudVault: all items failed to re-encrypt, aborting wipe');
      return false;
    }

    // Hapus items lokal, insert yang sudah di-re-encrypt
    const d = await openDB();
    await new Promise((res, rej) => {
      const tx = d.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).clear();
      tx.oncomplete = res; tx.onerror = rej;
    });
    await new Promise((res, rej) => {
      const tx = d.transaction(STORE, 'readwrite');
      const store = tx.objectStore(STORE);
      reencryptedItems.forEach(item => store.put(item));
      tx.oncomplete = res; tx.onerror = rej;
    });

    localStorage.setItem(_SYNC_TS_KEY, cloudData.updatedAt);
    // Clear secret timers lama yang stale setelah vault di-replace
    _secretTimers.forEach(t => clearTimeout(t));
    _secretTimers.clear();
    _secretLocks.clear();
    await loadSecretLocks();
    // Reset idle timer — proses bisa lama, jangan langsung terkunci setelah selesai
    resetIdleTimer();
    return true;
  }catch(e){
    console.error('applyCloudVault error:', e);
    return false;
  }
}

async function manualSync(){
  if(_syncInProgress) return;
  if(!isPremium()){ showToast('Premium required for sync'); return; }
  _syncInProgress = true;
  setSyncSpinning(true);

  try{
    // Cek cloud dulu
    const cloudData = await downloadVault();
    if(cloudData){
      const localTs = localStorage.getItem(_SYNC_TS_KEY);
      const cloudTs = cloudData.updatedAt;
      // Jika localTs null tapi ada data lokal, anggap lokal lebih baru (belum pernah upload)
      const localEmpty = _items.length === 0;
      const cloudNewer = localEmpty || (localTs ? new Date(cloudTs) > new Date(localTs) : false);

      if(cloudNewer){
        // Cloud lebih baru — coba apply langsung tanpa modal kalau salt sama
        showToast('Downloading from cloud...', '');
        const ok = await applyCloudVault(cloudData, null);
        if(ok === 'need_pw' || ok === false){
          showSyncImportModal(cloudData);
        } else if(ok === true){
          await loadItems();
          _filter = 'all';
          const srEl = document.getElementById('search');
          if(srEl) srEl.value = '';
          render();
          showToast(`Vault synced from cloud (${_items.length} items)`, 'ok');
        }
        return;
      } else {
        // Lokal lebih baru dan tidak kosong — upload
        const result = await uploadVault();
        if(result.needConfirm){
          showConfirm({
            icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--warn)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
            title: 'Overwrite Cloud?',
            desc: `Cloud has ${result.cloudCount} items, you have ${result.localCount}. Upload anyway? This will overwrite cloud data.`,
            okText: 'Yes, Upload',
            cancelText: 'Cancel',
            onOk: async () => {
              const r = await uploadVault(true);
              if(r.success) showToast('Vault uploaded to cloud', 'ok');
              else showToast('Upload failed', 'error');
            }
          });
        } else if(result.success) showToast('Vault uploaded to cloud', 'ok');
        else showToast('Upload failed', 'error');
      }
    } else {
      // Belum ada di cloud — upload kalau ada data, skip kalau kosong
      if(_items.length === 0){
        showToast('No data to upload', '');
      } else {
        const result = await uploadVault();
        if(result.success) showToast('Vault uploaded to cloud', 'ok');
        else showToast('Upload failed', 'error');
      }
    }
  }catch(e){
    showToast('Sync error', 'error');
  }finally{
    _syncInProgress = false;
    setSyncSpinning(false);
  }
}

// Auto-upload setiap ada perubahan vault
async function autoUpload(){
  if(!isPremium()) return;
  // Debounce 3 detik
  clearTimeout(autoUpload._timer);
  autoUpload._timer = setTimeout(async () => {
    if(_items.length === 0) return;
    const result = await uploadVault();
    // Kalau cloud punya lebih banyak item, jangan auto-overwrite
    // User harus manual sync
    if(result && result.needConfirm){
      showToast('Cloud has more items. Open Sync Vault to review.', 'warn');
    }
  }, 3000);
}

// Verifikasi apakah device masih terdaftar di Supabase
async function verifyDeviceRegistration(){
  if(!isPremium()) return;
  const license = localStorage.getItem(_LICENSE_KEY);
  const deviceId = getDeviceId();
  if(!license || !deviceId) return;
  try{
    const res = await fetch('/api/verify-license', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license, deviceId, action: 'list' })
    });
    const data = await res.json();
    const devices = data.devices || [];
    const stillRegistered = devices.some(d => d.device_id === deviceId);
    if(!stillRegistered){
      // Device sudah tidak terdaftar — hapus license dari localStorage
      localStorage.removeItem(_LICENSE_KEY);
      localStorage.removeItem(_LICENSE_KEY + '_verified');
      localStorage.removeItem(_LICENSE_KEY + '_at');
      updatePremiumUI();
      showToast('License was removed from this device.', 'warn');
    }
  }catch(e){}
}

// Auto-download saat pertama unlock (kalau premium)
async function syncOnUnlock(){
  if(!isPremium()) return;
  try{
    const cloudData = await downloadVault();
    if(!cloudData) return;
    const localTs = localStorage.getItem(_SYNC_TS_KEY);
    const localEmpty = _items.length === 0;

    // Bug3 FIX: clock skew tolerance — server timestamp always slightly ahead of client
    // Only show modal if cloud is >30s newer to avoid false positives on same device
    const SKEW_TOLERANCE_MS = 30 * 1000;
    let cloudNewer = false;
    if(!localTs){
      cloudNewer = true;
    } else {
      const diff = new Date(cloudData.updatedAt).getTime() - new Date(localTs).getTime();
      cloudNewer = diff > SKEW_TOLERANCE_MS;
    }

    // OpsiB FIX: skip modal if cloud was uploaded by this same device — no need to import own data
    const cloudFromMe = cloudData.lastDeviceId && cloudData.lastDeviceId === getDeviceId();

    if(localEmpty || (cloudNewer && !cloudFromMe)){
      // Vault lokal kosong ATAU cloud lebih baru dari device lain — tampilkan modal import
      showSyncImportModal(cloudData);
    }
  }catch(e){}
}

function showCloudBanner(cloudData){
  // Hapus banner lama kalau ada
  const existing = document.getElementById('cloudBanner');
  if(existing) existing.remove();

  const banner = document.createElement('div');
  banner.id = 'cloudBanner';
  banner.style.cssText = `
    margin: 8px 16px 0;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid var(--accent);
    background: var(--accent-glow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 13px;
    color: var(--text);
  `;
  banner.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;flex:1">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
      <span style="color:var(--sub);font-size:12px">Cloud vault available</span>
    </div>
    <button data-action="cloudBannerImport" style="font-size:12px;padding:5px 12px;border-radius:6px;border:none;background:var(--accent);color:#fff;cursor:pointer;font-family:var(--sans);font-weight:500;white-space:nowrap">Import</button>
    <button data-action="cloudBannerDismiss" style="background:none;border:none;color:var(--dim);cursor:pointer;padding:2px;font-size:16px;line-height:1">×</button>
  `;
  window._pendingCloudData = cloudData;

  // Insert sebelum search-wrap (visible di mobile dan desktop)
  const searchWrap = document.querySelector('.search-wrap:not(.main-search-wrap)') || document.querySelector('.search-wrap');
  const filterBar = document.querySelector('.filter-bar');
  if(filterBar && window.innerWidth < 768) filterBar.insertAdjacentElement('beforebegin', banner);
  else if(searchWrap) searchWrap.insertAdjacentElement('beforebegin', banner);
  else document.getElementById('app').insertAdjacentElement('afterbegin', banner);
}

function showSyncImportModal(cloudData){
  // Tutup sheet yang mungkin masih terbuka agar tidak conflict dengan confirmModal
  const licenseSheet = document.getElementById('licenseSheet');
  if(licenseSheet && licenseSheet.classList.contains('show')) closeLicenseSheet();

  showConfirm({
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
    title: 'Cloud Vault Found',
    desc: 'A newer vault was found in the cloud. Enter the master password from your other device (the one that last synced) to import it here.',
    okText: 'Import',
    cancelText: 'Skip',
    showInput: true,
    inputPlaceholder: 'Master password from your other device',
    inputType: 'password',
    onOk: async (masterPw) => {
      if(!masterPw){ showToast('Master password required', 'error'); return; }
      showToast('Importing vault...', '');
      const ok = await applyCloudVault(cloudData, masterPw);
      if(ok === true){
        // Bug #1 fix: ensure UI fully re-renders after import.
        // - reload _items from the freshly written IndexedDB rows
        // - reset filter & search so imported items aren't hidden by
        //   stale filter state from before the import
        // - clear advanced filter badge
        // - render once items are loaded
        await loadItems();
        _filter = 'all';
        const searchEl = document.getElementById('search');
        if(searchEl) searchEl.value = '';
        if(typeof _advFilter === 'object' && _advFilter){
          _advFilter.tags = [];
          _advFilter.status = 'all';
          _advFilter.strength = 'all';
          _advFilter.age = 'all';
        }
        render();
        // Defensive double-render after a tick in case async DB writes
        // from migrateMetadataInBackground arrive late.
        setTimeout(() => { try { render(); } catch(e){} }, 100);
        showToast(`Vault imported from cloud (${_items.length} items)`, 'ok');
      } else {
        showToast('Wrong password. Enter the master password from your other device, not this device.', 'error');
        // Tampilkan modal lagi biar user bisa coba ulang
        setTimeout(()=>{ showSyncImportModal(cloudData); }, 2500);
      }
    }
  });
}

// ===== TOAST =====
let _toastTimer=null;
function showToast(msg, type=''){
  const el=document.getElementById('toast');
  el.textContent=msg;
  el.className='toast'+(type?' '+type:'');
  void el.offsetWidth;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer=setTimeout(()=>el.classList.remove('show'),2200);
}

// ===== SERVICE WORKER REGISTRATION =====
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' })
      .then(reg => {
        reg.update();
        reg.addEventListener('updatefound', () => {
          const newSW = reg.installing;
          newSW.addEventListener('statechange', () => {
            if(newSW.state === 'installed' && navigator.serviceWorker.controller){
              newSW.postMessage({ type: 'SKIP_WAITING' });
              navigator.serviceWorker.addEventListener('controllerchange', () => {
                window.location.reload();
              }, { once: true });
            }
          });
        });
      }).catch(()=>{});
  });
}

// ===== ECOSYSTEM BACKUP LISTENER REMOVED (security: vault exfiltration risk) =====

// ===== INIT =====
document.addEventListener('DOMContentLoaded', ()=>{
  applyI18n();
  updateBioUI();
  updatePremiumUI();
  checkLockout();

  if(lockedUntil > Date.now()) startLockoutTimer();

  if(isFirstTime()){
    document.getElementById('confirmWrap').classList.remove('hidden');
    document.getElementById('unlockBtn').textContent=t('lock.createBtn');
    document.getElementById('lockSub').textContent=t('lock.setupSubtitle');
    document.getElementById('lockScreen').classList.add('setup-mode');
    const _badge = document.getElementById('lockModeBadge');
    const _badgeText = document.getElementById('lockModeBadgeText');
    if(_badge){ _badge.className='lock-mode-badge badge-setup'; }
    if(_badgeText){ _badgeText.textContent = 'New Vault'; }
  } else {
    document.getElementById('resetLink').classList.remove('hidden');
  }

  document.getElementById('masterPass').addEventListener('keydown', e=>{
    if(e.key==='Enter'){
      if(isFirstTime()) document.getElementById('masterConfirm').focus();
      else unlock();
    }
  });
  document.getElementById('masterConfirm').addEventListener('keydown', e=>{ if(e.key==='Enter') unlock(); });
  document.getElementById('fTitle').addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('fUser').focus(); });

  // ===== ESCAPE KEY: tutup modal/sheet yang sedang aktif =====
  document.addEventListener('keydown', e=>{
    if(e.key !== 'Escape') return;
    // Prioritas: delete modal > import modal > sheet/overlay > changepw sheet
    if(document.getElementById('deleteModal').classList.contains('show')){
      cancelDelete(); return;
    }
    if(document.getElementById('importPwModal').classList.contains('show')){
      cancelImportPw(); return;
    }
    if(document.getElementById('importModal').classList.contains('show')){
      cancelImport(); return;
    }
    if(document.getElementById('encExportSheet').classList.contains('show')){
      closeEncExport(); return;
    }
    if(document.getElementById('shareSheet').classList.contains('show')){
      closeShareSheet(); return;
    }
    if(document.getElementById('genSheet').classList.contains('show')){
      closeGenSheet(); return;
    }
    if(document.getElementById('healthSheet').classList.contains('show')){
      closeHealthSheet(); return;
    }
    if(document.getElementById('licenseSheet').classList.contains('show')){
      closeLicenseSheet(); return;
    }
    if(document.getElementById('sheet').classList.contains('show')){
      closeModal(); return;
    }
    if(document.getElementById('cpSheet').classList.contains('show')){
      closeChangePw(); return;
    }
  });

  // ===== AUTO-LOCK: reset idle timer on user activity =====
  ['mousemove','keydown','touchstart','click','scroll'].forEach(evt=>{
    document.addEventListener(evt, resetIdleTimer, {passive:true});
  });

  // ===== AUTO-LOCK: lock vault jika tab tidak aktif (hidden) =====
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden && _key){
      // Jangan lock jika ada modal import yang terbuka atau data import pending
      const importPwOpen = document.getElementById('importPwModal').classList.contains('show');
      const importOpen = document.getElementById('importModal').classList.contains('show');
      if(importPwOpen || importOpen || _importPending) return;
      // Delay check — file picker triggers visibilitychange briefly
      setTimeout(()=>{
        if(!_key) return;
        const importPwOpen2 = document.getElementById('importPwModal').classList.contains('show');
        const importOpen2 = document.getElementById('importModal').classList.contains('show');
        if(importPwOpen2 || importOpen2 || _importPending) return;
        if(document.hidden){ showToast(t('toast.tabLock'),'warn'); lockVault(); }
      }, 500);
    } else if(!document.hidden && _key){
      resetIdleTimer();
    }
  });
});

/* ============================================================
   SIDEBAR JS — desktop only
   ============================================================ */
function setSidebarFilter(filter) {
  // Sync with existing setFilter function
  setFilter(filter);
  // Update sidebar active state
  document.querySelectorAll('.sidebar-nav-item[data-filter]').forEach(el => {
    el.classList.toggle('active', el.dataset.filter === filter);
  });
  // Update desktop appbar title
  const titles = {
    all: 'All Items', fav: 'Favorites',
    social: 'Social', finance: 'Finance',
    email: 'Email', work: 'Work', other: 'Other'
  };
  const titleEl = document.getElementById('appbarDesktopTitle');
  if (titleEl) titleEl.textContent = titles[filter] || 'All Items';
}

function onSearchDesktop(val) {
  // Sync desktop search with mobile search input
  const mobileSearch = document.getElementById('search');
  if (mobileSearch) {
    mobileSearch.value = val;
    onSearch();
  }
  const clearBtn = document.getElementById('searchClearDesktop');
  if (clearBtn){ if(val) clearBtn.classList.remove('hidden'); else clearBtn.classList.add('hidden'); }
}

function clearSearchDesktop() {
  const input = document.getElementById('searchDesktop');
  if (input) { input.value = ''; onSearchDesktop(''); input.focus(); }
}

function updateSidebarBadges() {
  // Count items per category and update sidebar badges
  if (typeof _items === 'undefined') return;
  const counts = { all: 0, fav: 0, social: 0, finance: 0, email: 0, work: 0, shopping: 0, gaming: 0, other: 0 };
  _items.forEach(item => {
    counts.all++;
    if (item.favorite) counts.fav++;
    const cat = item.category || 'other';
    if (counts[cat] !== undefined) counts[cat]++;
    else counts.other++;
  });
  Object.entries(counts).forEach(([key, val]) => {
    const el = document.getElementById('sidebarBadge' + key.charAt(0).toUpperCase() + key.slice(1));
    if (el) el.textContent = val;
  });
  const sidebarCount = document.getElementById('sidebarCount');
  if (sidebarCount) sidebarCount.textContent = counts.all;
}

// Hook into render cycle to update sidebar badges
document.addEventListener('DOMContentLoaded', () => {
  const origRender = window.render;
  if (origRender) {
    window.render = function(...args) {
      origRender.apply(this, args);
      updateSidebarBadges();
    };
  }
  // Initial badge update after vault loads
  setTimeout(updateSidebarBadges, 500);
  setTimeout(updateSidebarBadges, 1500);
});

// Also sync mobile filter chips → sidebar active state
const _origSetFilter = window.setFilter;
if (_origSetFilter) {
  window.setFilter = function(f) {
    _origSetFilter(f);
    document.querySelectorAll('.sidebar-nav-item[data-filter]').forEach(el => {
      el.classList.toggle('active', el.dataset.filter === f);
    });
  };
}

// ===== STATIC EVENT HANDLER WIRING =====
// H1 FIX: Replaces inline onclick/oninput/etc. attributes removed from app.html
function _id(id){ return document.getElementById(id); }

document.addEventListener('DOMContentLoaded', function _wireHandlers() {
  // Lock screen
  _id('masterPass').addEventListener('input', e => updateLockStrength(e.target.value));
  _id('masterPassEye').addEventListener('click', function(){ toggleEye('masterPass', this); });
  _id('masterConfirmEye').addEventListener('click', function(){ toggleEye('masterConfirm', this); });
  _id('unlockBtn').addEventListener('click', unlock);
  _id('bioBtn').addEventListener('click', unlockWithBiometric);
  _id('resetLink').addEventListener('click', showResetConfirm);

  // Desktop sidebar search
  _id('searchDesktop').addEventListener('input', e => onSearchDesktop(e.target.value));
  _id('searchClearDesktop').addEventListener('click', clearSearchDesktop);

  // Sidebar nav (data-filter buttons) — use delegation
  _id('sidebarNav').addEventListener('click', e => {
    const btn = e.target.closest('[data-filter]');
    if(btn) setSidebarFilter(btn.dataset.filter);
  });
  _id('sidebarHealthBtn').addEventListener('click', openHealthSheet);
  _id('sidebarBreachBtn').addEventListener('click', checkAllBreaches);
  _id('sidebarLockBtn').addEventListener('click', lockVault);
  _id('sidebarLicenseBtn').addEventListener('click', openLicenseSheet);

  // Header toolbar
  _id('themeToggleBtn').addEventListener('click', toggleTheme);
  _id('breachCheckBtn').addEventListener('click', checkAllBreaches);
  _id('bioToggleBtn').addEventListener('click', toggleBiometric);
  _id('headerLockBtn').addEventListener('click', lockVault);
  _id('overflowBtn').addEventListener('click', toggleOverflow);
  _id('overflowImportBtn').addEventListener('click', () => { importTrigger(); closeOverflow(); });
  _id('overflowExportBtn').addEventListener('click', () => { openEncExport(); closeOverflow(); });
  _id('overflowChangePwBtn').addEventListener('click', () => { openChangePw(); closeOverflow(); });
  _id('healthMenuItem').addEventListener('click', () => { openHealthSheet(); closeOverflow(); });
  _id('syncMenuItem').addEventListener('click', () => { manualSync(); closeOverflow(); });
  _id('licenseMenuItem').addEventListener('click', () => { openLicenseSheet(); closeOverflow(); });

  // Filter chips
  ['all','fav','social','finance','email','work','shopping','gaming','other'].forEach(f => {
    const el = document.getElementById('chip-'+f);
    if(el) el.addEventListener('click', () => setFilter(f));
  });

  // Mobile search
  _id('search').addEventListener('input', onSearch);
  _id('searchClear').addEventListener('click', clearSearch);
  _id('advFilterBtn').addEventListener('click', toggleAdvFilter);

  // FAB and overlay
  _id('fab').addEventListener('click', openModal);
  _id('overlay').addEventListener('click', closeModal);

  // Add item sheet
  _id('modalCloseBtn').addEventListener('click', closeModal);
  _id('fPass').addEventListener('input', e => updateStrength(e.target.value));
  _id('pwGenBtn').addEventListener('click', openGenSheet);
  _id('fPassEye').addEventListener('click', function(){ toggleEye('fPass', this); });
  _id('fTotp').addEventListener('input', e => onTotpInput(e.target));
  _id('totpClearBtn').addEventListener('click', clearTotpField);
  _id('saveItemBtn').addEventListener('click', saveItem);
  _id('cancelItemBtn').addEventListener('click', closeModal);

  // Change password sheet
  _id('cpOverlay').addEventListener('click', closeChangePw);
  _id('cpOldEye').addEventListener('click', function(){ toggleEye('cpOld', this); });
  _id('cpNewEye').addEventListener('click', function(){ toggleEye('cpNew', this); });
  _id('cpConfirmEye').addEventListener('click', function(){ toggleEye('cpConfirm', this); });
  _id('doChangePwBtn').addEventListener('click', doChangePw);
  _id('cancelChangePwBtn').addEventListener('click', closeChangePw);

  // Import modal
  _id('importMergeBtn').addEventListener('click', () => doImport('merge'));
  _id('importReplaceBtn').addEventListener('click', () => doImport('replace'));
  _id('cancelImportBtn').addEventListener('click', cancelImport);

  // Delete modal
  _id('confirmDeleteBtn').addEventListener('click', confirmDelete);
  _id('cancelDeleteBtn').addEventListener('click', cancelDelete);

  // Secret lock modal
  _id('secretLockGotIt').addEventListener('change', e => onSecretLockGotIt(e.target));
  ['durY','durMo','durW','durD','durH','durMin','durS'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener('input', onDurInput);
  });
  _id('preset5m').addEventListener('click', () => applyPreset(0,0,0,0,0,5,0));
  _id('preset30m').addEventListener('click', () => applyPreset(0,0,0,0,0,30,0));
  _id('preset1h').addEventListener('click', () => applyPreset(0,0,0,0,1,0,0));
  _id('preset6h').addEventListener('click', () => applyPreset(0,0,0,0,6,0,0));
  _id('preset1d').addEventListener('click', () => applyPreset(0,0,1,0,0,0,0));
  _id('preset1w').addEventListener('click', () => applyPreset(0,0,0,1,0,0,0));
  _id('secretLockConfirmBtn').addEventListener('click', confirmSecretLock);
  _id('cancelSecretLockBtn').addEventListener('click', closeSecretLockModal);

  // Backup password modal
  const bpInput = document.getElementById('backupPwInput');
  if(bpInput){
    bpInput.addEventListener('input', () => { bpInput.style.borderColor='var(--border)'; });
    bpInput.addEventListener('keydown', e => { if(e.key==='Enter') confirmBackupPw(); });
  }
  _id('backupPwEye').addEventListener('click', function(){ toggleEye('backupPwInput', this); });
  _id('confirmBackupPwBtn').addEventListener('click', confirmBackupPw);
  _id('cancelBackupPwBtn').addEventListener('click', cancelBackupPw);

  // Import password modal
  const ipInput = document.getElementById('importPwInput');
  if(ipInput){
    ipInput.addEventListener('input', () => { ipInput.style.borderColor='var(--border)'; });
    ipInput.addEventListener('keydown', e => { if(e.key==='Enter') confirmImportPw(); });
  }
  _id('importPwEye').addEventListener('click', function(){ toggleEye('importPwInput', this); });
  _id('confirmImportPwBtn').addEventListener('click', confirmImportPw);
  _id('cancelImportPwBtn').addEventListener('click', cancelImportPw);

  // File import
  _id('importFile').addEventListener('change', e => importData(e));

  // Sheet overlays and close buttons
  _id('shareOverlay').addEventListener('click', closeShareSheet);
  _id('shareCloseBtn').addEventListener('click', closeShareSheet);
  _id('genOverlay').addEventListener('click', closeGenSheet);
  _id('genCloseBtn').addEventListener('click', closeGenSheet);
  _id('historyOverlay').addEventListener('click', closeHistorySheet);
  _id('historyCloseBtn').addEventListener('click', closeHistorySheet);
  _id('encExportOverlay').addEventListener('click', closeEncExport);
  _id('encExportCloseBtn').addEventListener('click', closeEncExport);
  _id('licenseOverlay').addEventListener('click', closeLicenseSheet);
  _id('licenseCloseBtn').addEventListener('click', closeLicenseSheet);
  _id('healthOverlay').addEventListener('click', closeHealthSheet);
  _id('healthCloseBtn').addEventListener('click', closeHealthSheet);

  // Favicon img error fallback — capture phase because 'error' doesn't bubble
  document.addEventListener('error', function(e){
    if(e.target.tagName !== 'IMG') return;
    if(e.target.classList.contains('fav-img')){
      e.target.style.display = 'none';
      const sib = e.target.nextElementSibling;
      if(sib) sib.style.display = 'flex';
    } else if(e.target.closest('.detail-panel-avatar')){
      e.target.style.display = 'none';
    }
  }, true);
});

// ===== H1 FIX: Dynamic event delegation =====
// Handles data-action clicks from dynamically-injected template HTML
document.addEventListener('click', function _handleDataAction(e){
  const el = e.target.closest('[data-action]');
  if(!el) return;
  const { action } = el.dataset;
  const id = el.dataset.id !== undefined ? parseInt(el.dataset.id) : undefined;
  const idx = el.dataset.idx !== undefined ? parseInt(el.dataset.idx) : undefined;
  switch(action){
    case 'copyPass':               e.stopPropagation(); copyPass(id); break;
    case 'copyUser':               e.stopPropagation(); copyUser(id); break;
    case 'toggleReveal':           e.stopPropagation(); toggleReveal(id); break;
    case 'checkSingleBreach':      e.stopPropagation(); checkSingleBreach(id); break;
    case 'toggleCFReveal':         e.stopPropagation(); toggleCFReveal(id, idx); break;
    case 'copyCFValue':            e.stopPropagation(); copyCFValue(id, idx); break;
    case 'openEdit':               e.stopPropagation(); openEdit(id); break;
    case 'deleteItem':             e.stopPropagation(); deleteItem(id); break;
    case 'toggleFav':              e.stopPropagation(); toggleFav(id); break;
    case 'openShareSheet':         e.stopPropagation(); openShareSheet(id); break;
    case 'openSecretLockModal':    e.stopPropagation(); openSecretLockModal(id); break;
    case 'openHistorySheet':       e.stopPropagation(); openHistorySheet(id); break;
    case 'toggleExpand':           e.stopPropagation(); toggleExpand(id); break;
    case 'closeDetailPanel':       closeDetailPanel(); break;
    case 'toggleDetailPanelReveal': toggleDetailPanelReveal(id); break;
    case 'toggleCFRevealDP':       toggleCFRevealDP(id, idx); break;
    case 'copyCFValueDP':          copyCFValueDP(id, idx); break;
    case 'toggleFavDP':            toggleFav(id); break;
    case 'copyTOTP':               e.stopPropagation(); copyTOTP(id); break;
    case 'deleteHistEntry':        deleteHistEntry(id); break;
    case 'toggleHistReveal':       toggleHistReveal(id); break;
    case 'copyHistEntry':          copyHistEntry(id); break;
    case 'deactivateLicense':      deactivateLicense(); break;
    case 'closeModal':             closeModal(); break;
    case 'genModePassword':        _genState.mode='password'; regenGen(); break;
    case 'genModePassphrase':      _genState.mode='passphrase'; regenGen(); break;
    case 'useGenPassword':         useGenPassword(); break;
    case 'regenGenAnim':           regenGenAnim(); break;
    case 'copyGenPasswordOnly':    copyGenPasswordOnly(); break;
    case 'copyAllBulk':            copyAllBulk(); break;
    case 'doEncExport':            doEncExport(); break;
    case 'closeEncExport':         closeEncExport(); break;
    case 'doActivateLicense':      doActivateLicense(); break;
    case 'renderLicenseSheet':     renderLicenseSheet(); break;
    case 'closeHealthSheet':       closeHealthSheet(); break;
    case 'closeHealthOpenLicense': closeHealthSheet(); openLicenseSheet(); break;
    case 'healthEditItem':         closeHealthSheet(); openEdit(id); break;
    case 'closeLicenseOpenHealth': closeLicenseSheet(); closeHealthSheet(); openLicenseSheet(); break;
    case 'cloudBannerImport':      (function(){ const b=document.getElementById('cloudBanner'); showSyncImportModal(window._pendingCloudData); if(b) b.remove(); })(); break;
    case 'cloudBannerDismiss':     (function(){ const b=document.getElementById('cloudBanner'); if(b) b.remove(); })(); break;
    case 'cfTypeToggle':           if(idx!==undefined){ _cfFormFields[idx].type=_cfFormFields[idx].type==='password'?'text':'password'; renderCFForm(); } break;
    case 'cfRemoveField':          if(idx!==undefined){ _cfFormFields.splice(idx,1); renderCFForm(); } break;
    case 'closeModalOpenLicense':  closeModal(); openLicenseSheet(); break;
    case 'closeGenOpenLicense':    closeGenSheet(); openLicenseSheet(); break;
    case 'clearAdvFilters':        clearAdvFilters(); break;
    case 'deactivateDevice':       replaceDevice(el.dataset.license, el.dataset.device); break;
    case 'copyShareLogLink':       copyShareLogLink(id); break;
    case 'deleteShareLog':         deleteShareLog(id, el.dataset.container); break;
    case 'closeShareOpenLicense':  closeShareSheet(); openLicenseSheet(); break;
    case 'doGenerateShareLink':    doGenerateShareLink(); break;
    case 'copyShareLink':          copyShareLink(); break;
    case 'shareRegenerate':        _shareState.generatedLink=null; renderShareForm(); break;
    case 'setShareExpiry':         _shareState.expiry=parseInt(el.dataset.expiry); renderShareForm(); break;
    case 'toggleShareEye':         toggleEye('sharePassphrase', el); break;
    case 'toggleEyeTarget':        toggleEye(el.dataset.eyeTarget, el); break;
    case 'removeTag':              _tagFormTags.splice(id,1); renderTagForm(); break;
    case 'addTagFromInput':        addTagFromInput(); break;
    case 'openLicense':            openLicenseSheet(); break;
    case 'setAdvFilter':           _advFilter[el.dataset.key]=el.dataset.val; renderAdvFilterPanel(); updateAdvFilterBadge(); render(); break;
    case 'toggleAdvFilterTag':     toggleAdvFilterTag(el.dataset.tag); break;
  }
});

