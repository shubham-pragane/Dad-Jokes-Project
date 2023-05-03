// <div id="joke" class="joke">Awesome Joke is loading</div>
//         <button id="jokeBtn" class="btn">Next Joke</button>

// PROMISES 

// 2cond => success => fail

// fetch('https://restcountries.com/v3.1/name/nepal')

// meliga => sab sahi hai 
// nai mila => inernet error or server error

// promises has 3 state
// fullfilled 
// reject 
// ongoing

// 90% cases promise is consumed(recieved o/p) na ki createImageBitmap.
// we take that o/p and perform further operations

// we use then then then in promises ,it is also used to avoid callback hell






// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');//# for id


// const generateJokes = () => {


//     const setHeader = {
//         headers :{
//             Accept:"application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then((res) => res.json() )
//     .then( (data)=>{
//         jokes.innerHTML=data.joke;
//     })

//     .catch((error)=>{
//         console.log(error);
//     })
// }
// jokeBtn.addEventListener('click',generateJokes)
// generateJokes()

//This was using promises


const generateJokes = async () => {

    try{
        const setHeader = {
        headers :{
            Accept:"application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/',setHeader);
    const data = await res.json()
    jokes.innerHTML=data.joke;
    }catch(error){
        console.log(`the error is ${error}`);
    }
}

jokeBtn.addEventListener('click',generateJokes)
generateJokes()





//PROMISES
// const joke = document.getElementById('joke');
// const jokeBtn = document.getElementById('jokeBtn')

// const generateJoke = async() => {

//     try{
//         const setHeader = {
//             headers : {                         //headers not header
//                 Accept:'application/json'
//             }
//         }

//         const res = await fetch('https://icanhazdadjoke.com/',setHeader);
//         const data = await res.json();
//         joke.innerHTML=data.joke;
//     }catch(error){
//         console.log(`this is error ${error}`);
//     }

// }

// jokeBtn.addEventListener('click',generateJoke);
// generateJoke();





//PROMISES
// const generateJoke = () => {

//     setHeader = {
//         headers : {
//             Accept :'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then((res)=> res.json())
//     .then((data)=>{
//         jokes.innerHTML=data.joke;
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// }


// jokeBtn.addEventListener('click',generateJoke)
// generateJoke();










