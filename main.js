const arrows = document.querySelectorAll(".arrow-container");
const subheadings = document.querySelectorAll("h2");
const answers = document.querySelectorAll(".answer");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", () => {
    if (answers[i].classList.contains("hidden")) {
      // Close all open answers
      for (let j = 0; j < answers.length; j++) {
        if (!answers[j].classList.contains("hidden")) {
          subheadings[j].classList.remove("active");
          arrows[j].style.transform = "rotate3d(1, 0, 0, 0deg)";
          answers[j].classList.add("hidden");
        }
      }
      
      // Open the clicked answer
      subheadings[i].classList.add("active");
      arrows[i].style.transform = "rotate3d(1, 0, 0, 180deg)";
      answers[i].classList.remove("hidden");
    } else {
      subheadings[i].classList.remove("active");
      arrows[i].style.transform = "rotate3d(1, 0, 0, 0deg)";
      answers[i].classList.add("hidden");
    }
  });
};
