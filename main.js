
/*const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");

function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}

const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click",toggleMenus);
function toggleMenus(){ /*open and close menu
//if menuItemsList dont have the class "menuShow", add it, else remove it
menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
}



function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}

page1btn.addEventListener("click", function () {
show(1);
});

page2btn.addEventListener("click", function () {
show(2);
});

page3btn.addEventListener("click", function () {
show(3);
});

hideall();*/

/*let contentObserver;

document.addEventListener('DOMContentLoaded', () => {

    const page1btn = document.querySelector("#page1btn");
  const page2btn = document.querySelector("#page2btn");
  const page3btn = document.querySelector("#page3btn");
  const allpages = document.querySelectorAll(".page");
  const allContentElements = document.querySelectorAll('.allcontent');

  function hideall() {
    for (let onepage of allpages) {
      onepage.style.display = "none";
    }
  }

  function show(pgno) {
    hideall();
    const onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block";

    const visibleSections = onepage.querySelectorAll('.allcontent.hidden');
    visibleSections.forEach(el => {
        observer.observe(el);
    })
  }

  // Menu toggle
  const hamBtn = document.querySelector("#hamIcon");
  const menuItemsList = document.querySelector("nav ul");
  hamBtn.addEventListener("click", () => {
    menuItemsList.classList.toggle("menuShow");
  });

  // Page button click handlers
  page1btn.addEventListener("click", () => show(1));
  page2btn.addEventListener("click", () => show(2));
  page3btn.addEventListener("click", () => show(3));

  // Initially hide all
  hideall();
    const elements = document.querySelectorAll('.allcontent');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.15 // triggers earlier or later
    });

    elements.forEach(el => {
        el.classList.add('hidden'); // add initial state
        observer.observe(el);
    });
});*/

//let contentObserver; // Declare globally for accessibility


// Define slideInOnScroll function (if intended to do something specific on scroll,
// beyond what the IntersectionObserver already handles for slide-in animations)
//function slideInOnScroll() {
    // This function will be called every time the window is scrolled.
    // Your slide-in animation logic is primarily handled by the IntersectionObserver below.
    // If you have other specific effects tied to general scrolling, you can add them here.
//}

// Function to set up section IDs dynamically
/*function SetupSectionID(mainContents) {
    for (let i = 0; i < mainContents.length; i++) {
        // Get all sections in each content page
        const sections = mainContents[i].querySelectorAll(".allcontent");
        for (let j = 0; j < sections.length; j++) {
            // Set up the id of all sections, this is for jumping to pages with the nav bottom links
            if (!sections[j].getAttribute("id"))
                sections[j].setAttribute("id", "-#page-" + (i + 1) + "-.allcontent-" + (j + 1));
        }
    }
}*/



/*function slideInOnScroll() {
    for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        const sectionBottom = sectionTop + sections[i].clientHeight;
        const isSectionVisible = window.scrollY >= sectionTop && window.scrollY <= sectionBottom;
        if (isSectionVisible) {
            sections[i].style.marginLeft = '10%';
        }
    }
}*/

/*document.addEventListener('DOMContentLoaded', () => {

    const page1btn = document.querySelector("#page1btn");
    const page2btn = document.querySelector("#page2btn");
    const page3btn = document.querySelector("#page3btn");
    const allpages = document.querySelectorAll(".page"); // Select all page sections

    // Function to hide all pages and reset their content's animation state
    function hideAllPages() {
        allpages.forEach(page => {
            page.style.display = "none"; // Hide the page itself
            // Reset all content elements within this page to their 'hidden' state
            // and stop observing them, so they can animate again when revisited.
            page.querySelectorAll('.allcontent').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('show'); // Ensure 'show' is removed
                if (contentObserver) { // Check if observer is initialized
                    contentObserver.unobserve(el);
                }
            });
        });
    }

    // Function to show a specific page and start observing its content
    function showPage(pgno) {
        hideAllPages(); // First, hide all pages and reset their content
        const currentPage = document.querySelector("#page" + pgno);
        if (currentPage) {
            currentPage.style.display = "block"; // Show the selected page

            // Now, observe only the content elements within the currently visible page
            currentPage.querySelectorAll('.allcontent').forEach(el => {
                el.classList.add('hidden'); // Ensure initial hidden state for animation
                contentObserver.observe(el); // Start observing these elements
            });
            // Optional: Scroll to the top of the newly displayed page
            currentPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Menu toggle
    const hamBtn = document.querySelector("#hamIcon");
    const menuItemsList = document.querySelector("nav ul");
    hamBtn.addEventListener("click", () => {
        menuItemsList.classList.toggle("menuShow");
    });

    // Page button click handlers - now call showPage
    page1btn.addEventListener("click", () => showPage(1));
    page2btn.addEventListener("click", () => showPage(2));
    page3btn.addEventListener("click", () => showPage(3));

    // Initialize the IntersectionObserver once globally
    contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in view, trigger animation
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
                contentObserver.unobserve(entry.target); // Animate only once per view
            }
        });
    }, {
        threshold: 0.15 // Adjust to trigger animation earlier or later
    });

    // Initially hide all pages. Do NOT show any page on load.
    // The content will only appear once a navigation button is clicked.
    hideAllPages();
});*/


