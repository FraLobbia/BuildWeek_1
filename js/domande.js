function checkBoxValidate() {
  var accetto = document.form1.accetto.checked;
  if (accetto === false)
    alert("Accetta i Termini di Servizio");
  else
    window.location.href = "domande.html";
}

function checkFunction() {
  const buttonProceed = document.getElementById("proceed");
  buttonProceed.addEventListener("click", function () {
    alert("Accetta i termini di servizio");
  });
}

//---------------------------------------//
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const arrayRisposteCorrette = []; // array che serve a memorizzare il totale delle risposte corrette
var indiceDiPartenza = 9; // mi serve per inizializzare le domande
let timer;

// ----------------------------------------------------- dichiarazioni ----------------------------------------------------------------------------------------------
function nextQuestion(indiceCurrentQuestion) {
  // definisco l'indice della domanda che voglio
  // var indiceCurrentQuestion = Math.floor(Math.random() * questions.length);
  tempo(indiceCurrentQuestion);
  // scrivo nello span del footer l'indice della domanda
  var domandaCorrente = document.getElementById('domanda_corrente');
  domandaCorrente.innerText = indiceCurrentQuestion + 1;

  // qui creo un array che contiene sia risposte giuste che sbagliate
  const opzioni = questions[indiceCurrentQuestion].incorrect_answers.concat(questions[indiceCurrentQuestion].correct_answer);

  // qui dichiaro la funzione che randomizza la posizione delle risposte nell'array appena creato
  function risposteRandomiche(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // qui evoco la funzione che randomizza 
  risposteRandomiche(opzioni);

  // ottengo in variabili i miei elementi per poi scriverci dentro
  var domanda = document.querySelector('h3');
  var opzione_1 = document.getElementById('1');
  var opzione_2 = document.getElementById('2');
  var opzione_3 = document.getElementById('3');
  var opzione_4 = document.getElementById('4');


  // definisco nelle variabili il testo delle opzioni per poi scriverle più sotto con il literal
  opzione1Text = opzioni[0];
  opzione2Text = opzioni[1];
  opzione3Text = opzioni[2];
  opzione4Text = opzioni[3];

  // scrivo la domanda nel DOM
  domanda.innerHTML = questions[indiceCurrentQuestion].question;

  // scrivo le opzioni nel DOM
  opzione_1.innerHTML = `<button class="bottone_domanda">${opzione1Text}</button>`;
  opzione_2.innerHTML = `<button class="bottone_domanda">${opzione2Text}</button>`;
  if (questions[indiceCurrentQuestion].incorrect_answers.length > 1) {
    opzione_3.innerHTML = `<button class="bottone_domanda">${opzione3Text}</button>`;
    opzione_4.innerHTML = `<button class="bottone_domanda">${opzione4Text}</button>`;
  } else {
    opzione_3.innerHTML = "";
    opzione_4.innerHTML = "";
  }
  // seleziono tutti i button 
  const allButtons = document.querySelectorAll('button')

  // tramite un forEach addo l'eventListener ad ogni button.
  // la funzione richiamata:
  //    1. controlla se la risposta è giusta e pusha a arrayRisposteCorrette 1 (se giusta)/ 0 (se sbagliata)
  //    2. triggera di nuovo la funzione nextQuestion per cambiare domanda
  allButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var risposta = this.textContent;
      button.classList.add('rispostaSelezionata');
      if (questions[indiceCurrentQuestion].correct_answer === risposta) {
        arrayRisposteCorrette.push(1);
        console.log("risposte corrette: " + arrayRisposteCorrette);
        sceltaOpzione(indiceCurrentQuestion)
        clearInterval(timer);
      } else {
        arrayRisposteCorrette.push(0);
        console.log("risposte corrette: " + arrayRisposteCorrette);
        sceltaOpzione(indiceCurrentQuestion)
        clearInterval(timer);
      }

    });
  });

};

//-------------------------------------------------------------------------------------
var xValues = ["Tempo Rimanente", "Tempo passato"];
var yValues = [60];
var barColors = ["#00ffff","transparent"];
myChart = new Chart("myChart", {
  type: "doughnut",
  data: {
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        borderWidth: 0,
      },
    ],
  },
  options: {
    cutout: '80%',
    title: {
      display: true,
    },
    rotation: Math.PI,
    hover: {mode:null}, 
  },
});

function tempo(indiceCurrentQuestion) {
  clearInterval(timer);
  tempoRimanente = 60;
  aggiornaTempo();
  timer = setInterval(function () {
    aggiornaTempo();
    aggiornaGrafico();
    if (tempoRimanente === -1) {
      clearInterval(timer);
      arrayRisposteCorrette.push(0);
      console.log("risposte corrette: " + arrayRisposteCorrette);
      sceltaOpzione(indiceCurrentQuestion);
    }
  }, 1000);
} 
function aggiornaGrafico() {
  yValues[0] = tempoRimanente;
  yValues[1] = 60 - tempoRimanente; 
  myChart.update();
}

