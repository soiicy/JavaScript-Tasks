let xUser = prompt("How old are you?");
let yUser = prompt("How old are you?");
let zUser = prompt("How old are you?");

xUser = Number(xUser);
yUser = Number(yUser);
zUser = Number(zUser);

if (!(isNaN(xUser)) && !(isNaN(yUser)) && !(isNaN(zUser))) {

    averageAge = (xUser + yUser + zUser) / 3;


    if (averageAge >= 60) {
        console.log('Average age of users more than 60');
    } 

    else if (averageAge < 60) {
        console.log('Average age of users less than 60');
    }

}   


else {
    console.log('I think you entered something wrong');
}
