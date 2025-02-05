//getting all required documents
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box ");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//if thhe start button is clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");//displays the info box
}

//If exit button is clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");//hides the info box
}

//If continue button is clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");//hides the info box
    quiz_box.classList.add("activeQuiz");//shows the quiz box
}

let que_count = 0;

//accessing questions and its options from array
function showQuestions(){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ +'</span>'
}




