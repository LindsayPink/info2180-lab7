window.onload = function () {
    "use strict";
    let lkp = document.getElementById("lookup");
    lkp.addEventListener("click", exec);
};

function exec () {
    let cntry = document.getElementById("country").value.trim();
    let httpRequest = new XMLHttpRequest();
    let url = "https://info2180-lab7-lindsaypink.c9users.io/world.php/world.php?country=" + cntry;
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                let response = (httpRequest.responseText);
                document.getElementById("result").innerHTML = response;
            } else {
                alert("Problem with request.\nEnsure that search bar is not empty then check for spelling errors");
            }
        }
    };
    httpRequest.open("GET", url);
    httpRequest.send();
} 