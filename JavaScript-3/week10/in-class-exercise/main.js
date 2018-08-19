console.log('Script loaded')

const questionUrl = `https://gist.githubusercontent.com/benna100/13f5850bf78f59d9baea915cbbe9f258/raw/f2007724dcc126772ec2154af49ef04cd145cb79/JS-3%2520quiz`

fetch(questionUrl)
  .then(response => response.json())
  .then(data => {
    const loadingP = document.querySelector('.loading')
    if (data) {
      loadingP.innerHTML = ''
    }


    const questions = data.quiz.questions

    const ul = document.querySelector('.questions')
    renderQuiz(questions, ul)

    const button = document.querySelector('button')
    button.addEventListener('click', () => {
      const lis = document.querySelectorAll('li')
      const answers = getQuizAnswers(lis)
      const fullScore = questions.length
      const score = getScore(answers, questions)

      const resultEl = document.querySelector('.result')
      renderScore(score,fullScore,resultEl);

      var confettiSettings = { target: 'confetti' }
      var confetti = new ConfettiGenerator(confettiSettings)
      if (score === fullScore) {
        confetti.render()
        setTimeout(() => {
          confetti.clear()
        }, 3000)
      }
    })
  })
  
function renderScore(score, fullScore, domEl) {
  domEl.innerHTML = `you get ${score} of ${fullScore}`
}

function getQuizAnswers(lis) {
  const inputs =[]
  for (let li of lis) {
    inputs.push(li.childNodes[5].value)
  }
  return inputs
}

function renderQuiz(questions, domEl) {
  let domList = ''
  const stringArray = questions.map(question => {
    const options = renderOptions(question.options);
    return `
      <li>
        <h1>${question.title}</h1>
        <p>${question.content}</p>
        <select>
          ${options}
        </select>
      </li>
    `
  })

  for (let string of stringArray) {
    domList += string;
  }
  domEl.innerHTML = domList;
}

function renderOptions(options) {
  return options.map(option => `<option>${option.content}</option>`);
}
