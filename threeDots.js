// const ages = [12, 11, 14, 16, 13, 17];
// const ages2 = [15, 16, 12];
// const ages3 = [25, 36, 32, 29];
// const allAges = ages.concat(ages2).concat(ages3);
// const allAges2 = [...ages, ...ages2, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, sochib, minister);

const taka = [650, 450, 250];
const maximum2 = Math.max(...taka);
console.log(maximum2);