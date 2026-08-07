// Play Point - Main Controller

let points = 0;
let energy = 100;

const coin = document.getElementById("coin");
const pointsText = document.getElementById("points");
const energyText = document.getElementById("energyText");
const energyBar = document.getElementById("energyBar");


// عند تحميل الصفحة
function updateUI() {

    if (pointsText) {
        pointsText.innerHTML = points;
    }

    if (energyText) {
        energyText.innerHTML = energy + " / 100";
    }

    if (energyBar) {
        energyBar.style.width = energy + "%";
    }

}


// الضغط على الكرة الذهبية
if (coin) {

    coin.addEventListener("click", function () {

        // لا يوجد طاقة
        if (energy <= 0) {
            return;
        }


        // إضافة نقطة
        points += 1;


        // خصم طاقة
        energy -= 1;


        // تحديث البيانات
        updateUI();


        // حركة الكرة الاحترافية
        coin.classList.remove("tap");

        void coin.offsetWidth;

        coin.classList.add("tap");


    });

}


// تشغيل أولي
updateUI();
