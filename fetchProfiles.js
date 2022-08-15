const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchProfiles = async () => {
  try {
    var response = await fetch(url);
    response = await response.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default fetchProfiles;
