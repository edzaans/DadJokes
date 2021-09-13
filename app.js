//----------------- Select button, create global variables ------------//
const showJoke = document.querySelector('#showJoke');
const randomJoke = document.querySelector('#randomJoke');

const jokeDisplay = document.querySelector('#jokeDisplay');
const searchJoke = document.querySelector('#searchJoke');
const searchButton = document.querySelector('#searchButton');
const next = document.querySelector('#next');


// --------------- Function to get data from API ( https://icanhazdadjoke.com/ )-------------//
const getDadJoke = async() => {
    //Wrap code in TRY block 
    try{
        // Add headers requested by API
        const config = {headers: {Accept: "application/json"}};
        const response = await axios.get('https://icanhazdadjoke.com/',config);
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

// Button to display Jokes
showJoke.addEventListener('click',displayJoke);



// ----------------- Function for SEARCH term ---------------------//

const jokeSearch = async() => {
    //Wrap code in TRY block 
    try{
        // Add headers requested by API
        const config = {headers: {Accept: "application/json"}};
        const response = await axios.get(`https://icanhazdadjoke.com/search?term=${searchJoke.value}`,config);
        const jokesArray = response.data.results;
        console.log(jokesArray);
        return jokesArray;
    }
    // Add CATCH to catch any errors
    catch(e) {
        return "No jokes available!!!";
    }
}

// Function to display result
const searchResult = async () => {
    let jokeText2 = await jokeSearch();
    jokeDisplay.append(randomJoke);
    randomJoke.textContent = jokeText2[1].joke;
    return jokeText2;
}

// Button for SEARCH function
searchButton.addEventListener('click',searchResult);



// ----------------- Function for NEXT option --------------------//

let i = 0;
const nextJoke = async() => {
    let searchTest = await searchResult();
    i += 1;
    console.log("This is a test joke : "+searchTest[i].joke);
    jokeDisplay.append(randomJoke);
    randomJoke.textContent = searchTest[i].joke;
}

// Button to loop over RESULTS array
next.addEventListener('click', nextJoke );