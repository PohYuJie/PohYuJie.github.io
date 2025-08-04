
let contentObserver;// Global variable for IntersectionObserver
let allContentElements;// Will hold all elements with class 'allcontent'

document.addEventListener('DOMContentLoaded', () => { // Wait until page is fully loaded
  const page0btn = document.querySelector("#page0btn");
  const page1btn = document.querySelector("#page1btn");
  const page2btn = document.querySelector("#page2btn");
  const page3btn = document.querySelector("#page3btn");
  const allpages = document.querySelectorAll(".page");
  allContentElements = document.querySelectorAll('.allcontent');

  // Show/hide pages
  function hideAllPages() {
    allpages.forEach(page => {
      page.style.display = "none";
      page.querySelectorAll('.allcontent').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('show');
        if (contentObserver) {
          contentObserver.unobserve(el);
        }
      });
    });
  }
//show page
  function showPage(pgno) {
  hideAllPages();
  const currentPage = document.querySelector("#page" + pgno);
  if (currentPage) {
    currentPage.style.display = "block";
    currentPage.querySelectorAll('.allcontent').forEach(el => {
      el.classList.add('hidden');
      contentObserver.observe(el); // Start observing scroll into view
    });

    // Set different background colors for Fun Facts page vs others
    const allContentBlocks = currentPage.querySelectorAll('.allcontent');
    allContentBlocks.forEach(content => {
      if (pgno === 3) {
        content.style.backgroundColor = "#0d9fb9"; // Fun Facts
      } else {
        content.style.backgroundColor = "green"; // green
      }
    });
  }
}

//menu button
const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");


hamBtn.addEventListener("click", () => {
    menuItemsList.classList.toggle("menuShow");
    hamBtn.classList.toggle("rotate");
});

page0btn.addEventListener("click", () => showPage(0));
page1btn.addEventListener("click", () => showPage(1));
page2btn.addEventListener("click", () => showPage(2));
page3btn.addEventListener("click", () => showPage(3));


//scroll in animation
contentObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.15
});

  window.addEventListener('scroll', () => {
    if (!allContentElements) {
      allContentElements = document.querySelectorAll('.allcontent');
    }

    allContentElements.forEach((el) => {
      const sectionTop = el.offsetTop;
      const sectionBottom = sectionTop + el.clientHeight;
      const isVisible = window.scrollY >= sectionTop && window.scrollY <= sectionBottom;

      
    });
  });

// Show Home on load
showPage(0);

// GAME INITIALIZATION (inside same block so elements exist)
const game = document.querySelector(".gamelayout");
const startButton = document.querySelector(".gamebutton > button:nth-child(2)");
const leftButton = document.querySelector(".gamebutton > button:nth-child(1)");
const rightButton = document.querySelector(".gamebutton > button:nth-child(3)");
const basket = document.querySelector(".basket");
const scorePoint = document.querySelector(".score h1");
const pear = document.querySelector(".gamepear");
const catchSound = new Audio('Audio/collectpear.mp3');

//Game start variables
let pearInterval = null;
let moveLeftInterval = null;
let moveRightInterval = null;
let score = 0;
let pearRotation = 0;

//initial game object positions
basket.style.left = "200px";
pear.style.top = "-40px";
pear.style.left = "100px";

//move left
function moveBasketLeft() {
    const left = parseInt(basket.style.left) || 0;
    if (left > 0) basket.style.left = (left - 15) + "px";
}

//move right
function moveBasketRight() {
    const left = parseInt(basket.style.left) || 0;
    const max = game.clientWidth - basket.clientWidth;
    if (left < max) basket.style.left = (left + 15) + "px";
}

//reset the pear
function resetPear() {
    pear.style.top = "0px";
    const maxLeft = game.clientWidth - pear.clientWidth;
    pear.style.left = Math.floor(Math.random() * maxLeft) + "px";
    pearRotation = 0;
    pear.style.transform = `rotate(0deg)`;
}

//drop the pear
function dropPear() {
    let top = parseInt(pear.style.top);
    if (isNaN(top)) top = 0;

    const maxTop = game.clientHeight - pear.clientHeight;
    if (top >= maxTop) {
      const caught = checkCatch();

      if (!caught) {
        clearInterval(pearInterval);
        alert("Game Over! The pear hit the bottom. Score: " + score);
        pear.style.display = "none";
      } else {
        resetPear();
      }
    } else {
      pear.style.top = (top + 5) + "px";
      pearRotation = (pearRotation + 10) % 360;
      pear.style.transform = `rotate(${pearRotation}deg)`;
    }
}

