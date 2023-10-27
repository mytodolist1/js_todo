import { deleteCookie } from "https://jscroot.github.io/cookie/croot.js";

export default function logout() {
    var result = confirm("yakin?");
    if (result) {
        deleteCookie("token");
        // Mengarahkan ke halaman login
        window.location.href = "login.html";
    }
}

document.getElementById("button").addEventListener("click", logout);