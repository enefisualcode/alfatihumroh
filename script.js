const wa = (text = 'Assalamu’alaikum, saya ingin berkonsultasi tentang paket Alfatih Dunia Wisata.') => `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
document.querySelectorAll('[data-wa]').forEach(a => a.href = wa());
document.getElementById('year').textContent = new Date().getFullYear();
const packageGrid = document.getElementById('package-grid');
function renderPackages(filter = 'all') { packageGrid.innerHTML = PACKAGES.filter(p => filter === 'all' || p.category === filter).map((p, index) => `<article class="package-card package-${p.category}"><div class="package-art" aria-hidden="true"><span>${String(index + 1).padStart(2,'0')}</span><i></i><i></i><i></i></div><div><p class="card-kicker">${p.source}</p><h3>${p.name}</h3><dl><div><dt>Durasi</dt><dd>${p.duration}</dd></div><div><dt>Periode</dt><dd>${p.period}</dd></div></dl><a href="${wa(`Assalamu’alaikum, saya ingin menanyakan ${p.name}. Mohon jadwal dan informasi terbaru.`)}" class="card-link">Tanya program ini <span>→</span></a></div></article>`).join(''); }
renderPackages();
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); renderPackages(button.dataset.filter); }));
const gallery = document.getElementById('gallery-grid');
function renderMedia(filter = 'all') { gallery.innerHTML = MEDIA.filter(m => filter === 'all' || m.category === filter).map(m => `<article class="media-card ${m.type}"><div class="media-illustration" aria-hidden="true"><i></i><i></i><i></i></div><span>${m.label}</span></article>`).join(''); }
renderMedia();
document.querySelectorAll('.media-filter').forEach(button => button.addEventListener('click', () => { document.querySelector('.media-filter.active').classList.remove('active'); button.classList.add('active'); renderMedia(button.dataset.media); }));
const faq = document.getElementById('faq-list'); faq.innerHTML = FAQS.map(([q,a]) => `<details><summary>${q}<span>+</span></summary><p>${a}</p></details>`).join('');
document.getElementById('interest').innerHTML = '<option value="">Pilih minat paket</option>' + PACKAGES.map(p => `<option>${p.name}</option>`).join('');
document.getElementById('consult-form').addEventListener('submit', e => { e.preventDefault(); const d = Object.fromEntries(new FormData(e.target)); location.href = wa(`Assalamu’alaikum, saya ${d.name}.\nWhatsApp: ${d.phone}\nMinat paket: ${d.interest || '-'}\nRencana keberangkatan: ${d.departure || '-'}.\nMohon informasinya.`); });
const toggle = document.querySelector('.menu-toggle'), nav = document.getElementById('site-nav'); toggle.onclick = () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', !open); nav.classList.toggle('open', !open); };
document.getElementById('structured-data').textContent = JSON.stringify({ '@context':'https://schema.org', '@type':['Organization','TravelAgency'], name:BRAND.name, slogan:BRAND.slogan, telephone:'+6285778212633', sameAs:['https://www.instagram.com/alfatih.umroh/'], url:'https://enefisualcode.github.io/alfatihumroh/' });
