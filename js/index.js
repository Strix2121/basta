const storeProducts = [
  {name:"سماعة بلوتوث JBL", cat:"إلكترونيات", price:850000, vendor:"متجر التقنية", icon:"🎧", images:["🎧","📦","🔋","🎵"], desc:"سماعة لاسلكية بصوت نقي وبيس قوي، مقاومة للماء، وبطارية بتدوم طول اليوم ع شحنة وحدة. مريحة للاستخدام الطويل ومناسبة للرياضة والمشاوير."},
  {name:"فستان سهرة نسائي", cat:"أزياء", price:620000, vendor:"بوتيك لمسة", icon:"👗", images:["👗","✂️","🧵","👛"], desc:"فستان سهرة أنيق بقصة عصرية وقماش مريح، متوفر بمقاسات مختلفة. مناسب للمناسبات والأفراح."},
  {name:"طقم أواني طهي 12 قطعة", cat:"منزل ومطبخ", price:1450000, vendor:"بيت الضيافة", icon:"🍳", images:["🍳","🥘","🍲","📦"], desc:"طقم أواني طهي كامل من ستانلس ستيل عالي الجودة، مقاوم للخدش وموزّع للحرارة بالتساوي. يشمل كل مقاسات الطبخ اليومي."},
  {name:"كريم عناية بالبشرة", cat:"جمال وعناية", price:310000, vendor:"صيدلية النور", icon:"🧴", images:["🧴","✨","🌿","📦"], desc:"كريم مرطب يومي بتركيبة طبيعية، مناسب لكل أنواع البشرة، بيمتص بسرعة وبيترك البشرة ناعمة طول اليوم."},
  {name:"لعبة تركيب أطفال", cat:"أطفال", price:275000, vendor:"عالم الطفولة", icon:"🧸", images:["🧸","🧩","📦","🎨"], desc:"لعبة تركيب تعليمية آمنة ومصنوعة من مواد غير سامة، بتنمّي مهارات التفكير والتركيز عند الأطفال."},
  {name:"دراجة رياضية", cat:"رياضة", price:2100000, vendor:"سبورت زون", icon:"🚲", images:["🚲","⚙️","🛞","🎽"], desc:"دراجة هوائية بإطار خفيف ومتين، مناسبة للاستخدام اليومي والطرقات الجبلية، فرامل قوية وتعليق مريح."},
  {name:"موبايل سامسونج A54", cat:"إلكترونيات", price:5200000, vendor:"متجر التقنية", icon:"📱", images:["📱","📷","🔋","📦"], desc:"موبايل بكاميرا احترافية وشاشة AMOLED واضحة، ذاكرة كبيرة وبطارية بتدوم يوم كامل استخدام عادي."},
  {name:"حذاء رياضي رجالي", cat:"أزياء", price:540000, vendor:"ستايل هاوس", icon:"👟", images:["👟","👞","📦","✨"], desc:"حذاء رياضي مريح للمشي الطويل، نعل مطاطي مانع للانزلاق، متوفر بمقاسات وألوان متعددة."},
  {name:"غلاية كهربائية", cat:"منزل ومطبخ", price:390000, vendor:"بيت الضيافة", icon:"☕", images:["☕","💧","⚡","📦"], desc:"غلاية كهربائية سريعة الغلي بإيقاف تلقائي، سعة تكفي العائلة، وتصميم آمن وسهل التنظيف."},
  {name:"عطر رجالي فاخر", cat:"جمال وعناية", price:780000, vendor:"صيدلية النور", icon:"🧪", images:["🧪","🌸","📦","✨"], desc:"عطر رجالي بثبات طويل ورائحة مميزة، عبوة أنيقة مناسبة كهدية أو للاستخدام اليومي."},
  {name:"عربة أطفال", cat:"أطفال", price:1900000, vendor:"عالم الطفولة", icon:"🍼", images:["🍼","👶","🛞","📦"], desc:"عربة أطفال قابلة للطي بسهولة، مقعد مريح قابل للتعديل، وعجلات ثابتة بمساكات جيدة."},
  {name:"طاولة بينغ بونغ", cat:"رياضة", price:3100000, vendor:"سبورت زون", icon:"🏓", images:["🏓","📏","🎯","📦"], desc:"طاولة بينغ بونغ قابلة للطي والنقل، سطح احترافي بمواصفات قياسية، مناسبة للمنزل والنادي."},
];

