
function Activate() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let token = document.getElementById("token");
    let license_key = document.getElementById("license_key");

    if (username.value != "" && password.value != "" && token.value != "") {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://us-central1-projectx-e9fc2.cloudfunctions.net/QServe', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                let ResponseObj = JSON.parse(xhr.responseText);

                if (ResponseObj.LICENSE_KEY != null) {
                    license_key.value = ResponseObj.LICENSE_KEY;
                    license_key.style.display = 'flex';
                } 

                if (ResponseObj.ERROR != null) {
                    alert("Invalid Authentication!");
                }
            }
        }

        xhr.send("username=" + username.value + "&password=" + password.value+ "&token=" + token.value);

    } else {
        alert("Invalid Authentication!");
    }
}

