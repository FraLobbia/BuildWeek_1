function checkBoxValidate (){
  var accept = document.form1.accetto.checked;
  if (accept === checked) {
      window.location.href = "domande.html";
} else {
    alert('Non accettato');}
}

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
var indiceDiPartenza = 0;
let timer;

// ----------------------------------------------------- dichiarazioni ----------------------------------------------------------------------------------------------
function nextQuestion(indiceCurrentQuestion){
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
    domanda.innerHTML =  questions[indiceCurrentQuestion].question ;

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
    allButtons.forEach(function(button) {
      button.addEventListener("click", function () {
          var risposta = this.textContent;
          if (questions[indiceCurrentQuestion].correct_answer === risposta) {
              arrayRisposteCorrette.push(1);
              console.log("risposte corrette: " + arrayRisposteCorrette);
              clearInterval(timer);
              sceltaOpzione(indiceCurrentQuestion)
          } else {
              arrayRisposteCorrette.push(0);
              console.log("risposte corrette: " + arrayRisposteCorrette);
              clearInterval(timer); 
              sceltaOpzione(indiceCurrentQuestion)
          }
          
      });
  });

};

//-------------------------------------------------------------------------------------

  function tempo(indiceCurrentQuestion) {
  clearInterval(timer);
  tempoRimanente =10;
  aggiornaTempo();
  timer = setInterval(function() {                     
    aggiornaTempo();
    if (tempoRimanente === -1) {
      clearInterval(timer);
      arrayRisposteCorrette.push(0);  
      console.log("risposte corrette: " + arrayRisposteCorrette);
      sceltaOpzione(indiceCurrentQuestion);
    }
  }, 1000);
} 


//--------------------------------------------------------------------------------------

function sceltaOpzione(indiceCurrentQuestion)  {
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
  const tempo = document.getElementsByClassName('timer');
    main.innerHTML = '';
    footer.innerHTML = '';
    tempo.innerHTML = '';
}


nextQuestion(indiceDiPartenza);


//---------------------------------------------------------------------------------
/*
let tempoRimanente = 10;

 function tempo(indiceCurrentQuestion) {
  clearInterval(timer);
  tempoRimanente = 10;
  const initialOffset = 440;
  let i = tempoRimanente;
  const progressBar = $('.circle_animation');
  progressBar.css('stroke-dashoffset', initialOffset + (i * (initialOffset / 10)));
  aggiornaTempo();
  $('h2').text(i); 
  timer = setInterval(function () {
    i--;
    if (i === 0) {
      clearInterval(timer);
      arrayRisposteCorrette.push(0);
      console.log("risposte corrette: " + arrayRisposteCorrette);
      sceltaOpzione(indiceCurrentQuestion);
    } else {
      progressBar.css('stroke-dashoffset', initialOffset + (i * (initialOffset / 10)));
      aggiornaTempo();
    }
    progressBar.css('stroke-dashoffset', initialOffset + (i * (initialOffset / 10)));
    $('h2').text(i); 
  }, 1000);
} */

