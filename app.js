function startPipeline(user_form) {
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

    // Add tiles to DOM

    // Remove form from screen
}

// On button click, prepare and display infographic
window.document.getElementById('btn').addEventListener("click", function() {
    var selectForm = document.forms['dino-compare'];
    let temporary_object = {
        name: selectForm['name'].value,
        feet: selectForm['feet'].value,
        inches: selectForm['inches'].value,
        weight: selectForm['weight'].value,
        diet: selectForm['diet'].value
    };
    startPipeline(temporary_object)
});
