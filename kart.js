let liste_1 = `    <center>
<img class="kart_1" src="ressimler/ressim2.jpg" >
<form>
    <input type="text" class="text_1" id="id_1" placeholder="Kart No">
    <input type="text" class="text_1" id="id_2" placeholder="Ad Soyad">
    <input type="text" class="text_2" id="id_3" placeholder="Gün/Ay/Yıl">
    <button class="button_1">Gönder</button>
</form>
</center>
<button class="button_2">Ön Yüz</button>
<button class="button_3">Arka Yüz</button>
<span id="gönder_1" class="yazı_1"></span>
<span id="gönder_2" class="yazı_2"></span>
<span id="gönder_3" class="yazı_3"></span>

`


document.getElementById("gönder").innerHTML = liste_1

// document.getElementById("id_1").onkeyup = function() {
//     let no = this.value
//     let A1 =document.getElementById("id_1").value;
//     console.error(A1.length)
// if(A1.length==4){
//     document.getElementById("no").value= "  "; 
// }
//     document.getElementById("gönder_2").innerHTML=no

// };

let yazı50 =[
    {name1:"id_1",name2:"gönder_1"},
    {name1:"id_2",name2:"gönder_2"},
    {name1:"id_3",name2:"gönder_3"},
]



for(let i=0;i<yazı50.length;i++){
document.getElementById(yazı50[i].name1).addEventListener("keyup", function (event) {
    let no = event.target.value;
    let A1 = document.getElementById(yazı50[i].name1).value;

    if (no.length == 4) {
        no += " "
    }
    if (no.length == 8) {
        no += " "
    }
    if (no.length == 12) {
        no += " "
    }
    document.getElementById(yazı50[i].name2).innerHTML = no
});
}