const marketAds = [
  {title:"طقم صالون مستعمل حالة جيدة", cat:"أثاث", city:"دمشق", price:2200000, seller:"أبو خالد", time:"قبل ساعتين", icon:"🛋️", images:["🛋️","📐","🪵","📦"], desc:"طقم صالون 7 مقاعد بحالة ممتازة، قماش نظيف بدون تمزق أو بقع، الخشب سليم 100%. سبب البيع تغيير ديكور المنزل."},
  {title:"ثلاجة LG استعمال سنة", cat:"أجهزة كهربائية", city:"حلب", price:3800000, seller:"سامر", time:"قبل 5 ساعات", icon:"🧊", images:["🧊","🔌","📏","📦"], desc:"ثلاجة LG سعة كبيرة، استعمال سنة وحدة بس، شغالة تمام وموفرة كهرباء، البيع بسبب السفر."},
  {title:"جاكيت شتوي رجالي مقاس L", cat:"ملابس", city:"حمص", price:150000, seller:"رهف", time:"أمس", icon:"🧥", images:["🧥","🧵","📏","📦"], desc:"جاكيت شتوي ثقيل مقاس L، لبسته مرتين بس، نظيف وبدون أي عيوب."},
  {title:"آيفون 12 بطارية 89%", cat:"موبايلات", city:"اللاذقية", price:4900000, seller:"محمد", time:"قبل يومين", icon:"📱", images:["📱","🔋","📷","📦"], desc:"آيفون 12 أزرق 128 جيجا، الشاشة سليمة بدون خدوش، صحة البطارية 89%، مع الكرتونة والشاحن الأصلي."},
  {title:"مكنسة كهربائية شبه جديدة", cat:"أدوات منزلية", city:"طرطوس", price:480000, seller:"أم يوسف", time:"قبل 3 أيام", icon:"🧹", images:["🧹","🔌","📦","✨"], desc:"مكنسة كهربائية استعمال خفيف جداً، تقريباً متل الجديدة، مع كل ملحقاتها الأصلية."},
  {title:"طاولة طعام خشب 6 كراسي", cat:"أثاث", city:"دمشق", price:2900000, seller:"عدنان", time:"قبل يوم", icon:"🍽️", images:["🍽️","🪑","🪵","📐"], desc:"طاولة طعام خشب زان أصلي مع 6 كراسي، صناعة متينة وحالة ممتازة، مناسبة لصالة الطعام الكبيرة."},
  {title:"غسالة أوتوماتيك 7 كغ", cat:"أجهزة كهربائية", city:"حماة", price:2600000, seller:"لينا", time:"قبل 6 ساعات", icon:"🧺", images:["🧺","🔌","📏","📦"], desc:"غسالة أوتوماتيك سعة 7 كغ، برامج غسيل متعددة، شغالة بدون أي مشاكل، البيع بسبب شراء موديل أكبر."},
  {title:"فستان زفاف مستعمل مرة واحدة", cat:"ملابس", city:"درعا", price:900000, seller:"هبة", time:"قبل يومين", icon:"👰", images:["👰","🧵","✨","📦"], desc:"فستان زفاف أبيض تصميم كلاسيكي، لبسته يوم العرس بس ونظّف بعدها، مقاس متوسط."},
];

const estateListings = [
  {title:"شقة 3 غرف طابق ثالث", type:"شقة", purpose:"للبيع", city:"دمشق", area:"المزة", size:150, price:850000000, icon:"🏢", images:["🏢","🛋️","🍽️","🚪"], desc:"شقة واسعة 3 غرف نوم وصالون وصالة طعام، إطلالة مفتوحة، بناء حديث مع مصعد وموقف سيارة."},
  {title:"فيلا حديقة خاصة", type:"فيلا", purpose:"للبيع", city:"حلب", area:"الشهباء", size:400, price:2400000000, icon:"🏡", images:["🏡","🌳","🏊","🚪"], desc:"فيلا فخمة بحديقة خاصة واسعة، تصميم عصري، 5 غرف نوم وصالتين، مناسبة للعائلات الكبيرة."},
  {title:"شقة مفروشة للإيجار الشهري", type:"شقة", purpose:"للإيجار", city:"اللاذقية", area:"الكورنيش", size:110, price:3500000, icon:"🏠", images:["🏠","🛏️","🍽️","🌊"], desc:"شقة مفروشة بالكامل بإطلالة بحرية، قريبة من الكورنيش، مناسبة للإيجار الشهري أو السياحي."},
  {title:"محل تجاري على شارع رئيسي", type:"محل تجاري", purpose:"للإيجار", city:"حمص", area:"وسط المدينة", size:60, price:2200000, icon:"🏪", images:["🏪","🚪","💡","📐"], desc:"محل تجاري على شارع حيوي وسط المدينة، واجهة زجاجية كبيرة، مناسب لأي نشاط تجاري."},
  {title:"أرض سكنية مرخصة", type:"أرض", purpose:"للبيع", city:"طرطوس", area:"المشتى", size:500, price:600000000, icon:"🗺️", images:["🗺️","📐","🧱","📄"], desc:"أرض سكنية مرخصة بمساحة 500 م²، موقع مميز قريب من الخدمات، مناسبة للبناء مباشرة."},
  {title:"شقة طابق أرضي مع ترّاس", type:"شقة", purpose:"للبيع", city:"درعا", area:"المحطة", size:130, price:410000000, icon:"🏢", images:["🏢","🌿","🚪","🛋️"], desc:"شقة طابق أرضي مع ترّاس خاص وحديقة صغيرة، 3 غرف نوم، مدخل مستقل."},
];

