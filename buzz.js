document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector(".form");
  let submit = document.querySelector(".submit");
  let pickAgain = document.querySelector(".pickAgain");
  let answer = 0;

  form.addEventListener("change", event => {

    answer += +event.target.value;

    // console.log(answer)
    // console.log("It keeps adding the value without stopping if you click back and forth too much");;
  });
  submit.addEventListener('click', (event) => {
      answer += +event.target.value;
      console.log(answer);
 });
});
