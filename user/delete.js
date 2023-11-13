function deleteData(){
    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    targer_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-deleteuser";

    fetch(targer_url, requestOptions)
        .then(response => response.text())
        .then(result => responseData(result))
        .catch(error => console.log('error', error));
}

function responseData(result) {
    alert(result.message + "\nDelete data Berhasil")
    window.location.href= "landing.html"
}

document.getElementById("button3").addEventListener("click", deleteData);