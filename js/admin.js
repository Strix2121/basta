const DEMO_PASSWORD = "basta2026";
const loginGate = document.getElementById('loginGate');
const dashboard = document.getElementById('dashboard');
const loginCard = document.getElementById('loginCard');
const loginError = document.getElementById('loginError');

function enterDashboard(){
  loginGate.style.display = 'none';
  dashboard.style.display = 'block';
}

if(sessionStorage.getItem('bastaAdminAuth') === '1'){
  enterDashboard();
}

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const val = document.getElementById('passwordInput').value;
  if(val === DEMO_PASSWORD){
    sessionStorage.setItem('bastaAdminAuth', '1');
    enterDashboard();
  } else {
    loginError.classList.add('show');
    loginCard.classList.remove('shake'); void loginCard.offsetWidth; loginCard.classList.add('shake');
    document.getElementById('passwordInput').value = '';
  }
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem('bastaAdminAuth');
  dashboard.style.display = 'none';
  loginGate.style.display = 'flex';
  loginError.classList.remove('show');
});

let adminUsers = [
  {name:"أبو خالد", joined:"يناير 2025", count:7, status:"active"},
  {name:"سامر مصطفى", joined:"مارس 2025", count:3, status:"active"},
  {name:"رهف العلي", joined:"مايو 2025", count:12, status:"active"},
  {name:"عدنان حمود", joined:"يونيو 2025", count:1, status:"blocked"},
  {name:"لينا كردي", joined:"أغسطس 2025", count:5, status:"active"},
];
let adminReview = [
  {title:"محل تجاري على شارع رئيسي", v:"v-estate", vLabel:"عقارات", seller:"رهف العلي", price:2200000},
  {title:"بي إم دبليو 320i 2018", v:"v-cars", vLabel:"سيارات", seller:"سامر مصطفى", price:350000000},
  {title:"فستان زفاف مستعمل مرة واحدة", v:"v-market", vLabel:"سوق الاستخدام", seller:"لينا كردي", price:900000},
];
const fmt = n => n.toLocaleString('en-US') + " ل.س";
const statusLabel = {active:"نشط", blocked:"موقوف"};

function renderAdminUsers(){
  document.getElementById('adminUsersBody').innerHTML = adminUsers.map(u => `
    <tr>
      <td><div class="cell-title">${u.name}</div></td>
      <td class="cell-sub">${u.joined}</td>
      <td>${u.count}</td>
      <td><span class="badge ${u.status}">${statusLabel[u.status]}</span></td>
      <td><div class="row-actions">
        <button class="${u.status === 'active' ? 'danger' : 'approve'}" onclick="toggleUser('${u.name}')">${u.status === 'active' ? 'إيقاف الحساب' : 'إعادة تفعيل'}</button>
      </div></td>
    </tr>`).join('');
}
function toggleUser(name){
  const u = adminUsers.find(u => u.name === name);
  u.status = u.status === 'active' ? 'blocked' : 'active';
  renderAdminUsers();
  showToast(u.status === 'active' ? `✅ تم تفعيل حساب ${name}` : `🚫 تم إيقاف حساب ${name}`);
}

function renderAdminReview(){
  const body = document.getElementById('adminReviewBody');
  body.innerHTML = adminReview.map(r => `
    <tr>
      <td><div class="cell-title">${r.title}</div></td>
      <td><span class="badge ${r.v}">${r.vLabel}</span></td>
      <td class="cell-sub">${r.seller}</td>
      <td>${fmt(r.price)}</td>
      <td><div class="row-actions">
        <button class="approve" onclick="reviewAction('${r.title}','approve')">قبول</button>
        <button class="danger" onclick="reviewAction('${r.title}','reject')">رفض</button>
      </div></td>
    </tr>`).join('') || `<tr><td colspan="5" style="text-align:center; color:var(--charcoal-soft); padding:26px;">ما في إعلانات بانتظار المراجعة 🎉</td></tr>`;
}
function reviewAction(title, action){
  adminReview = adminReview.filter(r => r.title !== title);
  renderAdminReview();
  showToast(action === 'approve' ? '✅ تم قبول الإعلان ونشره' : '❌ تم رفض الإعلان');
}
renderAdminUsers(); renderAdminReview();

document.querySelectorAll('.nav-item').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + b.dataset.panel).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(x => x.classList.toggle('active', x === b));
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

document.getElementById('saveSiteSettingsBtn').addEventListener('click', () => showToast('✅ تم حفظ إعدادات الموقع'));

const toast = document.getElementById('toast');
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}
