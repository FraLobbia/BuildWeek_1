
// Tutto l' evento viene attivato quando il documento HTML è completamente caricato e pronto per l'interazione.
document.addEventListener("DOMContentLoaded", function () {
    // Seleziono tutte le stelle nel container
    var stars = document.querySelectorAll('#star-container svg');
    // Contatore per tenere traccia delle stelle selezionate
    var selectedStars = 0;

    // Aggiungo eventi per ogni stella
    stars.forEach(function (star, index) {
        // Evento al passaggio del mouse sopra la stella
        star.addEventListener('mouseover', function () {
            fillStars(index + 1, '#00FFFF'); // Coloro le stelle fino a quella corrente in azzurro
        });

        // Evento al passaggio del mouse fuori dalla stella
        star.addEventListener('mouseout', function () {
            // Ripristino il colore azzurro per le stelle selezionate solo se la stella non è selezionata
            if (!star.classList.contains('selected')) {
                fillStars(selectedStars, 'black');
            }
        });

        // Evento al click sulla stella
        star.addEventListener('click', function () {
            selectedStars = index + 1;
            toggleStar(star, selectedStars); // Inverto la classe 'selected' sulla stella cliccata
        });
    });

    // Inizializzo le stelle con colore nero
    fillStars(0, 'black');

    // Funzione per colorare le stelle
    function fillStars(count, color) {
        for (var i = 0; i < stars.length; i++) {
            stars[i].style.fill = i < count ? color : 'black'; // Coloro le stelle fino a quella corrente
        }
    }

    // Funzione per invertire la classe 'selected' sulla stella cliccata
    function toggleStar(star, rating) {
        star.classList.toggle('selected');
        // Aggiorno il colore delle stelle in base alla presenza della classe 'selected'
        fillStars(rating, star.classList.contains('selected') ? '#00FFFF' : 'black');
    }
});