const questions = [
  {
    question: '¿Para qué sirve el alternador?',
    options: ['Generar electricidad para el auto', 'Enfriar el motor', 'Regular el voltaje de la batería'],
    correct: 0
  },
  {
    question: '¿Qué pieza permite que el motor arranque?',
    options: ['Alternador', 'Burro', 'Radiador'],
    correct: 1
  },
  {
    question: '¿Qué pieza se encarga de enviar combustible al motor?',
    options: ['Bomba de nafta', 'Compresor', 'Alternador'],
    correct: 0
  },
  {
    question: '¿Qué controla la ECU?',
    options: ['La inyección de combustible y el encendido del motor', 'La presión del sistema de frenos ABS', 'La carga del alternador'],
    correct: 0
  },
  {
    question: '¿Qué garantiza la oblea del RUDAC en una autoparte?',
    options: ['Que la pieza es legal y registrada', 'Que la pieza es nueva', 'Que la pieza es importada'],
    correct: 0,
    image: 'assets/trivia/imagenPregunta5.png'
  },
  {
    question: '¿Qué significa RUDAC?',
    options: ['Registro Único de Desarmaderos de Automotores y Actividades Conexas', 'Registro Universal de Autos de Carrera', 'Registro Único de Automotores Certificados'],
    correct: 0,
    image: 'assets/trivia/imagenPregunta6.png'
  },
  {
    question: '¿Qué autoparte es esta?',
    options: ['Alternador', 'Compresor de aire acondicionado', 'Turbo'],
    correct: 0,
    image: 'assets/trivia/imagenPregunta7.png'
  },
  {
    question: '¿Qué autoparte es esta?',
    options: ['Bomba de agua', 'Burro de arranque', 'Alternador'],
    correct: 1,
    image: 'assets/trivia/imagenPregunta8.png'
  },
  {
    question: '¿Qué autoparte es esta?',
    options: ['Alternador', 'Radiador', 'Bomba de nafta'],
    correct: 2,
    image: 'assets/trivia/imagenPregunta9.png'
  },
  {
    question: '¿Qué autoparte es esta?',
    options: ['Cremallera de dirección', 'Bomba de dirección hidráulica', 'Barra estabilizadora'],
    correct: 0,
    image: 'assets/trivia/imagenPregunta10.png'
  },
  {
    question: '¿Qué autoparte es esta?',
    options: ['Inyector de combustible', 'Sensor de oxígeno', 'Bujía'],
    correct: 0,
    image: 'assets/trivia/imagenPregunta11.png'
  },
  {
    question: 'Si el motor se recalienta constantemente, ¿qué pieza podría estar fallando?',
    options: ['Termostato', 'Alternador', 'Filtro de aire'],
    correct: 0
  },
  {
    question: 'Si el volante está muy duro al girar en un auto con dirección hidráulica, ¿qué pieza podría estar fallando?',
    options: ['Bomba de dirección hidráulica', 'Radiador', 'Inyector'],
    correct: 0
  },
  {
    question: 'Si el auto vibra mucho al frenar, ¿qué pieza podría estar dañada?',
    options: ['Discos de freno deformados', 'Bomba de nafta', 'Alternador'],
    correct: 0
  },
  {
    question: 'Si el motor pierde potencia y sale humo negro por el escape, ¿qué pieza podría estar fallando?',
    options: ['Inyectores de combustible', 'Radiador', 'Bujías'],
    correct: 0
  },
  {
    question: 'Si el auto hace un ruido metálico fuerte al arrancar, ¿qué pieza podría estar desgastada?',
    options: ['Bendix del burro de arranque', 'Filtro de aceite', 'Sensor de temperatura'],
    correct: 0
  },
  {
    question: 'Si el motor regula inestable o se apaga en ralentí, ¿qué pieza podría estar fallando?',
    options: ['Válvula IAC', 'Bomba de agua', 'Radiador'],
    correct: 0
  },
  {
    question: '¿De qué modelo es esta puerta?',
    options: ['Volkswagen Taos', 'Toyota Corolla Cross', 'Chevrolet Tracker'],
    correct: 0,
    image: 'assets/trivia/imagenPregunta18.png'
  },
  {
    question: '¿A qué modelo pertenece esta puerta?',
    options: ['Toyota RAV4', 'Honda CR-V (2007–2012)', 'Nissan X-Trail'],
    correct: 1,
    image: 'assets/trivia/imagenPregunta19.png'
  },
  {
    question: '¿De qué modelo es esta puerta?',
    options: ['Chevrolet Onix', 'Toyota Yaris', 'Nissan Versa'],
    correct: 1,
    image: 'assets/trivia/imagenPregunta20.png'
  },
  {
    question: '¿A qué vehículo pertenece esta puerta?',
    options: ['Renault Kangoo', 'Fiat Fiorino', 'Peugeot Partner'],
    correct: 1,
    image: 'assets/trivia/imagenPregunta21.png'
  },
  {
    question: '¿De qué modelo es esta puerta?',
    options: ['Chevrolet Corsa', 'Renault Clio', 'Fiat Palio'],
    correct: 2,
    image: 'assets/trivia/imagenPregunta22.png'
  },
  {
    question: '¿A qué vehículo corresponde esta puerta trasera?',
    options: ['Toyota Hilux', 'Ford Ranger', 'Volkswagen Amarok'],
    correct: 2,
    image: 'assets/trivia/imagenPregunta23.png'
  },
  {
    question: '¿De qué vehículo es esta puerta trasera?',
    options: ['Renault Clio', 'Fiat Uno', 'Volkswagen Gol'],
    correct: 1,
    image: 'assets/trivia/imagenPregunta24.png'
  },
  {
    question: '¿A qué modelo pertenece esta puerta?',
    options: ['Nissan Versa', 'Chevrolet Prisma', 'Toyota Etios'],
    correct: 2,
    image: 'assets/trivia/imagenPregunta25.png'
  },
  {
    question: '¿De qué vehículo es esta puerta?',
    options: ['Volkswagen Polo', 'Peugeot 208', 'Ford Fiesta'],
    correct: 1,
    image: 'assets/trivia/imagenPregunta26.png'
  }
]