//--------------------------------------------------------------------------------------

function sceltaOpzione(indiceCurrentQuestion) {


  let y = questions.length
  if (indiceCurrentQuestion === y - 1) {
    fine();
  } else {
    indiceCurrentQuestion++;
    setTimeout(function () {
      nextQuestion(indiceCurrentQuestion);
    }, 500);
  }
}

//--------------------------------------------------------------------------------------

function aggiornaTempo() {
  const orologio = document.getElementById("orologio");
  orologio.textContent = tempoRimanente;
  tempoRimanente--;
}

//--------------------------------------------------------------------------------------

function fine() {
  clearInterval(timer);
  const main = document.querySelector('main');
  const footer = document.querySelector('footer')
  const tempo = document.getElementById('circleTimer');
  main.innerHTML = '';
  footer.innerHTML = '';
  tempo.parentNode.removeChild(tempo);
  creaPagina3(main, footer);
}


//---------------------------------------------------------------------------------------------

function creaPagina3(main, footer) {
  const sommaRisposteCorrette = arrayRisposteCorrette.reduce(function (acc, valore) {
    return acc + valore;
  }, 0);
  console.log(sommaRisposteCorrette);

  const sommaRisposteSbagliate = questions.length - sommaRisposteCorrette;
  console.log(sommaRisposteSbagliate);

  const percentualeRisposteCorrette = sommaRisposteCorrette / questions.length * 100;
  console.log(percentualeRisposteCorrette);

  const percentualeRisposteSbagliate = sommaRisposteSbagliate / questions.length * 100;


  // parte alta post-domande -------------------------------------------------------

  const titoloResults = document.createElement('titoloResults');
  titoloResults.classList.add("titoloResults");
  main.appendChild(titoloResults);

  const results = document.createElement('h4');
  results.innerHTML = 'Results';
  results.classList.add("results");
  titoloResults.appendChild(results);

  const sottoResult = document.createElement('p');
  sottoResult.innerHTML = 'The summar of your answers:';
  sottoResult.classList.add("sottoResult");
  titoloResults.appendChild(sottoResult);

  // lato sinistro post-domande --------------------------------------------------------------

  const bloccoCorrect = document.createElement('div');
  bloccoCorrect.classList.add("bloccoCorrect");
  main.appendChild(bloccoCorrect);

  const paragrafoSxAlto = document.createElement('p');
  paragrafoSxAlto.innerHTML = 'Correct';
  paragrafoSxAlto.classList.add("paragrafoDxSxAlto");
  bloccoCorrect.appendChild(paragrafoSxAlto);

  const paragrafoSx = document.createElement('p');
  paragrafoSx.innerHTML = percentualeRisposteCorrette + '%';
  paragrafoSx.classList.add("percentuale");
  bloccoCorrect.appendChild(paragrafoSx);

  const spanSxBasso = document.createElement('span');
  spanSxBasso.innerHTML = sommaRisposteCorrette + '/' + questions.length + ' questions';
  spanSxBasso.classList.add("risposte");
  bloccoCorrect.appendChild(spanSxBasso);

  // centro post-domande --------------------------------------------------------------

  const bloccoCentrale = document.createElement('div');
  bloccoCentrale.classList.add("bloccoCentrale");
  main.appendChild(bloccoCentrale);

 // grafico a ciambella -------------------------------------------------------

 const grafico = document.createElement('div');
 grafico.id = "grafico"
 grafico.innerHTML = `<canvas id="myChartResult" width="500" height="500" style="display: inline-block;box-sizing: border-box;height: 500px;width: 500px;"></canvas>`
 bloccoCentrale.appendChild(grafico)


 var xValues = [sommaRisposteCorrette, sommaRisposteSbagliate];
 var yValues = [sommaRisposteCorrette, sommaRisposteSbagliate];
 var barColors = ["#00ffff","#C5138F"];
 myChartResult = new Chart("myChartResult", {
   type: "doughnut",
   data: {
     datasets: [
       {
         backgroundColor: barColors,
         data: yValues,
         borderWidth: 0,
       },
     ],
   },
   options: {
     cutout: '80%',
     title: {
       display: true,
     },
     rotation: Math.PI,
     hover: {mode:null}, 
   },
 });

  // -------------------------------------------------------
  const internoAnello = document.createElement('div');
  internoAnello.classList.add("internoAnello");
  grafico.appendChild(internoAnello);
  
  const congratulations = document.createElement('h5');
  congratulations.classList.add("congratulations");
  internoAnello.appendChild(congratulations);

  const passed = document.createElement('span');
  passed.classList.add("passed");

  const paragrafoCentrale = document.createElement('p');
  paragrafoCentrale.classList.add("paragrafoCentrale");
  internoAnello.appendChild(paragrafoCentrale);

  if (percentualeRisposteCorrette >= 60) {
    congratulations.innerHTML = "Congratulations!";
    congratulations.appendChild(passed);
    passed.innerHTML = "<br> You passed the exam.";
    paragrafoCentrale.innerHTML = "We'll send you the certificate <br> in few minutes. <br> Check your email (including <br> promotions / spam folder)";
  } else {
    congratulations.innerHTML = "andato male!";
    congratulations.appendChild(passed);
    passed.innerHTML = "<br> Non vado avanti";
    paragrafoCentrale.innerHTML = "We'll send you the certificate <br> in few minutes. <br> Check your email (including <br> promotions / spam folder)";
  }

  

  // lato destro post-domande--------------------------------------------------------------

  const bloccoWrong = document.createElement('div');
  bloccoWrong.classList.add("bloccoWrong");
  main.appendChild(bloccoWrong);

  const paragrafoDxAlto = document.createElement('p');
  paragrafoDxAlto.innerHTML = 'Wrong';
  paragrafoDxAlto.classList.add("paragrafoDxSxAlto");
  bloccoWrong.appendChild(paragrafoDxAlto);

  const paragrafoDxBasso = document.createElement('p');
  paragrafoDxBasso.innerHTML = percentualeRisposteSbagliate + '%';
  paragrafoDxBasso.classList.add("percentuale");
  bloccoWrong.appendChild(paragrafoDxBasso);

  const spanDxBasso = document.createElement('p');
  spanDxBasso.innerHTML = sommaRisposteSbagliate + '/' + questions.length + ' questions';
  spanDxBasso.classList.add("risposte");
  bloccoWrong.appendChild(spanDxBasso);

  // footer -----------------------------------------------------------------------------------
  const rateUs = document.createElement('button');
  rateUs.innerHTML = 'RATE US';
  rateUs.classList.add("rateUs");
  rateUs.addEventListener('click', function () {
    window.location.href = "recensione.html";
  })
  footer.appendChild(rateUs);
}



