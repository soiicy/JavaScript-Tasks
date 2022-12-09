const xUser = Math.floor((Math.random() * 100) + 1);
const yUser = Math.floor((Math.random() * 100) + 1);
const zUser = Math.floor((Math.random() * 100) + 1); //🤨

console.log(xUser, yUser, zUser);

const averageAge = (xUser + yUser + zUser) / 3;

console.log (averageAge);

if(averageAge >= 60){
    console.log('Average age of users more than 60');
 }

else {
    console.log('Average age of users less than 60');
}