/*let contentObserver; // Declare globally for accessibility
let allContentElements; // Declare globally so slideInOnScroll can access it

// Function to handle scroll-based animations (as provided by you)
function slideInOnScroll() {
    // This function will be called every time the window is scrolled.
    // IMPORTANT: This function only sets 'margin-left'.
    // It WILL NOT produce the "slide in from right to left" animation
    // that relies on 'opacity' and 'transform: translateX' from your CSS.
    // Your 'IntersectionObserver' (defined below) is already designed for that.

    // Ensure allContentElements is available; if not, query it.
    if (!allContentElements) {
        allContentElements = document.querySelectorAll('.allcontent');
    }

    for (let i = 0; i < allContentElements.length; i++) {
        const sectionTop = allContentElements[i].offsetTop;
        const sectionBottom = sectionTop + allContentElements[i].clientHeight;
        const isSectionVisible = window.scrollY >= sectionTop && window.scrollY <= sectionBottom;

        if (isSectionVisible) {
            allContentElements[i].style.marginLeft = '10%';
        }
        // Note: This logic does not remove the margin-left when scrolling away,
        // nor does it integrate with your .hidden/.show classes for slide-in.
    }
}

// Function to set up section IDs dynamically
function SetupSectionID(mainContents) {
    for (let i = 0; i < mainContents.length; i++) {
        // Get all sections in each content page
        const sections = mainContents[i].querySelectorAll("section");
        for (let j = 0; j < sections.length; j++) {
            // Set up the id of all sections, this is for jumping to pages with the nav bottom links
            if (!sections[j].getAttribute("id"))
                sections[j].setAttribute("id", "content-" + (i + 1) + "-section-" + (j + 1));
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const page0btn = document.querySelector("#page0btn");
    const page1btn = document.querySelector("#page1btn");
    const page2btn = document.querySelector("#page2btn");
    const page3btn = document.querySelector("#page3btn");
    const allpages = document.querySelectorAll(".page"); // Select all page sections

    // Initialize allContentElements here to ensure it's available after DOM load
    allContentElements = document.querySelectorAll('.allcontent');

    // Function to hide all pages and reset their content's animation state
    function hideAllPages() {
        allpages.forEach(page => {
            page.style.display = "none"; // Hide the page itself
            // Reset all content elements within this page to their 'hidden' state
            // and stop observing them, so they can animate again when revisited.
            page.querySelectorAll('.allcontent').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('show'); // Ensure 'show' is removed
                if (contentObserver) { // Check if observer is initialized
                    contentObserver.unobserve(el);
                }
            });
        });
    }

    // Function to show a specific page and start observing its content
    function showPage(pgno) {
        hideAllPages(); // First, hide all pages and reset their content
        const currentPage = document.querySelector("#page" + pgno);
        if (currentPage) {
            currentPage.style.display = "block"; // Show the selected page

            // Now, observe only the content elements within the currently visible page
            currentPage.querySelectorAll('.allcontent').forEach(el => {
                el.classList.add('hidden'); // Ensure initial hidden state for animation
                contentObserver.observe(el); // Start observing these elements
            });
            // Optional: Scroll to the top of the newly displayed page
            currentPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Menu toggle
    const hamBtn = document.querySelector("#hamIcon");
    const menuItemsList = document.querySelector("nav ul");
    hamBtn.addEventListener("click", () => {
        menuItemsList.classList.toggle("menuShow");
    });

    // Page button click handlers - now call showPage
    page0btn.addEventListener("click", () => showPage(0));
    page1btn.addEventListener("click", () => showPage(1));
    page2btn.addEventListener("click", () => showPage(2));
    page3btn.addEventListener("click", () => showPage(3));

    // Initialize the IntersectionObserver once globally
    contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in view, trigger animation
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
                contentObserver.unobserve(entry.target); // Animate only once per view
            }
        });
    }, {
        threshold: 0.15 // Adjust to trigger animation earlier or later
    });

    // *** IMPLEMENTATION OF NEW CODE ***

    // Attach the scroll event listener.
    // Remember the notes above about this function's effect vs. IntersectionObserver.
    window.addEventListener('scroll', slideInOnScroll);

    // Call SetupSectionID to assign IDs to your sections using your .page elements
    SetupSectionID(allpages);

    // *** END OF NEW CODE IMPLEMENTATION ***

    // Initially hide all pages. No page content is visible until a navigation button is clicked.
    hideAllPages();
});

window.addEventListener('scroll', slideInOnScroll);
  SetupSectionID(allpages);

  // ✅ Show Home page on load
  showPage(0);



/*--------------GAME-------------- 

document.addEventListener("DOMContentLoaded", () => {
    const game = document.querySelector(".gamelayout");
    const startButton = document.querySelector(".gamebutton > button:nth-child(2)");
    const leftButton = document.querySelector(".gamebutton > button:nth-child(1)");
    const rightButton = document.querySelector(".gamebutton > button:nth-child(3)");
    const basket = document.querySelector(".basket");
    const scorePoint = document.querySelector(".score h1");
    const pear = document.querySelector(".gamepear");
    const catchSound = new Audio('Audio/collectpear.mp3');

    let pearInterval = null;
    let moveLeftInterval = null;
    let moveRightInterval = null;
    let score = 0;
    let pearRotation = 0;

    // Initialize positions AFTER DOM is loaded
    basket.style.left = "200px";
    pear.style.top = "-40px";
    pear.style.left = "100px";

    // Movement functions
    function moveBasketLeft() {
        const left = parseInt(basket.style.left) || 0;
        if (left > 0) basket.style.left = (left - 15) + "px";
    }

    function moveBasketRight() {
        const left = parseInt(basket.style.left) || 0;
        const max = game.clientWidth - basket.clientWidth;
        if (left < max) basket.style.left = (left + 15) + "px";
    }

    // Start the game
    startButton.addEventListener("click", () => {
        if (pearInterval) clearInterval(pearInterval);
        score = 0;
        scorePoint.textContent = "Score: 0";

        resetPear(); // position at top
        pear.style.display = "block";
        pearRotation = 0;
        pear.style.transform = `rotate(0deg)`;
        pearInterval = setInterval(dropPear, 30); // begin drop
    });

    function resetPear() {
        pear.style.top = "0px";
        const maxLeft = game.clientWidth - pear.clientWidth;
        pear.style.left = Math.floor(Math.random() * maxLeft) + "px";
        pearRotation = 0;
        pear.style.transform = `rotate(0deg)`;
    }

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
            return true;  // caught
        }
        return false; // missed
    }

    // Interval-safe movement handlers
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

    // Keyboard Controls
    document.addEventListener('keydown', function(evt) {
        const key = evt.key.toLowerCase();
        if (key === 'a' || key === 'arrowleft') {
            moveBasketLeft();
        }
        if (key === 'd' || key === 'arrowright') {
            moveBasketRight();
        }
    });

    // Button Controls (Pointer Events for Reliability)
    leftButton.addEventListener("pointerdown", startLeftInterval);
    leftButton.addEventListener("pointerup", stopLeftInterval);
    leftButton.addEventListener("pointerleave", stopLeftInterval);
    leftButton.addEventListener("pointercancel", stopLeftInterval);

    rightButton.addEventListener("pointerdown", startRightInterval);
    rightButton.addEventListener("pointerup", stopRightInterval);
    rightButton.addEventListener("pointerleave", stopRightInterval);
    rightButton.addEventListener("pointercancel", stopRightInterval);
});*/


