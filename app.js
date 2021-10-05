function startPipeline(user_form) {
    let selectForm = this.document.forms['dino-compare'];
    let temporary_object = {
        name: selectForm['name'].value,
        feet: selectForm['feet'].value,
        inches: selectForm['inches'].value,
        weight: selectForm['weight'].value,
        diet: selectForm['diet'].value
    };
    let tiles = this.document.getElementById("tiles");
    if (tiles.style.display === "none") {
        tiles.style.display = "block";
    } else {
        tiles.style.display = "none";
    }
    let form = this.document.getElementById("dino-compare");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
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
