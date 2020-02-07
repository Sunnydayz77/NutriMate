// {
//   "appId":"YOUR_APP_ID",
//   "appKey":"YOU_APP_KEY",
//   "Phrase":"search_item"
// }

const DOMAIN = `https://api.nutritionix.com/`;
const API_KEY = `b886b748dc5ea57054a126ca75eb1bf9`;
const APP_ID = `264e5938`;
const sectionOutput = document.querySelector("#nutritionLabel");
// const PHRASE = "";
// const BASE_URL = `${DOMAIN}v1_1/search/${input.value}&appId=${APP_ID}&appKey=${API_KEY}`;

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
    let sugar = fields.fields.nf_sugars;
    let sodium = fields.fields.nf_sodium;
    let totalFat = fields.fields.nf_total_fat;
    let saturatedFat = fields.fields.nf_saturated_fat;
    let transFat = fields.fields.nf_trans_fatty_acid;
    let cholesterol = fields.fields.nf_cholesterol;
    let totalCarbs = fields.fields.nf_total_carbohydrate;
    let fiber = fields.fields.nf_dietary_fiber;
    let protein = fields.fields.nf_protein;

    let newDiv = document.createElement("div");
    newDiv.classList.add("nutritionInfo");
    newDiv.innerHTML += `<h2>Item: ${itemName}</h2>
        <h2>Brand: ${brandName}</h2>
        <h3>${servingSize} ${servingSizeUnit}</h3>
        <h3>Calories: ${calories}</h3>
        <h3>Total Fat: ${totalFat}g</h3>
        <h4>Saturated Fat: ${saturatedFat}g</h4>
        <h4>Trans Fat: ${transFat}g</4>
        <h3>Cholesterol: ${cholesterol}mg</h3>
        <h3>Sodium: ${sodium}mg</h3>
        <h3>Total Carbohydrates: ${totalCarbs}</h3>
        <h4>Dietary Fiber: ${fiber}</h4>
        <h4>Sugar: ${sugar}g</h4>
        <h3>Protein: ${protein}g</h3>
        <hr>`;
    document.querySelector("#nutritionLabel").appendChild(newDiv);
  });
};

//Or use for loop below in comments! -->
// let renderList = fields => {
//   sectionOutput.innerHTML = "";

//   for (let i = 0; i < fields.length; i++) {
//     let brandName = fields[i].fields.brand_name;
//     let itemName = fields[i].fields.item_name;
//     let servingSize = fields[i].fields.nf_serving_size_qty;
//     let servingSizeUnit = fields[i].fields.nf_serving_size_unit;
//     let calories = fields[i].fields.nf_calories;
//     let sugar = fields[i].fields.nf_sugars;
//     let sodium = fields[i].fields.nf_sodium;

//     let newDiv = document.createElement("div");
//     newDiv.innerHTML += `<h2>Brand: ${brandName}</h2>
//         <h2>Item: ${itemName}</h2>
//         <h3>${servingSize} ${servingSizeUnit}</h3>
//         <h3>Calories: ${calories}</h3>
//         <h3>Sodium: ${sodium}</h3>
//         <h3>Sugar: ${sugar}</h3>
//         <hr>`;
//     sectionOutput.append(newDiv);
//   }
// };

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