nextQuestion(indiceDiPartenza);


//---------------------------------------------------------------------------------


// const ctx = document.getElementById('myChart');
// new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

// const radius = 90;
// const circumference = 2 * Math.PI * radius;
// const correctOffset = circumference * (percentCorrect / 100);
// const incorrectOffset = circumference * (percentIncorrect / 100);

// // Nascondi il quiz container e mostra i risultati

// const prova = document.createElement('div');
// prova.style.display = 'flex';
// prova.innerHTML = `

//     <h1>Results</h1>
//     <h2>The summary of your answers:</h2>
//     <div id="details-container" class="details-container">
//         <div class="result correct">
//             <h3 class='correctH'>Correct</h3>
//             <p class='correctP'>${percentCorrect.toFixed(1)}%</p>
//             <p class='correctP2'>${score}/${totalQuestions} questions</p>
//         </div>
//         <svg width="300" height="300" viewBox="0 0 200 200">
//             <circle id="correct-circle" r="90" cx="100" cy="100" fill="transparent" stroke="#d20094" stroke-width="20"
//                 stroke-dasharray="${circumference}" stroke-dashoffset="0"
//                 transform="rotate(-90 100 100)" />
//             <circle id="incorrect-circle" r="90" cx="100" cy="100" fill="transparent" stroke="#00ffff" stroke-width="20"
//                 stroke-dasharray="${circumference}" stroke-dashoffset="${circumference - correctOffset}"
//                 transform="rotate(-90 100 100)" />
//             <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="16px" fill="#fff">
//                 ${percentCorrect >= passingScore ?
//         `<tspan class="winH" x="50%" dy="-1.2em">Congratulations!</tspan>
//                 <tspan class="winP" x="50%" dy="1.2em">You passed the exam.</tspan>
//                 <tspan class="secondP" x="50%" dy="1.2em">We'll send you the certificate</tspan>
//                 <tspan class="secondP" x="50%" dy="1.2em">in a few minutes.</tspan>
//                 <tspan class="thirdP" x="50%" dy="1.2em">Check your email (including promotions /</tspan>
//                 <tspan class="thirdP" x="50%" dy="1.2em"> spam folder)</tspan> ` :
//         `<tspan class="loseH" x="50%" dy="-1.5em">Oh no!</tspan>
//                 <tspan class="loseP" x="50%" dy="1.5em">You didn't pass the exam.</tspan>
//                 <tspan class="secondP" x="50%" dy="1.5em">Try again, champion!</tspan>`
//     }
//             </text>
//         </svg>
//         <div class="result wrong">
//             <h3 class='incorrectH'>Wrong</h3>
//             <p class='incorrectP'>${percentIncorrect.toFixed(1)}%</p>
//             <p class='incorrectP2'>${totalQuestions - score}/${totalQuestions} questions</p>
//         </div>
//     </div>
//     <form action="./rating.html">
//         <button class="cursore" id="proceed" type="submit">RATE US</button>
//     </form>
// `;

// main.appendChild(prova);