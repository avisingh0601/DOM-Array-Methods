const api = "https://randomuser.me/api";
const addUser = document.getElementById("user-btn");
//const mainApp = document.getElementById("app");
const userList = document.getElementById("user-list");
const searchInput = document.getElementById("search");
const appState = [];

addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });
  const userJson = await userData.json();
  // console.log(userJson.results[0]);
  const user = userJson.results[0];
  appState.push(user);
  // console.log(appState);
  domRenderer(appState);
});
const domRenderer = (stateArr) => {
  userList.innerHTML = null;
  stateArr.forEach((userObj) => {
    const userEl = document.createElement("div");
    userEl.innerHTML = `<div>
  ${userObj.name.title} ${userObj.name.first} ${userObj.name.last}
  </div>`;
    userList.appendChild(userEl);
  });
};
searchInput.addEventListener("keyup", (e) => {
  const filteredAppState = appState.filter((user) =>
    user.name.first.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  domRenderer(filteredAppState);
});
