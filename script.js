const questions = {
  'História': [
    { question: "Quem descobriu o Brasil?", options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Dom Pedro I"], answer: "Pedro Álvares Cabral", difficulty: 1 },
    { question: "Em que ano começou a Segunda Guerra Mundial?", options: ["1914", "1939", "1945"], answer: "1939", difficulty: 2 },
    { question: "Quem foi o primeiro imperador do Brasil?", options: ["Dom Pedro I", "Dom João VI", "Pedro II"], answer: "Dom Pedro I", difficulty: 1 },
    { question: "Quem foi o responsável pela independência do Brasil?", options: ["José Bonifácio", "Dom Pedro I", "Napoleão Bonaparte"], answer: "Dom Pedro I", difficulty: 1 },
    { question: "Em que ano terminou a Segunda Guerra Mundial?", options: ["1945", "1950", "1939"], answer: "1945", difficulty: 1 },
    { question: "O que foi a Revolução Francesa?", options: ["Uma guerra civil", "Um movimento de libertação", "Um movimento social e político"], answer: "Um movimento social e político", difficulty: 2 },
    { question: "Qual império dominou a maior parte da Europa durante o século XIX?", options: ["Império Otomano", "Império Russo", "Império Napoleônico"], answer: "Império Napoleônico", difficulty: 2 },
    { question: "Quem foi o líder da Revolução Mexicana?", options: ["Emiliano Zapata", "Pancho Villa", "Porfirio Díaz"], answer: "Emiliano Zapata", difficulty: 2 },
    { question: "Onde foi assinado o Tratado de Versalhes?", options: ["França", "Inglaterra", "Alemanha"], answer: "França", difficulty: 2 },
    { question: "Quem foi o responsável pela descoberta da América?", options: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama"], answer: "Cristóvão Colombo", difficulty: 1 },
    { question: "Quem iniciou a Reforma Protestante?", options: ["Martinho Lutero", "João Calvino", "Henrique VIII"], answer: "Martinho Lutero", difficulty: 2 },
    { question: "Qual foi o período conhecido como Idade das Trevas?", options: ["Idade Média", "Renascimento", "Idade Moderna"], answer: "Idade Média", difficulty: 2 },
    { question: "Quem foi o primeiro presidente dos Estados Unidos?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"], answer: "George Washington", difficulty: 2 },
    { question: "Em que ano o homem pisou na Lua pela primeira vez?", options: ["1969", "1970", "1965"], answer: "1969", difficulty: 2 },
    { question: "Qual foi a principal causa da Primeira Guerra Mundial?", options: ["Disputas territoriais", "Ataques de piratas", "A ascensão do Império Britânico"], answer: "Disputas territoriais", difficulty: 2 },
    { question: "O que foi o bloqueio continental?", options: ["Um bloqueio naval imposto pela Inglaterra", "Uma aliança entre países", "Uma tentativa de invasão da França"], answer: "Um bloqueio naval imposto pela Inglaterra", difficulty: 3 },
    { question: "Quando ocorreu a Guerra do Vietnã?", options: ["1955-1975", "1940-1945", "1960-1970"], answer: "1955-1975", difficulty: 2 },
    { question: "Quem era o presidente dos EUA durante a Guerra Civil?", options: ["Abraham Lincoln", "Andrew Johnson", "George Washington"], answer: "Abraham Lincoln", difficulty: 2 },
    { question: "O que foi o Tratado de Tordesilhas?", options: ["Divisão das terras no Novo Mundo", "Tratado de paz entre Espanha e Portugal", "Acordo de comércio entre os países europeus"], answer: "Divisão das terras no Novo Mundo", difficulty: 2 },
    { question: "Quem foi Napoleão Bonaparte?", options: ["Imperador francês", "Rei da Inglaterra", "General romano"], answer: "Imperador francês", difficulty: 1 },
    { question: "O que foi a Guerra Fria?", options: ["Conflito entre EUA e União Soviética", "Guerra entre França e Alemanha", "Conflito mundial sobre o petróleo"], answer: "Conflito entre EUA e União Soviética", difficulty: 3 },
    { question: "Qual a principal causa da Revolução Americana?", options: ["Alta carga tributária", "Disputa por terras", "Expansão do Império Britânico"], answer: "Alta carga tributária", difficulty: 2 },
  ],
  'Ciência': [
    { question: "Qual é o elemento mais abundante no universo?", options: ["Oxigênio", "Hidrogênio", "Carbono"], answer: "Hidrogênio", difficulty: 1 },
    { question: "Quem formulou a teoria da relatividade?", options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei"], answer: "Albert Einstein", difficulty: 2 },
    { question: "Qual a unidade de medida da força?", options: ["Newton", "Joule", "Pa"], answer: "Newton", difficulty: 1 },
    { question: "Qual o planeta mais próximo do Sol?", options: ["Terra", "Mercúrio", "Vênus"], answer: "Mercúrio", difficulty: 1 },
    { question: "Qual o nome da fórmula química da água?", options: ["CO2", "H2O", "O2"], answer: "H2O", difficulty: 1 }
  ],
  'Tecnologia': [
    { question: "Quem é o fundador da Microsoft?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg"], answer: "Bill Gates", difficulty: 1 },
    { question: "Em que ano foi criado o primeiro iPhone?", options: ["2007", "2009", "2011"], answer: "2007", difficulty: 2 },
    { question: "Qual é a linguagem de programação mais usada no mundo?", options: ["Python", "JavaScript", "C++"], answer: "JavaScript", difficulty: 1 },
    { question: "Qual empresa desenvolveu o sistema operacional Windows?", options: ["Apple", "Microsoft", "Google"], answer: "Microsoft", difficulty: 1 },
    { question: "Quem é conhecido como o criador da Apple?", options: ["Steve Jobs", "Bill Gates", "Elon Musk"], answer: "Steve Jobs", difficulty: 2 }
  ]
};

let currentCategory = "";
let currentIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let level = 0;
let progress = 0;

function startQuiz(category) {
  currentCategory = category;
  currentIndex = 0;
  correctCount = 0;
  incorrectCount = 0;
  progress = 0;
  level = 0;
  document.getElementById("level").textContent = level;
  showQuestion();
}

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  if (currentIndex >= questions[currentCategory].length) {
    quizDiv.innerHTML = `<h2>Fim do Quiz!</h2><p>Acertos: ${correctCount} | Erros: ${incorrectCount}</p>`;
    return;
  }

  let q = questions[currentCategory][currentIndex];
  let questionHTML = `<h2>${q.question}</h2>`;
  q.options.forEach(option => {
    questionHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
  });

  quizDiv.innerHTML = questionHTML;
}

function checkAnswer(answer) {
  let q = questions[currentCategory][currentIndex];
  if (answer === q.answer) {
    correctCount++;
    increaseProgress();
  } else {
    incorrectCount++;
  }
  currentIndex++;
  showQuestion();
}

function increaseProgress() {
  progress += 10; // A cada acerto, aumenta 10% na barra

  if (progress >= 100) {
    level++; // Ao atingir 100%, sobe de nível
    document.getElementById("level").textContent = level;
    progress = 0; // Reseta a barra de progresso
  }

  // Atualiza a barra de progresso
  document.getElementById("progress-bar").style.width = progress + "%";
}
