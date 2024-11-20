



// a fetch is like an ask and recieve the url ask and the fetch provides an response

// fetch('https://dog.ceo/api/breeds/image/random/2003')
// .then(res => res.json())
// .then(data => console.log(data))



const url = "https://official-joke-api.appspot.com/random_joke";
const url2 = "https://banana.republic" //this would produce a fetch error 
const url3 = "http://worldtimeapi.org/api/timezone/America/N"//this would be a server error

    


    async function dogs() {
        const response = await fetch(url)
        const data = await response.json();// this will turn response into a json format
        console.log(data);

        document.getElementById('test').innerHTML = 
        ` <h2>${data.setup}</h2>
        <p>${data.punchline}</p>
        
        
        `;

        // const data = await response.json();
        // console.log(data);
    }
    dogs();
    


// fetch(url)
// .then(response => response.json())
// .then(data => console.log('Success',data))     // if the fetch prints this message but also prints error it made 
                                                  //a successful trip to the api even if it doesnt come back with anything 


// .catch(error => console.log(`Error: ${error}`))    //if this come up its because the fetch failed/ couldnt connect



// fetch(url)
// .then(response => console.log(response))


// async function getData() {
//     try{
//         const response = await fetch(url3)
//         const data = await response.json()
//         if(response.status === 200){
//             console.log(`Success`, data)
//         }else{
            
//             console.log(`Server Error`, data.error.message);
            
//         }
//     } catch(error){
//         console.log(`Fetch Error`, error)
//     }

// }
// getData();