
var CLIENTS = [
  { name: "INTERMED",             postcode: "83400 Hyeres",                 country: "FRANCE",         tiers: [400,303,270,241,215,190,179,177,175,173,171,169] },
  { name: "HORIZON",              postcode: "91940 LES ULIS",               country: "FRANCE",         tiers: [340,258,230,204,182,163,160,150,140,138,137,136] },
  { name: "ALLIANCE",             postcode: "36130 Deols",                  country: "FRANCE",         tiers: [380,288,255,241,215,191,189,187,185,183,181,179] },
  { name: "ALGO PHARMA",          postcode: "69680 Chassieu",               country: "FRANCE",         tiers: [400,303,270,260,233,206,205,204,203,202,201,200] },
  { name: "PHARMAVANCE",          postcode: "95500 LE THILLAY",             country: "FRANCE",         tiers: [340,258,230,205,182,163,160,150,140,138,137,136] },
  { name: "LISBOMED",             postcode: "2615-184 ALVERCA DO RIBATEJO", country: "PORTUGAL",       tiers: [580,388,359,320,285,254,250,234,219,215,214,212] },
  { name: "ALLIANCE",             postcode: "4149-014 Porto",               country: "PORTUGAL",       tiers: [580,388,359,320,285,254,250,234,219,215,214,212] },
  { name: "ALLIANCE",             postcode: "50830 Villanueva de Gallego",  country: "SPAIN",          tiers: [400,330,306,272,242,217,213,199,186,183,182,181] },
  { name: "SAIMA",                postcode: "17007 Girona",                 country: "SPAIN",          tiers: [400,330,305,272,242,216,212,199,186,183,182,180] },
  { name: "BODENSEE",             postcode: "78244 GOTTMADINGEN",           country: "GERMANY",        tiers: [500,379,338,301,268,237,215,200,199,198,197,196] },
  { name: "PHATEBO",              postcode: "78247 Hilzingen",              country: "GERMANY",        tiers: [500,379,338,301,268,237,215,200,204,203,202,201] },
  { name: "ANUBHA",               postcode: "78247 Hilzingen",              country: "GERMANY",        tiers: [500,379,338,301,268,237,215,200,204,203,202,201] },
  { name: "ALLIANCE",             postcode: "08393 Meerane",                country: "GERMANY",        tiers: [410,311,277,247,220,195,176,164,168,166,166,165] },
  { name: "FARMACIE PETRONE",     postcode: "80078 Pozzuoli",               country: "ITALY",          tiers: [600,450,400,348,330,292,285,284,283,282,281,280] },
  { name: "SO.FARMA.MORRA",       postcode: "80035 Nola",                   country: "ITALY",          tiers: [600,450,400,348,330,292,285,284,283,282,281,280] },
  { name: "ALLIANCE",             postcode: "41011 Campogalliano",          country: "ITALY",          tiers: [500,410,365,317,300,266,250,249,248,247,246,245] },
  { name: "PASQUETTI GROUP",      postcode: "51034 Casalguidi - Pistoia",   country: "ITALY",          tiers: [500,410,365,317,300,266,250,249,248,247,246,245] },
  { name: "EUROPEAN MEDICINES",   postcode: "8243 PC Lelystad",             country: "NETHERLANDS",    tiers: [350,210,187,177,157,142,137,136,135,134,133,132] },
  { name: "ALLIANCE",             postcode: "5222 BE s-Hertogenbosch",      country: "NETHERLANDS",    tiers: [350,210,187,177,157,142,137,136,135,134,133,132] },
  { name: "LIONPHARMA",           postcode: "18346 Athens",                 country: "GREECE",         tiers: [650,549,494,441,393,348,328,324,320,317,313,313] },
  { name: "MARIO D. KATSIKAS",    postcode: "12132 Peristeri",              country: "GREECE",         tiers: [650,549,494,441,393,348,328,324,320,317,313,313] },
  { name: "ACCESS PHARMA",        postcode: "57001 Thessaloniki",           country: "GREECE",         tiers: [620,549,494,441,393,348,328,324,320,317,313,313] },
  { name: "PHARMASEVICE",         postcode: "10442 Athens",                 country: "GREECE",         tiers: [650,549,494,441,393,348,328,324,320,317,313,313] },
  { name: "MP PHARMA",            postcode: "57001 Thessaloniki",           country: "GREECE",         tiers: [620,549,494,441,393,348,328,324,320,317,313,313] },
  { name: "PROFARM",              postcode: "17675 Athens",                 country: "GREECE",         tiers: [650,549,494,441,393,348,328,324,320,317,313,313] },
  { name: "DERSTAR PHARMA",       postcode: "831 04 Bratislava",            country: "SLOVAKIA",       tiers: [600,402,362,323,288,255,240,237,235,232,229,229] },
  { name: "UAB DINERAS",          postcode: "49388 Kaunas",                 country: "LITHUANIA",      tiers: [650,437,389,319,284,251,237,234,231,229,226,225] },
  { name: "PB&T PROJECT",         postcode: "46352 Kaunas",                 country: "LITHUANIA",      tiers: [650,437,389,319,284,251,237,234,231,229,226,225] },
  { name: "ABIMED",               postcode: "Sofia 1528",                   country: "BULGARIA",       tiers: [640,540,486,320,285,252,237,235,232,230,227,226] },
  { name: "IMED",                 postcode: "Dublin",                       country: "IRELAND",        tiers: [460,305,275,321,286,253,238,236,233,230,228,227] },
  { name: "ABC PHARMA",           postcode: "73551 Bchumin",                country: "CZECH REPUBLIC", tiers: [450,365,329,322,287,254,239,236,234,231,228,228] },
  { name: "PHARMACTIVE",          postcode: "077135 Bucharest",             country: "ROMANIA",        tiers: [640,540,486,323,288,254,240,237,235,232,229,229] },
  { name: "LIFEXA",               postcode: "3600 Genk",                    country: "BELGIUM",        tiers: [350,210,187,177,157,142,137,136,135,134,133,132] }
];

