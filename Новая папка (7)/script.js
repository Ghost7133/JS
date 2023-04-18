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
    surname: "Михаил",
    name: "Бирюков",
    thirdname: "Павлович",
    dateOfBrirth: Date(),
    yearOfStart: "2010",
    faculty: "ИСиП(П)2/3",
  },
];

for (let i = 0; i < arr.length; i++) {
  const value = Object.values(arr[i]);
  for (let j = 0; j < value.length; j++) {
    let tdrendering = tdRender();
    trRendering.append(tdrendering);
    tdrendering.textContent = value[j];
    console.log(value);
  }
}
