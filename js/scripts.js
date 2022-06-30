function loadProfile() {
  const location = document.querySelector("#location");
  const hero = document.querySelector(".hero");

  //   console.log(hero);

  fetch("https://api.github.com/users/crystian97")
    .then((res) => res.json())
    .then((data) => {
      heroName.textContent = `@${data.login}`;
      followers.textContent = `${data.followers} seguidores`;
      following.textContent = `${data.following} seguindo`;
      company.textContent = `${data.company}`;
      repositories.textContent = `${data.public_repos} repositorios`;
      location.textContent = `${data.location}`;
      hero.src = data.avatar_url;
    })
    .then()
    .catch((error) => console.error(error));
}
loadProfile();

const ColorPicker = document.querySelector("#colorPicker");
ColorPicker.addEventListener("change", changeColor);
function changeColor() {
  let color = ColorPicker.value;

  let background = document.querySelector(".background-card");
  let border = document.querySelector(".hero");
  border.style.borderColor = color;
  background.style.background = color;
}

// copy to clipboard

// html2canvas(document.querySelector(".background-card")).then((canvas) => {
//   document.body.appendChild(canvas);
// });
