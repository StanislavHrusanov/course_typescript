const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Stan',
    age: 36,
    hobbies: ['Fitness', 'Watching Football'],
    role: [1, 'admin']
};

let favouriteActivities: string[];
favouriteActivities = ['Fitness'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
