import Image from "next/image";
import { notFound } from "next/navigation";

const prokerData = {
  "Enginering-Competition": {
    title: "Engineering Competition",
    divisi: "PSDM",
    image: "/images/proker/detail/dekancup.jpg",
    full: "Engineering Competition 2025 adalah ajang prestisius yang menggabungkan kecanggihan strategi digital dengan semangat sportivitas fisik dalam satu panggung kompetisi yang dinamis. Dalam kategori e-sports, para peserta akan diuji ketangkasan taktisnya melalui turnamen Mobile Legends, Free Fire, dan Magic Chess GoGo yang menuntut kerja sama tim serta pemikiran kritis khas mahasiswa teknik. Tidak hanya di dunia virtual, kompetisi ini juga merambah ke lapangan hijau melalui pertandingan Futsal yang mengandalkan agilitas fisik, serta turnamen PlayStation bagi para pecinta simulasi olahraga konsol. Event ini hadir bukan sekadar untuk memperebutkan gelar juara, melainkan sebagai wadah kolaborasi, penguatan solidaritas, dan pembuktian mentalitas tangguh dalam menghadapi tantangan di era digital maupun dunia nyata."
  },
  "sidang": {
    title: "Pelatihan Persidangan",
    divisi: "BPH",
    image: "/images/proker/detail/sidang.png",
    full: "Pelatihan Sidang Musyawarah Besar ini hadir sebagai sarana edukasi strategis untuk membekali para kader organisasi dengan pemahaman mendalam mengenai tata laksana persidangan yang formal, sistematis, dan demokratis. Melalui pelatihan ini, peserta akan diajak untuk mendalami mekanisme pengambilan keputusan, teknik interupsi, hingga penyusunan konsideran sidang guna mempersiapkan regenerasi kepemimpinan yang berintegritas. Kegiatan ini dirancang untuk memastikan seluruh rangkaian Musyawarah Besar nantinya dapat berjalan secara efektif, terstruktur, dan sesuai dengan kaidah konstitusi organisasi yang berlaku."
  },
  "healing": {
    title: "Healing WIth Teknik",
    divisi: "Minat Bakat",
    image: "/images/proker/detail/healing.png",
    full: "Healing with Teknik hadir sebagai wadah penyegaran bagi mahasiswa teknik di tengah padatnya rutinitas akademik dan praktikum yang menuntut konsentrasi tinggi. Kegiatan ini dirancang khusus untuk menjaga keseimbangan kesehatan mental serta mempererat tali persaudaraan antar-angkatan melalui berbagai aktivitas rekreatif yang santai dan inspiratif. Dengan semangat kebersamaan, program ini menjadi momentum penting untuk melepas penat sejenak, membangun kembali energi positif, dan memperkuat solidaritas civitas akademika sebelum kembali berfokus pada inovasi dan pengembangan teknologi serta tugas kuliah."
  },
  "bem-fest": {
    title: "Partisipasi BEM CHAMPIONSHIP 2025",
    divisi: "HUMAS",
    image: "/images/proker/detail/bem.png",
    full: "Partisipasi BEM Championship merupakan wujud dedikasi dan keterlibatan aktif organisasi dalam ajang kompetisi bergengsi yang mempertemukan berbagai bakat di bidang olahraga maupun seni tingkat universitas. Melalui partisipasi ini, BEM berkomitmen untuk mengobarkan semangat juang dan integritas mahasiswa teknik dalam mengharumkan nama fakultas melalui prestasi non-akademik. Ajang ini bukan sekadar tentang perolehan gelar juara, melainkan sarana strategis untuk memperluas jejaring antar-organisasi, memperkuat identitas fakultas, serta membuktikan bahwa mahasiswa teknik memiliki kompetensi yang unggul dan suportif dalam berbagai aspek kompetisi."
  },
    "bukber": {
    title: "Buka Bersama",
    divisi: "HUMAS",
    image: "/images/proker/detail/bukber.png",
    full: "Buka Bersama di bulan Ramadhan adalah momen istimewa yang dirayakan dengan penuh kehangatan dan kebersamaan di antara civitas akademika. Kegiatan ini tidak hanya menjadi ajang untuk mempererat tali silaturahmi antar mahasiswa, dosen, dan staf, tetapi juga sebagai wujud syukur atas nikmat kesehatan dan kesempatan untuk beribadah bersama. Dengan suasana yang penuh kekeluargaan, acara buka puasa bersama ini diharapkan dapat menumbuhkan semangat solidaritas, empati, serta memperkuat ikatan sosial dalam komunitas kampus selama bulan suci Ramadhan."
  },
    "informasi": {
    title: "Informasi Akademik",
    divisi: "IMFOKOM",
    image: "/images/proker/detail/informasi.png",
    full: "Penyebaran Informasi Akademik secara efektif merupakan aspek krusial dalam mendukung kelancaran proses belajar mengajar di lingkungan fakultas teknik. Melalui inisiatif ini, BEM berkomitmen untuk menyediakan akses informasi yang akurat, terkini, dan mudah diakses mengenai berbagai aspek akademik seperti jadwal kuliah, perubahan kurikulum, beasiswa, serta kegiatan akademik lainnya. Dengan demikian, mahasiswa dapat lebih siap dan terinformasi dalam menjalani perjalanan akademiknya, sekaligus memperkuat komunikasi antara pihak fakultas dan mahasiswa demi terciptanya lingkungan belajar yang kondusif dan produktif."
  },
  "gapsi": {
    title: "Pertandingan GAPSI",
    divisi: "Minat Bakat",
    image: "/images/proker/detail/gapsi.png",
    full: "Pertandingan GAPSI (Gelar Apresiasi Prestasi Seni dan Olahraga) adalah ajang kompetisi yang dirancang untuk mengasah bakat dan keterampilan mahasiswa dalam bidang seni dan olahraga. Melalui pertandingan ini, peserta akan diuji kemampuan teknis, kreativitas, serta sportivitasnya dalam berbagai cabang seni pertunjukan dan olahraga. Kegiatan ini tidak hanya bertujuan untuk mencari juara, tetapi juga sebagai sarana pengembangan diri, peningkatan rasa percaya diri, serta mempererat solidaritas antar mahasiswa melalui semangat kompetisi yang sehat dan positif."
  },
  "sosmed": {
    title: "Sosial Media",
    divisi: "IMFOKOM",
    image: "/images/proker/detail/sosmed.png",
    full: "Pengaktifan akun sosial media BEM-KM-FT merupakan langkah strategis untuk memperkuat kehadiran digital organisasi di era informasi saat ini. Melalui platform sosial media, BEM dapat lebih efektif dalam menyebarkan informasi, berinteraksi dengan mahasiswa, serta mempromosikan berbagai kegiatan dan program kerja yang dijalankan. Dengan konten yang menarik dan relevan, akun sosial media ini diharapkan dapat menjadi jembatan komunikasi yang dinamis antara BEM dan civitas akademika, sekaligus meningkatkan partisipasi aktif mahasiswa dalam berbagai inisiatif organisasi."
  },
  "wisuda": {
    title: "Parade Wisuda Teknik",
    divisi: "PSDM",
    image: "/images/proker/detail/wisuda.png",
    full: "Parade Wisuda Teknik adalah sebuah perayaan istimewa yang dirancang untuk menghormati dan merayakan pencapaian akademik para lulusan fakultas teknik. Acara ini tidak hanya menjadi momen bersejarah bagi para wisudawan, tetapi juga sebagai simbol kebanggaan bagi seluruh civitas akademika. Melalui parade yang meriah, para lulusan dapat menunjukkan identitas mereka sebagai bagian dari komunitas teknik, sekaligus menginspirasi generasi berikutnya untuk terus berprestasi dan berkontribusi dalam bidang teknologi dan inovasi."
  },
  "maba": {
    title: "Maba Teknik Orientation",
    divisi: "PSDM",
    image: "/images/proker/detail/maba.png",
    full: "Maba Teknik Orientation adalah program pengenalan yang dirancang khusus untuk menyambut mahasiswa baru di lingkungan fakultas teknik. Kegiatan ini bertujuan untuk memberikan gambaran menyeluruh mengenai kehidupan akademik, budaya kampus, serta berbagai fasilitas dan sumber daya yang tersedia bagi mahasiswa. Melalui orientasi ini, para mahasiswa baru diharapkan dapat lebih mudah beradaptasi, membangun jaringan sosial, serta memahami nilai-nilai dan etika yang dijunjung tinggi di fakultas teknik. Program ini juga menjadi kesempatan bagi mahasiswa baru untuk mengenal lebih dekat organisasi kemahasiswaan, termasuk BEM, yang akan mendukung perjalanan akademik mereka selama di kampus."
  },
  "lkmm": {
    title: "LKMM-TD",
    divisi: "BPH",
    image: "/images/proker/detail/lkmm.png",
    full: "LKMM-TD (Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar) adalah program pelatihan yang dirancang untuk membekali mahasiswa dengan keterampilan dasar dalam manajemen organisasi kemahasiswaan. Melalui pelatihan ini, peserta akan diajarkan berbagai aspek penting seperti perencanaan, pengorganisasian, kepemimpinan, serta teknik komunikasi efektif yang sangat dibutuhkan dalam menjalankan tugas-tugas organisasi. Program ini bertujuan untuk menciptakan kader-kader mahasiswa yang kompeten, profesional, dan siap menghadapi tantangan dalam mengelola organisasi kemahasiswaan di tingkat fakultas maupun universitas."
  },
  "website": {
    title: "Pengembangan Website BEM FT",
    divisi: "IMFOKOM",
    image: "/images/proker/detail/web.png",
    full: "Pengembangan Website BEM FT merupakan inisiatif strategis untuk meningkatkan visibilitas dan aksesibilitas informasi mengenai kegiatan, program kerja, serta layanan yang disediakan oleh Badan Eksekutif Mahasiswa Fakultas Teknik. Melalui website ini, diharapkan dapat menjadi platform komunikasi yang efektif antara BEM dengan mahasiswa, dosen, serta pihak eksternal lainnya. Website ini akan dirancang dengan tampilan yang user-friendly, responsif, dan informatif, sehingga memudahkan pengguna dalam menjelajahi berbagai konten yang tersedia, mulai dari berita terkini, agenda kegiatan, hingga sumber daya akademik yang bermanfaat bagi civitas akademika."
  },
  "semarak": {
    title: "Semarak Ramadhan",
    divisi: "HUMAS",
    image: "/images/proker/detail/semarak.png",
    full: "Semarak Ramadhan adalah sebuah inisiatif yang dirancang untuk merayakan dan menghidupkan suasana bulan suci Ramadhan di lingkungan fakultas teknik. Kegiatan ini bertujuan untuk mempererat tali silaturahmi antar mahasiswa, dosen, dan staf melalui berbagai acara yang penuh makna, seperti buka puasa bersama, pengajian, serta kegiatan sosial yang menumbuhkan kepedulian terhadap sesama. Dengan semangat kebersamaan dan keikhlasan, Semarak Ramadhan diharapkan dapat menjadi momentum penting untuk meningkatkan kualitas ibadah, memperkuat solidaritas komunitas kampus, serta menumbuhkan rasa empati dan kepedulian sosial selama bulan yang penuh berkah ini."
  }
};

export default function DetailProker({ params }: { params: { slug: string } }) {
  const data = prokerData[params.slug as keyof typeof prokerData];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 px-6 max-w-5xl mx-auto text-center">

      <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-600 text-white shadow">
        {data.divisi}
      </span>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
        {data.title}
      </h1>

      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-10 shadow-xl">
        <Image 
          src={data.image} 
          alt={data.title} 
          fill 
          className="object-cover"
        />
      </div>

      <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
        {data.full}
      </p>

    </main>
  );
}
