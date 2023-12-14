var questionBank=[
    {
        question: "programing language is a set of?",
        Option: ["English word","English word and symbols","English word,number and symbols","English word and numbers"],
        answer:"English word,number and symbols"
    },
    {
        question: "Which of the following is a clint site language?",
        Option:["java","javascript","python",'c'],
        answer:"javascript"
    },
    {
        question: "HTML Stand for?",
        Option:["Hypertext Markup language","Hypertext Market language",
        "HighText Markup Language",
        "High Transfer Model Language"],
        answer:"Hypertext Markup language"
    },
    {
        question: "What year was javaScript Launched?",
        Option:["1996",
        "1995",
        "1994",
        "None of the above"],
        answer:"1995"
    }, 
    {
        question: "Which of the following is not a programing language?",
        Option:["HTMl",
        "CSS",
        "Java",
        "Python"],
        answer:"HTMl"
    }

]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var Option0= document.getElementById('option0');
var Option1= document.getElementById('option1');
var Option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span=document.querySelectorAll('span');
var i=0;
var score=0;


//function to display question
function displayQuestion(){
    for(var a=0; a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML='Q.'+(i+1)+' '+questionBank[i].question;
    Option0.innerHTML=questionBank[i].Option[0];
    Option1.innerHTML=questionBank[i].Option[1];
    Option2.innerHTML=questionBank[i].Option[2];
    Option3.innerHTML=questionBank[i].Option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

// function of calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background='lightgreen';
    }
    else{
        document.getElementById(e.id).style.background='red';
    }
    setTimeout(nextQuestion,300);
}

// function to display backQuestion

function backQuestion(){
    if(i<questionBank.length+1)
    {
        i=i-1;
        displayQuestion();
    }
    else{
        points.innerHTML=score+'/'+questionBank.length;
        quizContainer.style.display='none';
        scoreboard.style.display='block'
    }
}
// function to display nextQuestion

function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML=score+'/'+questionBank.length;
        quizContainer.style.display='none';
        scoreboard.style.display='block'
    }
}

// click event to next button
next.addEventListener('click',nextQuestion);


//  // click event to next button
//   back.addEventListener('click',backQuestion);


// Back to quiz buttion event
function backTOQuiz(){
    location.reload();
}



// function to check answers
function CheckAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display='block';
    scoreboard.style.display='none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }

}


displayQuestion();