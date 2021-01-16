let body = document.body;

let startQuizButton = document.querySelector("#start-quiz-btn");
let h1Header = document.querySelector("#start-quiz-header")
let beginningPrompt = document.querySelector("#beginning-prompt")
let time = document.querySelector('#time-remaining')

let main = document.querySelector('#main-content')

let timeLeft;
let question1;
let question2;
let question3;
let question4;
let question5;

let button1;
let button2;
let button3;
let button4;

let correctAnswer;
let wrongAnswer;

let initialsFormField;
let initialsFormPrompt;
let initialsFormSubmit;

let score = 0;

let buttonContent;

let allCompleted;

let myName 





///create endTime function
///create deleteUserScore function
////create saveUserScore function
///create view high scores page
//create way to go back to main index page from view high scores page
/// need to create a way to stop timer when all the questions are answered.

let countdown = function () {
    timeLeft = 75
    time.textContent = timeLeft
    
    let timeInterval = setInterval(function() {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft >= 1 && allCompleted === true) {
            clearInterval(timeInterval)
        } else if (timeLeft === 0) {
            time.textContent = timeLeft
            window.alert('Sorry, you have run out of time! Please refresh the page to try again.')
            clearInterval(timeInterval)
            //// need to create a function to take me allDone() when the timer runs out while im still completing the quiz.
        } else if (timeLeft >=1) {
            time.textContent = timeLeft;
            timeLeft--;
        } else if (timeLeft < 0) {
            time.textContent = 0
            window.alert('Sorry, you have run out of time! Please refresh the page to try again.')
            clearInterval(timeInterval)
        }
      }, 1000);
    
   
}

let saveScore = function () {
    localStorage.setItem(myName, timeLeft);
}

//
let loadScores = function () {
    let allScores = localStorage.getItem(myName)
}

let clearScores = function () {

}


let prompt1 = function () {

    countdown()

    buttonContent = document.createElement('div') ///
    buttonContent.setAttribute('style', ' justify-content: center; padding-left: 300px;') ///justify content aligns it to the center, padded it to the left to appear more centered
    body.appendChild(buttonContent) ///
    
    question1 = document.createElement('h1')
    question1.textContent = "Commonly used data types do NOT Include:"
    question1.setAttribute('style', 'font-size:50px; padding-top: 90px')
    h1Header.parentNode.replaceChild(question1, h1Header)

    beginningPrompt.remove()
    startQuizButton.remove()

    button1 = document.createElement('button')
    button1.textContent = '1. Strings'
    button1.setAttribute('style', 'text-align: center; background-color: rgb(79, 17, 138); color: white; font-size: 30px; padding-left: 50px; padding-right: 50px; display: block')
    buttonContent.appendChild(button1) //// made changes PADDING BOTTOM ^^^

    button2 = document.createElement('button')
    button2.textContent = '2. Booleans'
    button2.setAttribute('style', 'text-align: center; background-color: rgb(79, 17, 138); color: white; font-size: 30px; padding-left: 50px; padding-right: 50px; display: block')
    buttonContent.appendChild(button2) ///

    button3 = document.createElement('button')
    button3.textContent = '3. Alerts'
    button3.setAttribute('style', 'text-align: center; background-color: rgb(79, 17, 138); color: white; font-size: 30px; padding-left: 50px; padding-right: 50px; display: block')
    buttonContent.appendChild(button3) ////

    button4 = document.createElement('button')
    button4.textContent = '4. Numbers'
    button4.setAttribute('style', 'text-align: center; background-color: rgb(79, 17, 138); color: white; font-size: 30px; padding-left: 50px; padding-right: 50px; display: block')
    buttonContent.appendChild(button4) ////

    button1.onclick = function () {
        //wrongAnswer = document.createElement('h2')
       // wrongAnswer.textContent = 'Wrong!'
        //body.appendChild(wrongAnswer)
        timeLeft -= 10
        prompt2()
        //wrongAnswer.remove()
    }

    button2.onclick = function () {
       // wrongAnswer = document.createElement('h2')
        //wrongAnswer.textContent = 'Wrong!'
        //body.appendChild(wrongAnswer)
        timeLeft -= 10
        prompt2()
    }

    button3.onclick = function () {
       // correctAnswer = document.createElement('h2')
        //correctAnswer.textContent = 'Correct!'
        //body.appendChild(correctAnswer)
        prompt2()
    }

    button4.onclick = function () {
       // wrongAnswer = document.createElement('h2')
       // wrongAnswer.textContent = 'Wrong!'
       // body.appendChild(wrongAnswer)
       timeLeft -= 10
        prompt2()
    }
}

