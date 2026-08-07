document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("calculate");

    btn.addEventListener("click", function () {

        const embark = document.getElementById("embark").value;
        const discharge = document.getElementById("discharge").value;

        if (!embark || !discharge) {
            alert("Συμπλήρωσε και τις δύο ημερομηνίες.");
            return;
        }

        const d1 = new Date(embark);
        const d2 = new Date(discharge);

        const days = Math.floor((d2 - d1) / (1000 * 60 * 60 * 24)) + 1;

        if (days <= 0) {
            alert("Η ημερομηνία απόλυσης πρέπει να είναι μετά την επιβίβαση.");
            return;
        }

        const months = Math.floor(days / 30);
        const remainingDays = days % 30;

        document.getElementById("result").innerHTML =
            "<h3>Αποτέλεσμα</h3>" +
            "<p><b>Συνολικές ημέρες:</b> " + days + "</p>" +
            "<p><b>Μήνες:</b> " + months + "</p>" +
            "<p><b>Ημέρες:</b> " + remainingDays + "</p>";

    });

});