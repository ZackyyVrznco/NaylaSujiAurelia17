function waktuRealtime() {
  var d = new Date();
  var a = d.toLocaleString();
  document.getElementById("waktu").innerHTML = a;
}
setInterval(waktuRealtime, 1);



var zonk = "Kamu kurang beruntung, tekan tombol/gambar panah kiri di bawah ini untuk mencoba lagi";
var jmlzonk = 0;

function CobaLagi() {
  if (jmlzonk < zonk.length) {
    document.getElementById("kurang").innerHTML += zonk.charAt(jmlzonk);
    jmlzonk++;
    setTimeout(CobaLagi, 10);
  }
}
setTimeout(CobaLagi, 300);


var tekssapaanindo1 = "Yeayyy sekarang kamu umurnya udah 17 tahun nih sekaligus ulang tahun pertama kamu di JKT48 juga, hari yang kamu tunggu akhir datang juga, harapan aku buat kamu ada banyak banget, semoga semua harapan dan doa doa kamu segera terwujud, semoga kamu menjadi orang yang jauh lebih baik lagi dan dewasa ke depannya, semoga kamu semakin pintar berbicara bahasa Indonesianya, semoga kamu bisa menjadi idol yang hebat, semoga semakin banyak orang yang mendukungmu dan menjadikan kamu sebagai oshi, semoga kamu selalu diberikan kesehatan agar bisa terus menampilkan yang terbaik di setiap shownya, semoga kamu selalu dikelilingi oleh orang orang baik di sekitar kamu, dan semoga setiap hari dalam hidupmu selalu dipenuhi dengan banyak kebahagiaan. Ngomong ngomong kamu gimana kabarnya? semoga kamu baik baik aja ya, gimana perasaannya sekarang umurnya udah 17 tahun? kamu seneng ga? pastinya senang lah ya. Banyak orang bilang kalau umur 17 tahun itu umur yang spesial, selain kamu yang semakin dewasa, di umur 17 tahun ini banyak hal baru yang bisa kamu coba dan kamu pelajari, banyak juga tanggung jawab juga yang akan datang ke kamu, tapi aku yakin kamu pasti bisa jalanin semua itu, aku juga bakal selalu ada di setiap perjalanan kamu untuk terus berkembang di JKT48, jadi jangan pernah merasa kalau kamu sendirian, karena banyak banget orang yang mendukung kamu disini, fans fans kamu dan teman teman kamu di JKT48. Aku di sini sekaligus mau ngucapin terima kashi buat kerja kerasnya selama ini di JKT48, kamu keren, aku selalu bangga melihat semua perkembangan kamu selama ini, walaupun aku belum pernah melihatnya secara langsung di teater, apalagi perkembangan berbicara Indonesianya juga, tau ga sekarang setiap kamu live Showroom atau IDN, mendengar cara berbicara kamu udah semakin lancar banget, bahkan kamu sekarang udah bisa bercanda sama ngeledek ya wkwk, semuanya udah jauh berkembang sekarang. Terima kashi juga karena selalu ceria di setiap live Showroom dan IDNnya, walaupun terkadang kamu terlihat kebingungan saat sedang membaca komentar, tapi kamu selalu bertanya jika ada hal yang kurang kamu mengerti, dan di live berikutnya selalu ada saja hal yang berkembang darimu-";
var i = 0;

function efekMengetikSapaanIndo1() {
  if (i < tekssapaanindo1.length) {
    document.getElementById("sapaanindo1").innerHTML += tekssapaanindo1.charAt(i);
    i++;
    setTimeout(efekMengetikSapaanIndo1, 50);
  }
}
setTimeout(efekMengetikSapaanIndo1, 3050);

var tekslanjutanindo1 = "Hai Nayla, pertama aku mau ucapin selamat ulang tahun yang ke - ";
var j = 0;
var angka = 1;
var intervalId;

