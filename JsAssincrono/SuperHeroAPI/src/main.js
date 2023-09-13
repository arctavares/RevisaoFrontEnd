const COMPLETE_INFO_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

const sortBtn = document.querySelector('#sortSuperHero');

let SuperHerosLength;

const getSuperHeroesLength = async () => {  // get max super heroes number
    const response = await fetch(COMPLETE_INFO_URL);
    const data = await response.json();
    return data.length;
}

SuperHerosLength = await getSuperHeroesLength();

console.log(SuperHerosLength);