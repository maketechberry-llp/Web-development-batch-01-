console.log("This is recap1.ts");

let num : number = 42;
console.log(num);
console.log(typeof num);

let namee = "Janhvi Shah";
console.log(namee);
console.log(typeof namee);

let phoneNumber : any = 1234567890;
console.log(phoneNumber);
console.log(typeof phoneNumber);

phoneNumber = "Janhvi Shah";    
console.log(phoneNumber);
console.log(typeof phoneNumber);

for( let i = 0; i <= 10; i++ ) {
    if( i == 5){
        break;
    }
    console.log(i);
    
}

interface Person{
    name: string;
    age: number;
    isEmployed: boolean;
    gender ?: string; // optional property
}

let person1 : Person = {
    name: "Janhvi Shah",
    age: 21,
    isEmployed: false
};

console.log(person1);

for(let key in person1){
    console.log(`${key} : ${person1[key as keyof Person]}`);
}