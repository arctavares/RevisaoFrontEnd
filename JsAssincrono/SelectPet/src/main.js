const randomDogBtn = document.querySelector('.getRandomDogBtn');
const randomCatBtn = document.querySelector('.getRandomCatBtn');
const randomPetBtn = document.querySelector('.getRandomPet');

const petImage = document.querySelector('.petImage');

const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://api.thecatapi.com/v1/images/search';

const getRandomDogImage = async () => {
    const response = await fetch(DOG_API);
    const data = await response.json();
    const image_url = data.message;
    return image_url;
}

const getRandomCatImage = async () => {
    const response = await fetch(CAT_API);
    const data = await response.json();
    const image_url = data[0].url;
    return image_url;
}

randomDogBtn.addEventListener('click',async (e) => {
    e.preventDefault();
    const dog_url_image = await getRandomDogImage();
    petImage.src = dog_url_image;
})

randomCatBtn.addEventListener('click',async (e) => {
    e.preventDefault();
    const cat_url_image = await getRandomCatImage();
    petImage.src = cat_url_image;
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * 2) + 1;
}

randomPetBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const randomNumber = getRandomNumber();
    if(randomNumber === 1) {
        const dog_url_image = await getRandomDogImage();
        petImage.src = dog_url_image;
    }else {
        const cat_url_image = await getRandomCatImage();
        petImage.src = cat_url_image;
    }
})