function hitungAngka() {
  if (angka <= 17) {
    document.getElementById("umur").innerHTML = angka;
    angka++;
  } else {
    clearInterval(intervalId);
  }
}

function efekMengetikLanjutanIndo1() {
  if (j < tekslanjutanindo1.length) { 
    document.getElementById("lanjutanindo1").innerHTML += tekslanjutanindo1.charAt(j);
    j++;
    setTimeout(efekMengetikLanjutanIndo1, 50);
  } else {
    intervalId = setInterval(hitungAngka, 100);
    hitungAngka();
  }
}

setTimeout(efekMengetikLanjutanIndo1, 650);






var tekssapaanindo2 = "TESSS";
var k = 0;

function efekMengetikSapaanIndo2() {
  if (k < tekssapaanindo2.length) {
    document.getElementById("sapaanindo2").innerHTML += tekssapaanindo2.charAt(k);
    k++;
    setTimeout(efekMengetikSapaanIndo2, 100);
  }
}
setTimeout(efekMengetikSapaanIndo2, 10);

var tekslanjutanindo2 = "Aku juga senang melihat bagaimana kamu selalu berinteraksi dengan fans dengan penuh keceriaan dan ketulusan. Setiap senyuman dan tawa yang kamu bagikan membuat kami merasa dekat denganmu. Kamu memiliki bakat untuk membuat orang merasa dihargai dan disayangi, dan itu adalah salah satu alasan mengapa banyak orang yang mendukungmu. Selain itu, aku ingin mengatakan bahwa perjalananmu di JKT48 baru saja dimulai, dan masih banyak hal hebat yang menantimu di masa depan. Setiap langkah kecil yang kamu ambil, setiap latihan yang kamu jalani, dan setiap penampilan yang kamu berikan adalah bagian dari perjalanan luar biasa ini. Jangan pernah merasa kecil hati atau ragu, karena kami selalu berada di sini untuk mendukungmu. Aku juga berharap kamu selalu menjaga kesehatanmu. Di tengah jadwal yang padat dan aktivitas yang banyak, penting sekali untuk tetap memperhatikan kesehatan fisik dan mentalmu. Jangan ragu untuk beristirahat ketika kamu merasa lelah, dan selalu ingat bahwa kami mendukungmu untuk menjadi yang terbaik tanpa harus mengorbankan kesehatanmu. Harapanku untukmu tidak hanya terbatas selama perjalanan kamu di JKT48, tetapi juga untuk kebahagiaanmu secara keseluruhan. Sekali semoga kamu selalu dikelilingi oleh orang-orang yang peduli dan mendukungmu, baik di dalam maupun di luar JKT48. Semoga setiap harimu dipenuhi dengan kebahagiaan, tawa, dan cinta. Teruslah berani mencoba hal-hal baru dan menjelajahi dunia dengan penuh semangat. Ngomong ngomong sampai ketumu di VC tanggal 22 nanti ya, ada banyak hal yang ingin aku sampaikan karena di VC sebelumnya tidak sempat aku sampaikan.";
var l = 0;

function efekMengetikLanjutanIndo2() {
  if (l < tekslanjutanindo2.length) {
    document.getElementById("lanjutanindo2").innerHTML += tekslanjutanindo2.charAt(l);
    l++;
    setTimeout(efekMengetikLanjutanIndo2, 50);
  }
}
setTimeout(efekMengetikLanjutanIndo2, 650);



var pipi = " *Pipi sama poni keruyukukuknya jangan sampai hilang yaa!!!";
var poni = 0;

function PoniKeruyukukuk() {
  if (poni < pipi.length) {
    document.getElementById("PipiPoni").innerHTML += pipi.charAt(poni);
    poni++;
    setTimeout(PoniKeruyukukuk, 50);
  }
}
setTimeout(PoniKeruyukukuk, 22500);




var teksKlipUlangTahun = "Sekarang umurnya udah 17 tahun nih, udah dewasa";
var q = 0;

