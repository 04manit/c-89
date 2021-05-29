function getScore(){
    document.getElementById("text").innerHTML = "Score : "+localStorage.getItem("score");
}
function back(){
    window.location = "index.html";
}