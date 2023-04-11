tgshyuawghfwej// отрисовка после хранения
document.addEventListener("DOMContentLoaded", function e() {
    const massive = JSON.parse(localStorage.getItem("key"))
    for (let i = 0; i < massive.length; i++) {
        let divRendering = divRender()
        let pRendering = pRender()
        div.append(divRendering)
        divRendering.append(pRendering)
        pRendering.textContent = massive[i]
        array.push(massive[i])
    }
})
array = []

// создание главного дива
let div = document.querySelector(`.allDiv`)
let listRendering = listRender("Список дел")
div.append(listRendering)
div.append(buttonRendering)
div.append(inputRendering)

// создание кнопки

function buttonRend() {
    let button = document.createElement(`button`)
    button.textContent = `Cоздать дело`
    return button
}
let buttonRendering = buttonRend()

// создание заголовка

function listRender(h) {
    let h1 = document.createElement("h1")
    h1.textContent = h
    return h1
}

// создание инпута

function inputRend () {
    let input = document.createElement("input")
    input.placeholder = "Введите задачу"
    return input
}
let inputRendering = inputRend()

// создание дива

function divRender() {
    let div = document.createElement('div')
    return div
}

// создание элементов списка

function pRender() {
    let p = document.createElement("p")
    return p
}

// отрисовка списка и хранение в local storage

buttonRendering.addEventListener('click', function () {
    let divRendering = divRender()
    let pRendering = pRender()
    div.append(divRendering)
    divRendering.append(pRendering)
    pRendering.textContent = inputRendering.value
      array.push(inputRendering.value)
    inputRendering.value = ""
    console.log(array);
    localStorage.setItem('key', JSON.stringify(array))
})