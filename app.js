const startbtn = $(".start");
const questionCon = $(".questionContainer");
const nextQuestion = $(".next");
const question = $(".question");
const a_option = $(".btn1");
const b_option = $(".btn2");
const c_option = $(".btn3");
const d_option = $(".btn4");

let list = [{
    "question":"what is 2+2?",
    "answers":[{
        "option1":"4","correct":true},
        {"option2":"22","correct":false},
        {"option3":"5","correct":false},
        {"option4":"11","correct":false}
    ]},{
    "question":"what is 10+10",
    "answers":[{
        "option1":"4","correct":false},
        {"option2":"20","correct":true},
        {"option3":"5","correct":false},
        {"option4":"11","correct":false}
    ]},{
    "question":"what is 12+12",
    "answers":[{
        "option1":"4","correct":false},
        {"option2":"22","correct":false},
        {"option3":"5","correct":false},
        {"option4":"24","correct":true}
    ]},{
    "question":"what is 10-2",
    "answers":[{
        "option1":"4","correct":false},
        {"option2":"22","correct":false},
        {"option3":"8","correct":true},
        {"option4":"11","correct":false}
    ]}
];

let first = 0;
let score = 0;
    
let displayQuestions = () =>{
    startbtn.addClass("hide");
    questionCon.removeClass("hide");
    nextQuestion.removeClass("hide");
    question.text(list[first].question);
    a_option.text(list[first].answers[0].option1);
    b_option.text(list[first].answers[1].option2);
    c_option.text(list[first].answers[2].option3);
    d_option.text(list[first].answers[3].option4);
};

let displayNextQuestion = ()=>{
    first++;
    if(first<list.length){
        displayQuestions();
    }else{
        alert("test has finished");
    }
};

