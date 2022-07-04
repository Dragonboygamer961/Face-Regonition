Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90

});


my_cam = document.getElementById("camera");

Webcam.attach(my_cam);

function trigger(){

    Webcam.snap(function(meow){
    document.getElementById("captured_image").innerHTML = "<img src = ' "+ meow +" ' id = 'kitty_cat' >";
    });
}

console.log("ML5 version", ml5.version);

classifier =  ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lCV24O3SS/model.json", model_Loaded);


function model_Loaded(){

    console.log("Finish");
}

function Identify(){
    
    my_img = document.getElementById("kitty_cat");

    classifier.classify(my_img,gotResults);

}

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = ((results[0].confidence)*100).toFixed(2) +"%";
    }
    
}

