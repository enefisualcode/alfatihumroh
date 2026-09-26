const BRAND = { name: 'PT Alfatih Dunia Wisata', slogan: 'Umroh Anda, Dedikasi Kami.', whatsapp: '6285778212633', instagram: 'alfatih.umroh', permit: '16032300890440001' };
// Curated from assets/alfatih.umroh.json and .csv supplied with the project.
const PACKAGES = [
  { name: 'Umroh Reguler', category: 'umroh', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', source: 'Highlight Umroh Reguler' },
  { name: 'Umroh VIP', category: 'umroh', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', source: 'Highlight Umroh VIP 1446 H' },
  { name: 'Umroh Ramadhan', category: 'umroh', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', source: 'Highlight Umrah Ramadhan' },
  { name: 'Umroh Akhir Tahun', category: 'umroh', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', source: 'Post @alfatih.umroh' },
  { name: 'Umroh Plus Turki', category: 'plus', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', source: 'Highlight Umroh + Turkey' },
  { name: 'Wisata Halal', category: 'wisata', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', source: 'Post @alfatih.umroh' }
];
const MEDIA = [
  { category: 'plus', label: 'Umroh Plus Turki', type: 'route' }, { category: 'umroh', label: 'Umroh Reguler', type: 'kaaba' },
  { category: 'legal', label: 'Legal & Amanah', type: 'seal' }, { category: 'testimoni', label: 'Cerita jamaah Alfatih', type: 'quote' },
  { category: 'umroh', label: 'Perjalanan jamaah', type: 'steps' }, { category: 'plus', label: 'Perjalanan halal', type: 'route' },
  { category: 'umroh', label: 'Persiapan umroh', type: 'calendar' }, { category: 'umroh', label: 'Momen Ramadhan', type: 'moon' }
];
const FAQS = [
  ['Apakah Alfatih memiliki izin resmi?', 'Ya. Materi resmi Alfatih mencantumkan PPIU 16032300890440001 dan akreditasi Kemenag. Untuk dokumen atau verifikasi terbaru, silakan konsultasikan langsung.'],
  ['Apakah tersedia manasik sebelum berangkat?', 'Alur layanan Alfatih mencakup tahap manasik dan persiapan. Tanyakan jadwal serta ketentuan yang berlaku untuk program pilihan Anda.'],
  ['Apa saja fasilitas paket?', 'Fasilitas dapat berbeda menurut program dan periode. Tim Alfatih akan menjelaskan rincian paket yang sedang tersedia sebelum Anda memutuskan.'],
  ['Dokumen apa yang perlu disiapkan?', 'Kebutuhan dokumen mengikuti program dan kebijakan perjalanan yang berlaku. Hubungi tim untuk daftar dokumen terbaru.'],
  ['Bagaimana pembayaran dan keberangkatan?', 'Informasi pembayaran serta jadwal keberangkatan perlu dikonfirmasi langsung agar selalu sesuai dengan program terbaru.']
];
