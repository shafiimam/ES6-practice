const person = { name: 'jack wilium', age: 17, job: 'facebook', gfName: 'ema watson', address: 'kochukkhet', phone: '0144444', friend: ['tom', 'hank', 'cruise'] }


// const { phone } = person;
// const gfName = person.gfName;

// console.log(gfName, phone);

const friends = ['sakib khan', 'arman khan', 'amir khan', 'salman khan'];

const [first, next, ...remaining] = friends;

console.log(first, next);
console.log(remaining);