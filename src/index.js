const imgUrl ="https://dog.ceo/api/breeds/image/random/4"
let breeds;
    fetch(imgUrl)
    .then((resp) => resp.json())
    .then(dogImg => appendImages(dogImg.message))
    

    function appendImages(dogImg){
        const imgContainer = document.querySelector("div")
        dogImg.forEach(image => {
            //create and image element
            const img = document.createElement('img')
            //set src attribute
            img.src = image
            //img.alt = image (accessibility, proper HTML)
            //append img to DOM
            //imgContainer.appendChild(img); can only do one .append does multiple
            imgContainer.append(img);
         });
    }

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    //on page load, fetches all the dog breeds using the url above ⬆️
    //adds the breeds to the page in the <ul> provided in index.html

    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((breedsData) => {
    breeds = Object.keys(breedsData.message)
    renderBreeds(breeds)
    });

    const ul = document.querySelector('ul')
    //iterate over object (forOf perhaps lol)

    //purpose of renderBreeds is to select each ul and add each breed to each section
    function renderBreeds(breeds){
        const ul = document.querySelector('ul')
        //console.log(breeds);
        //select DOM element to render breeds to
        for(let breed of breeds) {
            //create li element
            const li = document.createElement('li')
            //update textContent, innerText
            li.textContent = breed
            //add event listener to li
            li.addEventListener('click', (event) =>  {
                //console.log(event.target)
                //debugger
                
                event.target.style.color = "green";
            });
            //apppend li to list
            ul.appendChild(li);
        }
    }

    //Once all of the breeds are rendered in the <ul>, add 
    //JavaScript so that, when the user clicks on any one of the <li>s, 
    //the font color of that <li> changes. This can be a color of your choosing.


    //Once we are able to load all of the dog breeds onto the page, add 
    //JavaScript so that the user can filter breeds that start with a particular letter using a 
    //dropdown

//how do we grab dropdown Maverick????


//dropdown.addEventListener("change", filterBreeds);
document.addEventListener("DOMContentLoaded", () => {
    let dropdown = document.querySelector("#breed-dropdown");
    //wait until this all loaded then we find "dropdown"
   dropdown.addEventListener('change', (event) => {
    filterBreeds(event)
   })
})


function filterBreeds(event){
    let letter = event.target.value
    const ul = document.querySelector('ul')
    //we want to filter existing li breeds to ONLY breeds that start w/this 
    //letter
    //console.log(breeds)
    //filter breeds using letter

    let filteredBreeds = breeds.filter(breed => {
        return breed[0] === letter;
    });
    console.log(filteredBreeds);
    ul.innerHTML = "";
    renderBreeds(filteredBreeds)
}