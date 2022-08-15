import displayBtns from "./displayBtns.js";
import displayProfiles from "./displayProfiles.js";
import fetchProfiles from "./fetchProfiles.js";
import hidePreloader from "./hidePreloader.js";
import paginate from "./paginate.js";
import { togglePage } from "./togglePage.js";

const btnContainer = document.querySelector(".page-no-container");
window.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchProfiles();
  const profiles = paginate(data, 12);
  displayProfiles(profiles[0]);
  displayBtns(btnContainer, profiles, 0);
  hidePreloader();
  togglePage(profiles);
});
