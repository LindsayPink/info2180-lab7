window.onload = function () {
    "use strict";
    let lkp = document.getElementById("lookup");
    lkp.addEventListener("click", exec);
};

function exec () {
    let httpRequest = new XMLHttpRequest();
    let url = "https://info2180-lab7-lindsaypink.c9users.io/world.php/world.php?country=Jamaica";
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                let response = (httpRequest.responseText);
                let div = document.createElement("div"); //used to remove html tags from php response
                div.innerHTML = response; //used to remove html tags from php response
                alert(div.innerText);
                
                //let response = (httpRequest.responseText);
                //alert(response);
                //document.getElementById("result").innerHTML = response;
            } else {
                alert("Problem with request.");
            }
        }
    };
    httpRequest.open("GET", url);
    httpRequest.send();
} 