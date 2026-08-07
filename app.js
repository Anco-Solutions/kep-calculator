document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("continueBtn");

    btn.addEventListener("click", () => {

        const kep = document.querySelector('input[name="kep"]:checked').value;

        if (kep === "1") {
            alert("Επιλέχθηκε ΚΕΠ 1");
        } else {
            alert("Επιλέχθηκε ΚΕΠ 2");
        }

    });

});