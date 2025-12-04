//ficheiro de script
const form = document.querySelector("form");
const cancelar = document.getElementById("cancelar");

form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
        e.preventDefault();
    }
    form.classList.add("was-validated");
});

cancelar.addEventListener("click", function () {
    form.reset();
    form.classList.remove("was-validated");
});