function efekKlipUlangTahun() {
  if (q < teksKlipUlangTahun.length) {
    document.getElementById("klip").innerHTML += teksKlipUlangTahun.charAt(q);
    q++;
    setTimeout(efekKlipUlangTahun, 80);
  }
}
setTimeout(efekKlipUlangTahun, 1500);








var tekssapaanjepang1 = "おめでとう、Nayla！あなたが17歳になったこと、そしてJKT48での最初の誕生日を迎えたこと、本当に嬉しいです。あなたが待ち望んでいた日がついに来ましたね。私の願いはあなたが夢や祈りを叶えることができるように、そしてこれからもっと素晴らしい人に成長していくことです。インドネシア語も上手に話せるようになって、素敵なアイドルになれますように。もっと多くの人があなたを支持して、あなたを推しメンに選んでくれることを願っています。でのライブが最高のパフォーマンスを続けられるように、常に健康でありますように。そして、いつも良い人たちに囲まれて、毎日が幸せで満ち溢れていますように。さて、あなたの近況はどうですか？元気でいてくれていますか？17歳になった感想はどうですか？きっと嬉しいですよね。17歳は特別な年齢だとよく言われます。成長するだけでなく、新しいことを試したり学んだりする機会がたくさんありますし、新しい責任も増えてきます。でも、あなたならきっと上手く乗り越えられると信じています。JKT48での成長をこれからもずっと応援していますから、一人だと感じることはありませんよ。ここにはあなたを支持する多くのファンやJKT48の友達がいます。JKT48での頑張りに感謝してるよ。君は本当にかっこいいし、成長してきた姿を見ていつも誇りに思ってる。まだ劇場で直接見たことはないけど、ShowroomやIDNでのライブではインドネシア語がどんどん上手になってきてるのが分かるよ。冗談を言ったりからかったりするのも上手になってきてて、すごく成長してるね。ライブでいつも明るくて元気な姿を見せてくれてありがとう。コメントを読む時に戸惑うこともあるけど、分からないことがあれば聞いて、次のライブではまた成長した姿を見せてくれて嬉しいよ-";
var m = 0;

function efekMengetikSapaanJepang1() {
  if (m < tekssapaanjepang1.length) {
    document.getElementById("sapaanjepang1").innerHTML += tekssapaanjepang1.charAt(m);
    m++;
    setTimeout(efekMengetikSapaanJepang1, 50);
  }
}
setTimeout(efekMengetikSapaanJepang1, 3050);

var tekslanjutanjepang1 = "Nayla, 17歳のお誕生日おめでとうございます ";
var n = 0;
var angka = 1;
var intervalId;

function hitungAngka() {
  if (angka <= 17) {
    document.getElementById("umur").innerHTML = angka;
    angka++;
  } else {
    clearInterval(intervalId);
  }
}

function efekMengetikLanjutanJepang1() {
  if (n < tekslanjutanjepang1.length) { 
    document.getElementById("lanjutanjepang1").innerHTML += tekslanjutanjepang1.charAt(n);
    n++;
    setTimeout(efekMengetikLanjutanJepang1, 50);
  } else {
    intervalId = setInterval(hitungAngka, 100);
    hitungAngka();
  }
}

setTimeout(efekMengetikLanjutanJepang1, 650);






var tekssapaanjepang2 = "HALO HALO HALO";
var o = 0;

function efekMengetikSapaanJepang2() {
  if (o < tekssapaanjepang2.length) {
    document.getElementById("sapaanjepang2").innerHTML += tekssapaanjepang2.charAt(o);
    o++;
    setTimeout(efekMengetikSapaanJepang2, 100);
  }
}
setTimeout(efekMengetikSapaanJepang2, 10);

