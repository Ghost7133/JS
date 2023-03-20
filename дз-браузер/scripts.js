const array = [
   {value: "Russia", label: "Z"},
   {value: "Germany", label: "HI..."},
   {value: "Poland", label: "Kurwa"}
]

function createSelect(arrayOptions, selected) {
const select = document.createElement("select")
document.body.append(select)
let indexSelect = 0
for(i=0; i < array.length; i++){
    const option = document.createElement("option")
    select.append(option)
    option.value = arrayOptions[i].value;
    option.textContent = arrayOptions[i].label;
if(arrayOptions[i].value === selected){
    indexSelect = i
}
select.appendChild(option)
}
select.selected = selected
return select
}
createSelect(array, "Russia")