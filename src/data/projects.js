// payroll app
import payroll1 from "../assets/images/PayrollApp/img1.png";
import payroll2 from "../assets/images/PayrollApp/img2.png";
import payroll3 from "../assets/images/PayrollApp/img3.png";
import payroll4 from "../assets/images/PayrollApp/img4.png";

// qplus app
import qplusThumbnail from "../assets/images/QplusApp/thumbnail.png";
import qplus from "../assets/images/QplusApp/img.png";
import qplus1 from "../assets/images/QplusApp/img1.png";
import qplus2 from "../assets/images/QplusApp/img2.png";
import qplus3 from "../assets/images/QplusApp/img3.png";
import qplus4 from "../assets/images/QplusApp/img4.png";
import qplus5 from "../assets/images/QplusApp/img5.png";

// kerjakeun app
import kerjakeunThumbnail from "../assets/images/KerjakeunApp/thumbnail.png";
import kerjakeun1 from "../assets/images/KerjakeunApp/img1.png";
import kerjakeun2 from "../assets/images/KerjakeunApp/img2.png";
import kerjakeun3 from "../assets/images/KerjakeunApp/img3.png";
import kerjakeun4 from "../assets/images/KerjakeunApp/img4.png";
import kerjakeun5 from "../assets/images/KerjakeunApp/img5.png";

// jalansehatistimewa
import jalansehatThumbnail from "../assets/images/JalanSehatIstimewa/thumbnail.png";
import jalansehat1 from "../assets/images/JalanSehatIstimewa/img1.png";
import jalansehat2 from "../assets/images/JalanSehatIstimewa/img2.png";
import jalansehat3 from "../assets/images/JalanSehatIstimewa/img3.png";
import jalansehat4 from "../assets/images/JalanSehatIstimewa/img4.png";

// amaliah finance
import amaliahThumbnail from "../assets/images/AmaliahFinance/tumbnail.png"
import amaliah1 from "../assets/images/AmaliahFinance/img1.png"
import amaliah2  from "../assets/images/AmaliahFinance/img2.png"
import amaliah3  from "../assets/images/AmaliahFinance/img3.png"
import amaliah4  from "../assets/images/AmaliahFinance/img4.png"
import amaliah5  from "../assets/images/AmaliahFinance/img5.png"
import amaliah6  from "../assets/images/AmaliahFinance/img6.png"
import amaliah7  from "../assets/images/AmaliahFinance/img7.png"
import amaliah8  from "../assets/images/AmaliahFinance/img8.png"
import amaliah9  from "../assets/images/AmaliahFinance/img9.png"
import amaliah10  from "../assets/images/AmaliahFinance/img10.png"

// other

import other1 from "../assets/images/lainnya/img1.jpeg"
import other2 from "../assets/images/lainnya/img2.png"
import other3 from "../assets/images/lainnya/img3.jpeg"

