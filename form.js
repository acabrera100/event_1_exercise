document.addEventListener("DOMContentLoaded", () => {
  //window.alert("Page has loaded")

  let jackPopped = document.querySelector(".jack-hiding");
  let count = document.querySelector(".countdown");
  // let button = document.querySelector(".button")
  function changeimage(node) {
    node.classList = "jack";
  }
  count.addEventListener("click", event => {
    setTimeout(() => {
      changeimage(jackPopped);
    }, 5000);
    console.log(jackPopped);

    console.log(count.innerHTML);

    let arr = ["POP GOES THE WEASEL", 1, 2, 3, 4];
    function countDown() {
      count.innerHTML = arr.pop();
    }

    let timer = setInterval(() => {
      if (arr.length) {
        countDown();
      } else {
        clearInterval(timer);
      }
    }, 1000);
  });
});
