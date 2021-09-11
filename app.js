// Select button
const showJoke = document.querySelector('#showJoke');

// Function to get data from API ( https://icanhazdadjoke.com/ )
const getDadJoke = async() => {
    const config = {headers: {Accept: "application/json"}};
    const response = await axios.get('https://icanhazdadjoke.com/',config);
    console.log(response.data.joke); 
}

showJoke.addEventListener('click',getDadJoke);