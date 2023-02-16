numberMassive = [10,2,1,3,5,4,7,6,9,8]
function sort(numberMassive){
    let _switch = false;
    do {
        _switch = false;
        for(let i = 0; i < numberMassive.length - 1; i++) {
            if ( numberMassive[i] > numberMassive[i+1] ) {
                let temporaryNumber = numberMassive[i];
                numberMassive[i] = numberMassive[i+1];
                numberMassive[i+1] = temporaryNumber;
                _switch = true;
            }
        }
    }while(_switch)
}

sort(numberMassive);
console.log(numberMassive);