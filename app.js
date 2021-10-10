function compareDiet(dinoItem, humanItem) {
    let return_string;
    if (dinoItem.diet.toLowerCase() === humanItem.diet.toLowerCase()) {
        return_string = 'Like you, ' + dinoItem.species + ' is a ' + dinoItem.diet;
    } else {
        return_string = 'Unlike you, ' + dinoItem.species + ' is a ' + dinoItem.diet + ' while you are ' + humanItem.diet;
    }
    return return_string
}

function compareWeight(dinoItem, humanItem) {
    let return_string;
    if (dinoItem.weight === humanItem.weight) {
        return_string = 'Like you, ' + dinoItem.species + ' weighs: ' + dinoItem.weight + ' lbs';
    } else {
        return_string = 'Unlike you, ' + dinoItem.species + ' weighs: ' + dinoItem.weight + ' lbs while you weight: ' + humanItem.weight + ' lbs';
    }
    return return_string
}

function compareHeight(dinoItem, humanItem) {
    let return_string;
    if (dinoItem.height === humanItem.height) {
        return_string = 'Like you, ' + dinoItem.species + ' is: ' + dinoItem.height + ' feet tall';
    } else {
        return_string = 'Unlike you, ' + dinoItem.species + ' is: ' + dinoItem.height + ' feet tall while you are ' + humanItem.height + ' feet tall';
    }
    return return_string
}

function removeForm() {
    // Remove form from screen
    var form = this.document.getElementById("dino-compare");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function DinoConstructor(dino) {
    return {
        species: dino.species,
        weight: dino.weight,
        height: dino.height,
        diet: dino.diet,
        where: dino.where,
        when: dino.when,
        fact: dino.fact,
        image: 'images/' + dino.species.toLowerCase().replace(' ', '%20') + '.png'
    }
}

function Human(userData) {
    return {
        image: 'images/human.png',
        name: userData.name,
        height: userData.height,
        weight: userData.weight,
        diet: userData.diet
    }
}

function GridItem(object) {
    this.object = object;
    this.DisplayFacts = function (humanItem) {
        if (this.object.species === 'Pigeon') {
            return "All birds are considered dinosaurs."
        } else {
            let factKeys = ["weight", "height", "diet", "where", "when", "fact"];
            let factKey = factKeys[Math.floor(Math.random() * factKeys.length)];
            if (factKey === 'weight') {
                return compareWeight(this.object, humanItem)
            } else if (factKey === 'height') {
                return compareHeight(this.object, humanItem)
            } else if (factKey === 'diet') {
                return compareDiet(this.object, humanItem)
            } else {
                return factKey + ': ' + this.object[factKey]
            }
        }
    }
    this.generateHumanHtml = function () {
        return '<div class="grid-item"> <h3>' + this.object.name + '</h3><img src=' + this.object.image + '></div>'
    };
    this.generateDinoHtml = function (human) {
        let tile_content = this.DisplayFacts(human);
        return '<div class="grid-item"><h3>' + this.object.species + '</h3><img src=' + this.object.image + '>' + `<p>${tile_content}</p>` + '</div>'
    }
}

function generateTiles(dinos_array, grid, human) {
    // loop over tile indexes
    for (let i = 0; i <= dinos_array.length; i++) {
        // middle tile has to be human tile
        if (i === 4) {
            grid.innerHTML += new GridItem(human).generateHumanHtml()
        } else if (i < 4) {
            grid.innerHTML += new GridItem(dinos_array[i]).generateDinoHtml(human)
        } else {
            let j = i - 1;
            grid.innerHTML += new GridItem(dinos_array[j]).generateDinoHtml(human)
        }
    }
    return grid
}

function startPipeline() {
    let data = {
        "Dinos": [
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "First discovered in 1889 by Othniel Charles Marsh"
            },
            {
                "species": "Tyrannosaurus Rex",
                "weight": 11905,
                "height": 144,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "The largest known skull measures in at 5 feet long."
            },
            {
                "species": "Anklyosaurus",
                "weight": 10500,
                "height": 55,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": "372",
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
            },
            {
                "species": "Stegosaurus",
                "weight": 11600,
                "height": 79,
                "diet": "herbavor",
                "where": "North America, Europe, Asia",
                "when": "Late Jurasic to Early Cretaceous",
                "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
            },
            {
                "species": "Elasmosaurus",
                "weight": 16000,
                "height": 59,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
            },
            {
                "species": "Pteranodon",
                "weight": 44,
                "height": 20,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
            },
            {
                "species": "Pigeon",
                "weight": 0.5,
                "height": 9,
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "fact": "All birds are living dinosaurs."
            }
        ]
    }

    // Use IIFE to get human data from form
    let userData = (function getUserData() {
        let name = document.getElementById('name').value;
        let feet = parseFloat(document.getElementById('feet').value);
        let inches = parseFloat(document.getElementById('inches').value);
        let height = (inches * 0.083) + feet;
        let weight = parseFloat(document.getElementById('weight').value);
        let diet = document.getElementById('diet').value;
        return {
            name: name,
            height: height,
            weight: weight,
            diet: diet
        };
    })();

    // Remove form from screen
    removeForm()

    // Create Dino Objects
    let dinos_array = data.Dinos.map(DinoConstructor)

    // Create Human Object
    let human = Human(userData)

    // Generate Tiles for each Dino in Array
    // Add tiles to DOM
    let grid = this.document.getElementById("grid");
    // loop over tile indexes
    generateTiles(dinos_array, grid, human)
}
