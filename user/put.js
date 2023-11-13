import { getValue } from "https://jscroot.github.io/element/croot.js";
import { putData } from "../prc/process.js";

function updateData(){
    targer_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-updateUser";

    let data = {
        "email": getValue("email"),
        "username": getValue("username"),
    };
    putData(target_url, data, responseData);
}

function responseData(result) {
    alert(result.message + "\nUpdate data Berhasil")
    window.location.href= "profile.html"
}

document.getElementById("button2").addEventListener("click", updateData);