var tekslanjutanjepang2 = "あなたがいつもファンとの交流を楽しそうに、そして心から行っているのを見るのが好きです。あなたが分かち合う笑顔や笑いは、私たちがあなたと近い感じがして、とても嬉しいです。人々を大切にし、愛されていると感じさせる才能があるから、多くの人があなたを応援しています。また、JKT48でのあなたの旅は始まったばかりで、未来にはまだ素晴らしいことがたくさん待っています。あなたが踏み出す小さな一歩、一生懸命に取り組む練習、そして提供するすべてのパフォーマンスは、この素晴らしい旅の一部です。決して落ち込んだり、疑ったりしないでください。私たちはいつもここであなたをサポートしています。また、健康を守ることも忘れないでください。忙しいスケジュールと多くの活動の中で、身体と精神の健康を大切にすることは非常に重要です。疲れた時は休むことを恐れず、最高であることをサポートしていますが、健康を犠牲にする必要はありません。JKT48での旅だけでなく、あなたの幸せ全体に対する私の願いです。JKT48内外で、あなたを気遣い、サポートしてくれる人々に囲まれてほしいです。毎日が幸せと笑顔と愛で満ち溢れますように。新しいことに挑戦し続け、世界を探検する勇気を持ってください。ちなみに22日のVCで会えるのを楽しみにしています。前回のVCでは話せなかったことがたくさんあるからです";
var p = 0;

function efekMengetikLanjutanJepang2() {
  if (p < tekslanjutanjepang2.length) {
    document.getElementById("lanjutanjepang2").innerHTML += tekslanjutanjepang2.charAt(p);
    p++;
    setTimeout(efekMengetikLanjutanJepang2, 50);
  }
}
setTimeout(efekMengetikLanjutanJepang2, 650);




var videos = document.querySelectorAll(".bergulir");
videos.forEach(function(video) {
    video.addEventListener('loadedmetadata', function() {
      
		   this.play();
    }, false);
    video.style.animation = "scroll 80s linear infinite";
});




var r = 0;
var wish = 'Sekarang ucapin dalam hati, harapan harapan dan doa untuk diri kamu sendiri di umurnya yang sekarang udah 17 tahun.																																																																																							Udah? kalau udah, aku harap semua harapan dan doa doa kamu terkabulkan yaa!!! sekali lagi selamat ulang tahun Nayla';
var speed = 50;

function wishh() {
  if (r < wish.length) {
    document.getElementById("harapan").innerHTML += wish.charAt(r);
    r++;
    setTimeout(wishh, speed);
  }
}



var klik = "Diklik dulu yaa gambar kue nya, sebelum lanjut ke halaman selanjutnya";
var s = 0;

function KlikGambar() {
  if (s < klik.length) {
    document.getElementById("klikgambarkue").innerHTML += klik.charAt(s);
    s++;
    setTimeout(KlikGambar, 10);
  }
}
setTimeout(KlikGambar, 10);




var hadiah = "Yeayyyy, bisa dipilih lagi ya hadiahnya, tinggal tekan panah ke kiri di bawah buat kembali ke halaman sebelumnya atau tekan panah ke kanan buat lanjut ke halaman berikutnya. Ada 3 dari 5 hadiah di kotak itu yang bakal aku gift langsung yaa, ditunggu!!!";
var t = 0;

function Hadiah() {
  if (t < hadiah.length) {
    document.getElementById("gift").innerHTML += hadiah.charAt(t);
    t++;
    setTimeout(Hadiah, 10);
  }
}
setTimeout(Hadiah, 10);



var pilihhadiah = "Disini ada 9 kotak kado yang bisa kamu pilih, ada 5 kotak isi hadiah dan 4 kotak lagi yang tidak isinya, tinggal diklik aja kotak hadiahnya yaa!!!";
var u = 0;

