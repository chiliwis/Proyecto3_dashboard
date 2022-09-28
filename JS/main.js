console.log("Entro a main.js")

const base_url = "https://zoo-animal-api.herokuapp.com/animals/rand/4";
const tblAnimales = document.getElementById("tblAnimales");
// const animal_number = generateRandomNumber(1,200);

function cargarAnimales(){
    fetch(base_url,
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
                <td>${animales.id}</td>
                <td>${animales.latin_name}</td>
                <td>${animales.lifespan}</td>
                <td>${animales.animal_type}</td>
                <td>${animales.weight_min}</td>
                <td>${animales.weight_max}</td>
                <td>${animales.geo_range}</td>
           
                </tr>`;
                tblAnimales.innerHTML += tr;
            }
        })
        .catch(error => {
            console.log("Error al cargar animales");
})
}
// function generateRandomNumber (min=0, max=200) {
//     let rand = Math.random();
//     return rand;
// }
cargarAnimales();