enum Role { ADMIN = 'Admin', READ_ONLY_USER = 100, AUTHOR = 'Author' };

const person = {
    name: 'Stan',
    age: 36,
    hobbies: ['Fitness', 'Watching Football'],
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
    console.log('is admin');
}