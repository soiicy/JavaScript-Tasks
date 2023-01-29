## Object Task

### Description

+ Create function that will take 5 arguments(name, last name, age, first and 2 hobby(optional)) and put this arguments correctly in object  ↓
```
let obj = {
    name: null,
    lastName: null,
    age: null,
    hobbies: {
        firstHobby: null,
        secondHobby: null
    }
}
```

+ After that return and print in console obj, all obj values and message (print like in example)

#### <mark>Get obj values with for in loop</mark> 

### Messages

User full name is "  ", user is  " " years old and have hobbies: " ", " ". 

or

User full name is "  ", user is  " " years old and user have no hobbies.

or

You entered something wrong.

### Example of output

```
{
    message: 'User full name is John Doe, user is 18 years old and user have no hobbies.',
    obj: {
        name: 'John',
        lastName: 'Doe',
        age: 15,
        hobbies: { firstHobby: null, secondHobby: null }
    },
    objValues: "John Doe 15 [object Object] null null "
}
```
#### <mark>Handle all possible scenarios!</mark>


### P.S.

```
functionName(name, lastName, age, firstHobby, secondHobby)

functionName(name, lastName, age, firstHobby)

functionName(name, lastName, age)
```
