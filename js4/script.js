const modalTrigger = document.getElementsByClassName("trigger")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];
const inputModalName = document.querySelector(".name");
const inputModalSurname = document.querySelector(".surname");
const inputModalThirdname = document.querySelector(".thirdname");
const inputModaldateOfBirth = document.querySelector(".dateOfBirth");
const inputModalyearOfStart = document.querySelector(".yearOfStart");
const inputModalfaculty = document.querySelector(".faculty");
const btnSubmit = document.querySelector(".btnModalSubmit");

function trRender() {
  tr = document.createElement("tr");
  return tr;
}

function tdRender() {
  let td = document.createElement("td");
  return td;
}

let tBody = document.getElementById("body");
let trRendering = trRender();
tBody.append(trRendering);


btnSubmit.addEventListener("click", function () {
  arr = [
    {
      surname: inputModalSurname.value,
      name: inputModalName.value,
      thirdname: inputModalThirdname.value,
      dateOfBirth: new Date(inputModaldateOfBirth.value),
      yearOfStart: inputModalyearOfStart.value,
      faculty: inputModalfaculty.value,
    },
  ];
  function clear() {
    inputModalSurname.value = "";
    inputModalName.value = "";
    inputModalThirdname.value = "";
    inputModaldateOfBirth.value = "";
    inputModalyearOfStart.value = "";
    inputModalfaculty.value = "";
  }

  for (let i = 0; i < arr.length; i++) {
    const value = Object.values(arr[i]);
    let trRendering = trRender();
    tBody.append(trRendering);
    for (let j = 0; j < value.length; j++) {
      date = arr[0].dateOfBirth;
      let tdrendering = tdRender();
      trRendering.append(tdrendering);
      if (j == 3) {
        date = value[j];
        age =
          ((new Date().getTime() - new Date(date)) /
            (24 * 3600 * 365.25 * 1000)) |
          0;
        tdrendering.textContent = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} age ${age}`;
      } else if (j == 4) {
        courseDate = `${value[j]}-09-01`;
        course =
          ((new Date().getTime() - new Date(courseDate)) /
            (24 * 3600 * 365.25 * 1000)) |
          0;
        tdrendering.textContent = `Год начала обучения ${value[j]}  ${
          course + 1
        } курс`;
      } else tdrendering.textContent = value[j];
    }
  }
  clear();
});

modalTrigger.addEventListener("click", function () {

  modalBackground.style.display = "block";
});

modalClose.addEventListener("click", function () {
  modalBackground.style.display = "none";
});
modalBackground.addEventListener("click", function (event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = "none";
  }
});