var CUSTOMS_FEE = 75;
var selectedClient = null;
var activeIdx = -1;
var exportEnabled = false;
var importEnabled = false;
var qtys = { cold: 0, ambient: 0 };

function init() {
  document.getElementById('readyDate').min = new Date().toISOString().split('T')[0];
  ['readyDate','loadRef','notes'].forEach(function(id) {
    document.getElementById(id).addEventListener('input', updateResult);
    document.getElementById(id).addEventListener('change', updateResult);
  });
  emailjs.init('CVdI7i2KmieUm_amD');

  var clientInput = document.getElementById('clientInput');
  clientInput.addEventListener('input', function() {
    selectedClient = null;
    document.getElementById('tierBar').style.display = 'none';
    document.getElementById('priceCold').textContent = 'Select a client first';
    document.getElementById('priceAmbient').textContent = 'Select a client first';
    document.getElementById('resultCard').classList.remove('visible');
    document.getElementById('emptySummary').style.display = '';
    doSearch(clientInput.value);
  });
  clientInput.addEventListener('focus', function() {
    doSearch(clientInput.value);
  });
  clientInput.addEventListener('keydown', function(e) {
    var items = document.getElementById('suggestions').querySelectorAll('.suggestion-item');
    if (e.key === 'ArrowDown') { activeIdx = Math.min(activeIdx+1, items.length-1); highlight(items); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { activeIdx = Math.max(activeIdx-1, 0); highlight(items); e.preventDefault(); }
    else if (e.key === 'Enter' && activeIdx >= 0) { items[activeIdx].click(); }
    else if (e.key === 'Escape') { hideSuggestions(); }
  });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#clientWrap')) hideSuggestions();
  });
}