//when catched
function checkCatch() {
    const pearLeft = parseInt(pear.style.left);
    const pearRight = pearLeft + pear.clientWidth;
    const basketLeft = parseInt(basket.style.left);
    const basketRight = basketLeft + basket.clientWidth;

    if (pearRight >= basketLeft && pearLeft <= basketRight) {
      score++;
      scorePoint.textContent = "Score: " + score;
      catchSound.currentTime = 0;
      catchSound.play();
      return true;
    }
    return false;
}

//Start button, reset score, show pear, begin falling loop
startButton.addEventListener("click", () => {
    if (pearInterval) clearInterval(pearInterval);
    score = 0;
    scorePoint.textContent = "Score: 0";
    resetPear();
    pear.style.display = "block";
    pearInterval = setInterval(dropPear, 30);
});

//how much it move and stop
function startLeftInterval() {
    if (!moveLeftInterval) {
      moveLeftInterval = setInterval(moveBasketLeft, 50);
    }
}

function stopLeftInterval() {
    clearInterval(moveLeftInterval);
    moveLeftInterval = null;
}

function startRightInterval() {
    if (!moveRightInterval) {
      moveRightInterval = setInterval(moveBasketRight, 50);
    }
}

function stopRightInterval() {
    clearInterval(moveRightInterval);
    moveRightInterval = null;
}

document.addEventListener('keydown', function (evt) {
    const key = evt.key.toLowerCase();
    if (key === 'a' || key === 'arrowleft') moveBasketLeft();
    if (key === 'd' || key === 'arrowright') moveBasketRight();
});

leftButton.addEventListener("pointerdown", startLeftInterval);
leftButton.addEventListener("pointerup", stopLeftInterval);
leftButton.addEventListener("pointerleave", stopLeftInterval);
leftButton.addEventListener("pointercancel", stopLeftInterval);

rightButton.addEventListener("pointerdown", startRightInterval);
rightButton.addEventListener("pointerup", stopRightInterval);
rightButton.addEventListener("pointerleave", stopRightInterval);
rightButton.addEventListener("pointercancel", stopRightInterval);
});


//-------------QUIZ------------//
//Array of questions
const quizData = [
  {
    question: "What family are pears part of?",
    options: ["Rose", "Apple", "Citrus", "Berry"],
    answer: "Rose"
  },
  {
    question: "How many pear varieties exist worldwide?",
    options: ["300", "3000", "30,000", "3"],
    answer: "3000"
  },
  {
    question: "Which country is a top producer of pears?",
    options: ["Brazil", "United States", "France", "South Africa"],
    answer: "United States"
  },
  {
    question: "When do pears ripen best?",
    options: ["On the tree", "After harvesting", "Frozen", "In sunlight"],
    answer: "After harvesting"
  },
  {
    question: "What is pear tree wood used for?",
    options: ["Paper", "Fuel", "Musical instruments", "Rubber"],
    answer: "Musical instruments"
  },
];

//Variables(keep track of what qn we are on and score)
let currentQuestion = 0;
let score = 0;

const quizQuestion = document.querySelector("#quizQuestion");
const quizForm = document.querySelector("#quizForm");
const nextBtn = document.querySelector("#nextBtn");
const quizFeedback = document.querySelector("#quizFeedback");
const quizScore = document.querySelector("#quizScore");



function loadQuestion() {
  quizForm.innerHTML = ""; //clear previous options
  quizFeedback.textContent = "";
  nextBtn.disabled = true; //disable next button until answer selected

  const q = quizData[currentQuestion]; //current qn
  quizQuestion.textContent = q.question; //show the qn

  q.options.forEach(option => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
    quizForm.appendChild(label); //add label to form
  });
}

quizForm.addEventListener("click", (e) => {
  if (e.target.matches("input[type='radio']")) {
    nextBtn.disabled = false;
  }
});

nextBtn.addEventListener("click", () => { //when next btn is pressed
  const selected = quizForm.querySelector("input[name='answer']:checked"); //get answer selected
  if (!selected) return; 

  const answer = selected.value;
  const correct = quizData[currentQuestion].answer; //see if ans correct

  if (answer === correct) {
    quizFeedback.textContent = "Correct!";
    quizFeedback.style.color = "lightgreen";
    score++;
  } else {
    quizFeedback.textContent = `Wrong. Correct answer: ${correct}`;
    quizFeedback.style.color = "orange";
  }

  currentQuestion++;

  nextBtn.disabled = true; //disable again
  quizForm.innerHTML = "";


  //show qn after 1s
  setTimeout(() => {
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
        //quiz end
      quizQuestion.textContent = "Quiz complete!";
      quizFeedback.textContent = "";
      quizScore.textContent = `You scored ${score} out of ${quizData.length}.`;
      nextBtn.style.display = "none";
    }
  }, 1000);
});

// Load the first question on page load
loadQuestion();


/*FullScreen*/
const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { //must be called by user generated event
document.documentElement.requestFullscreen();
}
function exitFullscreen() {
document.exitFullscreen();
}
