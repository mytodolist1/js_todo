import { getValue } from "https://jscroot.github.io/element/croot.js";

function putPassword(){
    const myheaders = new Headers();
    myheaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const data = {
        "email": getValue("email"),
        "username": getValue("username"),
    };

    const requestOptions = {
        method: 'PUT',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    };

    targer_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-changepass";

    fetch(targer_url, requestOptions)
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => console.log('error', error));
}

document.getElementById("button2").addEventListener("click", putPassword);