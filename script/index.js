const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCatagories(json.categories))
}

const loadAllCatagories = () => {
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllCatagories(data.plants))
}

const loadPlants = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayLoadPlants(data.plants))
}

const displayLoadPlants = (cards) => {
    const getCards = document.getElementById("all-cagagories");
    getCards.innerHTML = "";

   for(let card of cards){
     const cardDiv = document.createElement("div");
     cardDiv.innerHTML = `
     <div class="bg-white rounded-[8px] p-3 flex flex-col justify-between items-end h-[550px]">
              <div class="w-full h-1/2">
                <img src=${card.image} alt="" class="rounded-[8px] w-full h-full">
              </div>  
                <div class="mt-3 flex flex-col h-1/2">
                    <h3 class="font-semibold">${card.name}</h3>
                    <p class="text-[13px] my-1">${card.description}</p>
                    <div class="flex justify-between items-center mt-2">
                        <button class="bg-[#DCFCE7] text-[#15803D] py-1 px-3 rounded-[400px]">${card.category}</button>
                        <p>৳<span>${card.price}</span></p>
                    </div>
                    <div class="w-full bg-[#15803D] rounded-[999px] text-center mt-auto">
                    <button class="text-white font-medium py-3 ">Add to Cart</button>
                    </div>
                </div>
            </div>
     `
     getCards.append(cardDiv)
   }
}

const displayAllCatagories = (allCatagories) => {
   const getAllCatagories = document.getElementById("all-cagagories");
   getAllCatagories.innerHTML = "";

   for(let plant of allCatagories){
      const catagoriDiv = document.createElement("div");
      catagoriDiv.innerHTML =`
      <div class="bg-white rounded-[8px] p-3 flex flex-col justify-between items-end h-[550px]">
              <div class="w-full h-1/2">
                <img src=${plant.image} alt="" class="rounded-[8px] w-full h-full">
              </div>  
                <div class="mt-3 flex flex-col h-1/2">
                    <h3 class="font-semibold">${plant.name}</h3>
                    <p class="text-[13px] my-1">${plant.description}</p>
                    <div class="flex justify-between items-center mt-2">
                        <button class="bg-[#DCFCE7] text-[#15803D] py-1 px-3 rounded-[400px]">${plant.category}</button>
                        <p>৳<span>${plant.price}</span></p>
                    </div>
                    <div class="w-full bg-[#15803D] rounded-[999px] text-center mt-auto">
                    <button class="text-white font-medium py-3 ">Add to Cart</button>
                    </div>
                </div>
            </div>
      `
      getAllCatagories.append(catagoriDiv);
   }
}



const displayCatagories = (categoriess) =>{
    const getCatagories = document.getElementById("categories");
    getCatagories.innerHTML = ""

    for(let categorie of categoriess){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick ="loadPlants(${categorie.id})" class="hover:bg-[#15803D] hover:text-white outline-none text-[16px] text-left rounded-[4px] w-full py-1 px-3">${categorie.category_name}</button>
       `
       getCatagories.appendChild(btnDiv);
    }
}

loadCatagories()
loadAllCatagories()


