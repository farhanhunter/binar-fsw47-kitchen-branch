const name = "Farhan A S";
const pekerjaan = "FullStack Web Developer";

console.log(`Halo nama saya ${name}, aku kerja sebagai ${pekerjaan}`);

const message = `Halo nama aku ${name}, aku kerja juga sebagai ${pekerjaan}`;
console.log(message.replace("Halo", "Hi"));
console.log(message.substring(0, 4));
console.log(message.toLowerCase());
console.log(message.toUpperCase());

const messageSpace = `    Halo nama aku ${name}, aku kerja juga sebagai ${pekerjaan}`;
console.log(messageSpace.trim());
console.log(messageSpace.length);
console.log(messageSpace.slice(0, 24));