let prompt2 = function () {
   // wrongAnswer.remove()
    //correctAnswer.remove()
    question2 = document.createElement('h1')
    question2.textContent = 'The condition of an if / else statment is enclosed with _____'
    question2.setAttribute('style', 'font-size:50px; padding-top: 90px')
    question1.parentNode.replaceChild(question2, question1)

    button1.textContent = '1: Quotes'
    button2.textContent = '2: Curly Brackets'
    button3.textContent = '3: Parenthesis'
    button4.textContent = '4: Square Brackets'

    button1.onclick = function () {
        timeLeft -= 10
        prompt3()
    }
    
    button2.onclick = function () {
        timeLeft -= 10
        prompt3()
    }

    button3.onclick = function () {
        prompt3()
    }

    button4.onclick = function () {
        timeLeft -= 10
        prompt3()
    }
}


let prompt3 = function () {
    // wrongAnswer.remove()
     //correctAnswer.remove()
     question3 = document.createElement('h1')
     question3.textContent = 'Arrays in Javascript can be used to store _____'
     question3.setAttribute('style', 'font-size:50px; padding-top: 90px')
     question2.parentNode.replaceChild(question3, question2)
 
     button1.textContent = '1: Numbers and Strings'
     button2.textContent = '2: Other Arrays'
     button3.textContent = '3: Booleans'
     button4.textContent = '4: All of the above!'
 
     button1.onclick = function () {
        timeLeft -= 10
         prompt4()
     }
     
     button2.onclick = function () {
        timeLeft -= 10
         prompt4()
     }
 
     button3.onclick = function () {
        timeLeft -= 10
         prompt4()
     }
 
     button4.onclick = function () {
         prompt4()
     }
 }

 let prompt4 = function () {
    question4 = document.createElement('h1')
    question4.textContent = 'String values must be enclosed within _____ when being assigned to variables'
    question4.setAttribute('style', 'font-size:50px; padding-top: 90px')
    question3.parentNode.replaceChild(question4, question3)

    button1.textContent = '1: Commas'
    button2.textContent = '2: Curly Brackets'
    button3.textContent = '3: Quotes'
    button4.textContent = '4: Parenthesis'

    button1.onclick = function () {
        timeLeft -= 10
        prompt5()
    }
    
    button2.onclick = function () {
        timeLeft -= 10
        prompt5()
    }

    button3.onclick = function () {
        prompt5()
    }

    button4.onclick = function () {
        timeLeft -= 10
        prompt5()
    }
 }

 let prompt5 = function () {
    question5 = document.createElement('h1')
    question5.textContent = 'A very useful tool during development and debugging for printing content to the debugger is _______'
    question5.setAttribute('style', 'font-size:50px; padding-top: 90px')
    question4.parentNode.replaceChild(question5, question4)

    button1.textContent = '1: Javascript'
    button2.textContent = '2: Terminal/Bash'
    button3.textContent = '3: For loops'
    button4.textContent = '4: console log'

    button1.onclick = function () {
        timeLeft -= 10
        allDone()
    }
    
    button2.onclick = function () {
        timeLeft -= 10
        allDone()
    }

    button3.onclick = function () {
        timeLeft -= 10
        allDone()
    }

    button4.onclick = function () {
        allDone()
    }
 }

 let allDone = function () {
     time.textContent = timeLeft

     //stopInterval(countdown)
     allCompleted = true

     console.log(allCompleted)

     

     if (timeLeft < 0) { /// may need to adjust this if statement
         timeLeft = 0
         time.remove() ///if timer value is below 0
     }

     button1.remove()
     button2.remove()
     button3.remove()
     button4.remove()

     ////need to adjust this variable name later
     question5.textContent = "All done!"
     question5.setAttribute('style', 'padding-right: 700px; font-size: 40px')

     let scoreP = document.createElement('p')
     scoreP.textContent = `You have finished with a score of ${timeLeft}. Please try again!` 
     scoreP.setAttribute('style', 'padding-left: 300px; font-size: 30px; display: flex')
     body.appendChild(scoreP)

     let formContent = document.createElement('div')
     formContent.setAttribute('style', 'padding-right: 600px; text-align: center; ') /// may need to adjust this later
     body.appendChild(formContent)

     initialsFormField = document.createElement('form')
     initialsFormField.setAttribute("type", "text;")
     initialsFormField.setAttribute('style', '')
     initialsFormField.textContent = 'Enter Initials:'
     formContent.appendChild(initialsFormField)

     let initialsFormLabel = document.createElement('label')
     initialsFormLabel.setAttribute('type', 'text')
     initialsFormField.appendChild(initialsFormLabel)

     initialsFormPrompt = document.createElement('input')
     initialsFormPrompt.setAttribute('type', 'text')
     initialsFormField.appendChild(initialsFormPrompt)

     initialsFormSubmit = document.createElement('input')
     initialsFormSubmit.setAttribute('type', 'submit')
     initialsFormSubmit.setAttribute('style', 'background-color: rgb(79, 17, 138); color: white;')
     initialsFormField.appendChild(initialsFormSubmit)

     initialsFormSubmit.onclick = function (event) {
        event.preventDefault()
        myName = initialsFormPrompt.value
        saveScore()
        window.location.href = "highscores.html"
     }
 }


startQuizButton.addEventListener('click', prompt1)

///

