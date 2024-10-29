let licznik = 0;
const maslo = "SmokiILochy420"

const modalSrodal = () => {
    document.getElementById("modal").style.display = "flex";
};

const zamykamyModalNieJestesmyDorszem = () => {
    document.getElementById("modal").style.display = "none";
    document.getElementById("password").value = "";
};

const sprawdzanko = () => {
    const wpisane = document.getElementById("password").value
    if (wpisane === maslo) {
        licznik++
        document.getElementById("counter").innerText = licznik;
        zamykamyModalNieJestesmyDorszem();
    } else {
        alert("A NIE DLA PSA DLA PANA TO");
    }
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        zamykamyModalNieJestesmyDorszem();
    }
};

