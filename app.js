function startPipeline(user_form) {
    let selectForm = this.document.forms['dino-compare'];
    let temporary_object = {
        name: selectForm['name'].value,
        feet: selectForm['feet'].value,
        inches: selectForm['inches'].value,
        weight: selectForm['weight'].value,
        diet: selectForm['diet'].value
    };
    let form = this.document.getElementById("dino-compare");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
    let grid = this.document.getElementById("grid");
    if (grid.style.display === "none") {
        grid.style.display = "flex";
        grid.style.background= "#fff url(images/tracks.png) no-repeat";
        grid.style.backgroundSize= 'cover';
        grid.style.margin= "2em";
        grid.style.boxShadow= "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
        grid.style.flexWrap= "wrap";
    } else {
        grid.style.display = "none";
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
