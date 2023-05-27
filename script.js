const nomeCarro = document.getElementById("name-car");
const marcaCarro = document.getElementById("brand-car");
const corCarro = document.getElementById("color-car");
const lista = document.getElementById("lista");

const get = async () => {
    let myJson = {};
    const response = await fetch('http://localhost:8080/carros');
    myJson = await response.json();

    for(let i in myJson){
        let itemLista = document.createElement("li");
        itemLista.innerText = `Carro: ${myJson[i].nome}, Marca: ${myJson[i].marca}, Cor: ${myJson[i].cor}`;
        lista.appendChild(itemLista);
    }
}

const post = async () => {
    let myJson = {};
    const response = await fetch('http://localhost:8080/carros', {
        method: "POST",
        body: JSON.stringify({
            nome: nomeCarro.value,
            marca: marcaCarro.value,
            cor: corCarro.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    myJson = await response.json();
}

const put = async (id) => {
    let myJson = {};
    const response = await fetch('http://localhost:8080/carros/' + id, {
        method: "PUT",
        body: JSON.stringify({
            nome:  nomeCarro.value,
            marca: marcaCarro.value,
            cor: corCarro.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    myJson = await response.json();
}

const delet = async (id) => {
    const response = await fetch('http://localhost:8080/carros/' + id, {
        method: "DELETE",
    });
}