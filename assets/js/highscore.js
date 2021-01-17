let goBack = document.querySelector('#go-back')

let clearHighScores = document.querySelector('#clear-high-scores')

let listOfScores = document.querySelector('#high-scores-list')

goBack.addEventListener("click", function () {
    window.location.href = "index.html"
})

let loadScores = function () {
    let scores = JSON.stringify(localStorage)
    return scores.replace(/[{}]/gi, '' )
    
}
///JSON.parse(localStorage.getItem("myName"))

clearHighScores.onclick = function () {
  localStorage.clear();
  listOfScores.value = ''
}

listOfScores.value = loadScores()


//let myScores = scores.split('')
//return myScores.filter(function (x) {
  ///  if (x != "{" && x != "}" && x != ":") {
    ///    return x
  ///  }
///})
