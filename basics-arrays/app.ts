const person = {
    name: 'Stan',
    age: 36,
    hobbies: ['Fitness', 'Watching Football']
}

let favouriteActivities: string[];
favouriteActivities = ['Fitness'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
