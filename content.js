const BRAND = { name: 'PT Alfatih Dunia Wisata', slogan: 'Umroh Anda, Dedikasi Kami.', whatsapp: '6285778212633', instagram: 'alfatih.umroh', permit: '16032300890440001' };
// Curated from assets/alfatih.umroh.json and .csv supplied with the project.
const PACKAGES = [
  { name: 'Umroh Reguler', category: 'umroh', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', image: 'assets/media/2025-10-13_13-40-08_[DPvVx1LiYfl].webp', source: 'Highlight Umroh Reguler' },
  { name: 'Umroh VIP', category: 'umroh', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', image: 'assets/media/2026-09-18_10-28-01_[DdaeDkbCRSE].jpg', source: 'Highlight Umroh VIP 1446 H' },
  { name: 'Umroh Ramadhan', category: 'umroh', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', image: 'assets/media/2025-09-30_16-50-21_[DPONM_GCS3Q].jpg', source: 'Highlight Umrah Ramadhan' },
  { name: 'Umroh Akhir Tahun', category: 'umroh', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', image: 'assets/media/2026-09-18_10-28-01_[DdaeDkbCRSE].jpg', source: 'Post @alfatih.umroh' },
  { name: 'Umroh Plus Turki', category: 'plus', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', image: 'assets/media/2025-02-26_10-52-32_[DGhYj6EpM4f].jpg', source: 'Highlight Umroh + Turkey' },
  { name: 'Wisata Halal', category: 'wisata', duration: 'Program tersedia', period: 'Tanya jadwal terbaru', image: 'assets/media/2025-11-15_10-41-30_[DRD_jxkiaAV].jpg', source: 'Post @alfatih.umroh' }
];
const MEDIA = [
  { category: 'plus', label: 'Umroh Plus Turki', image: 'assets/media/2025-09-29_14-42-48_[DPLZz5wCeYv].jpg', alt: 'Materi Umroh Plus Turki Alfatih' },
  { category: 'umroh', label: 'Umroh Reguler', image: 'assets/media/2025-10-13_13-40-08_[DPvVx1LiYfl].webp', alt: 'Dokumentasi Umroh Reguler' },
  { category: 'legal', label: 'Legal & Amanah', image: 'assets/media/2024-11-20_01-17-59_[DCkA6ClzgMo].jpg', alt: 'Materi legalitas Alfatih' },
  { category: 'testimoni', label: 'Cerita jamaah Alfatih', image: 'assets/media/2025-03-05_11-53-35_[DGzhKuYJMz9].jpg', alt: 'Dokumentasi testimoni Alfatih' },
  { category: 'umroh', label: 'Perjalanan jamaah', image: 'assets/media/2025-07-23_08-22-30_[DMboPDHhSQS].jpg', alt: 'Materi perjalanan umroh' },
  { category: 'plus', label: 'Perjalanan halal', image: 'assets/media/2025-07-14_15-06-19_[DMFLSzlJlFB].jpg', alt: 'Materi Umroh Plus Turki' },
  { category: 'umroh', label: 'Persiapan umroh', image: 'assets/media/2026-09-18_10-28-01_[DdaeDkbCRSE].jpg', alt: 'Materi paket umroh Alfatih' },
  { category: 'umroh', label: 'Momen Ramadhan', image: 'assets/media/2025-09-30_16-50-21_[DPONM_GCS3Q].jpg', alt: 'Materi Umroh Ramadhan' }
];
const FAQS = [
  ['Apakah Alfatih memiliki izin resmi?', 'Ya. Materi resmi Alfatih mencantumkan PPIU 16032300890440001 dan akreditasi Kemenag. Untuk dokumen atau verifikasi terbaru, silakan konsultasikan langsung.'],
  ['Apakah tersedia manasik sebelum berangkat?', 'Alur layanan Alfatih mencakup tahap manasik dan persiapan. Tanyakan jadwal serta ketentuan yang berlaku untuk program pilihan Anda.'],
  ['Apa saja fasilitas paket?', 'Fasilitas dapat berbeda menurut program dan periode. Tim Alfatih akan menjelaskan rincian paket yang sedang tersedia sebelum Anda memutuskan.'],
  ['Dokumen apa yang perlu disiapkan?', 'Kebutuhan dokumen mengikuti program dan kebijakan perjalanan yang berlaku. Hubungi tim untuk daftar dokumen terbaru.'],
  ['Bagaimana pembayaran dan keberangkatan?', 'Informasi pembayaran serta jadwal keberangkatan perlu dikonfirmasi langsung agar selalu sesuai dengan program terbaru.']
];
