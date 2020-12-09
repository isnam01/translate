var query=document.querySelector("#btn-translate");
var text=document.querySelector("#txt-input");
var output=document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/navi.json";


function geturl(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickhandler(){
    var inputtext=text.value;
    fetch(geturl(inputtext))
        .then((response)=>response.json())
        .then(json=>{
            var translated=json.contents.translated;
            output.innerText=translated;
        })
        .catch(errorHandler)
}


query.addEventListener("click",clickhandler);