const user = {
    name: "Rez",
    stats: {
        level: 1
    }
}

console.log("user before update", user);
const copy = user;

copy.name = "not rez"
copy.stats.level = 99;

console.log("copy", copy);
console.log("user", user);
console.log(user.stats.level); // it will update here too since it is not an actual copy
// kind of like the spell from TVD which Katherine had asked her witch to cast to link her to Elena to apply the same damage to her

console.log("---deep copy---")

// now to create an actual copy you'd have to do something called a deep copy
const user2 = {
    name: "Rez",
    stats: {
        level: 1
    }
}

const actualCopy = structuredClone(user2);

console.log("user2 before update", user2);

actualCopy.name = "not rez"
actualCopy.stats.level = 99;

console.log("copy", actualCopy);
console.log("user", user2);
console.log(user2.stats.level);