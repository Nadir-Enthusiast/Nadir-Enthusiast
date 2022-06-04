const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function() {
        questions.forEach(function(aQuestion) {
            if(aQuestion !== question) {
                aQuestion.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})

// Thanks for attention
// Also ...
// NEVER GONNA GIVE YOU UP
