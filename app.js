// Select button, create global variables
const showJoke = document.querySelector('#showJoke');
const randomJoke = document.querySelector('#randomJoke');

const jokeDisplay = document.querySelector('#jokeDisplay');
const searchJoke = document.querySelector('#searchJoke');
const searchButton = document.querySelector('#searchButton');
//const el = document.createElement('h3');

// Function to get data from API ( https://icanhazdadjoke.com/ )
const getDadJoke = async() => {
    //Wrap code in TRY block 
    try{
        // Add headers requested by API
        const config = {headers: {Accept: "application/json"}};
        const response = await axios.get('https://icanhazdadjoke.com/'+'search?term='+searchJoke.value,config);
        console.log(response.data.joke); 
        return response.data.joke;
    }
    // Add CATCH to catch any errors
    catch(e) {
        return "No jokes available!!!";
    }
}

// Function to display a random joke
const displayJoke = async () => {
        let jokeText = await getDadJoke();
        jokeDisplay.append(randomJoke);
        randomJoke.textContent = jokeText;
}





// Function for SEARCH term

const jokeSearch = async() => {
    //Wrap code in TRY block 
    try{
        // Add headers requested by API
        const config = {headers: {Accept: "application/json"}};
        const response = await axios.get(`https://icanhazdadjoke.com/search?term=${searchJoke.value}`,config);
        console.log(response.data.results[1].joke); 
        return response.data.results[1].joke;
    }
    // Add CATCH to catch any errors
    catch(e) {
        return "No jokes available!!!";
    }
}

const searchResult = async () => {
    let jokeText2 = await jokeSearch();
    jokeDisplay.append(randomJoke);
    randomJoke.textContent = jokeText2;
}

// Button to display Jokes
showJoke.addEventListener('click',displayJoke);

searchButton.addEventListener('click',searchResult);