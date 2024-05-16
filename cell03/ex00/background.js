

function setBg()
{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "Current color is #" + randomColor;
}

setTimeout(setBg, 1000);
genNew.addEventListener("click", setBg);

