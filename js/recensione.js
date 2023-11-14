// Attendi che il documento HTML sia completamente caricato
document.addEventListener("DOMContentLoaded", function () {
    // Seleziona tutte le stelle nel container
    var stars = document.querySelectorAll('#star-container svg');

    // Aggiungi eventi per ogni stella
    stars.forEach(function (star, index) {
        // Evento al passaggio del mouse sopra la stella
        star.addEventListener('mouseover', function () {
            fillStars(index + 1, '#00FFFF'); // Colora le stelle fino a quella corrente in azzurro
        });

        // Evento al movimento del mouse fuori dalla stella
        star.addEventListener('mouseout', function () {
            fillStars(index + 1, 'black'); // Ripristina il colore nero per le stelle fino a quella corrente
        });

        // Evento al click sulla stella
        star.addEventListener('click', function () {
            toggleStar(star); // Inverti la classe 'selected' sulla stella cliccata
        });
    });

    // Inizializza le stelle con colore nero
    fillStars(0, 'black');

    // Funzione per colorare le stelle
    function fillStars(count, color) {
        for (var i = 0; i < stars.length; i++) {
            stars[i].style.fill = i < count ? color : 'black'; // Colora le stelle fino a quella corrente
        }
    }

    // Funzione per invertire la classe 'selected' sulla stella cliccata
    function toggleStar(star) {
        star.classList.toggle('selected');
    }
});
