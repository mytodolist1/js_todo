function deleteData(){
    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    targer_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-deleteuser";

    fetch(targer_url, requestOptions)
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => console.log('error', error));
}

document.getElementById("button3").addEventListener("click", deleteData);