function getPrice(client, n) { return client.tiers[Math.min(n-1, 11)]; }

function doSearch(val) {
  var q = val ? val.toLowerCase() : '';
  var matches = q.length === 0
    ? CLIENTS
    : CLIENTS.filter(function(c) {
        return c.name.toLowerCase().indexOf(q) !== -1 ||
               c.postcode.toLowerCase().indexOf(q) !== -1 ||
               c.country.toLowerCase().indexOf(q) !== -1;
      });
  if (!matches.length) { hideSuggestions(); return; }
  showSuggestions(matches.slice(0, 12));
}

function showSuggestions(items) {
  var el = document.getElementById('suggestions');
  el.innerHTML = '';
  activeIdx = -1;
  items.forEach(function(item) {
    var div = document.createElement('div');
    div.className = 'suggestion-item';
    div.innerHTML = '<div class="sug-left"><div class="sug-name">'+item.name+'</div><div class="sug-detail">'+item.postcode+' &middot; '+item.country+'</div></div><div class="sug-price">from EUR '+item.tiers[0]+'</div>';
    div.addEventListener('click', function() { selectClient(item); });
    el.appendChild(div);
  });
  el.classList.add('open');
}

function hideSuggestions() {
  var el = document.getElementById('suggestions');
  el.classList.remove('open');
  el.innerHTML = '';
  activeIdx = -1;
}

function highlight(items) { items.forEach(function(el, i) { el.classList.toggle('active', i === activeIdx); }); }

function selectClient(client) {
  selectedClient = client;
  document.getElementById('clientInput').value = client.name + ' - ' + client.postcode + ', ' + client.country;
  hideSuggestions();
  document.getElementById('priceCold').textContent = 'EUR ' + client.tiers[0] + ' / pallet';
  document.getElementById('priceAmbient').textContent = 'EUR ' + client.tiers[0] + ' / pallet';
  renderTierBar(Math.max(qtys.cold + qtys.ambient, 1));
  updateResult();
}

function changeQty(type, delta) {
  qtys[type] = Math.max(0, Math.min(33, qtys[type] + delta));
  var key = type === 'cold' ? 'Cold' : 'Ambient';
  var el = document.getElementById('qty' + key);
  el.textContent = qtys[type];
  el.classList.toggle('active', qtys[type] > 0);
  document.getElementById('row' + key).classList.toggle('active', qtys[type] > 0);
  updatePriceHints();
  updateResult();
}

function updatePriceHints() {
  if (!selectedClient) return;
  var total = Math.max(qtys.cold + qtys.ambient, 1);
  var price = getPrice(selectedClient, total);
  document.getElementById('priceCold').textContent = 'EUR ' + price + ' / pallet';
  document.getElementById('priceAmbient').textContent = 'EUR ' + price + ' / pallet';
  renderTierBar(total);
}

function renderTierBar(current) {
  if (!selectedClient) return;
  var bar = document.getElementById('tierBar');
  bar.style.display = 'flex';
  bar.innerHTML = '';
  selectedClient.tiers.forEach(function(price, i) {
    var label = i === 11 ? '12+' : String(i+1);
    var isCurrent = (i === 11 && current >= 12) || (i < 11 && current === i+1);
    var isCheaper = (i+1) > current;
    var pill = document.createElement('div');
    pill.className = 'tier-pill' + (isCurrent ? ' current' : '') + (isCheaper ? ' cheaper' : '');
    pill.innerHTML = '<div class="tp-qty">'+label+'</div><div class="tp-price">'+price+'</div>';
    bar.appendChild(pill);
  });
}

function toggleExport() {
  exportEnabled = !exportEnabled;
  document.getElementById('exportToggle').classList.toggle('checked', exportEnabled);
  document.getElementById('exportBox').textContent = exportEnabled ? '\u2713' : '';
  updateResult();
}