function Pilih() {
  if (u < pilihhadiah.length) {
    document.getElementById("PILIH").innerHTML += pilihhadiah.charAt(u);
    u++;
    setTimeout(Pilih, 10);
  }
}
setTimeout(Pilih, 10);



 window.onload = function() {
        var GeserKanan = document.querySelector('.geserDariKanan');
        GeserKanan.style.display = 'none';

        setTimeout(function() {
            GeserKanan.style.display = 'block';
        }, 1000);
    };
	
 window.onload = function() {
        var GeserKiri = document.querySelector('.geserDariKiri');
        GeserKiri.style.display = 'none';

        setTimeout(function() {
            GeserKiri.style.display = 'block';
        }, 1000);
    };
	
	
 window.onload = function() {
        var GeserKiriDiam = document.querySelector('.geserDariKiriDiam');
        GeserKiriDiam.style.display = 'none';

        setTimeout(function() {
            GeserKiriDiam.style.display = 'block';
        }, 3000);
    };

 window.onload = function() {
        var GeserKananPas = document.querySelector('.geserDariKananPas');
        GeserKananPas.style.display = 'none';

        setTimeout(function() {
            GeserKananPas.style.display = 'block';
        }, 3000);
    };


var kliksurat = "Ada surat nih, diklik coba gambar suratnya  ";
var v = 0;

function KlikSurat() {
  if (v < kliksurat.length) {
    document.getElementById("KLIKSURAT").innerHTML += kliksurat.charAt(v);
    v++;
    setTimeout(KlikSurat, 30);
  }
}
setTimeout(KlikSurat, 2000);

var kliksuratbuka = "Diklik lagi coba gambar suratnya  ";
var w = 0;

function KlikSuratBuka() {
  if (w < kliksuratbuka.length) {
    document.getElementById("KLIKSURATBUKA").innerHTML += kliksuratbuka.charAt(w);
    w++;
    setTimeout(KlikSuratBuka, 30);
  }
}
setTimeout(KlikSuratBuka, 2000);




var instagram = "@zckyvrznco  	";
var x = 0;

function Instagram() {
  if (x < instagram.length) {
    document.getElementById("IG").innerHTML += instagram.charAt(x);
    x++;
    setTimeout(Instagram, 10);
  }
}
setTimeout(Instagram, 3000);





var twt = "@vrzncoptr ( Zackyy - ザッキー )		";
var y = 0;

function Twitter() {
  if (y < twt.length) {
    document.getElementById("TWITTER_X").innerHTML += twt.charAt(y);
    y++;
    setTimeout(Twitter, 10);
  }
}
setTimeout(Twitter, 3000);


var arigato = "Sekian dan Terima Kashi		";
var z = 0;
function TerimaKashi() {
  if (z < arigato.length) {
    document.getElementsByClassName("terimakashi")[0].innerHTML += arigato.charAt(z);
    z++;
    setTimeout(TerimaKashi, 10);
  }
}
setTimeout(TerimaKashi, 3000);




var surat = document.getElementById('surat');
var posisi = 0;
var arah = 1;
setInterval(function() {
  posisi += arah;
  if (posisi > 40 || posisi < 0) {
    arah = -arah;
  }
  surat.style.transform = 'translateY(' + posisi + 'px)';
}, 10000);




var kertassurat = document.getElementById('kertas_surat');
var posisikertas = 0;
var arahkertas = 1;
setInterval(function() {
  posisikertas += arahkertas;
  if (posisikertas > 20 || posisikertas < 0) {
    arahkertas = -arahkertas;
  }
  kertassurat.style.transform = 'translateY(' + posisikertas + 'px)';
}, 10);





var saran = "Komentar :  	";
var a = 0;

function KritikdanSaran() {
  if (a < saran.length) {
    document.getElementById("Saran").innerHTML += saran.charAt(a);
    a++;
    setTimeout(KritikdanSaran, 10);
  }
}
setTimeout(KritikdanSaran, 1000);



var AlasanLatar = "Klik tombol warna merah di samping untuk melihat alasan kenapa gambar gambar itu yang dipakai buat dijadikan sebagai latar belakang 	";
var kenapa = 0;

