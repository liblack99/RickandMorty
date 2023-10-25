import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  console.log(character.name);
  const view = `
    <div class="Characters__inner">
      <article class="Characters__card">
        <img src="${character.image}" alt="${character.name}">
        </article>
        <article class="Characters__card-info">
        <h2>${character.name}</h2>
        <h3>Episodes: <span>${character.episode.length}</span></h3>
        <h3>Status: <span>${character.status}</span></h3>
        <h3>Species: <span>${character.species}</span></h3>
        <h3>Gender: <span>${character.gender}</span></h3>
        <h3>Origin: <span>${character.origin.name}</span></h3>
        <h3>Last Location: ${character.location.name}</h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;
