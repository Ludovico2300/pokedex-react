let resp;
let resp2;
let userId = new Number(0);
// userId = prompt("Choose a valid Pokedex Number(1-905)");
const mainContainer = document.getElementById("m-container");

function setUserID() {
  userId = document.querySelector("#input-id").value;
  findPokemon();
}

// scarica post

//metodo1
function findPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${userId}/`)
    .then((response) => response.json())
    .then((json) => {
      resp = JSON.stringify(json);

      // salva post
      localStorage.setItem("item", resp);

      // visualizza post
      const post = localStorage.getItem("item");
      const respParsed = JSON.parse(post); //crea OGGETTO respParsed

      const pkNameH3 = document.querySelector(".pk-name");
      const pkNumberH3 = document.querySelector(".pk-number");
      const pkDescriptionH3 = document.querySelector(".pk-description");
      const pkSpriteIMG = document.querySelector(".pk-sprite");

      pkNameH3.innerHTML = respParsed.name;
      pkNumberH3.innerHTML = `#${respParsed.id}`;
      pkSpriteIMG.setAttribute(
        "src",
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userId}.png`
      );

      const descriptionEn = respParsed.flavor_text_entries.find(
        (entry) => entry.language.name === "it"
      ).flavor_text;
      pkDescriptionH3.innerHTML = descriptionEn;
    });
}

function seeMore() {
  const pkNameH3 = document.querySelector(".pk-name");
  window.open(`https://wiki.pokemoncentral.it/${pkNameH3.textContent}`);
}

// findPokemon(); //da usare solo se si scegliesse di usare il prompt

function changeSprite() {
  const pkSpriteIMG = document.querySelector(".pk-sprite");

  if (
    pkSpriteIMG.src ===
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${userId}.png`
  ) {
    pkSpriteIMG.setAttribute(
      "src",
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userId}.png`
    );
  } else if (
    pkSpriteIMG.src ===
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userId}.png`
  ) {
    pkSpriteIMG.setAttribute(
      "src",
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${userId}.png`
    );
  }
}

function previousPokemon() {
  if (userId >= 2) {
    userId--;
    findPokemon();
  }
}

function nextPokemon() {
  if (userId <= 904) {
    userId++;
    findPokemon();
  }
}
