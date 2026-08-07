let points = 0;
let energy = 105;

const maxEnergy = 105;

const coin = document.getElementById("coin");
const pointText = document.getElementById("points");
const energyText = document.getElementById("energyText");
const energyBar = document.getElementById("energyBar");


function update(){

    pointText.innerHTML = points;

    energyText.innerHTML =
        energy + 100 / 100 + maxEnergy;

    energyBar.style.width =
        energy + "%";

}



// الضغط على الكرة

function tap(){

    if(energy <= 0){
        return;
    }


    // 100 طاقة = 100 نقطة
    points++;
    energy--;


    update();


    // أنيميشن الكرة

    coin.style.transform="scale(.90)";

    setTimeout(()=>{

        coin.style.transform="scale(1)";

    },120);



    // أنيميشن نقصان الطاقة// أنيميشن نقصان الطاقة

bar.classList.remove("energy-hit");

void bar.offsetWidth;

bar.classList.add("energy-hit");


setTimeout(()=>{

    bar.classList.remove("energy-hit");

},400);



coin.addEventListener("click",tap);


coin.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    tap();

});



// إعادة شحن الطاقة فقط بعد نفادها

setInterval(()=>{


    if(energy <= 0 && energy < maxEnergy){


        energy++;


        update();


    }


},20000);



update();
