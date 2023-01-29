const user = {
    name: null,
    lastName: null,
    age: null,
    hobbies: {
        firstHobby: null,
        secondHobby: null
    }
}

const returnObj = {
    message: null,
    obj: {},
    objValues: {}
}

function aboutUser(name, lastName, age, firstHobby = null, secondHobby = null) {
    user.name = name
    user.lastName = lastName
    user.age = age
    user.hobbies.firstHobby = firstHobby
    user.hobbies.secondHobby = secondHobby

    if (name === undefined || lastName === undefined || age === undefined ||
    typeof age === 'string' || typeof name === 'number' || typeof lastName === 'number') {
        returnObj.message = 'You entered something wrong.'
    } else if (firstHobby !== null && secondHobby === null) {
        returnObj.message = `User full name is ${user.name} ${user.lastName}, user age is ${user.age} years old and have hobbies: ${user.hobbies.firstHobby}.`;
    } else if (firstHobby === null && secondHobby === null) {
        returnObj.message = `User full name is ${user.name} ${user.lastName}, user age is ${user.age} years old and have no hobbies.`;
    } else if (firstHobby !== null && secondHobby !== null) {
        returnObj.message = `User full name is ${user.name} ${user.lastName}, user age is ${user.age} years old and have hobbies: ${user.hobbies.firstHobby}, ${user.hobbies.secondHobby}.`;
    }

    returnObj.obj = user;

    let userValues = '';
    for (const key in user) {
        userValues += user[key] + ' ';
        if (key === 'hobbies') {
            for (const key in user.hobbies) {
                userValues += user.hobbies[key] + ' ';
            }
        }
    }
    returnObj.objValues = userValues;

    return returnObj;
}


console.log(aboutUser('John', 'Aaron', 19, 'Skate', 'Basketball'));
console.log('\n');
console.log(aboutUser('John', 'Aaron', 19, ));
console.log('\n');
console.log(aboutUser('John', 'Aaron', 19, 'Skate'));
console.log('\n');
console.log(aboutUser(123, 'Aaron', 19, 'Skate'));
console.log('\n');
console.log(aboutUser('John', 'Aaron', '19', 'Skate'));