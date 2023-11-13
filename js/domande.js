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


const arrayDomande = [];

function nextQuestion(){
    // definisco l'indice della domanda che voglio
    var indiceCurrentQuestion = Math.floor(Math.random() * questions.length);

    // scrivo nello span del footer l'indice della domanda
    var domandaCorrente = document.getElementById('domanda_corrente');
    domandaCorrente.innerText = indiceCurrentQuestion;

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
    }
};

nextQuestion();