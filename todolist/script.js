var inputtdl = document.querySelector('.textarea')
var buttontdl = document.querySelector('.buttoninput')
var listtdl = document.querySelector('.todolist')
var inputBtn = document.getElementById("input_text")
var getInput = document.querySelector(".textarea")
var i = 0

var array = []
var massivchik = []
var arraychik = []

function check() {
    if (inputtdl != 0) {
        document.querySelector('.buttoninput').disable = false
    } else {
        buttontdl.disabled = true
    }
}

// добавление лисья
function addTodo() {
    
    var itemall = document.createElement('div')
    itemall.classList.add('itemall')

    var item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)
    if (inputtdl.value === '') { return }
    else {
        let objectlist = {name: inputtdl.value, done: false}
        array.push(objectlist)
        arraychik.push(objectlist.name)
        storage(array,arraychik)
        console.log(objectlist);
    }
    inputtdl.value = ''
    
    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="check-delete"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listtdl.appendChild(itemall)

}
    // проверка и удаление позиций
    function okdel(e, objectlist) {
        const item = e.target

        // проверка
        if (item.classList[0] === 'check-button') {
            const todolist = item.parentElement;
            //  
            let text = todolist.querySelector(".item")
            console.log(arraychik);
            if (todolist.classList.toggle('checklist')) {
                array[arraychik.indexOf(text.textContent)].done = true
            }
            else {
                array[arraychik.indexOf(text.textContent)].done = false     
            }     

            localStorage.setItem('key', JSON.stringify(array))
            localStorage.setItem('key1',JSON.stringify(arraychik))
            
        }

        // удаление
        if (item.classList[0] === 'trash-button') {
            const todolist = item.parentElement
            todolist.remove()
            let text = todolist.querySelector(".item")
            array.splice(arraychik.indexOf(text.textContent), 1)
            arraychik.splice(arraychik.indexOf(text.textContent),1)
            localStorage.setItem(`key`, JSON.stringify(array))
            localStorage.setItem(`key1`,JSON.stringify(arraychik))
        }
    }

function storage(array,arraychik) { 
    localStorage.setItem("key", JSON.stringify(array))
    localStorage.setItem("key1", JSON.stringify(arraychik))
}
document.addEventListener("DOMContentLoaded", () => {
    massivchik.push(...JSON.parse(localStorage.getItem(`key1`)))
    arraychik.push(...massivchik)
    let test = JSON.parse(localStorage.getItem("key"))
    if (test) {
        for (let i = 0; i < test.length; i++){
            array.push(test[i])
            
        }
    } 

    const masssive = JSON.parse(localStorage.getItem(`key1`))

    for (let i = 0; i < masssive.length; i++) {     
        
        

        var itemall = document.createElement('div')
        itemall.classList.add('itemall')

        var item = document.createElement('p')
        item.classList.add('item')
        item.innerText = masssive[i]
        itemall.appendChild(item)
    
        const checkbutton = document.createElement("button")
        checkbutton.innerHTML = '<i class="check-delete"></i>'
        checkbutton.classList.add("check-button")
        itemall.appendChild(checkbutton)

        const trashbutton = document.createElement("button")
        trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        trashbutton.classList.add("trash-button")
        itemall.appendChild(trashbutton)

        listtdl.appendChild(itemall)

        const todolist = item.parentElement;
        let text = todolist.querySelector(".item")
        
        function check() {
            if (array[i].done == true) {
                text.style.textDecoration = `line-through`
            }else text.style.textDecoration = `none`
        }
        setInterval(check,1)
    }

        // проверка
        if (item.classList[0] === 'check-button') {
            const todolist = item.parentElement;
            //  
            let text = todolist.querySelector(".item")
            console.log(arraychik);
            if (todolist.classList.toggle('checklist')) {
                array[arraychik.indexOf(text.textContent)].done = true
            }
            else {
                array[arraychik.indexOf(text.textContent)].done = false     
            }     

            localStorage.setItem('key', JSON.stringify(array))
            localStorage.setItem('key1',JSON.stringify(arraychik))
            
        }

        // удаление
        if (item.classList[0] === 'trash-button') {
            const todolist = item.parentElement
            todolist.remove()
        }
})

buttontdl.addEventListener('click', addTodo)
inputtdl.addEventListener('keydown', function (event) {
if (event.key === "Enter") {
        addTodo()
    }
})

listtdl.addEventListener('click', okdel)    