export const projects = [
  {
    id: "sistem-penggajian-karyawan",
    number: "01",
    title: "Sistem Penggajian Karyawan",
    role: "Web Designer, FullStack Developer",
    status: "Local",
    tools: ["Figma", "Tailwind", "Laravel"],
    about:
      "Aplikasi Penggajian Karyawan adalah sistem berbasis web yang dirancang untuk membantu perusahaan dalam mengelola data karyawan, dan proses perhitungan gaji secara otomatis dan efisien. Dengan adanya aplikasi ini, proses penggajian menjadi lebih cepat, akurat, dan mengurangi risiko kesalahan perhitungan manual.",
    features: [
      "Manajemen Data Karyawan",
      "Pengelolaan penggajian ",
      "Laporan penggajian",
    ],
    challenges:
      "Salah satu tantangan dalam pembuatan Aplikasi Penggajian Karyawan adalah proses perhitungan slip gaji yang harus mampu menggabungkan beberapa komponen seperti gaji pokok, gaji lembur, bonus, dan potongan pinjaman menjadi total gaji bersih secara otomatis. Permasalahan tersebut diselesaikan dengan membuat alur perhitungan yang menjumlahkan seluruh pendapatan kemudian mengurangi total potongan, sehingga hasil penggajian menjadi lebih akurat dan meminimalkan kesalahan perhitungan manual.",
    gallery: [
      payroll1,
      payroll2,
      payroll3,
      payroll4,
    ],
    thumbnail: payroll1,
    border: true,
    width: true,
    source: "https://github.com/mamutensttt/sistem-penggajian-karyawan",
  },


  {
    id: "qplus-app-mobile-design",
    number: "02",
    title: "QPlus App Mobile Design",
    role: "UI/UX Designer",
    status: "Local",
    tools: ["Figma"],
    about:
      "Qplus adalah Aplikasi penerimaan pembayaran QRIS untuk UMKM yang aman, cepat, dan tanpa biaya tambahan. ",
    features: [
      "Desain Sistem transaksi",
      "Desain Riwayat transaksi",
      "Desain Penarikan dana",
      "Desain Halaman Profil",
    ],
    challenges:
      "Salah satu tantangan dalam pembuatan QPlus App mobile design adalah menciptakan antarmuka yang intuitif dan mudah digunakan oleh pengguna dari berbagai kalangan. Permasalahan tersebut diselesaikan dengan melakukan riset pasar, membuat prototipe, dan melakukan uji coba dengan pengguna real.",
    gallery: [
      qplus,
      qplus1,
      qplus2,
      qplus3,
      qplus4,
      qplus5,
    ],
    thumbnail: qplusThumbnail,
    border: false,
    width: false,
    source: "https://www.figma.com/design/HIeTIA4QMM072dPjERzlr6/Qplus?node-id=322-242&t=BLORhdZ5hV27MSOa-1",
  },


  {
    id: "kerjakeun-app-mobile-design",
    number: "03",
    title: "Kerjakeun App Mobile Design",
    role: "UI/UX Designer",
    status: "local",
    tools: ["Figma"],
    about:
      "Kerjakeun adalah aplikasi untuk monitoring pekerjaan dari dinas-dinas yang ditunjuk untuk mengerjakan suatu pekerjaan/project Yang digunakan oleh pemerintah kabupaten Bogor khususnya bupati yang membuat tugas dan ditunjuk ke dinas-dinas",
    features: [
      "Desain manajemen tugas/task",
      "Desain layout board mode",
      "Desain layout list mode",
      "Desain profil pengguna",
      "Desain modal manajemen tugas/task",
    ],
    challenges:
      "Salah satu tantangan dalam pembuatan Kerjakeun App mobile design adalah menciptakan antarmuka yang intuitif dan mudah digunakan oleh pengguna dari berbagai kalangan. Permasalahan tersebut diselesaikan dengan membuat prototipe dan melakukan uji coba.",
    gallery: [
      kerjakeun1,
      kerjakeun2,
      kerjakeun3,
      kerjakeun4,
      kerjakeun5,
    ],
    thumbnail: kerjakeunThumbnail,
    border: false,
    width: false,
    source: "https://www.figma.com/design/2xpgyXHXkxYyzUo4BqqExj/Kerjakeun-app?node-id=0-1&t=o6T1PZbmuNFXb2mC-1",
  },

  
  {
    id: "jalansehatistimewa-website",
    number: "04",
    title: "Jalan sehat istimewa website",
    role: "UI/UX Designer, fullstack developer",
    status: "public",
    tools: ["Figma", "nextjs", "tailwind", "mysql", "nestjs"],
    about:
      "Jalan Sehat Istimewa merupakan website pendaftaran event jalan sehat dan jogging yang diselenggarakan di Stadion Pakansari. Website ini dibuat untuk mempermudah peserta dalam melakukan pendaftaran acara secara online, mendapatkan informasi terkait event, serta membantu panitia dalam mengelola data peserta dengan lebih terorganisir dan efisien. Melalui sistem ini, proses pendaftaran menjadi lebih cepat, praktis, dan mudah diakses, dengan lebih dari 100+ peserta berhasil mendaftar untuk mengikuti event ini.",
    features: [
      "sistem pendaftaran event secara online",
      "pembayaran online menggunakan qris",
      "form pendaftaran ",
      "kode peserta",
    ],
    challenges:
      "Salah satu tantangan dalam pembuatan website Jalan Sehat Istimewa adalah bagaimana membuat sistem pendaftaran yang mampu menangani banyak data peserta secara rapi dan terorganisir. Selain itu, diperlukan validasi data agar informasi peserta yang masuk tetap akurat dan mengurangi risiko data ganda atau kesalahan input. Tantangan lainnya adalah memastikan alur pendaftaran tetap mudah digunakan sehingga peserta dapat melakukan registrasi dengan cepat dan nyaman, terutama ketika jumlah pendaftar terus bertambah hingga lebih dari 100+ peserta.",
    gallery: [
      jalansehat1,
      jalansehat2,
      jalansehat3,
      jalansehat4,
    ],
    thumbnail: jalansehatThumbnail,
    border: false,
    width: false,
    source: "https://www.figma.com/design/2xpgyXHXkxYyzUo4BqqExj/JalanSehatIstimewa-app?node-id=0-1&t=o6T1PZbmuNFXb2mC-1",
  },
  
  {
    id: "amaliah-finance",
    number: "05",
    title: "Amaliah finance",
    role: "UI/UX Designer, frontend & backend developer",
    status: "local, tahap pengembangan",
    tools: ["Figma", "laravel", "tailwind", "mysql", "alphine.js"],
    about:
      "Amaliah Finance merupakan sistem pembayaran sekolah yang dibuat untuk membantu pengelolaan administrasi keuangan siswa secara lebih terorganisir dan efisien. Sistem ini digunakan untuk mengelola berbagai jenis pembayaran seperti SPP, DSP, pembayaran baju sekolah, dan kebutuhan administrasi lainnya dalam satu platform terintegrasi.",
    features: [
      "sistem pembayaran sekolah",
      "sistem transaksi",
      "riwaya transaksi ",
      "sistem notifikasi",
      "detail transaksi",
    ],
    challenges:
      "Salah satu tantangan dalam pengembangan Amaliah Finance adalah memahami kebutuhan sistem yang sesuai dengan proses administrasi sekolah. Untuk mengatasinya, dilakukan diskusi langsung bersama pihak sekolah agar fitur yang dibuat benar-benar sesuai dengan kebutuhan pembayaran siswa. Selain itu, terdapat tantangan dalam menjelaskan alur dan konsep sistem kepada pihak sekolah, sehingga dilakukan presentasi langsung kepada kepala sekolah untuk menjelaskan cara kerja serta manfaat dari sistem yang dikembangkan.",
    gallery: [
      amaliah1,
      amaliah2,
      amaliah3,
      amaliah4,
      amaliah5,
      amaliah6,
      amaliah7,
      amaliah8,
      amaliah9,
      amaliah10,
    ],
    thumbnail: amaliahThumbnail,
    border: false,
    width: false,
    source: "https://www.figma.com/design/ZHjo8pRE7KRrvFxYhoMpzS/Amaliah-Finance?node-id=1248-356&t=5UhlHyAc04GCPHRm-1",
  },


  {
    id: "flayer-design",
    number: "06",
    title: "Flayer Design",
    role: "flayer designer",
    status: "",
    tools: ["canva"],
    about:
      "",
    features: [],
    challenges:
      "",
    gallery: [
      other1
    ],
    thumbnail: other1,
    border: false,
    width: false,
    source: "",
  },
  {
    id: "uiux-sertifikat",
    number: "07",
    title: "UI/UI sertifikat",
    role: "peserta",
    status: "",
    tools: [""],
    about:
      "",
    features: [],
    challenges:
      "",
    gallery: [
      other2
    ],
    thumbnail: other2,
    border: false,
    width: false,
    source: "",
  },
  {
    id: "lomba-sertifikat",
    number: "06",
    title: "Lomba Sertifikat",
    role: "peserta",
    status: "",
    tools: [""],
    about:
      "",
    features: [],
    challenges:
      "",
    gallery: [
      other3
    ],
    thumbnail: other3,
    border: false,
    width: false,
    source: "",
  }
];