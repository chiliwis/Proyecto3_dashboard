console.log("Entro a main.js")

const base_url = "https://zoo-animal-api.herokuapp.com/animals/rand/4";
const tblAnimales = document.getElementById("tblAnimales");
const grafica = document.getElementById('myChart').getContext('2d');

 
// animalesStatus.push(lifespan,weightmin,weightmax);  
// tblAnimales.lifespan = vidaAnimales;
//   myChart.update();

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
          labels: ['Tiempo de vida', 'Peso Min', 'Peso Max'],
          datasets: [{
            label: 'Tiempo de Vida',
            data : [tblAnimales.lifespan],
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
            borderWidth: 2
          }]
        },
      
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 50
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



cargarAnimales();