function toggleImport() {
  importEnabled = !importEnabled;
  document.getElementById('importToggle').classList.toggle('checked', importEnabled);
  document.getElementById('importBox').textContent = importEnabled ? '\u2713' : '';
  updateResult();
}

function formatDate(val) {
  if (!val) return '';
  var p = val.split('-');
  return p[2] + '/' + p[1] + '/' + p[0];
}

function updateResult() {
  var resultCard = document.getElementById('resultCard');
  if (!selectedClient || (qtys.cold === 0 && qtys.ambient === 0)) {
    resultCard.classList.remove('visible');
    document.getElementById('emptySummary').style.display = '';
    return;
  }
  var total = qtys.cold + qtys.ambient;
  var price = getPrice(selectedClient, total);
  var coldAmt = qtys.cold * price, ambAmt = qtys.ambient * price;
  var customsAmt = (exportEnabled ? CUSTOMS_FEE : 0) + (importEnabled ? CUSTOMS_FEE : 0);
  var grandTotal = coldAmt + ambAmt + customsAmt;

  document.getElementById('rClient').textContent = selectedClient.name;
  document.getElementById('rSub').textContent = selectedClient.postcode + ' - ' + selectedClient.country;

  var lines = [];
  if (qtys.cold > 0) lines.push({ e: '\u2744\ufe0f', t: qtys.cold + ' pallet(s) 2C-8C', s: qtys.cold + ' x EUR ' + price, a: 'EUR ' + coldAmt });
  if (qtys.ambient > 0) lines.push({ e: '\u2600\ufe0f', t: qtys.ambient + ' pallet(s) 15C-25C', s: qtys.ambient + ' x EUR ' + price, a: 'EUR ' + ambAmt });
  if (exportEnabled) lines.push({ e: '\ud83d\udccb', t: 'Export customs', s: 'per shipment', a: 'EUR 75' });
  if (importEnabled) lines.push({ e: '\ud83d\udce5', t: 'Import customs', s: 'per shipment', a: 'EUR 75' });

  document.getElementById('lineItems').innerHTML = lines.map(function(l) {
    return '<div class="line-item"><div class="line-left"><div class="line-emoji">'+l.e+'</div><div><div class="line-title">'+l.t+'</div><div class="line-sub">'+l.s+'</div></div></div><div class="line-amount">'+l.a+'</div></div>';
  }).join('');

  var readyVal = document.getElementById('readyDate').value;
  var refVal = document.getElementById('loadRef').value.trim();
  var notesVal = document.getElementById('notes').value.trim();
  var details = [];
  if (readyVal) details.push({ l: 'Cargo ready', v: formatDate(readyVal), full: false });
  if (refVal)   details.push({ l: 'Reference', v: refVal, full: false });
  if (notesVal) details.push({ l: 'Notes', v: notesVal, full: true });
  document.getElementById('resultDetails').innerHTML = details.map(function(d) {
    return '<div class="detail-box'+(d.full?' full':'')+'"><div class="d-label">'+d.l+'</div><div class="d-val">'+d.v+'</div></div>';
  }).join('');

  document.getElementById('rTotal').textContent = 'EUR ' + grandTotal;
  renderTierBar(total);
  document.getElementById('emptySummary').style.display = 'none';
  resultCard.classList.add('visible');
}

function resetAll() {
  document.getElementById('clientInput').value = '';
  selectedClient = null;
  qtys.cold = 0; qtys.ambient = 0;
  ['Cold','Ambient'].forEach(function(k) {
    document.getElementById('qty'+k).textContent = '0';
    document.getElementById('qty'+k).classList.remove('active');
    document.getElementById('row'+k).classList.remove('active');
  });
  document.getElementById('priceCold').textContent = 'Select a client first';
  document.getElementById('priceAmbient').textContent = 'Select a client first';
  document.getElementById('tierBar').style.display = 'none';
  exportEnabled = false; importEnabled = false;
  document.getElementById('exportToggle').classList.remove('checked'); document.getElementById('exportBox').textContent = '';
  document.getElementById('importToggle').classList.remove('checked'); document.getElementById('importBox').textContent = '';
  document.getElementById('readyDate').value = '';
  document.getElementById('loadRef').value = '';
  document.getElementById('notes').value = '';
  document.getElementById('resultCard').classList.remove('visible');
  document.getElementById('emptySummary').style.display = '';
  hideSuggestions();
}

