import { getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

function postWithToken(target_url, data, responseFunction) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.text())
        .then(result => responseFunction(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

const Login = () => {

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-login";
    
    const data = {
        "username": getValue("username"),
        "password": getValue("password"),
        "role": getValue("role"),
    };

    postWithToken(target_url, data, responseData);

}

const responseData = (result) => {
    if (result.status === true) {
        setCookieWithExpireHour("Authorization", result.token, 2);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: result.message,
        }).then(() => {
            window.location.href = "list_kegiatan.html";
        });

    } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: result.message,
        });
    }
};

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", Login);
