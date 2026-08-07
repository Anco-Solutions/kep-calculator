document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("calculate");

  if (!btn) return;

  btn.addEventListener("click", () => {

    const embark = new Date(document.getElementById("embark").value);
    const discharge = new Date(document.getElementById("discharge").value);

    if (isNaN(embark) || isNaN(discharge)) {
      alert("Συμπλήρωσε τις ημερομηνίες.");
      return;
    }

    const diff = discharge - embark;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

    const months = Math.floor(days / 30);
    const remain = days % 30;

    document.getElementById("result").innerHTML =
      `Συνολική υπηρεσία: ${months} μήνες και ${remain} ημέρες (${days} ημέρες)`;

  });

});