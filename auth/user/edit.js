export function isiData(result){
    const inputMapping = [
        {id: "email", path: email},
        {id: "username", path: username},
    ];

    inputMapping.forEach(function (input) {
        document.getElementById(input.id).value = result[input.path];
    });
}

export function isiPassword(result){
    const inputMapping = [
        {id: "password", path: password},
    ];

    inputMapping.forEach(function (input) {
        document.getElementById(input.id).value = result[input.path];
    });
}