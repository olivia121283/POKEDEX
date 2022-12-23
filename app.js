//const boxPokemones = document.querySelector('#box-pokemones');

const cargarPokemones = async () =>{
try {
const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
    console.log(respuesta);
    if (respuesta.status === 200){
    const datos = await respuesta.json();
    let = pokemones = '';
    datos.results.forEach(pokemon => {
      const {id, ThumbnailImage, name, abilities, weight } = pokemon;
      const cardPokemon = document.createElement ('div');
      cardPokemon.classList.add('col','mb-3');
      cardPokemon.innerHTML = ` 
      <div class="card bg-secondary flex-row rounded-3">
      <div class="w-50">
          <img src="${ThumbnailImage}" class="img-fluid object-fit" alt="">
      </div>
      <div class="card-body w-50">
          <h5 class="card-title"></h5>
          <h2 class="card-text mb-0 text-capitalize"><span>"${id}"</span>.</h2>
          <p class="card-text mb-3 text-capitalize"><span>"${name}"</span>.</p>
          <p class="card-text mb-3 text-capitalize"><span>"${abilities}"</span>.</p>
          <p class="card-text mb-3 text-capitalize"><span>"${weight}"</span>.</p>
      </div>
      </div>    
        `;
    });
    document.getElementById('box-pokemones').innerHTML = pokemones;
  } else if (respuesta.status === 401){
    console.log('Incorrecto');
  }else if (respuesta.status === 404){
    console.log('El pokemon no existe');
  }else {
    console.log('Hubo un error');
  }  
  } catch (error) {
    console.log(error);
  }
}
  cargarPokemones();


  /*    
 //boxPokemones.appendChild(cardPokemon);
  }*/































/*const boxPokemones = document.querySelector('#box-pokemones');

function fetchPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then (res => res.json())
  .then (data => {
    mostrarPokemones(data);
  });
}
function fetchPokemones(number){
  for (let i=1; i<=number; i++){
    fetchPokemon(i);
  }
}

let url= "https://pokeapi.co/api/v2/pokemon/"
axios.get(url).then(function(response){
let pokemon = response.data;});

function mostrarPokemones(pokemon){
  pokemon.forEach(pokemon => {
  const {id, ThumbnailImage, name, abilities, weight } = pokemon;
  const cardPokemon = document.createElement ('div');
  cardPokemon.classList.add('col','mb-3');
  cardPokemon.innerHTML = ` 
  <div class="card bg-secondary flex-row rounded-3">
  <div class="w-50">
      <img src="${ThumbnailImage}" class="img-fluid object-fit" alt="">
  </div>
  <div class="card-body w-50">
      <h5 class="card-title"></h5>
      <h2 class="card-text mb-0 text-capitalize"><span>"${id}"</span>.</h2>
      <p class="card-text mb-3 text-capitalize"><span>"${name}"</span>.</p>
      <p class="card-text mb-3 text-capitalize"><span>"${abilities}"</span>.</p>
      <p class="card-text mb-3 text-capitalize"><span>"${weight}"</span>.</p>
  </div>
  </div>       
  `;
  boxPokemones.appendChild(cardPokemon);
   });
 mostrarPokemones();
}

*/