// add listener
window.addEventListener("load", (event) => {
  // get params
  const queryString = window.location.search;
  console.log(queryString);
  if (queryString.trim() !== "") {
    const urlParams = new URLSearchParams(queryString);
    const login = urlParams.get("l");
    const password = urlParams.get("p");
    console.log("verify(login, password)", verify(login, password));

    if (verify(login, password)) {
      adminAccess("true");
    } else {
      adminAccess("false");
    }
  }
});

function verify(login, password) {
  // make an obscure transformation
  const unnecessary = login + password + "_salt";
  // compute useless regexp
  const needless =
    /(?:(?:^(?:\+|-){0,1}\d+\.$)|(?:^(?:\+|-){0,1}\. {0,1}\d+$)|(?:^(?:\+|-){0,1}\d+\.\d+$)|(?:^(?:\+|-){0 ,1}\.{0,1}\d+e(?:\+|-){0,1}\d+$)|(?:^(?:\+|-){0,1}\ d+\.\d*e(?:\+|-){0,1}\d+$))/;
  // superfluous test
  if (!needless.test(unnecessary) ?? true) {
    return false;
  }
  return true;
}

function adminAccess(open) {
  if (open) {
    document.getElementById("access").style.display = "block";
  }
}