const carsListings = [
  {title:"كيا سيراتو 2019", brand:"كيا", year:2019, km:"78,000", trans:"أوتوماتيك", city:"دمشق", price:145000000, icon:"🚗", images:["🚗","🛞","🪑","🔧"], desc:"كيا سيراتو موديل 2019 بحالة ممتازة، صيانة دورية منتظمة، بدون حوادث، فحص كامل متوفر."},
  {title:"هيونداي إلنترا 2021", brand:"هيونداي", year:2021, km:"41,000", trans:"أوتوماتيك", city:"حلب", price:195000000, icon:"🚘", images:["🚘","🛞","🪑","📟"], desc:"هيونداي إلنترا 2021 كيلومترات قليلة، لسا تحت الكفالة، فل أوبشن مع شاشة وكاميرا خلفية."},
  {title:"تويوتا كورولا 2017", brand:"تويوتا", year:2017, km:"110,000", trans:"عادي", city:"حمص", price:120000000, icon:"🚙", images:["🚙","🛞","🪑","🔧"], desc:"تويوتا كورولا اقتصادية بصيانة تويوتا الرسمية، محرك بحالة ممتازة، مناسبة للاستخدام اليومي."},
  {title:"مرسيدس C200 2015", brand:"مرسيدس", year:2015, km:"95,000", trans:"أوتوماتيك", city:"اللاذقية", price:410000000, icon:"🚗", images:["🚗","🛞","🪑","📟"], desc:"مرسيدس C200 فل أوبشن، جلد طبيعي، فتحة سقف، صيانة دائمة بالوكالة."},
  {title:"بي إم دبليو 320i 2018", brand:"بي إم دبليو", year:2018, km:"60,000", trans:"أوتوماتيك", city:"طرطوس", price:350000000, icon:"🚘", images:["🚘","🛞","🪑","🔧"], desc:"بي إم دبليو 320i رياضية بحالة الوكالة، كيلومترات منخفضة، دفتر صيانة كامل."},
  {title:"سكودا أوكتافيا 2020", brand:"سكودا", year:2020, km:"33,000", trans:"أوتوماتيك", city:"دمشق", price:230000000, icon:"🚙", images:["🚙","🛞","🪑","📟"], desc:"سكودا أوكتافيا كيلومترات قليلة جداً، حالة الصفر تقريباً، صاحب واحد من الوكالة."},
];

const fmt = n => n.toLocaleString('en-US') + " ل.س";

let pmState = { item: null, vertical: 'store', imgIndex: 0, qty: 1 };
const productOverlay = document.getElementById('productOverlay');

function buildModalData(vertical, item){
  if(vertical === 'store'){
    return { title:item.name, badgeText:item.cat, price:fmt(item.price), meta:'البائع: ' + item.vendor, desc:item.desc, images:item.images, cta:'cart' };
  }
  if(vertical === 'market'){
    return { title:item.title, badgeText:item.cat, price:fmt(item.price), meta:`📍 ${item.city} · ${item.time} · ${item.seller}`, desc:item.desc, images:item.images, cta:'contact' };
  }
  if(vertical === 'estate'){
    const suffix = item.purpose === 'للإيجار' ? ' / شهرياً' : '';
    return { title:item.title, badgeText:`${item.type} · ${item.purpose}`, price:fmt(item.price) + suffix, meta:`📍 ${item.city} - ${item.area} · ${item.size} م²`, desc:item.desc, images:item.images, cta:'contact' };
  }
  return { title:item.title, badgeText:`${item.brand} · ${item.year}`, price:fmt(item.price), meta:`📍 ${item.city} · ${item.km} كم · ${item.trans}`, desc:item.desc, images:item.images, cta:'contact' };
}

