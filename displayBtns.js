const displayBtns = (btnContainer, data, currentIndex) => {
  var innerHTML = `<button class="prev-btn">prev</button>`;
  innerHTML += data
    .map((_, index) => {
      return `<button class="page-no ${
        index === currentIndex ? "active-page" : ""
      }" data-id="${index + 1}">${index + 1}</button>`;
    })
    .join("");
  innerHTML += `<button class="next-btn">next</button>`;
  btnContainer.innerHTML = innerHTML;
};

export default displayBtns;
