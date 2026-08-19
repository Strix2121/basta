let sellerListings = [
  {title:"سماعة بلوتوث JBL", v:"v-store", vLabel:"المتجر", price:850000, status:"active", views:340, desc:"سماعة لاسلكية بصوت نقي وبيس قوي، بطارية بتدوم طول اليوم.", images:[]},
  {title:"موبايل سامسونج A54", v:"v-store", vLabel:"المتجر", price:5200000, status:"active", views:512, desc:"موبايل بكاميرا احترافية وذاكرة كبيرة، حالة ممتازة.", images:[]},
  {title:"طقم صالون مستعمل حالة جيدة", v:"v-market", vLabel:"سوق الاستخدام", price:2200000, status:"active", views:288, desc:"طقم صالون 7 مقاعد نظيف بدون تمزق، سبب البيع تغيير الديكور.", images:[]},
  {title:"ثلاجة LG استعمال سنة", v:"v-market", vLabel:"سوق الاستخدام", price:3800000, status:"paused", views:190, desc:"ثلاجة بحالة ممتازة، استعمال سنة وحدة، موفرة كهرباء.", images:[]},
  {title:"شقة 3 غرف طابق ثالث", v:"v-estate", vLabel:"عقارات", price:850000000, status:"pending", views:94, desc:"شقة واسعة بإطلالة مفتوحة، بناء حديث مع مصعد وموقف سيارة.", images:[]},
  {title:"كيا سيراتو 2019", v:"v-cars", vLabel:"سيارات", price:145000000, status:"active", views:401, desc:"سيارة بحالة ممتازة وصيانة دورية منتظمة، بدون حوادث.", images:[]},
  {title:"دراجة رياضية", v:"v-store", vLabel:"المتجر", price:2100000, status:"paused", views:76, desc:"دراجة هوائية بإطار خفيف ومتين، مناسبة للطرقات الجبلية.", images:[]},
];

const fmt = n => n.toLocaleString('en-US') + " ل.س";
const statusLabel = {active:"نشط", paused:"متوقف", pending:"قيد المراجعة", blocked:"موقوف"};

function renderSellerListings(){
  const filter = document.getElementById('sellerFilterVertical').value;
  const rows = sellerListings.filter(l => !filter || l.v === filter);
  document.getElementById('sellerListingsBody').innerHTML = rows.map((l,i) => `
    <tr>
      <td><div class="cell-title">${l.title}</div></td>
      <td><span class="badge ${l.v}">${l.vLabel}</span></td>
      <td>${fmt(l.price)}</td>
      <td><span class="badge ${l.status}">${statusLabel[l.status]}</span></td>
      <td>${l.views}</td>
      <td><div class="row-actions">
        <button class="primary" onclick="openEditListing('${l.title.replace(/'/g,"\\'")}')">تعديل</button>
        <button onclick="toggleListing('${l.title.replace(/'/g,"\\'")}')">${l.status === 'active' ? 'إيقاف' : 'تفعيل'}</button>
        <button class="danger" onclick="deleteListing('${l.title.replace(/'/g,"\\'")}')">حذف</button>
      </div></td>
    </tr>`).join('') || `<tr><td colspan="6" style="text-align:center; color:var(--charcoal-soft); padding:26px;">ما في إعلانات بهالقسم</td></tr>`;
}
document.getElementById('sellerFilterVertical').addEventListener('change', renderSellerListings);

function toggleListing(title){
  const item = sellerListings.find(l => l.title === title);
  if(item.status === 'pending') return showToast('⏳ هاد الإعلان لسا قيد المراجعة');
  item.status = item.status === 'active' ? 'paused' : 'active';
  renderSellerListings();
  showToast(item.status === 'active' ? '✅ تم تفعيل الإعلان' : '⏸️ تم إيقاف الإعلان');
}
function deleteListing(title){
  sellerListings = sellerListings.filter(l => l.title !== title);
  renderSellerListings();
  showToast('🗑️ تم حذف الإعلان');
}

let editingListingTitle = null;
let editUploadedImages = [];
const editOverlay = document.getElementById('editOverlay');
const editUploadZone = document.getElementById('editUploadZone');
const editListingImagesInput = document.getElementById('editListingImages');
const editUploadThumbs = document.getElementById('editUploadThumbs');
const EDIT_MAX_IMAGES = 6;

