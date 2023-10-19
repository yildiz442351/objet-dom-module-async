/*MODULE
import mesaj from "./third.js";
import { isim, yas } from "./second.js";

const sonuc = mesaj()
console.log(sonuc)


console.log(isim)

console.log(yas)


debugger ile sayfada yazilan kodun adim adim ileri veya
derinlemesine ileri olarak calismasini saglar

JSON -> JavaScript Object Notation

[] dizi
{} obje
:  anahtar:deger











const gelenBilgi = {
    calisanlar : [calisan,calisan1, calisan2],
    sirketinAdi : "udemig",
    sirketUlkeleri: ["isvec","norvec","isvicre"],
    sirketOzelBilgi: sirketOzelBil
}

const sirketOzelBil ={
   sahibi: "canan",
   gizliDurumu: "aktif"
}
const calisan = {
   ad: "memo",
   maas:1230
}
const calisan1 = {
   ad: "memo1",
   maas:12301
}
const calisan2 = {
   ad: "memo2",
   maas:12302
}
elinize bir kisi json objesi olsun bu kisinin ad, soyas, yas, bildigiDiller olsun ve buna uygun olarak
da bir js objesi de yaziniz


JSON.parse() -> json string formatindaki yaziyi js objesi e cevirir

"obje" = {
    "calisanlar": [
        {"ad": "memo", "maas": 1450},
        {"ad": "aykut", "maas": 230},
        {"ad": "Aysegul", "maas": 14550}
    ],
    "sirketinAdi": "Udemig",
    "sirketUlkeleri": ["isvec","norvec","isvicre"],
    "sirketOzelBilgi": {"sahibi":"canan","gizliDurumu":"aktif"}
}

"kisi": {
    "ad": "memo",
    "soyad": "can",
    "yas": 20,
    "diller": ["isvecce","turkce","kurtce","ingilizce"]
}
*/




// Object - Nesne

const kisi = {
    isim: "yıldız",
    yas: 26,
    soyad: "onaran",
    ulke: "elazığ",
    get ad() {
        return this.isim
    },
    set ad(deger) {
        this.isim = deger
    }

}

//bir obje icindeki derlerin bir dizinin elemanlari olarak sirali getirmeyi saglar
const diziler = Object.values(kisi)

console.log(kisi.isim)

console.log(diziler)
kisi.ad = "tugba"
console.log(kisi.ad)


Object.defineProperty(kisi, "soyadimiz", {
    get: function () { return this.soyad },
    set: function (deger) { this.soyad = deger }
})


Object.freeze(kisi)

kisi.soyadimiz = "incebiz"
console.log(kisi.soyadimiz)


const araba = {
    renk: "sari",
    yas: 20,
    ad: "bmw"
}

Object.defineProperty(araba, "ad", { writable: false })
araba.ad = "mercedes"
console.log(araba)


//SUPER - INHERITANCE

class Araba {
    constructor(marka) {
        this.marka = marka
    }
    hediye() {
        return "bir hediye " + this.marka
    }
}

class BMW extends Araba {
    constructor(marka, tip) {
        super(marka)
        this.tip = tip
    }
    goster() {
        return this.hediye() + " bu sana verilen " + this.tip + " serisi"
    }
}

const bmw = new BMW("sport", "m")
console.log(bmw.goster())

//Static ->


class Arabamiz {
    constructor(marka) {
        this.marka = marka
    }
    //proje calistiginda hafiza da kendine yer ayirir ve
    //direk sinif adi ile erisiriz, ornegini olusturmadan
    static hediye() {
        return "bir hediye " + this.marka
    }

}

const arabamiz = new Arabamiz("mercedes")

console.log(Arabamiz.hediye())


//ASYNC -- CALLBACK

function islemYap1(siradaki) {
    //belirtilen fonksiyonun belirtilen aralikta 1 kerelik calismasidir
    setTimeout(() => {
        console.log("1 islem yapildi")
        siradaki()
    }, 2000);
}

function calisanAdam() {
    console.log("adam calisiyor")
}

function islemYap2() {
    console.log("2 islem yapildi")
}

islemYap1(islemYap2)
/*belirtilen fonkstionun belirtilen milisaniye araliginda surekli olarak calismasidir
setInterval(() => {
    console.log("cano")
}, 1000);
*/

//Promise 
let sayac = 4

let veriAl = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (sayac == 4) {
            resolve("veriler alindi")
        } else {
            reject("hata meydana geldi")
        }
    }, 3000);
})

veriAl.then(
    function (deger) { console.log(deger) },
    function (hata) { console.log(hata) }
)

/* 
async/await

async -> bir fonksiyonu Promise olarak cevirir
await -> Promise yapisina donen fonksiyonu bekliyor
*/



async function selamla() {
    return "nbr"
}

function selamla1() {
    return Promise.resolve("nbr1")
}

selamla1().then(
    function (deger) { console.log(deger) },
    function (hata) { console.log(hata) }
)

const pOzelElement = document.getElementById('pOzel')

async function gosterme() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("isleem tamam patron")
        }, 4000);
    })
    pOzelElement.innerHTML = await promise
}

gosterme()
pOzelElement.innerHTML = "selamalr ben sonradan yazildi"

const pOzelSinifElementler = document.getElementsByClassName("pOzelSinif")
console.log(pOzelSinifElementler)

pOzelSinifElementler[0].style.padding = "10px"

for (const eleman of pOzelSinifElementler) {
    eleman.style.backgroundColor = "red"
    eleman.style.color = "white"
    console.log(eleman)
}

/* 
querySelector ile . sinifi # id yi ya da direk tag adi vererek ilk eslesen
tage erisebilirsiniz
Eger querySelectorAll derseniz belirtilen ozellige eslesen
tum taglere ulasmamizi saglar.

*/
const pOzelSinifElementler1 = document.querySelectorAll("#pOzelSinif")

/* html icinde tanimlanmis en az 2 etikete ulasip
onlarin stil ozelliklerini js ile degistiriniz.
Not: id ile ulasmayiniz */