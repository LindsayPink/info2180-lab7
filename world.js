window.onload = function () {
    "use strict";
    let lkp = document.getElementById("lookup"); 
    let check = document.getElementById("check");
    
    lkp.addEventListener("click", function exec () {
    let cntry = document.getElementById("country").value.trim();
    let httpRequest = new XMLHttpRequest();
    
    if (check.checked) {
        let url = "https://info2180-lab7-lindsaypink.c9users.io/world.php/world.php?all=true";
        httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                let response = (httpRequest.responseText);
                document.getElementById("result").innerHTML = response;
            } else {
                alert("We encountered an error. Try again later");
            }
        }
    };
    httpRequest.open("GET", url);
    httpRequest.send();
    }
    
    else if ((!cntry) && (check.checked === false)) {
        document.getElementById("result").innerHTML = "";
        alert("Problem with request.\nEnsure that search bar is not empty then check for spelling errors");
    }
    
    else {
        let url = "https://info2180-lab7-lindsaypink.c9users.io/world.php/world.php?country=" + cntry;
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    let response = (httpRequest.responseText);
                    document.getElementById("result").innerHTML = response;
                } else {
                    alert("We encountered an error. Try again later");
                }
            }
        };
        httpRequest.open("GET", url);
        httpRequest.send();
    }
    });
    
};