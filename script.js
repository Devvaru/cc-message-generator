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