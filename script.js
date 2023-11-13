
const infoText = document.getElementById('info-text');

const fetchInfo = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await response.json();
console.log(data.message) 
infoText.src = data.message;
}

fetchInfo()