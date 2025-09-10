type person = {
    name : string,
    age : number,
};

function greet(person : person):string {
    return `hello ${person.name}! you are ${person.age} years old.`;
}

const user : person = {
    name : "saif",
    age : 25
};

console.log(greet(user));


