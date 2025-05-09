// Tạo ngôi sao rơi
function createStars() {
    const createElement = document.createElement("i");
    createElement.classList.add("fas", "fa-star");
    document.body.appendChild(createElement);
    createElement.style.position = "absolute";
    createElement.style.top = "-10%";

    setTimeout(() => {
        createElement.style.left = `${Math.floor(Math.random() * 90)}%`;
        createElement.style.top = `${Math.floor(Math.random() * 95)}%`;
    }, 1500);

    setTimeout(() => {
        document.body.removeChild(createElement);
    }, 18000);
}

setInterval(createStars, 1000);

const gobed = document.querySelector(".Go_bed");
const cat = document.querySelector(".goodnight-text_title-img");
const btnBed = document.querySelector(".btn_Goto-Bed");
const imgMoon = document.querySelector(".img_moon");
const title = document.querySelector(".title");
const titleText = document.querySelector(".Good_night");
console.log(title);

let night = true;

const gobedClick = () => {
    const boudingBedTop = Math.floor(gobed.getBoundingClientRect().top);
    const boudingBedLeft = Math.floor(gobed.getBoundingClientRect().left);

    if (night) {
        document.body.classList.add("night");
        btnBed.textContent = "Dậy đi sáng rồi!";
        imgMoon.src = "./assets/imgs/moon.png"; // Đường dẫn ảnh sửa lại cho đúng
        cat.style.top = `${boudingBedTop + 140}px`;
        cat.style.left = `${boudingBedLeft + 85}px`;
        title.innerHTML = `Chúc <b class="name">Nguyễn Trần Ngọc Mỹ</b> ngủ ngon nha`;
        titleText.textContent = "Good Night";
    } else {
        document.body.classList.remove("night");
        btnBed.textContent = "Đi ngủ nào!";
        imgMoon.src = "./assets/imgs/sun.png"; // Đường dẫn ảnh sửa lại cho đúng
        cat.style.top = "0";
        cat.style.left = "0";
        title.innerHTML = `Chúc <b class="name">Nguyễn Trần Ngọc Mỹ</b> buổi sáng vui vẻ`;
        titleText.textContent = "Good Morning";
    }

    night = !night;
};

btnBed.addEventListener("click", gobedClick);
