
function calcAverage() {
    let xUser = +prompt("How old are you?");
    let yUser = +prompt("How old are you?");
    let zUser = +prompt("How old are you?");

    if (!(isNaN(xUser)) && !(isNaN(yUser)) && !(isNaN(zUser))) {
        const averageAge = (xUser + yUser + zUser) / 3;
        findMoreLess(averageAge);

    } else {
        console.log('I think you entered something wrong');
    }
}

function findMoreLess(averageAge) {
    if (averageAge >= 60) {
        console.log('Average age of users more than 60');

    } else if (averageAge < 60) {
        console.log('Average age of users less than 60');

    }
}

calcAverage();