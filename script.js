let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

function rander(){
    let output = "";

    let mesAtual = meses[new Date().getMonth()];

    for(mes of meses){
        let active = mes == mesAtual ? "div__active" : "";
        output += `<div class='${active}'>${mes}</div>`;
    }

    return output;
}

app.querySelector(".article__body").innerHTML = rander();
app.querySelector(".article__title").innerHTML = new Date().getFullYear();