//Выбор списка
let forMom = document.createElement("p")
let forDad = document.createElement("p")
let forMe = document.createElement("p")
forMom.textContent = "Список мамы"
forDad.textContent = "Список папы"
forMe.textContent = "Мой список"


let arrayDeals = [{
    name: "Название дела1",
    done: false
}, 
{
    name: "Название дела2",
    done: true
}]


let container = document.querySelector(".container") 
container.append(forMom, forDad, forMe)


// Локал стораге
let momsStorage = window.localStorage
let dadsStorage = window.localStorage
let myStorage = window.localStorage

// текст
let allDealText = document.querySelectorAll(".dealText")


function createList(name) {
    
    let nameHolder = document.createElement("div")
    let nameAuthorDeals = document.createElement("h1")
    nameAuthorDeals = name
    nameHolder.style.fontSize = "40px"
    nameHolder.style.display = "flex"
    nameHolder.style.justifyContent = "center"

    let userInput = document.createElement("input")
    userInput.classList.add("userInput")
    //меняем disabled когда что-то вводим в input
    userInput.addEventListener("input" , () => {
        btnInput.removeAttribute("disabled")
    })
    // userInput = document.querySelectorAll(".userInput")

    let btnInput = document.createElement("button")
    btnInput.classList.add("btnInput")
    btnInput.textContent = "Создать дело"
    btnInput.setAttribute("disabled", 'true')
    // btnInput = document.querySelector(".btnInput")

    let btnDeleteAll = document.createElement("button")
    btnDeleteAll.classList.add("deleteAll")
    btnDeleteAll.textContent = "Удалить все"
    // btnDeleteAll = document.querySelector(".deleteAll")

    let btnDeleteSelected = document.createElement("button")
    btnDeleteSelected.classList.add("deleteSelected")
    btnDeleteSelected.textContent = "Удалить выделенное"
    // btnDeleteSelected = document.querySelector(".deleteSelected")

    let btnDeleteReady = document.createElement("button")
    btnDeleteReady.classList.add("deleteReady")
    btnDeleteReady.textContent = "Удалить сделанные"
    // btnDeleteReady = document.querySelector(".deleteReady")

    let containerForInputDeal = document.createElement("div")
    containerForInputDeal.classList.add("containerForInputDeal")
    containerForInputDeal.style.justifyContent = "center"
    

    nameHolder.append(nameAuthorDeals)
    containerForInputDeal.append(nameHolder)
    containerForInputDeal.append(userInput,btnInput, btnDeleteAll, btnDeleteSelected, btnDeleteReady)
    container.append(containerForInputDeal)

    function newDeal(arrayDeals) {
        // создание элементов
        let containerDeal = document.createElement("div")
        let dealText = document.createElement("p")
        let btnReady = document.createElement("button")
        let btnDelete = document.createElement("button")
        let checkboxDeal = document.createElement("input")
        checkboxDeal.setAttribute("type", "checkbox")


        // проверка на нулевой ввод
        if (userInput.value.length == 0) {
            alert("Вы ничего не ввели.")
            return
        }

        userInput.value.length > 0 ? btnInput.setAttribute('disabled', 'true') : null

        // добавление дела
        dealText.innerHTML = userInput.value
        userInput.value = ""
        containerDeal.append(dealText)
        containerDeal.append(btnReady)
        containerDeal.append(btnDelete)
        containerDeal.append(checkboxDeal)
        containerDeal.classList.add("containerDeal")
        containerForInputDeal.append(containerDeal)

        // 1 блок дела
        containerDeal.style.display = 'flex'
        containerDeal.style.width = '100%'
        containerDeal.style.height = "5.5vh"
        containerDeal.style.justifyContent = "right"

        // текст    
        dealText.style.marginTop = "0.5vh"
        dealText.style.fontSize = "40px"
        dealText.classList.add("dealText")
        

        // кнопка "Готово"/"Не готово"
        btnReady.textContent = "Готово"
        btnReady.style.backgroundColor = "#40bb27"
        btnReady.style.color = "white"
        btnReady.style.width = "10vh"
        btnReady.style.height = "5vh"
        btnReady.style.fontSize = "16px"
        btnReady.style.marginLeft = "20vh"
        btnReady.classList.add("btnReady")

        // кнопка "Удалить"
        btnDelete.textContent = "Удалить"
        btnDelete.style.backgroundColor = "red"
        btnDelete.style.color = "white"
        btnDelete.style.width = "10vh"
        btnDelete.style.height = "5vh"
        btnDelete.style.fontSize = "16px"
        btnDelete.style.marginLeft = "50px"
        btnDelete.style.justifyContent = "right"

        // Чекбоксы
        checkboxDeal.classList.add("checkboxDeal")
        checkboxDeal.style.marginLeft = "2vh"
        checkboxDeal.style.marginRight = "0.5vh"
        checkboxDeal.style.cursor = "pointer"
        checkboxDeal.style.height = "20px"
        checkboxDeal.style.width = "20px"




        // наведение на кнопку "Удалить"
        btnDelete.addEventListener("mouseover", () => {
            btnDelete.style.backgroundColor = "#cc0000"
        })

        btnDelete.addEventListener("mouseout", () => {
            btnDelete.style.backgroundColor = "red"
        })

        // наведение на кнопку "Готово"
        btnReady.addEventListener("mouseover", () => {
            btnReady.textContent == "Готово" ? btnReady.style.backgroundColor = "#328f1f" : null
            btnReady.textContent == "Не готово" ? btnReady.style.backgroundColor = "#5c5c5c" : null
        })

        btnReady.addEventListener("mouseout", () => {
            btnReady.textContent == "Готово" ? btnReady.style.backgroundColor = "#40bb27" : null
            btnReady.textContent == "Не готово" ? btnReady.style.backgroundColor = "grey" : null
        })


        // подтверждение удаления
        btnDelete.addEventListener("click", () => {
            confirm("Вы действительно хотите удалить это дело?") ? containerDeal.remove() : null
        })

        // функционал готово/не готово
        btnReady.addEventListener("click", () => {
            if (btnReady.textContent == "Готово") {
                containerDeal.style.backgroundColor = "#6cf351"
                btnReady.textContent = "Не готово"
                btnReady.style.backgroundColor = "gray"
            } else {
                containerDeal.style.backgroundColor = "#BA55D3"
                btnReady.textContent = "Готово"
                btnReady.style.backgroundColor = "#40bb27"
            }
        })
    }


    if (arrayDeals.length > 0){
        let btnReady = document.querySelectorAll("")
            for(let i = 0; i < arrayDeals.length; i++) {
                userInput.value = arrayDeals[i].name
                btnInput.click()
                newDeal()
                if(arrayDeals[i].done) {
                    console.log(btnReady)
                    // btnReady.click()
                }
            }
        }


    // запуск функции по нажатию Enter
    userInput.addEventListener("keyup", (event) => {
        // console.log(event.keyCode)
        event.keyCode === 13 ? btnInput.click() : null
    })

    // запуск функции по нажатию кнопки
    btnInput.addEventListener("click", newDeal)


    // очистка листа
    btnDeleteAll.addEventListener("click", () => {
        let allContainerDeals = document.querySelectorAll(".containerDeal")
        let result = confirm("Вы действительно хотите очистить лист?")
        if (allContainerDeals.length > 0) {
            for (let i = 0; i < allContainerDeals.length; i++) {
                result ? allContainerDeals[i].remove() : null
            }
        } else {
            alert("Лист уже пустой")
        }
    })


    //Удалить выбранные дела
    btnDeleteSelected.addEventListener("click", () => {
        let allCheckboxes = document.querySelectorAll(".checkboxDeal")
        let allContainerDeals = document.querySelectorAll(".containerDeal")
        let result = confirm("Вы действительно хотите удалить выбранное?")
        for (let i = 0; i < allCheckboxes.length; i++) {
            if (allCheckboxes[i].checked) {
                result ? allContainerDeals[i].remove() : null
            }
        }
    })

    //Удалить сделаные дела
    btnDeleteReady.addEventListener("click", () => {
        let allBtnReady = document.querySelectorAll(".btnReady")
        let allContainerDeals = document.querySelectorAll(".containerDeal")
        let result = confirm("Вы действительно хотите удалить сделанные дела?")
        for (let i = 0; i < allBtnReady.length; i++) {
            if (allBtnReady[i].textContent == "Не готово") {
                result ? allContainerDeals[i].remove() : null
            }
        }
    })
}



forMom.addEventListener("click", () => {
    momsStorage.setItem('mom', JSON.stringify(allDealText))
    clearList()
    createList("Список дел мамы")
})

forDad.addEventListener("click", () => {
    dadsStorage.setItem('dad', JSON.stringify(allDealText))
    clearList()
    createList("Список дел папы")
})

forMe.addEventListener("click", () => {
    myStorage.setItem('my', JSON.stringify(allDealText))

    clearList()
    createList("Мой список дел")
})

function clearList(){ 
    let list = document.querySelector(".containerForInputDeal")
    if(list) list.remove()
}

