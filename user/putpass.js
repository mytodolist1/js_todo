import { getValue } from "https://jscroot.github.io/element/croot.js";
import { putData } from "../prc/process.js";

function updatePassword(){
    targer_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-changepass";

    let data = {
        "password": getValue("password"),
    };
    putData(target_url, data, responseData);
}

function responseData(result) {
    alert(result.message + "\nChange Password Berhasil")
    window.location.href= "profile.html"
}

document.getElementById("button3").addEventListener("click", updatePassword);
