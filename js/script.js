// toggle menu bar
function toggleMenu() {
  const menu = document.getElementById("menuList");
  menu.classList.toggle("show");
}

// toglle faq
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");

    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