let contentObserver;
let allContentElements;

document.addEventListener('DOMContentLoaded', () => {
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

  function showPage(pgno) {
  hideAllPages();
  const currentPage = document.querySelector("#page" + pgno);
  if (currentPage) {
    currentPage.style.display = "block";
    currentPage.querySelectorAll('.allcontent').forEach(el => {
      el.classList.add('hidden');
      contentObserver.observe(el);
    });

    // Update content background color dynamically with JS
    const allContentBlocks = currentPage.querySelectorAll('.allcontent');
    allContentBlocks.forEach(content => {
      if (pgno === 3) {
        content.style.backgroundColor = "#0d9fb9"; // Fun Facts
      } else {
        content.style.backgroundColor = "green"; // Default
      }
    });
  }
}

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

      if (isVisible) {
        el.style.marginLeft = '10%';
      }
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

  let pearInterval = null;
  let moveLeftInterval = null;
  let moveRightInterval = null;
  let score = 0;
  let pearRotation = 0;

  basket.style.left = "200px";
  pear.style.top = "-40px";
  pear.style.left = "100px";

  function moveBasketLeft() {
    const left = parseInt(basket.style.left) || 0;
    if (left > 0) basket.style.left = (left - 15) + "px";
  }

  function moveBasketRight() {
    const left = parseInt(basket.style.left) || 0;
    const max = game.clientWidth - basket.clientWidth;
    if (left < max) basket.style.left = (left + 15) + "px";
  }

  function resetPear() {
    pear.style.top = "0px";
    const maxLeft = game.clientWidth - pear.clientWidth;
    pear.style.left = Math.floor(Math.random() * maxLeft) + "px";
    pearRotation = 0;
    pear.style.transform = `rotate(0deg)`;
  }

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

  startButton.addEventListener("click", () => {
    if (pearInterval) clearInterval(pearInterval);
    score = 0;
    scorePoint.textContent = "Score: 0";
    resetPear();
    pear.style.display = "block";
    pearInterval = setInterval(dropPear, 30);
  });

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