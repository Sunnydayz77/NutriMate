const DOMAIN = `https://api.nutritionix.com/`;
const API_KEY = `b886b748dc5ea57054a126ca75eb1bf9`;
const APP_ID = `264e5938`;
const sectionOutput = document.querySelector("#nutritionLabel");

let button = document.querySelector(`button`);
let input = document.querySelector(`input`);

let renderList = field => {
  console.log(field);

  const nutriInfo = document.querySelectorAll(".nutritionInfo");
  nutriInfo.forEach(element => {
    element.remove();
  });

  field.forEach(fields => {
    let itemName = fields.fields.item_name;
    let brandName = fields.fields.brand_name;
    let servingSize = fields.fields.nf_serving_size_qty;
    let servingSizeUnit = fields.fields.nf_serving_size_unit;
    let calories = fields.fields.nf_calories;
    let totalFat = fields.fields.nf_total_fat;
    let saturatedFat = fields.fields.nf_saturated_fat;
    let transFat = fields.fields.nf_trans_fatty_acid;
    let cholesterol = fields.fields.nf_cholesterol;
    let sodium = fields.fields.nf_sodium;
    let totalCarbs = fields.fields.nf_total_carbohydrate;
    let fiber = fields.fields.nf_dietary_fiber;
    let sugar = fields.fields.nf_sugars;
    let protein = fields.fields.nf_protein;

    let newDiv = document.createElement("div");
    newDiv.classList.add("nutritionInfo");
    newDiv.innerHTML += `<h2 id="topItem">${itemName}</h2>
        <h2>Brand: ${brandName}</h2>
        <h3>${servingSize} ${servingSizeUnit}</h3>
        <h3>Calories: ${calories}</h3>
        <h3>Total Fat: ${totalFat}g</h3>
        <h3>Saturated Fat: ${saturatedFat}g</h3>
        <h3>Trans Fat: ${transFat}g</h3>
        <h3>Cholesterol: ${cholesterol}mg</h3>
        <h3>Sodium: ${sodium}mg</h3>
        <h3>Total Carbohydrates: ${totalCarbs}g</h3>
        <h3>Dietary Fiber: ${fiber}g</h3>
        <h3>Sugar: ${sugar}g</h3>
        <h3>Protein: ${protein}g</h3>
        <hr>`;
    document.querySelector("#nutritionLabel").appendChild(newDiv);
  });
};

//Or use for loop below in comments! -->
// let renderList = fields => {
//   sectionOutput.innerHTML = "";

//   for (let i = 0; i < fields.length; i++) {
//     let itemName = fields.fields.item_name;
//     let brandName = fields.fields.brand_name;
//     let servingSize = fields.fields.nf_serving_size_qty;
//     let servingSizeUnit = fields.fields.nf_serving_size_unit;
//     let calories = fields.fields.nf_calories;
//     let totalFat = fields.fields.nf_total_fat;
//     let saturatedFat = fields.fields.nf_saturated_fat;
//     let transFat = fields.fields.nf_trans_fatty_acid;
//     let cholesterol = fields.fields.nf_cholesterol;
//     let sodium = fields.fields.nf_sodium;
//     let totalCarbs = fields.fields.nf_total_carbohydrate;
//     let fiber = fields.fields.nf_dietary_fiber;
//     let sugar = fields.fields.nf_sugars;
//     let protein = fields.fields.nf_protein;

//    let newDiv = document.createElement("div");
//     newDiv.innerHTML += `<h2 id="topItem">${itemName}</h2>
//         <h2>Brand: ${brandName}</h2>
//         <h3>${servingSize} ${servingSizeUnit}</h3>
//         <h3>Calories: ${calories}</h3>
//         <h3>Total Fat: ${totalFat}g</h3>
//         <h3>Saturated Fat: ${saturatedFat}g</h3>
//         <h3>Trans Fat: ${transFat}g</h3>
//         <h3>Cholesterol: ${cholesterol}mg</h3>
//         <h3>Sodium: ${sodium}mg</h3>
//         <h3>Total Carbohydrates: ${totalCarbs}g</h3>
//         <h3>Dietary Fiber: ${fiber}g</h3>
//         <h3>Sugar: ${sugar}g</h3>
//         <h3>Protein: ${protein}g</h3>
//         <hr>`;
//      sectionOutput.append(newDiv);
//    }
//  };

const apiCall = async () => {
  let response = await axios.get(
    `${DOMAIN}v1_1/search/${input.value}?results=0:50&fields=item_name,brand_name,item_id,nf_calories,nf_sodium,nf_sugars,nf_total_fat,nf_saturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_total_carbohydrate,nf_dietary_fiber,nf_protein
&appId=${APP_ID}&appKey=${API_KEY}`
  );
  renderList(response.data.hits);
  console.log(response.data.hits);
};

button.addEventListener(`click`, async () => {
  apiCall();
});

input.addEventListener(`keyup`, async event => {
  if (event.keyCode === 13) {
    apiCall();
  }
});
