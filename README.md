<!-- Title: A working title for your app. (Feel free to have some fun with this.) -->

Title: NutriMate

<!-- Description: 4 to 5 sentences summarizing the features, functions, and goals. -->

Decription: NutriMate is an app that details nutritional information to the user. Users can type in any food item, drink item, or brand name and get nutritional information such as calorie amount, amount of sugars, and carbohydrates. The user can even search through specific resturaunt items and grocery store brands. The main page has a search bar for the main database of items that renders a nutrional label of information. There is also a seperate tab for a food journal for users to print out and take notes on. Going forward, I plan to make a "google-sheets" type of document for the food journal so that users can type directly on the webpage and then save their journals daily to their computers.

<!-- Wireframes: Mockups of your app on desktop, tablet, and mobile. -->

Wireframes:
Interactive display on Marvel App --> https://marvelapp.com/4bee4ba

Image of wireframe via Imgur --> https://i.imgur.com/uqfleXw.png

<!-- API: Which API you will be using. -->

API: Nutritionix -- > https://developer.nutritionix.com/

<!-- MVP: Write out what your goals are for MVP, including the minimum, need-to-have features of your app. -->

MVP:

1. HTML, CSS, and Javascript.
2. Render nutritional data to the DOM via Nutritionix Axios/API.
3. Use flexbox to design a nutritional facts box.
4. Make sure that the design is scalable and responsive to mac, tablet, and mobile.
5. Host the NutriMate app on Surge.

<!-- Post-MVP: Write out what your goals are for post-MVP, including nice-to-have features that you would like to implement once your MVP is complete. -->

Post-MVP:

1. Locate and use a second API that renders nutritional health quotes and helpful information on the front page.
2. Create a second page where users can input their information into a daily food journal.
3. Create a "google-sheets" type of document for the food journal so that users can type directly on the webpage and then save their journals daily to their computers.

<!-- ------------------- -->

Technologies used:
-Html
-CSS
-Javascript
-Nutritionix API
-Google Fonts: Merriweather
-Flexbox
-Responsive design that is scalable to mac, tablet, and mobile
-Includes hover ability over links
-Includes event listener for click event as well as enter key event when searching for nutritional info
-Nutritional info reloads when searching for a new item without having to reload the page
-"Print page" button was added so that the user can just print the food journal section without the header and footer on the page
-links in the footer open up in a new page instead of rendering over the NutriMate website
-Unsplash was used for images
-Surge for website hosting

<!-- ------------------- -->

Approaches taken:
I started with creating the outline and framework via HTML to make it look similar to my wireframe on Marvel. I then went into CSS to create a basic outline of all of the elements. After this, I flushed out the Javascript to render the data from the Nutritionix API database using axios. I then worked on creating an eventlistener for the keyup function so that users can either click the "submit" button or just press "enter" on their keyboards when searching. After that, I researched and added more flexbox so that the website would look more visually appealing. Next, I started creating the food journal page and linked the page back to the NutriMate homepage. Once the css was completed on that page, I focused on making the nutritional information on the front page reload whenever searching for a new item without having to reload the page. After this, I jumped back to the food journal to create a "print page" button that prints only the food journal section of the page. Once that was complete, I focused on adding more fields to my nutritional information javascript so that the user can have a more holistic view of the item that they are searching. I finished off with improving the css/html that renders into the DOM after the user hits the submit button, cleaned up/organized my code, and hosted the website on surge.

<!-- ------------------- -->

Relevant instructions for viewers:
NutriMate is an app that details nutritional information to the user. You can type in any food item, drink item, or brand name and get nutritional information such as calorie amount, amount of sugars, and carbohydrates. You can even search through specific resturaunt items and grocery store brands. The main page has a search bar for the main database of items that renders a nutrional label of information. There is also a seperate tab for a food journal for you to print out and take notes on.

<!-- ------------------- -->

Unsolved problems:
-How to create a google-sheets type of document for the food journal so the viewer can type right into the screen.
-When a nutrition attribute is unknown, the field pops up as "null", so I will have to write a function to remove a field if it displays "null".

<!-- ------------------- -->

Link to live site: https://nutrimate.surge.sh/

# NutriMate
