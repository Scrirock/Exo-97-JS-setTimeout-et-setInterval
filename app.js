function createDiv(){
    let div = document.createElement("div");
    div.style.backgroundColor = "red";
    div.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !";
    document.getElementById("timeout-div").append(div);
}
document.getElementById("timeout").addEventListener("click", () =>setTimeout(createDiv, 2000));

let result = 0;
let inter;
document.getElementById("interval-start").addEventListener("click", () => {
    inter = setInterval(()=>{
        result += 60;
        document.getElementById("interval-div").innerHTML = result;
    }, 60000)
});
document.getElementById("interval-stop").addEventListener("click", () => clearInterval(inter))



