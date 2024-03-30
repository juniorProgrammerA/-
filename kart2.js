let liste_1 = `
<div class="div3">

<div class="kart_1"></div> <div class="div">   
<div class="div2"><span class="span2">Kredi Kartı Bilgileriniz</span></div>
<form>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label"><span class="span1">İsim Soyisim</span></label>
  <input type="text" class="form-control" id="id_2" placeholder="ismizi ve soy isminizi giriniz">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label"><span class="span1">Kart numarası</span></label>
  <input type="text" class="form-control" id="id_1" placeholder="Kart numaranızı giriniz" maxlength="22">
</div>
<div class="mb-3 in">
  <label for="formGroupExampleInput2" class="form-label "><span class="span1">Son Kullnma Tarihi</span></label>
  <input type="text" class="form-control" id="id_3" placeholder="Son Kullnma Tarihini giriniz" maxlength="10">
</div>
<div class="mb-3 in">
  <label for="formGroupExampleInput2" class="form-label "><span class="span1">CVV</span></label>
  <input type="text" class="form-control" id="id_4" placeholder="CVV'yi giriniz" maxlength="3">
</div>
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">ÖDE</button>
</div>
</form>
</div>
<span id="gönder_1" class="yazı_1"></span>
<span id="gönder_2" class="yazı_2"></span>
<span id="gönder_3" class="yazı_3"></span>
<span id="gönder_4" class="yazı_4"></span>
<span id="gönder_4" class="yazı_5"></span>


</div>
`


document.getElementById("gönder").innerHTML = liste_1

let yazı50 =[
    {name1:"id_1",name2:"gönder_1"},
    {name1:"id_2",name2:"gönder_2"},
    {name1:"id_3",name2:"gönder_3"},
    {name1:"id_4",name2:"gönder_4"},
]



for(let i=0;i<yazı50.length;i++){
document.getElementById(yazı50[i].name1).addEventListener("keyup", function (ben) {
    let no = ben.target.value;
    let A1 = document.getElementById(yazı50[0].name1).value;
    let A2 = document.getElementById(yazı50[3].name1).value;
    if (no.length == 4) {
        document.getElementById(yazı50[0].name1).value= A1+ "  ";
    }
    if (no.length == 10) {
        document.getElementById(yazı50[0].name1).value= A1+ "  ";
    }
    if (no.length == 12) {
        document.getElementById(yazı50[0].name1).value= A1+ "  ";
    }
    if (no.length == 16) {
        document.getElementById(yazı50[0].name1).value= A1+ "  ";
    }

    document.getElementById(yazı50[i].name2).innerHTML = no
});
}

let yazı51 =[
    {name1:".yazı_1",},
    {name1:".yazı_2",},
    {name1:".yazı_3",},
]


for(let i=0;i<yazı51.length;i++){

    document.getElementById("id_4").addEventListener("click", function() {
        document.querySelector(".kart_1").style.background = "url(ressimler/ressim3.jpg)";
        document.querySelector(".kart_1").style.backgroundSize = "cover";
        document.querySelector(yazı51[i].name1).style.display = "none";
        document.querySelector(".yazı_4").style.display = "block";
    
    });

    document.getElementById("id_4").addEventListener("focus", function() {
        document.querySelector(".kart_1").style.background = "url(ressimler/ressim3.jpg)";
        document.querySelector(".kart_1").style.backgroundSize = "cover";
        document.querySelector(yazı51[i].name1).style.display = "none";
        document.querySelector(".yazı_4").style.display = "block";
    
    });

    document.getElementById(yazı50[i].name1).addEventListener("click", function() {
        document.querySelector(".kart_1").style.background = "url(ressimler/ressim2.jpg)";
        document.querySelector(".kart_1").style.backgroundSize = "cover";
        document.querySelector(".yazı_1").style.display = "block";
        document.querySelector(".yazı_2").style.display = "block";
        document.querySelector(".yazı_3").style.display = "block";
        document.querySelector(".yazı_4").style.display = "none";
    });


}