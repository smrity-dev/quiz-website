// QUESTIONS OF QUIZ !!
const quizData = {
  btech: {
    1: [
      { question: "CPU stands for?",
        answers: ["Central Processing Unit", "Control Process Unit", "Central Programming Unit", "Control Processing User"], 
        correct: 0
       },
      { question: "Binary system uses how many digits?", 
        answers: ["1", "2", "10", "Unlimited"], 
        correct: 1
       },
      { 
        question: "HTML stands for?",
        answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Language", "High Text Machine Language"], 
        correct: 0 
      },
      { 
        question: "Which of the following is a valid variable name?",
        answers: ["2value", "value2", "-value", "value-2"], 
        correct: 1 
      },
      { 
        question: "What is the output of: 5+3*2 ?",
        answers: ["16", "11", "13", "10"], 
        correct: 1 
      },
    ],
    2: [
      { 
        question: "OSI model has how many layers?", 
        answers: ["5", "6", "7", "8"],
        correct: 2 
        },
      { 
        question: "TCP stands for?", 
        answers: ["Transmission Control Protocol", "Transfer Communication Protocol", "Transmission Communication Program", "Transfer Control Program"], 
        correct: 0 
      },
      { 
        question: "Linux is?", 
        answers: ["OS", "Programming Language", "Browser", "Editor"], 
        correct: 0 
      },
      { 
        question: "Which data types stores decimal values ?",
        answers: ["int", "float", "char", "bool"], 
        correct: 1 
      },
      { 
        question: "which keyword is used to define a constant value ?",
        answers: ["let", "const", "static", "fixed"], 
        correct: 1
      },
    ],
    3: [
      { 
        question: "C++ is?", 
        answers: ["Object Oriented", "Functional", "Markup", "Scripting"], 
        correct: 0 
      },
      { 
        question: "Constructor in C++ is?", 
        answers: ["Special function", "Variable", "Class", "Loop"], 
        correct: 0 
      },
      { 
        question: "Destructor is used to?", 
        answers: ["Initialize", "Delete object", "Store data", "Print"], 
        correct: 1 
      },
      {
        question: "which header file is needed for printf() in C ?",
        answers: ["stdio.h", "iostream", "math.h", "conio.h"], 
        correct: 0
      },
      { 
        question: "Which is the correct syntax for a function in C ?",
        answers: ["void fun;", "void fun()", "fun void()", "function fun()"], 
        correct: 1 
      }
    ],
    4: [
      { 
        question: "DBMS stands for?", 
        answers: ["Database Management System", "Data Business Model", "Data Management Service", "Database Modeling Service"], 
        correct: 0 
      },
      { 
        question: "SQL is used for?", 
        answers: ["Styling", "Data Query", "Networking", "Scripting"], 
        correct: 1 
      },
      { 
        question: "Normalization is?", 
        answers: ["Reducing redundancy", "Increasing data", "Sorting", "Encryption"], 
        correct: 0 
      },
      { 
        question: "What does 'break' keyword do ?",
        answers: ["exits for loop", "repeats loop", "stops program", "skips iteration"], 
        correct: 0 
      },
      { 
        question: "Which one is a loical operator ? ",
        answers: ["+", "&&", "%", "="], 
        correct: 1
      },
    ]
  },
  bca: {
    1: [
      { question: "Binary system uses how many digits?", 
        answers: ["1", "2", "10", "Unlimited"], 
        correct: 1
       },
      { 
        question: "What is the output of: 5+3*2 ?",
        answers: ["16", "11", "13", "10"], 
        correct: 1 
      },
      { 
        question: "Which data types stores decimal values ?",
        answers: ["int", "float", "char", "bool"], 
        correct: 1 
      },
      { 
        question: "which one is a loop in programming ?",
        answers: ["if", "else", "for", "break"], 
        correct: 2
      },
      {
        question: "which of the following stores a single character ?",
        answers: ["double", "int", "float", "char"], 
        correct: 3
      },
    ],
    2: [
      { 
        question: "Java is a?", 
        answers: ["Compiled", "Interpreted", "Both", "None"], 
        correct: 2 },
      { 
        question: "Which is not OOP?", 
        answers: ["C++", "Java", "Python", "HTML"], 
        correct: 3 
      },
            {
        question: "which header file is needed for printf() in C ?",
        answers: ["stdio.h", "iostream", "math.h", "conio.h"], 
        correct: 0
      },
      { 
        question: "Which is the correct syntax for a function in C ?",
        answers: ["void fun;", "void fun()", "fun void()", "function fun()"], 
        correct: 1 
      },
      { 
        question: "PHP is used for?", 
        answers: ["Backend", "Frontend", "Styling", "OS"], 
        correct: 0 
      }
    ],
    3: [
      { 
        question: "SQL is?", 
        answers: ["Database Language", "Programming", "Styling", "Markup"], 
        correct: 0 
      },
      { 
        question: "What does 'break' keyword do ?",
        answers: ["exits for loop", "repeats loop", "stops program", "skips iteration"], 
        correct: 0 
      },
      { 
        question: "Which one is a loical operator ? ",
        answers: ["+", "&&", "%", "="], 
        correct: 1
      },
      { 
        question: "Primary key is?", 
        answers: ["Unique", "Duplicate", "Optional", "Null"], 
        correct: 0 
      },
      { 
        question: "SELECT is used to?", 
        answers: ["Query", "Update", "Delete", "Insert"], 
        correct: 0 
      }
    ]
  },
  bscagri: {
    1: [
      { 
        question: "Main source of plant energy?", 
        answers: ["Glucose", "Protein", "Fats", "Water"], 
        correct: 0 
      },
      { 
        question: "Photosynthesis needs?", 
        answers: ["CO2, Light", "N2", "O2", "Protein"], 
        correct: 0 
      },
      { 
        question: "Soil pH ideal?", 
        answers: ["5-7", "7-9", "3-5", "9-11"], 
        correct: 0 
      },
      { 
        question: "Which nutrient is known as 'master nutrient'for the plant growth?", 
        answers: ["Nitrogen", "Iron", "Calcium", "Sulphur"], 
        correct: 0 
      },
      { 
        question: "The upper-most-level of soil is called ?", 
        answers: ["subsoil", "bedrock", "topsoil", "parent material"], 
        correct: 2 
      }
    ],
    2: [
      { 
        question: "Nitrogen fixation occurs in?", 
        answers: ["Legume roots", "Stem", "Leaves", "Flowers"], 
        correct: 0 
      },
      { 
        question: "Legumes example?", 
        answers: ["Pea", "Wheat", "Rice", "Sugarcane"], 
        correct: 0 
      },
      { 
        question: "Fertilizers add?", 
        answers: ["Nutrients", "Water", "Sunlight", "Air"], 
        correct: 0 
      },
      { 
        question: "Which crop is known as the 'King of the Cereals' ?", 
        answers: ["Rice", "Maize", "Wheat", "Barley"], 
        correct:2
      },
      { 
        question: "Which bacteria fix atmospheric nitrogen in leguminous plant?", 
        answers: ["Azotobacter", "Rhizobium", "Nitrosomonos", "Colostridium"], 
        correct: 1
      }
    ],
    3: [
      { question: "King of Fruits?", 
        answers: ["Apple", "Banana", "Mango", "Grapes"], 
        correct: 2 
      },
      { question: "Rabi crop?", 
        answers: ["Wheat", "Rice", "Maize", "Cotton"], 
        correct: 0 
      },
      { question: "Kharif crop?", 
        answers: ["Rice", "Wheat", "Barley", "Oats"], 
        correct: 0 
      },
      { 
        question: "Legumes example?", 
        answers: ["Pea", "Wheat", "Rice", "Sugarcane"], 
        correct: 0 
      },
      { 
        question: "Fertilizers add?", 
        answers: ["Nutrients", "Water", "Sunlight", "Air"], 
        correct: 0 
      }
    ],
    4: [
      { 
        question: "Crop rotation helps?", 
        answers: ["Soil fertility", "Reduce yield", "Water loss", "Pests"], 
        correct: 0 },
      { 
        question: "Green manuring?", 
        answers: ["Add nutrients", "Remove plants", "Watering", "Harvesting"], 
        correct: 0 },
      { 
        question: "Irrigation method?", 
        answers: ["Drip", "Photosynthesis", "Harvesting", "Pruning"], 
        correct: 0 
      },
      { 
        question: "The process by which plants make thier food is called?", 
        answers: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"], 
        correct: 1 
      },
      { 
        question: "Which bacteria fix atmospheric nitrogen in leguminous plant?", 
        answers: ["Azotobacter", "Rhizobium", "Nitrosomonos", "Colostridium"], 
        correct: 1
      }
    ]
  },
  bba: {
    1: [
      { question: "Marketing relates to?", 
        answers: ["Finance", "Sales & Promotion", "Law", "Coding"], 
        correct: 1 
      },
      { question: "Accounting shows?", 
        answers: ["Profit/Loss", "Assets", "Network", "Production"], 
        correct: 0 
      },
      { question: "HR stands for?", 
        answers: ["Human Resource", "Human Rights", "Household", "Health"], 
        correct: 0 
      },
      { 
        question: "SWOT stands for?", 
        answers: ["Strength Weakness Opportunity Threat", "Some Words Of Team", "Strategy With Options Technique", "None"], 
        correct: 0  
      },
      { 
        question: "Balance Sheet shows?", 
        answers: ["Assets & Liabilities", "Profit Only", "Revenue Only", "Expenses Only"], 
        correct: 0 
      }
    ],
    2: [
      { 
        question: "Depreciation is?", 
        answers: ["Asset value decrease", "Profit", "Revenue", "Investment"], 
        correct: 0
      },
      { 
        question: "Inventory is?", 
        answers: ["Goods storage", "Finance", "HR", "Marketing"], 
        correct: 0 
      },
      { 
        question: "ROI means?", 
        answers: ["Return On Investment", "Rate Of Income", "Return Of Interest", "Revenue On Investment"], 
        correct: 0 
      },
      { 
        question: "SWOT analysis stands for Strengths,Weakness,Opportunities and, _____ ?", 
        answers: ["Targets", "Threat", "Tasks", "Trends"], 
        correct: 1 
      },
      { 
        question: "Which leadership style give workers full freedom to make decisions ?", 
        answers: ["Autocratic", "Democratic", "Laissez-faire", "Authoritative"], 
        correct: 2
      },
    ],
    3: [
      { 
        question: "Balance Sheet shows?", 
        answers: ["Assets & Liabilities", "Profit Only", "Revenue Only", "Expenses Only"], 
        correct: 0 
      },
      { 
        question: "Depreciation is?", 
        answers: ["Asset value decrease", "Profit", "Revenue", "Investment"], 
        correct: 0 
      },
      { 
        question: "Break-even point?", 
        answers: ["No profit no loss", "Profit", "Loss", "Revenue"], 
        correct: 0 
      },
      { 
        question: "Which of the following is a key function of management ?", 
        answers: ["selling", "staffing", "manufacturing", "recruiting"], 
        correct: 0 
      },
      { 
        question: "In marketing, the 4Ps refers to the product,Price,Promotion and, ____ ?", 
        answers: ["People", "Profit", "Place", "Process"], 
        correct: 2
      },
    ]
  }
};