function openItemModal(vertical, key){
  const source = { store:storeProducts, market:marketAds, estate:estateListings, cars:carsListings }[vertical];
  const matchKey = vertical === 'store' ? 'name' : 'title';
  const item = source.find(x => x[matchKey] === key);
  if(!item) return;
  const data = buildModalData(vertical, item);
  pmState = { item, vertical, imgIndex: 0, qty: 1 };

  document.getElementById('pmTitle').textContent = data.title;
  const badge = document.getElementById('pmCategory');
  badge.textContent = data.badgeText;
  badge.className = 'badge ' + vertical;
  document.getElementById('pmPrice').textContent = data.price;
  document.getElementById('pmVendor').textContent = data.meta;
  document.getElementById('pmDesc').textContent = data.desc;
  document.getElementById('qtyValue').textContent = '1';

  document.getElementById('pmMainImage').className = 'pm-main-image t-' + vertical;
  document.querySelector('.pm-qty').style.display = data.cta === 'cart' ? 'flex' : 'none';
  document.getElementById('pmAddCart').textContent = data.cta === 'cart' ? 'أضف للسلة 🛒' : 'تواصل مع البائع 💬';

  renderGallery();
  productOverlay.classList.add('open');
}
function closeProductModal(){
  productOverlay.classList.remove('open');
}
function renderGallery(){
  const data = buildModalData(pmState.vertical, pmState.item);
  const images = data.images;
  document.getElementById('pmMainIcon').textContent = images[pmState.imgIndex];
  document.getElementById('pmThumbs').innerHTML = images.map((img, i) =>
    `<div class="pm-thumb t-${pmState.vertical} ${i === pmState.imgIndex ? 'active' : ''}" onclick="pmSetImage(${i})">${img}</div>`
  ).join('');
  document.getElementById('pmDots').innerHTML = images.map((_, i) =>
    `<span class="${i === pmState.imgIndex ? 'active' : ''}"></span>`
  ).join('');
}
function pmChangeImage(dir){
  const data = buildModalData(pmState.vertical, pmState.item);
  pmState.imgIndex = (pmState.imgIndex + dir + data.images.length) % data.images.length;
  renderGallery();
}
function pmSetImage(i){
  pmState.imgIndex = i;
  renderGallery();
}
document.getElementById('pmPrev').addEventListener('click', () => pmChangeImage(-1));
document.getElementById('pmNext').addEventListener('click', () => pmChangeImage(1));
document.getElementById('closeProductModal').addEventListener('click', closeProductModal);
productOverlay.addEventListener('click', e => { if(e.target === productOverlay) closeProductModal(); });
document.addEventListener('keydown', e => {
  if(!productOverlay.classList.contains('open')) return;
  if(e.key === 'Escape') closeProductModal();
  if(e.key === 'ArrowLeft') pmChangeImage(-1);
  if(e.key === 'ArrowRight') pmChangeImage(1);
});
document.getElementById('qtyMinus').addEventListener('click', () => {
  pmState.qty = Math.max(1, pmState.qty - 1);
  document.getElementById('qtyValue').textContent = pmState.qty;
});
document.getElementById('qtyPlus').addEventListener('click', () => {
  pmState.qty = Math.min(99, pmState.qty + 1);
  document.getElementById('qtyValue').textContent = pmState.qty;
});
document.getElementById('pmAddCart').addEventListener('click', () => {
  const data = buildModalData(pmState.vertical, pmState.item);
  if(data.cta === 'cart'){
    showToast(`✅ تمت إضافة ${pmState.qty} × ${data.title} للسلة`);
  } else {
    showToast(`✅ تم إرسال طلب تواصل مع البائع بخصوص "${data.title}"`);
  }
});

(function(){
  let touchStartX = 0;
  const mainImg = document.getElementById('pmMainImage');
  mainImg.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; });
  mainImg.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if(Math.abs(diff) < 40) return;
    diff > 0 ? pmChangeImage(-1) : pmChangeImage(1);
  });
})();

