let photo = document.querySelector("#circle");
let nameBar = document.querySelector("#name");
let skillBar = document.querySelector("#skill");
let bioBar = document.querySelector("#bio");
let leftBtn = document.querySelector("#left");
let rightBtn = document.querySelector("#right");
let randomBtn = document.querySelector("#random");


let photos = ["./ajay.jpg","https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg", "https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="]
let names = ["Ajay Sharma", "Nilesh Khune", "Manoj Shah"];
let skillset = ["Web Developer", "MERN Developer", "Softwere Developer"];
let bioData = ["I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut ipsam corporis expedita et, aliquid voluptatibus vitae doloremque illum deleniti nostrum similique explicabo beatae corrupti cum, possimus pariatur quod inventore.", "Highly skilled MERN Stack developer bringing X years of experience in designing and developing robust web applications. Proficient in front-end and back-end technologies, including React. js, Node. js, MongoDB, and Express."]

let currentindex = 0;

function updateindex(index) {
    photo.style.backgroundImage = `url(${photos[index]})`;
    nameBar.textContent = names[index];
    skillBar.textContent = skillset[index];
    bioBar.textContent = bioData[index];

}
updateindex(currentindex);

rightBtn.addEventListener('click', function () {
    currentindex = (currentindex += 1) % photos.length;
    updateindex(currentindex);
})
leftBtn.addEventListener('click', function () {
    currentindex = (currentindex - 1 + photos.length) % photos.length;
    updateindex(currentindex);
})
randomBtn.addEventListener('click', function () {
    currentindex = Math.floor(Math.random() * photos.length);
    updateindex(currentindex);
})


