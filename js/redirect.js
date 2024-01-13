import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const checkTokenAndRedirect = () => {
    const token = "Authorization";
    const tokenValue = getCookie(token);
<<<<<<< HEAD:auth/redirect.js
=======
    // console.log("Token Value:", tokenValue);
>>>>>>> e5e20a71d7fcbec4f283ab1c94c286743a6de9d8:js/redirect.js

    if (!tokenValue) {
        window.location.href = "../login.html";
    }
}

window.onload = checkTokenAndRedirect;