function openEditListing(title){
  const item = sellerListings.find(l => l.title === title);
  if(!item) return;
  editingListingTitle = title;
  document.getElementById('editTitle').value = item.title;
  document.getElementById('editPrice').value = item.price;
  document.getElementById('editDesc').value = item.desc || '';
  editUploadedImages = Array.isArray(item.images) ? [...item.images] : [];
  renderEditThumbs();
  editOverlay.classList.add('open');
}
function closeEditModal(){
  editOverlay.classList.remove('open');
  editingListingTitle = null;
}
function renderEditThumbs(){
  editUploadThumbs.innerHTML = editUploadedImages.map((src, i) =>
    `<div class="upload-thumb"><img src="${src}" alt="صورة الإعلان"><button type="button" class="remove-thumb" onclick="removeEditImage(${i})">✕</button></div>`
  ).join('');
  editUploadZone.style.display = editUploadedImages.length >= EDIT_MAX_IMAGES ? 'none' : '';
}
function removeEditImage(i){
  editUploadedImages.splice(i, 1);
  renderEditThumbs();
}
function addEditFiles(files){
  const remaining = EDIT_MAX_IMAGES - editUploadedImages.length;
  Array.from(files).slice(0, remaining).forEach(file => {
    if(!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      editUploadedImages.push(e.target.result);
      renderEditThumbs();
    };
    reader.readAsDataURL(file);
  });
}
editUploadZone.addEventListener('click', () => editListingImagesInput.click());
editListingImagesInput.addEventListener('change', e => {
  addEditFiles(e.target.files);
  editListingImagesInput.value = '';
});
editUploadZone.addEventListener('dragover', e => {
  e.preventDefault();
  editUploadZone.classList.add('dragover');
});
editUploadZone.addEventListener('dragleave', () => editUploadZone.classList.remove('dragover'));
editUploadZone.addEventListener('drop', e => {
  e.preventDefault();
  editUploadZone.classList.remove('dragover');
  addEditFiles(e.dataTransfer.files);
});
document.getElementById('closeEditModal').addEventListener('click', closeEditModal);
editOverlay.addEventListener('click', e => { if(e.target === editOverlay) closeEditModal(); });
document.getElementById('editForm').addEventListener('submit', e => {
  e.preventDefault();
  const item = sellerListings.find(l => l.title === editingListingTitle);
  if(!item) return;
  item.title = document.getElementById('editTitle').value.trim() || item.title;
  const newPrice = parseInt(document.getElementById('editPrice').value.replace(/[^\d]/g, ''), 10);
  item.price = isNaN(newPrice) ? item.price : newPrice;
  item.desc = document.getElementById('editDesc').value;
  item.images = editUploadedImages;
  renderSellerListings();
  closeEditModal();
  showToast('✅ تم حفظ التعديلات على الإعلان');
});

renderSellerListings();

function goToPanel(id){
  document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.panel === id));
  window.scrollTo({top:0, behavior:'smooth'});
}
document.querySelectorAll('.nav-item').forEach(b => {
  b.addEventListener('click', () => goToPanel(b.dataset.panel));
});

const addSectionToggle = document.getElementById('addSectionToggle');
addSectionToggle.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    addSectionToggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const sec = btn.dataset.sec;
    document.querySelectorAll('.dyn').forEach(f => f.classList.remove('active'));
    document.querySelectorAll('.dyn-' + sec).forEach(f => f.classList.add('active'));
  });
});
document.getElementById('addForm').addEventListener('submit', e => {
  e.preventDefault();
  showToast('✅ تم إرسال الإعلان للمراجعة — هاد نموذج تجريبي');
  e.target.reset();
  uploadedImages = [];
  renderUploadThumbs();
});

let uploadedImages = [];
const uploadZone = document.getElementById('uploadZone');
const listingImagesInput = document.getElementById('listingImages');
const uploadThumbs = document.getElementById('uploadThumbs');
const MAX_IMAGES = 6;

function renderUploadThumbs(){
  uploadThumbs.innerHTML = uploadedImages.map((src, i) =>
    `<div class="upload-thumb"><img src="${src}" alt="صورة الإعلان"><button type="button" class="remove-thumb" onclick="removeUploadedImage(${i})">✕</button></div>`
  ).join('');
  uploadZone.style.display = uploadedImages.length >= MAX_IMAGES ? 'none' : '';
}
function removeUploadedImage(i){
  uploadedImages.splice(i, 1);
  renderUploadThumbs();
}
function addFiles(files){
  const remaining = MAX_IMAGES - uploadedImages.length;
  Array.from(files).slice(0, remaining).forEach(file => {
    if(!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      uploadedImages.push(e.target.result);
      renderUploadThumbs();
    };
    reader.readAsDataURL(file);
  });
}
uploadZone.addEventListener('click', () => listingImagesInput.click());
listingImagesInput.addEventListener('change', e => {
  addFiles(e.target.files);
  listingImagesInput.value = '';
});
uploadZone.addEventListener('dragover', e => {
  e.preventDefault();
  uploadZone.classList.add('dragover');
});
uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
uploadZone.addEventListener('drop', e => {
  e.preventDefault();
  uploadZone.classList.remove('dragover');
  addFiles(e.dataTransfer.files);
});

document.getElementById('saveSettingsBtn').addEventListener('click', () => showToast('✅ تم حفظ التعديلات'));

const toast = document.getElementById('toast');
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}
