import { getValue } from "https://jscroot.github.io/element/croot.js";
import { putWithToken } from "../temp/component.js";

const updateUser = () => {
    const username = getValue("username1");

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-user?username=" + username;

    const data = {
        password : getValue("newpass"),
        confirmpassword : getValue("confirmpass"),
    };

    console.log(data);
    
    putWithToken(target_url, data, responseData);
};

const responseData = (result) => {
    if (result.status === true) {
        Swal.fire({
            icon: "success",
            title: "Update Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "profile.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: result.message,
        });
    }
}

const change = document.getElementById("change");

// change.addEventListener("click", updateUser);

change.addEventListener("click", () => {
    console.log("button aktif");
    updateUser();
  });