//GET ELEMENTS//

const courseSelect = document.getElementById("course");
const yearSelect = document.getElementById("year");
const startBtn = document.getElementById("start-btn");

const frontPage = document.getElementById("front-page");
const quizPage = document.getElementById("quiz-page");
const reviewPage = document.getElementById("review-page");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const timerElement = document.getElementById("timer");
const reviewContent = document.getElementById("review-content");
const restartBtn = document.getElementById("restart-btn");

// INITIALIZED VARIABLES//

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let userAnswers = [];

//When course changes, load years ACCORDING TO SELECTION OF COURSES//

courseSelect.addEventListener("change", () =>
{
  yearSelect.innerHTML = "<option value=''>--Select--</option>";
  let totalYears = (courseSelect.value === "btech" || courseSelect.value === "bscagri") ? 4 : 3; //use ternary operators
  for (let i = 1; i <= totalYears; i++) 
  {
    let option = document.createElement("option");          // Create option tag after course selection
    option.value = i;                                       // Value set according to year = 1, 2, 3, 4
    option.innerText = i + " Year";                         // Show option choices = 1 Year, 2 Year...
    yearSelect.appendChild(option);                         // Choose options by scrolling cursor down
  }
});

//Start Quiz

startBtn.addEventListener("click", () => 
{
  let course = courseSelect.value;
  let year = yearSelect.value;
  if (!course || !year) 
  {
    alert("Select both course and year");            //It gives a message on the page if we remove it, for selecting both//
  }
  questions = quizData[course][year];                //Now questions are started with the help of quiz data (go_to_first_line_of_JS)//
  frontPage.classList.add("hide");                   //Used for two pages are align together//
  quizPage.classList.remove("hide");                 //Choice of year are in appropriate loop//
  showQuestion();                                    //Calling of showQuestion function//
}
);

