let luck;
let action;
let goals;

const luckStart = 'Luck';
const actionStart = 'You should';
const goalsStart = 'You will';

function generateLuck() {
    luck = Math.floor(Math.random() * 3);

    switch(luck) {
        case 0:
            return luckStart + ' is on your side';
        case 1:
            return luckStart + ' is not on your side';
        case 2:
            return luckStart + ' will not be necessary';
    }
}

console.log(generateLuck())

function generateAction() {
    action = Math.floor(Math.random() * 8);

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

function generateGoal() {
    goals = Math.floor(Math.random() * 4);

    switch(goals) {
        case 0:
            return goalsStart + ' will achieve your goals';
        case 1:
            return goalsStart + ' will not achieve your goals';
        case 2:
            return goalsStart + ' will partially achieve your goals';
        case 3:
            return goalsStart + ' will achieve something unexpected';
    }
}

console.log(generateGoal());