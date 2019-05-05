
function Activate() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let token = document.getElementById("token");
    let license_key = document.getElementById("license_key");

    if (username.value != "" && password.value != "" && token.value != "") {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://us-central1-projectx-e9fc2.cloudfunctions.net/QServe', true);

        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                let ResponseObj = JSON.parse(xhr.responseText);

                console.log(ResponseObj);
            }
        }

        xhr.send("username=" + username + "&password=" + password + "&token=" + token);

    } else {
        alert("Invalid Authentication!");
    }
}