function AlasanLatarBelakang() {
  if (kenapa < AlasanLatar.length) {
    document.getElementById("Alasan").innerHTML += AlasanLatar.charAt(kenapa);
    kenapa++;
    setTimeout(AlasanLatarBelakang, 10);
  }
}
setTimeout(AlasanLatarBelakang, 2000);




var hariH = "Sekarang udah tanggal 18 Juni ya...  	";
var dDay = 0;

function HariIni() {
  if (dDay < hariH.length) {
    document.getElementById("DDAY").innerHTML += hariH.charAt(dDay);
    dDay++;
    setTimeout(HariIni, 100);
  }
}
setTimeout(HariIni, 1800);



var kiri = "INI TOMBOL BUAT KEMBALI KE HALAMAN SEBELUMNYA";
var sebelumnya = 0;

function HalamanSebelumnya() {
  if (sebelumnya < kiri.length) {
    document.getElementById("Sebelum").innerHTML += kiri.charAt(sebelumnya);
    sebelumnya++;
    setTimeout(HalamanSebelumnya, 10);
  }
}
setTimeout(HalamanSebelumnya, 1400);



var kiri2 = "これは前のページに戻るボタンです";
var sebelumnya2 = 0;

function HalamanSebelumnya2() {
  if (sebelumnya2 < kiri2.length) {
    document.getElementById("Sebelum2").innerHTML += kiri2.charAt(sebelumnya2);
    sebelumnya2++;
    setTimeout(HalamanSebelumnya2, 10);
  }
}
setTimeout(HalamanSebelumnya2, 1400);



var kanan = "INI TOMBOL BUAT LANJUT KE HALAMAN BERIKUTNYA";
var selanjutnya = 0;

function HalamanBerikutnya() {
  if (selanjutnya < kanan.length) {
    document.getElementById("Selanjutny").innerHTML += kanan.charAt(selanjutnya);
    selanjutnya++;
    setTimeout(HalamanBerikutnya, 10);
  }
}
setTimeout(HalamanBerikutnya, 1400);



var kanan2 = "これは次のページに進むボタンです";
var selanjutnya2 = 0;

function HalamanBerikutnya2() {
  if (selanjutnya2 < kanan2.length) {
    document.getElementById("Selanjutny2").innerHTML += kanan2.charAt(selanjutnya2);
    selanjutnya2++;
    setTimeout(HalamanBerikutnya2, 10);
  }
}
setTimeout(HalamanBerikutnya2, 1400);


var Jiko = "'Moshi moshi welcome Naylalaland hallo semuanya bakkyun, nama aku Nayla, terima kashi!!!'";
var JmlJiko = 0;

function JikoNayla() {
  if (JmlJiko < Jiko.length) {
    document.getElementById("JikoNay").innerHTML += Jiko.charAt(JmlJiko);
    JmlJiko++;
    setTimeout(JikoNayla, 80);
  }
}
setTimeout(JikoNayla, 24000);





var JikoJpn = "'Moshi moshi welcome Naylalaland hallo semuanya bakkyun, nama aku Nayla, terima kashi!!!'";
var JmlJikoJpn = 0;

function JikoNaylaJpn() {
  if (JmlJikoJpn < JikoJpn.length) {
    document.getElementById("JikoNayJpn").innerHTML += JikoJpn.charAt(JmlJikoJpn);
    JmlJikoJpn++;
    setTimeout(JikoNaylaJpn, 80);
  }
}
setTimeout(JikoNaylaJpn, 12000);




var ulangtahunIndo = "Sekali lagi selamat ulang tahun yang ke 17, Nayla. Panjang banget yaa...";
var ultahIndo = 0;

