let luck;
let action;
let goals;

const luckStart = 'Luck';
const actionStart = 'You should';
const goalsStart = 'You will';

function generateLuck() {
    luck = Math.floor(Math.random() * 3)

    if (luck === 0) {
        return luckStart + ' is on your side';
    } else if (luck === 1) {
        return luckStart + ' is not on your side';
    } else if (luck == 2) {
        return luckStart + ' will not be necessary';
    };
}

console.log(generateLuck())

function generateAction() {
    action = Math.floor(Math.random() * 8)

    switch(action) {
        case 0:
            return actionStart + ' pursue your dreams';
        case 1:
            return actionStart + ' stay home today';
        case 2:
            return actionStart + ' help someone out';
        case 3:
            return actionStart + ' drink a warm beverage';
        case 4:
            return actionStart + ' spend time outside';
        case 5:
            return actionStart + ' try a new food';
        case 6:
            return actionStart + ' get more rest';
        case 7:
            return actionStart + ' find a new hobby'; 
    }
}

console.log(generateAction())