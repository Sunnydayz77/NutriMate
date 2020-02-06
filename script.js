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

  field.forEach(fields => {
    let brandName = fields.fields.brand_name;
    let itemName = fields.fields.item_name;
    let servingSize = fields.fields.nf_serving_size_qty;
    let servingSizeUnit = fields.fields.nf_serving_size_unit;
    let calories = fields.fields.nf_calories;
    let sugar = fields.fields.nf_sugars;
    let sodium = fields.fields.nf_sodium;

    let newDiv = document.createElement("div");
    newDiv.innerHTML += `<h2>Brand: ${brandName}</h2>
        <h2>Item: ${itemName}</h2>
        <h3>${servingSize} ${servingSizeUnit}</h3>
        <h3>Calories: ${calories}</h3>
        <h3>Sodium: ${sodium}</h3>
        <h3>Sugar: ${sugar}</h3>
        <hr>`;
    document.querySelector("#nutritionLabel").appendChild(newDiv);
  });
  // newDiv.innerHTML = ``;
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
    `${DOMAIN}v1_1/search/${input.value}?results=0:50&fields=item_name,brand_name,item_id,nf_calories,nf_sodium,nf_sugars&appId=${APP_ID}&appKey=${API_KEY}`
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
