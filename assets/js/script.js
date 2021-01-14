let body = document.body;

let startQuizButton = document.querySelector("#start-quiz-btn");
let h1Header = document.querySelector("#start-quiz-header")
let beginningPrompt = document.querySelector("#beginning-prompt")

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

let score = 0;
let time = 0

///Creating an array/object with the questions/answers?

let prompt1 = function () {
    question1 = document.createElement('h1')
    question1.textContent = "Commonly used data types do NOT Include:"
    h1Header.parentNode.replaceChild(question1, h1Header)

    beginningPrompt.remove()
    startQuizButton.remove()

    button1 = document.createElement('button')
    button1.textContent = '1. Strings'
    body.appendChild(button1)

    button2 = document.createElement('button')
    button2.textContent = '2. Booleans'
    body.appendChild(button2)

    button3 = document.createElement('button')
    button3.textContent = '3. Alerts'
    body.appendChild(button3)

    button4 = document.createElement('button')
    button4.textContent = '4. Numbers'
    body.appendChild(button4)

    button1.onclick = function () {
        //wrongAnswer = document.createElement('h2')
       // wrongAnswer.textContent = 'Wrong!'
        //body.appendChild(wrongAnswer)
        prompt2()
        //wrongAnswer.remove()
    }

    button2.onclick = function () {
       // wrongAnswer = document.createElement('h2')
        //wrongAnswer.textContent = 'Wrong!'
        //body.appendChild(wrongAnswer)
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
        prompt2()
    }
}

let prompt2 = function () {
   // wrongAnswer.remove()
    //correctAnswer.remove()
    question2 = document.createElement('h1')
    question2.textContent = 'The condition of an if / else statment is enclosed with _____'
    question1.parentNode.replaceChild(question2, question1)

    button1.textContent = '1: Quotes'
    button2.textContent = '2: Curly Brackets'
    button3.textContent = '3: Parenthesis'
    button4.textContent = '4: Square Brackets'

    button1.onclick = function () {
        prompt3()
    }
    
    button2.onclick = function () {
        prompt3()
    }

    button3.onclick = function () {
        prompt3()
    }

    button4.onclick = function () {
        prompt3()
    }
}


let prompt3 = function () {
    // wrongAnswer.remove()
     //correctAnswer.remove()
     question3 = document.createElement('h1')
     question3.textContent = 'Arrays in Javascript can be used to store _____'
     question2.parentNode.replaceChild(question3, question2)
 
     button1.textContent = '1: Numbers and Strings'
     button2.textContent = '2: Other Arrays'
     button3.textContent = '3: Booleans'
     button4.textContent = '4: All of the above!'
 
     button1.onclick = function () {
         prompt4()
     }
     
     button2.onclick = function () {
         prompt4()
     }
 
     button3.onclick = function () {
         prompt4()
     }
 
     button4.onclick = function () {
         prompt4()
     }
 }

 let prompt4 = function () {
    question4 = document.createElement('h1')
    question4.textContent = 'String values must be enclosed within _____ when being assigned to variables'
    question3.parentNode.replaceChild(question4, question3)

    button1.textContent = '1: Commas'
    button2.textContent = '2: Curly Brackets'
    button3.textContent = '3: Quotes'
    button4.textContent = '4: Parenthesis'

    button1.onclick = function () {
        prompt5()
    }
    
    button2.onclick = function () {
        prompt5()
    }

    button3.onclick = function () {
        prompt5()
    }

    button4.onclick = function () {
        prompt5()
    }
 }

 let prompt5 = function () {
    question5 = document.createElement('h1')
    question5.textContent = 'A very useful tool during development and debugging for printing content to the debugger is _______'
    question4.parentNode.replaceChild(question5, question4)

    button1.textContent = '1: Javascript'
    button2.textContent = '2: Terminal/Bash'
    button3.textContent = '3: For loops'
    button4.textContent = '4: console log'

    button1.onclick = function () {
        allDone()
    }
    
    button2.onclick = function () {
        allDone()
    }

    button3.onclick = function () {
        allDone()
    }

    button4.onclick = function () {
        allDone()
    }
 }

 let allDone = function () {
     button1.remove()
     button2.remove()
     button3.remove()
     button4.remove()

     ////need to adjust this variable name later
     question5.textContent = "All done!"

     let scoreP = document.createElement('p')
     scoreP.textContent = `You have finished with a score of 100` ///need to adjust this to the proper score.
     body.appendChild(scoreP)

     initialsFormField = document.createElement('INPUT')
     initialsFormField.setAttribute("type", "text")
     initialsFormField.textContent = 'Submit'
     body.appendChild(initialsFormField)
 }

let showNextQuestion = function () {

}

let showQuestion = function () {

}

let questions = [
    {
        question: 'Commonly used data types do NOT Include:',
        answers: [
            {text: '1: Strings', correct: false},
            {text: '2: Booleans', corect: false},
            {text: '3: Alerts', correct: true},
            {text: '4: Numbers', correct: true}
        ]
    }
]



startQuizButton.addEventListener('click', prompt1)

//startQuizButton.addEventListener("click", function () {
   // question1 = document.createElement('h1')
   // question1.textContent = "Commonly used data types do NOT Include:"
   // h1Header.parentNode.replaceChild(question1, h1Header)

   // beginningPrompt.remove()

   // button1 = document.createElement('button')
    //button1.textContent = '1. Strings'
    //startQuizButton.parentNode.replaceChild(button1, startQuizButton)

   // button2 = document.createElement('button')
   // button2.textContent = '2. Booleans'
   // body.appendChild(button2)

  //  button3 = document.createElement('button')
  //  button3.textContent = '3. Alerts'
   // body.appendChild(button3)

   // button4 = document.createElement('button')
   // button4.textContent = '4. Numbers'
   // body.appendChild(button4)

//})