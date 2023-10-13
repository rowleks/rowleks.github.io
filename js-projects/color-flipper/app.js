const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

 const btn = document.getElementById('btn')
 const color = document.querySelector('.color')
 const body = document.body


btn.addEventListener('click', function () {
    const randNum = genRandNum();

    body.style.backgroundColor = colors[randNum];
    color.textContent = colors[randNum];

function genRandNum () {
    return Math.floor(Math.random() * colors.length);
}
})