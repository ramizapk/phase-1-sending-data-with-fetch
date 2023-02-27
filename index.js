function submitData(name, email) {
    return (fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    }).then((response) => response.json()).then((object) => {
        console.log(object.id);
    }).catch(error => {
        document.body.innerHTML = error;
        // Handle the error here
    }));


}


let form = document.getElementById("form");
function handleForm(event) {
    event.preventDefault();
    console.log(form.name.value);
    submitData(form.name.value, form.email.value);
}
form.addEventListener('submit', handleForm);