function storeCard(p){
  return `<div class="card" onclick="openItemModal('store','${p.name.replace(/'/g,"\\'")}')">
    <div class="thumb t-store">${p.icon}</div>
    <div class="body">
      <span class="badge store">${p.cat}</span>
      <h4>${p.name}</h4>
      <span class="meta">البائع: ${p.vendor}</span>
      <span class="price">${fmt(p.price)}</span>
    </div>
    <div class="cta">عرض التفاصيل</div>
  </div>`;
}
function marketCard(a){
  return `<div class="card" onclick="openItemModal('market','${a.title.replace(/'/g,"\\'")}')">
    <div class="thumb t-market">${a.icon}</div>
    <div class="body">
      <span class="badge market">${a.cat}</span>
      <h4>${a.title}</h4>
      <span class="meta">📍 ${a.city} · ${a.time} · ${a.seller}</span>
      <span class="price">${fmt(a.price)}</span>
    </div>
    <div class="cta market">عرض التفاصيل</div>
  </div>`;
}
function estateCard(e){
  return `<div class="card" onclick="openItemModal('estate','${e.title.replace(/'/g,"\\'")}')">
    <div class="thumb t-estate">${e.icon}</div>
    <div class="body">
      <span class="badge estate">${e.type} · ${e.purpose}</span>
      <h4>${e.title}</h4>
      <span class="meta">📍 ${e.city} - ${e.area} · ${e.size} م²</span>
      <span class="price">${fmt(e.price)}${e.purpose==="للإيجار" ? " / شهرياً":""}</span>
    </div>
    <div class="cta estate">عرض التفاصيل</div>
  </div>`;
}
function carCard(c){
  return `<div class="card" onclick="openItemModal('cars','${c.title.replace(/'/g,"\\'")}')">
    <div class="thumb t-cars">${c.icon}</div>
    <div class="body">
      <span class="badge cars">${c.brand} · ${c.year}</span>
      <h4>${c.title}</h4>
      <span class="meta">📍 ${c.city} · ${c.km} كم · ${c.trans}</span>
      <span class="price">${fmt(c.price)}</span>
    </div>
    <div class="cta cars">عرض التفاصيل</div>
  </div>`;
}
function emptyState(msg){
  return `<div class="empty-state" style="grid-column:1/-1;"><div class="icon">🔎</div><p>${msg}</p></div>`;
}

document.getElementById('homeStoreGrid').innerHTML = storeProducts.slice(0,4).map(storeCard).join('');
document.getElementById('homeMarketGrid').innerHTML = marketAds.slice(0,4).map(marketCard).join('');
document.getElementById('homeEstateGrid').innerHTML = estateListings.slice(0,4).map(estateCard).join('');
document.getElementById('homeCarsGrid').innerHTML = carsListings.slice(0,4).map(carCard).join('');

function renderStore(){
  const cat = document.getElementById('storeCategory').value;
  const sort = document.getElementById('storeSort').value;
  const q = document.getElementById('storeSearch').value.trim();
  let items = storeProducts.filter(p =>
    (!cat || p.cat === cat) && (!q || p.name.includes(q))
  );
  if(sort === 'low') items = [...items].sort((a,b)=>a.price-b.price);
  if(sort === 'high') items = [...items].sort((a,b)=>b.price-a.price);
  document.getElementById('storeGrid').innerHTML = items.length ? items.map(storeCard).join('') : emptyState("ما لقينا منتجات مطابقة، جرب تبدّل الفلتر");
  document.getElementById('storeCount').textContent = `${items.length} منتج`;
}
['storeCategory','storeSort'].forEach(id=>document.getElementById(id).addEventListener('change', renderStore));
document.getElementById('storeSearch').addEventListener('input', renderStore);

function renderMarket(){
  const cat = document.getElementById('marketCategory').value;
  const city = document.getElementById('marketCity').value;
  const q = document.getElementById('marketSearch').value.trim();
  let items = marketAds.filter(a =>
    (!cat || a.cat === cat) && (!city || a.city === city) && (!q || a.title.includes(q))
  );
  document.getElementById('marketGrid').innerHTML = items.length ? items.map(marketCard).join('') : emptyState("ما في إعلانات مطابقة حالياً");
  document.getElementById('marketCount').textContent = `${items.length} إعلان`;
}
['marketCategory','marketCity'].forEach(id=>document.getElementById(id).addEventListener('change', renderMarket));
document.getElementById('marketSearch').addEventListener('input', renderMarket);

