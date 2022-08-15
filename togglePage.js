import displayProfiles from "./displayProfiles.js";
import displayBtns from "./displayBtns.js";
const btnContainer = document.querySelector(".page-no-container");

export const togglePage = (profiles) => {
  btnContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("page-no-container")) return;
    let index;
    if (e.target.classList.contains("page-no")) {
      index = parseInt(e.target.dataset.id - 1);
    } else if (e.target.classList.contains("prev-btn")) {
      const activePage = document.querySelector(".active-page");
      index = parseInt(activePage.dataset.id - 2);
      if (index < 0) {
        index = profiles.length - 1;
      }
    } else if (e.target.classList.contains("next-btn")) {
      const activePage = document.querySelector(".active-page");
      index = parseInt(activePage.dataset.id);
      if (index >= profiles.length) {
        index = 0;
      }
    }
    displayProfiles(profiles[index]);
    displayBtns(btnContainer, profiles, index);
  });
};
