function generatedot(chiffre) {

    for (let i = 0; i < chiffre ; i++) {
        var newDiv = document.createElement("span");
        var newContent = document.createTextNode("");
        newDiv.classList.add("t"+i)
        newDiv.dataset.count = i;
        newDiv.appendChild(newContent);
        document.getElementById("spandot").appendChild(newDiv)
    }
}

window.addEventListener("DOMContentLoaded", function (){
    generatedot(chiffre)
})