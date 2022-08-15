const container = document.querySelector(".profiles-container");

const displayProfiles = async (data) => {
  container.innerHTML = data
    .map((profile) => {
      const { avatar_url: img, html_url: link, login: name } = profile;
      return `<article class="single-profile">
          <img src="${img}" alt="${name}" class="profile-img" />
          <h3 class="profile-name">${name}</h3>
          <button class="btn">
            <a href="${link}" class="profile-link" target="_blank">view profile</a>
          </button>
        </article>`;
    })
    .join("");
};

export default displayProfiles;
