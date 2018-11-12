document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector(".form");
  let answer = 0;
  form.addEventListener("click", event => {
    answer += +event.target.value;
    console.log(answer);
  });

});
