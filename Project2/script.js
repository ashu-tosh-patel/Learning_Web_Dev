const copy = document.querySelector(".copy");

copy.addEventListener("copy", () => {
    console.log("Oiiiii!!! Copy cat");
});

const move = document.querySelector(".box");

move.addEventListener("mousemove", (e) => {
    // console.log("Kaha tha na mt lana idhar!!!");
    // console.log(e.offsetX, e.offsetY);
    move.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});