// Orden: cada grupo de 3 preguntas tiene al menos 1 con foto (patrón: sin, sin, con)
const orderedQuestions = [
  questions[0], questions[1], questions[4],   // grupo 1
  questions[2], questions[3], questions[5],   // grupo 2
  questions[11], questions[12], questions[6], // grupo 3
  questions[13], questions[14], questions[7], // grupo 4
  questions[15], questions[16], questions[8], // grupo 5
  questions[9], questions[10], questions[17], // grupo 6
  questions[18], questions[19], questions[20], // grupo 7
  questions[21], questions[22], questions[23], // grupo 8
  questions[24], questions[25]                // grupo 9 (2 preguntas)
]

let correctCount = 0
let currentQuestion = null
let questionIndex = 0

const questionEl = document.getElementById('question')
const questionImageEl = document.getElementById('question-image')
const questionImageFrameEl = document.getElementById('question-image-frame')
const optionsEl = document.getElementById('options')
const scoreCircles = document.querySelectorAll('.score-circle')
const feedbackEl = document.getElementById('feedback')
const gameEl = document.getElementById('game')
const winScreenEl = document.getElementById('win-screen')
const loseScreenEl = document.getElementById('lose-screen')
const restartBtn = document.getElementById('restart-btn')
const restartLoseBtn = document.getElementById('restart-lose-btn')

function getNextQuestion() {
  if (questionIndex >= orderedQuestions.length) {
    questionIndex = 0
  }
  return orderedQuestions[questionIndex++]
}

function showQuestion() {
  currentQuestion = getNextQuestion()
  feedbackEl.textContent = ''
  feedbackEl.className = ''
  questionEl.textContent = currentQuestion.question

  if (currentQuestion.image) {
    questionImageEl.src = currentQuestion.image
    questionImageFrameEl.classList.remove('hidden')
  } else {
    questionImageFrameEl.classList.add('hidden')
  }

  optionsEl.innerHTML = ''
  currentQuestion.options.forEach((opt, i) => {
    const btn = document.createElement('button')
    btn.className = 'option'
    btn.textContent = opt
    btn.addEventListener('click', () => handleAnswer(i))
    optionsEl.appendChild(btn)
  })
}

function handleAnswer(selectedIndex) {
  const buttons = optionsEl.querySelectorAll('.option')
  buttons.forEach(b => b.disabled = true)

  const isCorrect = selectedIndex === currentQuestion.correct
  buttons[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong')
  if (!isCorrect) {
    buttons[currentQuestion.correct].classList.add('correct')
  }

  if (isCorrect) {
    correctCount++
    updateScoreProgress()
    feedbackEl.textContent = '¡Correcto!'
    feedbackEl.className = 'correct'

    if (correctCount >= 3) {
      setTimeout(() => {
        gameEl.style.display = 'none'
        winScreenEl.classList.remove('hidden')
      }, 800)
      return
    }
    setTimeout(showQuestion, 1500)
  } else {
    feedbackEl.textContent = 'Incorrecto.'
    feedbackEl.className = 'wrong'
    setTimeout(() => {
      gameEl.style.display = 'none'
      loseScreenEl.classList.remove('hidden')
    }, 800)
  }
}

function updateScoreProgress() {
  const wraps = document.querySelectorAll('.score-circle-wrap')
  wraps.forEach((wrap, i) => {
    wrap.classList.toggle('current', i === correctCount && correctCount < 3)
  })
  scoreCircles.forEach((circle, i) => {
    circle.classList.toggle('filled', i < correctCount)
  })
  document.querySelectorAll('.score-connector').forEach((conn, i) => {
    conn.classList.toggle('active', i < correctCount - 1)
  })
}

function restart() {
  correctCount = 0
  updateScoreProgress()
  gameEl.style.display = 'flex'
  winScreenEl.classList.add('hidden')
  loseScreenEl.classList.add('hidden')
  showQuestion()
}

restartBtn.addEventListener('click', restart)
restartLoseBtn.addEventListener('click', restart)
updateScoreProgress()
showQuestion()