function UltahIndonesia() {
  if (ultahIndo < ulangtahunIndo.length) {
    document.getElementById("Ind").innerHTML += ulangtahunIndo.charAt(ultahIndo);
    ultahIndo++;
    setTimeout(UltahIndonesia, 80);
  }
}
setTimeout(UltahIndonesia, 27000);





var ulangtahunJpn = "Nayla、17歳のお誕生日おめでとうございます。長いメッセージですね…";
var ultahJpn = 0;

function UltahJepang() {
  if (ultahJpn < ulangtahunJpn.length) {
    document.getElementById("Jpn").innerHTML += ulangtahunJpn.charAt(ultahJpn);
    ultahJpn++;
    setTimeout(UltahJepang, 80);
  }
}
setTimeout(UltahJepang, 14000);






var TeksKeterangan = 0;
var JumlahTeksKeterangan = 1;
var Kecepatan = 2; 

var teksArray = [
  'CUPCAKE',
  'Sesuai dengan tema ulang tahun ini, yaitu makanan manis dan kebetulan kamu juga suka sama makanan manis salah satunya yang ada stroberinya',
  
  'COKLAT',
  'Ini masih nyambung dengan yang pertama, karena kamu suka sama makanan manis seperti coklat kan?',
  
  'UNICORN',
  'Udah beberapa kali kamu bicara suka banget sama unicorn di live showroom dan di live IDN, waktu live juga kamu nunjukin unicorn yang udah kamu warnain pakai cat',
  
  'COKLAT dan STROBERI',
  'Masih sama kaya sebelumnya, karena kamu suka dengan makanan manis, coklat kalau digabung dengan stroberi enak juga kan',
  
  'PIZZA',
  'Udah beberapa kali kamu bilang kalau kamu suka sama pizza, dan udah beberapa kali juga kamu posting foto, kamu lagi makan pizza. Di dalam summer bucket list yang kamu buat juga, kamu nulis "picnic *ぜったいにPizzたべる!!" ingin pergi picnic sambil makan pizza?',

  'SUSHI',
  'Ini aku inget kamu pernah bilang di live sama bilang juga di Twitter/X, kalau kamu suka sama sushi',
  
  'MAKANAN INDONESIA',
  'Di postingan Twitter/X kamu dulu sering posting lagi makan makanan Indonesia, dan itu semua berbeda beda',
  
  'TAKOYAKI',
  'Apakah kamu suka makan takoyaki? seingatku kamu pernah bilang suka makan takoyaki, katanya kamu bisa bikin takoyaki, bener ga nih?',
  
  'SALJU',
  'Kamu kayanya pernah bilang suka dengan salju ya? walaupun dingin, tapi membayangkan bermain dengan salju sambil membuat boneka salju itu sepertinya sangat menyenangkan',
  
  'BUNGA SAKURA',
  'Apakah kamu suka dengan bunga sakura? membayangkanmu memakai kimono dengan banyak bunga sakura disekitarnya menurutku itu terlihat sangat bagus',
  
  'JAPOTA HONEY BUTTER',
  'Aku inget kamu pernah bilang waktu live, kamu suka makanan ini Japota Honey Butter',
  
  'KELINCI',
  'Apakah kamu suka dengan kelinci? di live dan beberapa foto kamu keliatan punya beberapa boneka kelinci, itu terlihat sangat bagus dan lucu',
  
  'AYAM',
  'Di beberapa kali live sebelumnya kamu suka mempraktikkan suara ayam, pengen denger lagi kamu mempraktikkan suara ayam nih. Bagaimana sekarang, apakah sudah bisa? walaupun suara ayam bisa saja berbeda beda',
  
  'LUAR ANGKASA',
  'Sebenarnya maksud luar angkasa disini adalah pajama drive yang tema dari posternya ada luar angkasanya juga',
  
  'CINNAMOROLL',
  'Kamu kayanya suka cinnamoroll ya? karakter yang kelihatannya kaya kelinci tapi yang sebenarnya itu adalah seekor anak anjing, itu terlihat sangat lucu',

  'BEBEK BROKOLI, WORTEL dan KANGKUNG',
  'Kamu suka dengan makanan Indonesia bukan? yang aku ingat salah satunya bebek dan Kangkung',
  
  'RAMEN',
  'Ini aku sedikit lupa kamu pernah bilang suka ramen apa ngga, tapi yang aku inget kamu suka mie dan ramen mungkin salah satu yang kamu suka juga',
  
  'KIMONO',
  'Ini kalau ga salah kamu bilang waktu show aitakatta, sts di umur kamu yang ke 20 nanti kamu ingin hadiahnya kimono, menurutku itu akan terlihat sangat bagus',
  
  'LAUT PANTAI',
  'Ini ada di salah satu summer bucket list yang kamu buat "go to the sea", yang kamu maksud mau pergi ke pantai ya?',
  
  'CAMP, BBQ',
  'Ini juga ada di salah satu summer bucket list yang kamu buat, aku inget kamu ada bicara mau pergi camp tapi kalau ngga bisa camp kamu mau lihat pohon, lihat bunga hatinya mau tenang',
  
  'HAUNTED HOUSE',
  'Ini juga ada di salah satu summer bucket list yang kamu tulis, yakin nih mau ke rumah hantu? wkwk tapi boleh si dicoba aja ke wahana rumah hantu',
  
  'FERRIS WHEEL',
  'Ini juga ada di salah satu dari summer bucket list yang kamu buat, menaiki ferris wheel itu memang sangat menyenangkan, semoga segera terwujud yaa',
  
  'SAILOR MOON',
  'Aku inget kamu pernah bilang di IDN live suka sama sailor moon dan kamu juga pernah mempraktikkan atau memperagakan salah satu gayanya waktu pose foto', 
  
  'EVERYDAY ENJOY',
  'Yang ini di ada summer bucket list kamu nulisnya "everday enjoy" mungkin yang kamu maksud di sini itu "everyday enjoy", menikmati setiap hari dalam hidup bisa menghargai dan menikmati setiap momen dalam kehidupan, jadi aku harap semoga setiap hari dalam hidupmu bisa dipenuhi dengan banyak kebahagiaan',
  
  'RUMAH 5 LANTAI DENGAN AYUNAN',
  'Ini aku inget kamu pernah bilang waktu MC di show Aitakatta, kalau ini adalah salah satu keinginan atau impian kamu',
  
  'BONEKA',
  'Boneka, kalau ini sih kamu pasti suka sama boneka, terakhir kali aku lihat boneka kamu waktu live IDN, dan itu ada banyak sekali bonekanya, semuanya terlihat sangat bagus di kamarmu '
];


function ketikKeterangan(teks, id) {
  if (TeksKeterangan < teks.length) {
    document.getElementById(id).innerHTML += teks.charAt(TeksKeterangan);
    TeksKeterangan++;
    setTimeout(function() { ketikKeterangan(teks, id); }, Kecepatan);
  } else {
    TeksKeterangan = 0;
    JumlahTeksKeterangan++;
    if (JumlahTeksKeterangan <= 52) {
      ketikKeterangan(teksArray[JumlahTeksKeterangan-1], 'teks' + JumlahTeksKeterangan);
    }
  }
}

setTimeout(function() {
  ketikKeterangan(teksArray[0], 'teks1');
}, 100);


$(function() {
  var eventDates = {};
  var date = new Date();
  eventDates[new Date(date.getFullYear(), date.getMonth(), 18).getTime()] = new Date(date.getFullYear(), date.getMonth(), 18);

  $('#penandaTanggal').datepicker({
    beforeShowDay: function(date) {
      var highlight = eventDates[date.getTime()];
      if (highlight) {
        return [true, "event"];
      } else {
        return [true, '', ''];
      }
    }
  }).datepicker('setDate', new Date(2024, 5, 18));
});




