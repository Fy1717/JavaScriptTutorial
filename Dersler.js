// İçindekiler
//
// 1- İlk Program
// 2- Değişken Tanımlama
// 3- Id ile innerHTML kullanma
// 4- Alert ile Uyarı Yazısı Yayınlama
// 5- Console Alanı için Uyarı Yazısı Yayınlama
// 6- Buton ile Fonksiyon Çalıştırma
// 7- Fonksiyona Parametre Gönderme
// 8- Fonksiyon ile Toplama İşlemi
// 9- Lokal ve Global Değişken Tanımlama Alanı
// 10- Obje Şeklinde Değişken ve Metodları
// 11- Hazır Modüllerden Örnekler
// 12- Listeler
// 13- Mantıksal Operatörler
// 14- Kontrol Blokları Kullanma (if-else)
// 15- Eventler
// 16- This Yapısı
// 17- Sayfa Yüklendiğinde Çalışacak Fonksiyonu Belirleme
// 18- Form Oluşturma
// 19- Alınan Verinin Sayı Olup Olmadığını Kontrol Etme
// 20- Required ve ValidationMessage Kullanımı
// 21- Elementlere Erişim ve Özelliklerini Değiştirme
// 22- DOM ile Tüm Paragraflara (p) Erişme Özellik Değiştirme
// 23- Birden Fazla Event Atama
// 24- Sayfadan Ayrılma Aşamasında Kontrol Ekleme
// 25- Dosya İndirme Simülasyonu Hazırlama
//
//
//
//
// AŞAMA 1 - İlk Program
// --------------------------------------------------------------------
//
// <script>
//      document.write("Hello World") ;
// </script>
//
//
// --------------------------------------------------------------------
//
//
//
//
//     AŞAMA 2 - Değişken Tanımlama
// --------------------------------------------------------------------
//
// var  i=2;   // int tipinde
// var pi=3.14;   // float tipinde
// var yazi="JavaScript"  //string tipinde
// var x=true  // diyerek de boolean değişkenleri tutabiliriz.
//
// document.write(degiskenAdi); // değişkenimizi böylece yazdırabiliriz.
//
//
//
//
//     AŞAMA 3  -  Id ile innerHTML kullanma
// --------------------------------------------------------------------
//
// <p id="paragraf"> </p>  p etiketimize paragraf idsi verdik.
//
// <script>
// document.getElementById("paragraf").innerHTML = "JavaScript Öğreniyorum";
// </script>
//
//
//
//
//     AŞAMA 4  -  Alert ile Uyarı Yazısı Yayınlama
// --------------------------------------------------------------------
//
// <script>
//  window.alert("UYARI YAZISI");  // diyebiliriz.
// </script>
//
//
//
//
//     AŞAMA  5  -  Console Alanı için Uyarı Yazısı Yayınlama
// --------------------------------------------------------------------
//
//     console.log("UYARI");
//
//
//
//
//
//     AŞAMA  6  -  Buton ile Fonksiyon Çalıştırma
// --------------------------------------------------------------------
//
// <script>
//
// function bas()
// {
//     window.alert("Tıklandı!");
//
// }
//
// //bu fonksiyonu kullanmak için çağırmalıyız.
//
// </script>
//
// <input type="button" value="Tıkla" onclick="bas()"></input>
//
//
//
//
//     AŞAMA  7  -  Fonksiyona Parametre Gönderme
// --------------------------------------------------------------------
//
// <script>
//
// function bas(isim,soyisim){
//     window.alert("Benim Adım " + isim +" "+ soyisim);
// }
//
// //Çağırırken parametreyi göndermeliyiz.
//
// </script>
//
// <input type="button" value="Tıkla" onclick=bas("Murat","Turoğlu")></input>
//
//
//
//
//     AŞAMA  8  -  Fonksiyon ile Toplama İşlemi
// --------------------------------------------------------------------
//
//
// <script>
// function toplama(a,b){
//     return a+b ;
// }
//
// var c = toplama (3,4);
// document.write(c);
//
// </script>
//
//
//
//
//     AŞAMA  9 -  Lokal ve Global Değişken Tanımlama Alanı
// --------------------------------------------------------------------
//
//
// <script>
//
// var i = 5 ;  // global değişken
//
// function deneme (){
//
//     var j = 2 ; // lokal değişken
//
// }
//
// </script>
//
//
//
//
//     AŞAMA  10  -  Obje Şeklinde Değişken ve Metodları
// --------------------------------------------------------------------
//
// var pc1 = {marka:"Lenovo" ,
//     ram:"6gb" ,
//     cpu: 2.60 ,
//     yazdir: function(){
//         window.alert(this.marka);
//     }
// };
//
// document.write(pc1["ram"]);
// pc1.yazdir();
//
//
//
//
//     AŞAMA  11  -  Hazır Modüllerden Örnekler
// --------------------------------------------------------------------
//
//     document.write(Math.min(0,100,-23.5));
//
// document.write((Math.random())*10);
//
//
//
//
//     AŞAMA  12  -  LİSTELER
// --------------------------------------------------------------------
//
// var insanlar = ["Furkan","Murat","Sezgi"];  // Şeklinde tanımlama yapabiliriz.
// var x = [2,5,13,"Furkan",true,false]; // Farklı tipler de tutulabilir.
//
// document.write(x);   // Tüm elemanları listeler.
// document.write(x[0]);  // Listedeki ilk elemanı gösterir.
//
// document.write(x.length);  // Liste boyutu
//
// var tarih = ["17" ,"01" , "1997"];
// var yazi = tarih.join("/"); // Elemanları ard arda ekleme
// document.write(yazi);
//
// insanlar.pop(); // Listenin son elemanını çıkarıp döndürme
//
// insanlar.push("1997"); // Listenin sonuna eleman ekleme
//
// insanlar[0] = "Alper"; // Listenin elemanını değiştirme
// var insanlar = ["Furkan","Murat","Sezgi","Alper"];
// insanlar.sort(); // Listede sıralama yapma
//
// insanlar.reverse(); // Listede ters sıralama yapma
//
//
//
//
//     AŞAMA  13  -  Mantıksal Operatörler
// --------------------------------------------------------------------
//
// ==   Eşit mi?
// !=    Eşit Değil mi?
// >     Büyük mü?
// <     Küçük mü?
// >=  Büyük veya Eşit mi?
// <=  Küçük veya Eşit mi?
//
//     Birden fazla operatörü birleştirme
//
// &&  (ve)  veya  ||  (veya)  işareti kullanılır .
// 4>=5  &&  "Furkan" != "Murat"
// 15>10  ||  8 <10
//
//
//
//
//     AŞAMA  14  -  Kontrol Blokları Kullanma (if-else)
// --------------------------------------------------------------------
//
// var saat = 4 ;
// if (	 saat == 4  ||  saat < 7 )
// {
//     window.alert("Gece Vakti");
// }
//
// else
// {
//     window.alert("Gündüz Vakti");
// }
//
// //-- Daha karmaşık bir yapı
//
// var saat = 7 ;
// var haftasonu = true;
//
// if (	 saat <7 )
// {
//     window.alert("UYU");
// }
//
// else
// {
//     if (	 haftasonu  )
//     {
//         window.alert("Bugün haftasonu . Rahatça uyuyabilirsin ");
//     }
//
//     else
//     {
//         window.alert("Kalkma  Vakti");
//     }
//
// }
//
//
//
//
//     AŞAMA  15  -  Eventler
// --------------------------------------------------------------------
//
// <script>
// function degistir()
// {
//     document.getElementById("para").innerHTML = "JavaScript" ;
// }
// </script>
//
// <button onclick = "degistir () " > Tıkla  </button>
// <p id="para"> www.frknyldz.com </p>
//
//
//     AŞAMA  16  -  This Yapısı
// --------------------------------------------------------------------
//
// <button onclick = "this.innerHTML = 'JavaScript'"> Tıkla </button>
//
// --------------------------------------------------------------------
//
//
//     AŞAMA  17  -  Sayfa Yüklendiğinde Çalışacak Fonksiyonu Belirleme
// --------------------------------------------------------------------
//
// <script>
// function yukle(){
//     window.alert("HOŞGELDİNİZ..");
// }
// </script>
//
// <body onload = "yukle()">
//     </body>
//
// --------------------------------------------------------------------
//
//
//     AŞAMA  18  -  Form Oluşturma
// --------------------------------------------------------------------
//
// <form name="form1" action="gonder.php" onsubmit="return tikla()" method = "post">
//
//     Kullanıcı Adı :  <input type = "text" name = "username" /> </br>
//     <input  type = "submit" value= "Gönder">
//
//     </form>
//
//     <script>
//     function tikla()
//     {
//
//         var deger = document.form1.username.value;
//
//         if (deger =="")
//         {
//             window.alert("Bu alan boş bırakılamaz..");
//             return false;
//         }
//     }
//
//     </script>
//
//
// --------------------------------------------------------------------
//
//
//     AŞAMA 19  -  Alınan Verinin Sayı Olup Olmadığını Kontrol Etme
// --------------------------------------------------------------------
//
//
// <script>
//
// function dogrula(){
//
//     var deger = document.getElementById("girdi").value;
//
//     if (isNaN(deger) == true)
//     {
//         window.alert("Bu alana SAYI girilmeli..");
//         return false;
//     }
//
//     else{
//         window.alert("İnput Geçerli");
//     }
// }
//
// </script>
//
//
// <input id="girdi" /> </br>
//     <button  onclick ="dogrula()"> Kontrol Et </button>
//
//
// --------------------------------------------------------------------
//
//
//     AŞAMA  20  -  Required ve ValidationMessage Kullanımı
// --------------------------------------------------------------------
//
// <script>
//
// function kontrol(){
//
//     var x = document.getElementById("sayi");
//
//     if (x.checkValidity() == false)
//     {
//         window.alert(x.validationMessage);
//         return false;
//     }
//
//     else{
//         window.alert("İnput Geçerli");
//     }
// }
//
// </script>
//
//
// <input id="sayi"  type="number" min="50" max="100"  required/> </br>
// <button  onclick ="kontrol()"> Kontrol Et </button>
//
//
// --------------------------------------------------------------------
//
//
//     AŞAMA  21  -  Elementlere Erişim ve Özelliklerini Değiştirme
// --------------------------------------------------------------------
//
// <script>
//
// function degistir(){
//     document.getElementById("para").style.color =" white";
//     document.getElementById("para").style.backgroundColor =" blue";
//     window.alert(document.URL);
//     window.alert(document.title);
//
// }
//
// </script>
//
// <p id="para" > Yazılım </p>
//     <button onclick ="degistir()"> Değiştir </button>
//
//
//     //--Görünürlük Özelliğini Değiştirme
//
//
//     <script>
//
//     function kaybet(){
//         document.getElementById("para").style.visibility =" hidden";
//     }
//
// function goster(){
//     document.getElementById("para").style.visibility =" visible";
// }
//
// </script>
//
// <p id="para" > Yazılım </p>
//
//     <button onclick ="kaybet()"> Kaybet </button>
//     <button onclick ="goster()"> Göster </button>
//
//
// --------------------------------------------------------------------
//
//
//     AŞAMA  22  -  DOM ile Tüm Paragraflara (p) Erişme Özellik Değiştirme
// --------------------------------------------------------------------
//
//     document.getElementByTagName("p");
//
// document.getElementByTagName("p").style.özellik = yeni özellik;
//
//
// --------------------------------------------------------------------
//
//
//     AŞAMA  23  -  Birden Fazla Event Atama
// --------------------------------------------------------------------
//
// <button id = "buton"> Buton </button>
//     <p id="para"></p>
//
//     <script>
//
// var buton = document.getElementById("buton");
//
// buton.addEventListener("click", Tikla);
// buton.addEventListener("mouseover", Uzerinde);
// buton.addEventListener("mouseout", UzerindeDegil);
//
// function Tikla(){
//     document.getElementById("para").innerHTML =" Tıklandı";
// }
//
// function Uzerinde(){
//     document.getElementById("para").innerHTML =" Mouse Burada";
// }
//
// function UzerindeDegil(){
//     document.getElementById("para").innerHTML =" Mouse Burada Değil";
// }
//
// </script>
//
//
// --------------------------------------------------------------------
//
//
//     AŞAMA  24  -  Sayfadan Ayrılma Aşamasında Kontrol Ekleme
// --------------------------------------------------------------------
//
// <a onclick ="return Yonlendir()" href= "http://localhost:8000"> Tıkla </a>
//
//     <script>
//
//     function yonlendir(){
//         var ok = confirm("Sayfadan Ayrılmak İstiyor musunuz ?");
//
//         if (ok){
//             return true;
//         }
//
//         else
//         {
//             return false;
//         }
//
//     }
//
//     </script>
//
//
// --------------------------------------------------------------------
//
//
//     AŞAMA  25  -  Dosya İndirme Simülasyonu Hazırlama
// --------------------------------------------------------------------
//
// <p> Dosyayı indirmek için tıklayın . </p>
// <p id="para" > </p>
//
//     <button onclick="baslat()"> İndirmek için tıklayın </button>
// <button onclick="islemleridurdur()"> İptal ekmek için tıklayın </button>
//
// <script>
//
// var say = 5;
// var indirme;
// var sure;
//
//
// function baslat()
// {
//     indirme = setTimeout(dosyaindirme , 5000);
//     sureyisay();
//     sure = setInterval(sureyisay,1000);
// }
//
//
// function dosyaindirme()
// {
//     window.alert("Dosya inmeye başladı..");
//     document.getElementById("para").innerHTML = "";
//     say = 5;
// }
//
//
// function sureyisay()
// {
//     document.getElementById("para").innerHtml = "Dosya " + say + " saniye içinde inecek...";
//     if (say==0)
//     {
//         clearInvertal(sure);
//     }
// }
//
//
// function islemleridurdur()
// {
//     clearInterval(sure);
//     clearTimeout(indirme);
//     document.getElementById("para").innerHTML = "Dosya indirmesi durduruldu..";
//     say=5;
// }
//
// </script>
//
//
// --------------------------------------------------------------------
