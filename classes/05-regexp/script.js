const password = document.getElementsByName("password")[0];
const form = document.querySelector("form");
const name_form = document.getElementsByName("name")[0];

form.addEventListener("submit", function(event) {

    const regex = new RegExp(`${name_form.value}`);
    const check = password.value.match(regex);

    if (check != null) {
        event.preventDefault();
        password.style.border = "solid red";
        console.log(password);
    }
});

password.addEventListener("focus", validation);
password.addEventListener("changes", validation);
name_form.addEventListener("focus", validation);
name_form.addEventListener("changes", validation);

function validation() {
    const regex = new RegExp(`${name_form.value}`);
    const check = password.value.match(regex);
    console.log(check);

    if (check != null)
        password.style.border = "1px solid red";
    else
        password.style.border = "1px solid black";
}