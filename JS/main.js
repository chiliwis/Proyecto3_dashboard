console.log("Entro a main.js")

const base_url = "https://zoo-animal-api.herokuapp.com";
const tblAnimales = document.getElementById("tblAnimales");
const animal_number = generateRandomNumber(1,200);

function cargarAnimales(){
    fetch(base_url + "/animals/rand",
    {
        method:"GET"
    }
    )
        .then(response => response.json())
        .then(result => {
            console.log(result);
            tblAnimales.innerHTML="";
            for (const animales of result) {
                let tr = `<tr>
                <td>1</td>
                <td>${animales.name}</td>
                <td>${animales.latin_name}</td>
                <td>${animales.animal_type}</td>
                <td>${animales.lifespan}</td>
                <td>${animales.habitat}</td>
                <td>${animales.geo_range}</td>
           
                </tr>`;
                tblAnimales.innerHTML += tr;
            }
        })
        .catch(error => {
            console.log("Error al cargar animales");
})
}

function generateRandomNumber (min=0, max=200) {
    let rand = Math.random();
    return rand;
}
// function agregarAnimales() {
//     console.log("Entro a agregar Usuario");
// }

cargarAnimales();