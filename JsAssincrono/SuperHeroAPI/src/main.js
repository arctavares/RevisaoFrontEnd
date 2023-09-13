const COMPLETE_INFO_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
const INFO_BY_ID = (id) => `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`

const sortBtn = document.querySelector('#sortSuperHero');
const superHeroName = document.querySelector('#SuperHeroName');
const superHeroImage = document.querySelector('#superHeroImage');

let SuperHerosLength;

const getSuperHeroesLength = async () => {  // get max super heroes number
    const response = await fetch(COMPLETE_INFO_URL);
    const data = await response.json();
    return data.length;
}

SuperHerosLength = await getSuperHeroesLength();

const randomInt = () => Math.floor(Math.random() * SuperHerosLength) + 1;

const getSuperHeroInfoById = async (id) => {
    const response = await fetch(INFO_BY_ID(id))
    const data = await response.json();
    return data;
}

sortBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const randInt = randomInt();
    const getHero = await getSuperHeroInfoById(randInt)
    console.log(getHero)
    superHeroName.innerHTML = getHero.name;
    superHeroImage.src = getHero.images.md;
})