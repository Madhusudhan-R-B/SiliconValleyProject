Webcam.set({
    width: 500,
    height: 400,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="result_image" style="width:500px; height:375px;" src="'+data_uri+'">';
    });
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/weEHQWGdn/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!")
}

function check(){
    img = document.getElementById("result_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("plant_type").innerHTML = "This plant is a " + results[0].label;
        if(document.getElementById("plant_type").innerHTML == "This plant is a Herb"){
            document.getElementById("plant_info").innerHTML = "Herbs are short plants which don't have a barky, strong stem, like trees. Instead they have a green, delicate stem.";
        }
        if(document.getElementById("plant_type").innerHTML == "This plant is a Shrub"){
            document.getElementById("plant_info").innerHTML = "Shrubs are bushy plants which have a woody strong, but not thick stems. They have branches that start to spread out right at the base of the stem.";
        }
        if(document.getElementById("plant_type").innerHTML == "This plant is a Tree"){
            document.getElementById("plant_info").innerHTML = "Trees are the biggest type of plant and have huge woody branches and roots. They also have very thick, barky trunks. Hyperion is the tallest tree on Earth with a height of 116 meters!";
        }
        if(document.getElementById("plant_type").innerHTML == "This plant is a Creeper"){
            document.getElementById("plant_info").innerHTML = "Creeper plants are self-explanitory. They creep across the ground, growing and growing. Heavy fruits which cannot be supported by normal plant branches or stems, like watermelons or pumpkins are grown close to the ground, so that the plants do not suffer damage from their own giant fruits.";
        }
        if(document.getElementById("plant_type").innerHTML == "This plant is a Climber"){
            document.getElementById("plant_info").innerHTML = "Climber plants are self-explanitory. They, as it says in its name, climb on different structure like trees and houses. They can be really handy when in comes to decorating your house!";
        }
    }
}

function area(){
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    result = input1 * input2;
    document.getElementById("area_farm").innerHTML = "You're farm's area is " + result + " Meters squared!";
}

function meters_to_acres(){
    meters_area = document.getElementById("area_convert").value;
    document.getElementById("acres").innerHTML = (meters_area/4047).toFixed(5) + " Acres!";
}
function meters_to_hectares(){
    meters_area = document.getElementById("area_convert").value;
    document.getElementById("hectares").innerHTML = (meters_area/10000).toFixed(5) + " Hectares!";
}

function acres_to_meters(){
    acres_area = document.getElementById("acres_convert").value;
    document.getElementById("acres_meters").innerHTML = (acres_area * 4047).toFixed(5) + " Meters squared!";
}

function acres_to_hectares(){
    acres_area = document.getElementById("acres_convert").value;
    document.getElementById("acres_hectares").innerHTML = (acres_area / 2.47096614776).toFixed(5) + " Hectares!"
}

function hectares_to_meters(){
    hectares_area = document.getElementById("hectares_convert").value;
    document.getElementById("hectares_meters").innerHTML = (hectares_area * 10000).toFixed(5) + " Meters Squared!";
}

function hectares_to_acres(){
    hectares_area = document.getElementById("hectares_convert").value;
    document.getElementById("hectares_acres").innerHTML = (hectares_area * 2.47096614776).toFixed(5) + " Acres!";
}