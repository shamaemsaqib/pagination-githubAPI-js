const preLoader = document.querySelector(".preloader");
const wrapper = document.querySelector(".wrapper");

const hidePreloader = () => {
  preLoader.classList.add("hide-preloader");
  wrapper.classList.remove("hide-content");
};

export default hidePreloader;
