let dropElm = document.querySelector(".dropElm");
let table = document.querySelector("table");
let upload = document.querySelector(".fa-arrow-up-from-bracket");
upload.onclick = function () {
  document.querySelector(".dropElm input").click();
};
dropElm.ondragover = (ev) => ev.preventDefault();
let counter = 1;
dropElm.ondrop = function (ev) {
  ev.preventDefault();
  [...ev.dataTransfer.files].forEach((file) => {
    let reader = new FileReader();
    reader.onloadend = function (ev) {
      let tr = `<tr>
              <th scope="row">${counter++}</th>
              <td>
                <img src="${ev.target.result}" alt="image" />
              </td>
              <td>${file.name}</td>
              <td>${file.size}</td>
              <td><i class="fa-solid fa-xmark"></i></td>
            </tr>`;
      let remove = document.querySelector(".fa-xmark");
      table.lastElementChild.innerHTML += tr;
    };
    document.querySelector("table").style.visibility = "visible";
    reader.readAsDataURL(file);
  });
};
for (var index = 0; index < counter - 1; index++) {
  table.lastElementChild.getElementsByTagName("tr")[
    index
  ].lastElementChild.onclick = function () {
    table.lastElementChild.innerHTML -=
      table.lastElementChild.getElementsByTagName("tr")[index];
  };
}
