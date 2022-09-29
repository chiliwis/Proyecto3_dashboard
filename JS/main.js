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

      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'Tiempo de Vida',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

     
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