function renderEstate(){
  const type = document.getElementById('estateType').value;
  const purpose = document.getElementById('estatePurpose').value;
  const city = document.getElementById('estateCity').value;
  const q = document.getElementById('estateSearch').value.trim();
  let items = estateListings.filter(e =>
    (!type || e.type === type) && (!purpose || e.purpose === purpose) &&
    (!city || e.city === city) && (!q || e.area.includes(q) || e.title.includes(q))
  );
  document.getElementById('estateGrid').innerHTML = items.length ? items.map(estateCard).join('') : emptyState("ما في عقارات مطابقة، جرب توسّع البحث");
  document.getElementById('estateCount').textContent = `${items.length} عقار`;
}
['estateType','estatePurpose','estateCity'].forEach(id=>document.getElementById(id).addEventListener('change', renderEstate));
document.getElementById('estateSearch').addEventListener('input', renderEstate);

function renderCars(){
  const brand = document.getElementById('carsBrand').value;
  const city = document.getElementById('carsCity').value;
  const sort = document.getElementById('carsSort').value;
  const q = document.getElementById('carsSearch').value.trim();
  let items = carsListings.filter(c =>
    (!brand || c.brand === brand) && (!city || c.city === city) && (!q || c.title.includes(q))
  );
  if(sort === 'low') items = [...items].sort((a,b)=>a.price-b.price);
  if(sort === 'high') items = [...items].sort((a,b)=>b.price-a.price);
  document.getElementById('carsGrid').innerHTML = items.length ? items.map(carCard).join('') : emptyState("ما لقينا سيارات مطابقة");
  document.getElementById('carsCount').textContent = `${items.length} سيارة`;
}
['carsBrand','carsCity','carsSort'].forEach(id=>document.getElementById(id).addEventListener('change', renderCars));
document.getElementById('carsSearch').addEventListener('input', renderCars);

renderStore(); renderMarket(); renderEstate(); renderCars();

function goTo(page){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('nav.main-nav button').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  document.getElementById('mainNav').classList.remove('open');
  window.scrollTo({top:0, behavior:'smooth'});
}
document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', () => goTo(el.dataset.page));
});
document.getElementById('burgerBtn').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
});

document.getElementById('homeSearchBtn').addEventListener('click', () => {
  goTo(document.getElementById('homeSearchScope').value);
});

const overlay = document.getElementById('overlay');
function openModal(){ overlay.classList.add('open'); }
function closeModal(){ overlay.classList.remove('open'); }
document.getElementById('sellBtnHeader').addEventListener('click', openModal);
document.getElementById('sellBtnFloat').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if(e.target === overlay) closeModal(); });

const toast = document.getElementById('toast');
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 2600);
}

document.getElementById('adForm').addEventListener('submit', e => {
  e.preventDefault();
  closeModal();
  showToast('✅ تم إرسال إعلانك — هاد نموذج تجريبي بس');
  e.target.reset();
  quickAdImages = [];
  renderQuickAdThumbs();
});

let quickAdImages = [];
const quickUploadZone = document.getElementById('uploadZone');
const quickListingImagesInput = document.getElementById('listingImages');
const quickUploadThumbs = document.getElementById('uploadThumbs');
const QUICK_MAX_IMAGES = 6;

function renderQuickAdThumbs(){
  quickUploadThumbs.innerHTML = quickAdImages.map((src, i) =>
    `<div class="upload-thumb"><img src="${src}" alt="صورة الإعلان"><button type="button" class="remove-thumb" onclick="removeQuickAdImage(${i})">✕</button></div>`
  ).join('');
  quickUploadZone.style.display = quickAdImages.length >= QUICK_MAX_IMAGES ? 'none' : '';
}
function removeQuickAdImage(i){
  quickAdImages.splice(i, 1);
  renderQuickAdThumbs();
}
function addQuickAdFiles(files){
  const remaining = QUICK_MAX_IMAGES - quickAdImages.length;
  Array.from(files).slice(0, remaining).forEach(file => {
    if(!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      quickAdImages.push(e.target.result);
      renderQuickAdThumbs();
    };
    reader.readAsDataURL(file);
  });
}
quickUploadZone.addEventListener('click', () => quickListingImagesInput.click());
quickListingImagesInput.addEventListener('change', e => {
  addQuickAdFiles(e.target.files);
  quickListingImagesInput.value = '';
});
quickUploadZone.addEventListener('dragover', e => {
  e.preventDefault();
  quickUploadZone.classList.add('dragover');
});
quickUploadZone.addEventListener('dragleave', () => quickUploadZone.classList.remove('dragover'));
quickUploadZone.addEventListener('drop', e => {
  e.preventDefault();
  quickUploadZone.classList.remove('dragover');
  addQuickAdFiles(e.dataTransfer.files);
});