function submitBooking() {
  var readyVal = document.getElementById('readyDate').value;
  var refVal = document.getElementById('loadRef').value.trim();
  if (!selectedClient) { alert('Please select a client.'); return; }
  if (qtys.cold === 0 && qtys.ambient === 0) { alert('Please add at least one pallet.'); return; }
  if (!readyVal) { alert('Please select a cargo ready date.'); return; }
  if (!refVal) { alert('Please enter a loading reference.'); return; }

  var total = qtys.cold + qtys.ambient;
  var price = getPrice(selectedClient, total);
  var coldAmt = qtys.cold * price, ambAmt = qtys.ambient * price;
  var grandTotal = coldAmt + ambAmt + (exportEnabled ? 75 : 0) + (importEnabled ? 75 : 0);

  var params = {
    to_email: 'tracking.hitec.quickstat@gmail.com',
    client_name: selectedClient.name,
    client_location: selectedClient.postcode + ', ' + selectedClient.country,
    ready_date: formatDate(readyVal),
    load_ref: refVal,
    pallets_cold: qtys.cold > 0 ? qtys.cold + ' pallet(s) 2-8C = EUR ' + coldAmt : 'None',
    pallets_ambient: qtys.ambient > 0 ? qtys.ambient + ' pallet(s) 15-25C = EUR ' + ambAmt : 'None',
    customs_export: exportEnabled ? 'Yes (+EUR 75)' : 'No',
    customs_import: importEnabled ? 'Yes (+EUR 75)' : 'No',
    total: 'EUR ' + grandTotal,
    notes: document.getElementById('notes').value.trim() || 'None'
  };

  var btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending...'; btn.disabled = true;

  emailjs.send('service_ko0kf6h', 'template_vqivfxc', params)
    .then(function() {
      var rows = [
        { l: 'Client', v: selectedClient.name },
        { l: 'Location', v: selectedClient.postcode + ', ' + selectedClient.country },
        { l: 'Cargo ready', v: formatDate(readyVal) },
        { l: 'Reference', v: refVal }
      ];
      if (qtys.cold > 0) rows.push({ l: 'Cold pallets', v: qtys.cold + ' x EUR ' + price });
      if (qtys.ambient > 0) rows.push({ l: 'Ambient pallets', v: qtys.ambient + ' x EUR ' + price });
      if (exportEnabled) rows.push({ l: 'Export customs', v: '+EUR 75' });
      if (importEnabled) rows.push({ l: 'Import customs', v: '+EUR 75' });
      rows.push({ l: 'Total', v: 'EUR ' + grandTotal, p: true });
      document.getElementById('successDetails').innerHTML = rows.map(function(r) {
        return '<div class="sd-row"><span class="sd-label">'+r.l+'</span><span class="sd-val'+(r.p?' price':'')+'" >'+r.v+'</span></div>';
      }).join('');
      document.getElementById('mainForm').style.display = 'none';
      var ss = document.getElementById('successScreen');
      ss.style.display = 'block'; ss.classList.add('visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      btn.textContent = 'Submit booking'; btn.disabled = false;
    })
    .catch(function(err) {
      console.error('EmailJS error:', err);
      alert('Error sending. Please try again.');
      btn.textContent = 'Submit booking'; btn.disabled = false;
    });
}

function newBooking() {
  resetAll();
  document.getElementById('successScreen').style.display = 'none';
  document.getElementById('successScreen').classList.remove('visible');
  document.getElementById('mainForm').style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('load', init);