// --- Show Question ---

function showQuestion()                              //Shows questions one by one
{
  resetState();
  let q = questions[currentQuestionIndex];
  questionElement.textContent = q.question;
  q.answers.forEach((ans, i) => {
    let btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => selectAnswer(i);
    answerButtons.appendChild(btn);
  });
  startTimer();
}

// --- Reset state before next question ---

function resetState() 
{
  nextButton.classList.add("hide");           // hide next button
  answerButtons.innerHTML = "";               // remove old answer buttons
  clearInterval(timer);                       // stop old timer if running
  timeLeft = 30;                              // set timer back to 30 seconds
  timerElement.textContent = timeLeft;        // remove warning color
  timerElement.classList.remove("warning");
}

// --- Timer ---

function startTimer() {
  timer = setInterval(function() {
    timeLeft--;                                  // decrease time
    timerElement.textContent = timeLeft;         // show time
    if (timeLeft <= 10) 
    {             
      timerElement.classList.add("warning");     // show warning when 10 seconds left
    }
    if (timeLeft === 0)                          // when time is over
    {
      clearInterval(timer);                      // stop timer
      disableButtons();                          // lock all buttons
      userAnswers.push(null);                    // no answer chosen
      nextButton.classList.remove("hide");
    }
  }, 1000);                                      // runs every 1 second
}

