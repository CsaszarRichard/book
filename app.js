//Eltároljuk változóba az inputmezőket (cim,szerző,cikkszám), táblázatot és a formot
var title = document.getElementById("title");
var author = document.getElementById("author");
var number = document.getElementById("number");
var table = document.querySelector("table");
var form = document.querySelector("form");


//1. lépés: Készítsünk egy "submit" eseményt a formra, melynek hatására bele tudjuk rakni a könyv adatait a táblázatunkba
form.addEventListener("submit", function(e){
    
    //Megakadályozzuk, hogy az adatok elküldése után (submit) frissüljön az oldal
    e.preventDefault();
    //Lefuttatjuk a függvényünket, amely hozzáadja a táblázathoz a könyvek adatait(cim,szerző,cikkszám)
    addBook();
})

//2. lépés: Csináljuk meg az "addBook" függvényt
function addBook(){

    //Létre kell hoznunk a táblázat következő sorát és három oszlopát
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    //Az előbb létrehozott oszlopkba eltárolom az inputmezőkből kinyert értékeket (szöveget)
    td1.innerText = title.value;
    td2.innerText = author.value;
    td3.innerText = number.value;

    //Az oszlopokat hozzáfűzzük az általunk létrehozott sorhoz (tr)
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    //Az általunk létrehozott sort (tr) hozzáfűzzük a táblázatunkhoz
    table.appendChild(tr);

    //Üresre állítjuk az inputmezők értékét
    title.value = "";
    author.value = "";
    number.value = "";


}



//3. lépés: Bizonyos napszakban változtassuk meg az oldal témáját sötétre

//Eltárolom az aktuális órát egy változóba
var hour = new Date().getHours();


//Ha az hour változóban tárolt érték nagyobb mint 18 óra (este van)
if(hour > 18){

    //Megváltoztatjuk a form és a table háttér/betűszínét sötétre
    document.body.style.backgroundColor = "#111";

    table.classList.add("table-dark");
    form.classList.add("bg-dark","text-light");
    
}
