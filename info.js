
const id = localStorage.getItem ("ID")
let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
let foods = []

if(id){
    fetch(url +id)
        .then( res =>res.json())
        .then( data => {
            console.log(data);
            foods.push(data.meals[0])
            renderInfo(data.meals[0])
    })


}
const image = document.getElementById("image")
const h1Name = document.getElementById("f-name")
const desc = document.getElementById("desc")
const ings = document.querySelector(".ings")
const back = document.getElementById("back")
const videoFrame = document.getElementById("videoFrame")

function renderInfo(food){
    image.src = food.strMealThumb;
    h1Name.innerText = food.strMeal;
    desc.innerText = food.strInstructions;
    videoFrame.src = food.strYoutube.replace("watch?v=","embed/")
    ings.innerHTML = '';
    for (let i = 1; i <21; i++){
        if (food["strIngredient" + i]){
                ings.innerHTML += `<div class="flex border-t border-gray-800 py-2">
                    <span class="text-gray-500"> ${food["strIngredient" + i]}</span>
                    <span class="ml-auto text-white">${food["strMeasure" + i ]}</span>
                </div>`;
            }
        }

}

back.onclick = () => window.location.href = "index.html"
let isLIke = false
likeBtn.onclick = () => {
    isLIke = !isLIke
    const food = foods.find(food =>food.idMeal === id)
    console.log(food,'----fff----');
    const likeFood = {
        ...food,

        like: isLIke
    }
    console.log(likeFood,'--likeFood--');
    const svg = likeBtn.querySelector("svg")
    svg.style.fill = isLIke ? "red" : ""

}