// --- When answer is selected ---
 
function selectAnswer(index)                     // This function runs when the student clicks an answer
{
  clearInterval(timer);                          // stop the timer
  let q = questions[currentQuestionIndex];       // current question
  userAnswers.push(index);                       // store the answer
  if (index === q.correct)                       // add score if answer is correct
  {
    score++;
  }
  let buttons = answerButtons.children;          // get all answer buttons
  for (let i = 0; i < buttons.length; i++)       // disable all buttons and show correct/wrong colors
    {
    buttons[i].disabled = true;                
    if (i === q.correct) 
        {
           buttons[i].classList.add("correct");  // highlight correct
        } 
    else if (i === index) 
        {
      buttons[i].classList.add("wrong");         // highlight wrong
        }
    }
  nextButton.classList.remove("hide");           // show next button
}

// --- Disable all answers ---

function disableButtons()                        // This makes all answer buttons unclickable
{
  let buttons = answerButtons.children;
  for (let i = 0; i < buttons.length; i++) 
  {
    buttons[i].disabled = true;
  }
}

// --- Next Question ---

nextButton.onclick = function ()                    // When the next button is clicked
{
  currentQuestionIndex++;                           // move to next question
  if (currentQuestionIndex < questions.length)      // if questions are still left, show them 
  {
    showQuestion();
  }
  else 
  {
    showReview();                                   // otherwise show review page
  }
};

// --- Show Review Page ---

function showReview()                               // This function shows the review page after the quiz ends
{
  quizPage.classList.add("hide");                   // hide quiz pages
  reviewPage.classList.remove("hide");              // hide show review page
  reviewContent.innerHTML = "";                     // clear old content
  for (let i = 0; i < questions.length; i++)        // show each question with answers
    {
    let q = questions[i];
    let box = document.createElement("div");
    box.innerHTML = "<strong>Q" + (i + 1) + ":</strong> " + q.question + "<br>";  // show question text

    for (let j = 0; j < q.answers.length; j++)        // show all answers
    {
      let div = document.createElement("div");
      div.textContent = q.answers[j];
      if (j === q.correct)                            // mark correct answer
      {
        div.classList.add("correct");
      }
      if (userAnswers[i] === j && j !== q.correct)    // mark wrong selected answer
      {
        div.classList.add("wrong");
      }
      box.appendChild(div);
    }
    reviewContent.appendChild(box);
  }
  reviewContent.innerHTML += "<h3>Score: " + score + " / " + questions.length + "</h3>";     // show final score
}

restartBtn.onclick = function ()                      // restart quiz
{
  location.reload();
};

// --- Restart Quiz ---
restartBtn.onclick = () => location.reload();
