//Напишите функцию calculate(), которая вычисляет и возвращает стоимость корзины товаров после применения всех скидок.В качестве аргументов функция принимает 3параметра: 1 - Общая сумма корзины 2 - Количество товаров в корзине 3 - Промокод (по умолчанию null)
let cartTotal =  100000  
let amountCommodity = 10
let promoCode = "СКИДКА15"
function calculate(cartTotal,amountCommodity,promoCode){
    if (promoCode == "ДАРИМ300"){
        if (cartTotal == 300 || cartTotal <= 300)
            cartTotal = 0
        else cartTotal = cartTotal - 300
    }
    if (amountCommodity>=10){ 
        cartTotal = cartTotal - cartTotal * 0.05}
    if (cartTotal >= 50000){
        cartTotal = cartTotal - ((cartTotal-50000)*0.2)}
    if (promoCode == "СКИДКА15" && cartTotal >= 20000){
        cartTotal = cartTotal - cartTotal*0.15}
   return cartTotal.toFixed(3)
}

console.log(calculate(cartTotal,amountCommodity,promoCode));