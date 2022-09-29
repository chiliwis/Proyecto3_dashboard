console.log("Entro a main.js")

const base_url = "https://zoo-animal-api.herokuapp.com/animals/rand/4";
const tblAnimales = document.getElementById("tblAnimales");
const grafica = document.getElementById('myChart').getContext('2d');

function cargarAnimales() {
    fetch(base_url,
        {
            method: "GET"
        }
    )
        .then(response => response.json())
        .then(result => {
            console.log(result);
            tblAnimales.innerHTML = "";

            const config = {
                type: 'radar',
                data: result,
                options: {
                  elements: {
                    line: {
                    
                      borderWidth: 3
                    }
                  }
                },
              };

              const etiquetas = {
                labels: [
                  'Nombre',
                  'Tiempo de Vida',
                  'Peso Min',
                  'Peso Max',
                  'Ubicacion',
                  'Genero'
                ],
                datasets: [{
                  label: 'Nombre',
                  data: [result],
                  fill: true,
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgb(255, 99, 132)',
                  pointBackgroundColor: 'rgb(255, 99, 132)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgb(255, 99, 132)'
                }, {
                  label: 'Tiempo de Vida',
                  data: [result],
                  fill: true,
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  borderColor: 'rgb(54, 162, 235)',
                  pointBackgroundColor: 'rgb(54, 162, 235)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
              };


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
        .catch((error) => {
            console.log("Error al cargar animales");
        });
}
// function generateRandomNumber (min=0, max=200) {
//     let rand = Math.random();
//     return rand;
// }
cargarAnimales();