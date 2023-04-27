const modalTrigger = document.getElementsByClassName("trigger")[0]
const modalBackground = document.getElementsByClassName("modalBackground")[0]
const modalClose = document.getElementsByClassName("modalClose")[0]
const modalActive = document.getElementsByClassName("modalActive")[0]
const inputModalName = document.querySelector(".name")
const inputModalSurname = document.querySelector(".surname")
const inputModalThirdname = document.querySelector(".thirdname")
const inputModaldateOfBirth = document.querySelector(".dateOfBirth")
const inputModalyearOfStart = document.querySelector(".yearOfStart")
const inputModalfaculty = document.querySelector(".faculty")
const btnSubmit = document.querySelector(".btnModalSubmit")

function trRender() {
    tr = document.createElement("tr");
    return tr;
  }
  
  function tdRender() {
    let td = document.createElement("td");
    return td;
  }
  
  let tBody = document.getElementById("body")
  let trRendering = trRender();
  tBody.append(trRendering);
  
  const arr = [
    {
      name: inputModalName.value,
      surname: inputModalSurname.value,
      thirdname: inputModalThirdname.value,
      dateOfBirth: inputModaldateOfBirth.value,
      yearOfStart: inputModalyearOfStart.value,
      faculty: inputModalfaculty.value,
    },
  ];

  // for (let i = 0; i < arr.length; i++) {
  //   const value = Object.values(arr[i]);
  //   for (let j = 0; j < value.length; j++) {
  //     let tdrendering = tdRender();
  //     trRendering.append(tdrendering);
  //     tdrendering.textContent = value[j];
  //   }
  // }



btnSubmit.addEventListener("click", function () {
  for (let i = 0; i < arr.length; i++) {
    const value = Object.values(arr[i]);
    for (let j = 0; j < value.length; j++) {
      let tdrendering = tdRender();
      trRendering.append(tdrendering);
      tdrendering.textContent = value[j];
    }
  }
})

modalTrigger.addEventListener("click", function () {
  // делаем модальное окно видимым
  modalBackground.style.display = "block";
});

modalClose.addEventListener("click", function () {
  modalBackground.style.display = "none";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalBackground.addEventListener("click", function (event) {
  if (event.target === modalBackground) {
      modalBackground.style.display = "none";
  }
});