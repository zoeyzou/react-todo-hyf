let quizUrl;

// get api url ready by collecting user input
document.querySelector('.quiz-form')
  .addEventListener('submit', event => {
    
    event.preventDefault();

    const form = document.forms['quiz-form'];
    const difficulty = form.elements[0].value;
    const category = form.elements[1].value;
    const categoryId = getQuizCategoryId(category);
    const quantity = form.elements[2].value;
    
    quizUrl = `https://opentdb.com/api.php?amount=${quantity}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;

    form.style.display = 'none';
    document.querySelector('.load-wrap').style.display = 'block';
    
    fetch(quizUrl)
      .then(response => response.json())
      .then(data => {
        if (data) {
        document.querySelector('.quiz-content').style.display = 'block';
        document.querySelector('.load-wrap').style.display = 'none';
        }


        const questions = data.results;
        console.log(questions);
        const ul = document.querySelector('.questions');
        renderQuiz(questions, ul);
        // const questions = data.quiz.questions;
        // console.log(questions);
        // const ul = document.querySelector('.questions')
        // renderQuiz(questions, ul)

        
      })
      .catch(err => console.log(err));
  });

  const button = document.querySelector('.quiz-content button')
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
    const options = renderOptions(randomizeOptions(question.correct_answer, question.incorrect_answers));
    return `
      <li>
        <p>${question.question}</p>
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

function randomizeOptions(correctAnswer, incorrectAnswers) {
  const answers = [correctAnswer, ...incorrectAnswers];
  console.log(answers);
  answers.sort(function() {
    return Math.random() - .5;
  });
  console.log(answers);
  return answers;
}

function renderOptions(options) {
  return options.map(option => `<option>${option}</option>`);
}

function getQuizCategoryId(category) {
  switch(category) {
    case 'animals':
      return 27;
    case 'boardgame':
      return 16;
    case 'computer':
      return 18;
    default:
      return 17;
  }
}
