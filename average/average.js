
const findAverage = () => {
    if (calcAverage() >= 60) {
        console.log('Average age of users more than 60');
    }

    else {
        console.log('Average age of users less than 60');
    }
}

const calcAverage = () => {
    const xUser = Math.floor((Math.random() * 100) + 1);
    const yUser = Math.floor((Math.random() * 100) + 1);
    const zUser = Math.floor((Math.random() * 100) + 1); 

    const averageAge = (xUser + yUser + zUser) / 3;

    console.log(xUser, yUser, zUser);
    console.log(averageAge);

    return averageAge;
} 

findAverage();
