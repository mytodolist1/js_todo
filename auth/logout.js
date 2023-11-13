import { deleteCookie } from "https://jscroot.github.io/cookie/croot.js";

function logout() {
    var result = confirm("yakin?");
    if (result) {
        deleteCookie("token");
        // Mengarahkan ke halaman login
        window.location.href = "login.html";
    }
}

document.getElementById("button").addEventListener("click", logout);

document.addEventListener("DOMContentLoaded", function () {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
});