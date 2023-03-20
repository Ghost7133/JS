
  const options = [
    {value: 'red', label: 'Красный'},
    {value: 'blue', label: 'Синий'},
    {value: 'green', label: 'Зеленый'},
    {value: 'yellow', label: 'Желтый'}
]

function createSelectFromArray(optionsArray, selectedValue) {
    const select = document.createElement('select');
    document.body.append(select)
    let selectedIndex = 0;
    for (let i = 0; i < optionsArray.length; i++) {
      const option = document.createElement('option');
      select.append(option)
      option.value = optionsArray[i].value;
      option.textContent = optionsArray[i].label;
      if (optionsArray[i].value === selectedValue) {
        selectedIndex = i;
      }
      select.appendChild(option);
    }
    select.selectedIndex = selectedIndex;
    return select;
  }
createSelectFromArray(options,"green")