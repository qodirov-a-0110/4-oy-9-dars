// 1-misol
//  Bo'sh massiv yarating va unga ketma-ket 5 ta element qo'shing. Massivning uzunligi 5 dan katta bo'lguncha elementlarni qo'shishda davom eting.
// let arr = [];
// arr.push(1,2,3,4,5)
// console.log(arr);

// 2-misol
// Bo'sh massiv yarating va `push` metodi yordamida unga 3 ta element qo'shing. So'ng, `pop` metodi yordamida oxirgi elementni o'chirib tashlang va qolgan elementlarni birlashtirib string ko'rinishiga o'tkazing.
// let arr = [];
// arr.push  (2,3,4);
// arr.pop  (-1);
// let s = arr.toString ();
// console.log(s);

// 3-misol
//Bo'sh massiv yarating va `unshift` metodi yordamida unga 4 ta element qo'shing. Keyin, har bir elementni teskari tartibda joylashtiring va natijaviy massivning uzunligini toping.
// let arr =[];
// let arr1 = arr.unshift(11,12,13,14);
// let arr2 = arr.reverse();
// console.log(arr2);

// 4-masala
// Bo'sh massiv yarating va `unshift` metodi yordamida unga 2 ta element qo'shing. So'ng, `shift` metodi yordamida birinchi elementni o'chirib tashlang va qolgan elementlarni vergul bilan ajratilgan string ko'rinishiga o'tkazing.
// let arr = [];
// let arr1 = arr.unshift('salom', 'shox','xursandman');
// let arr2 = arr.shift(-1);
// let arr3 = arr.toString();
// console.log(arr3);

// 5-misol
// Berilgan massivdan `pop` metodi yordamida oxirgi elementni o'chiring. So'ng, qolgan elementlarning sonini va birinchi elementning qiymatini aniqlang.
// let arr = ['salom','shox','xursandman','keling'];
// let arr1 = arr.pop(-1);
// console.log(arr.length);
// console.log(arr);

// 6-misol
// Berilgan massivga `push` metodi yordamida yangi element qo'shing. Massivning oxirgi elementini `at` metodi yordamida olib, string ko'rinishida qaytaring.
// let arr = ['salom','shox','xursandman','keling'];
// let arr1 = arr.push('xurshid');
// let arr2 = arr.at(-1);
// let arr3 = arr.toString(3);
// console.log(arr2);

// 7-misol
// Berilgan massivga `unshift` metodi yordamida yangi element qo'shing va yangi massivning har bir elementini teskari tartibda joylashtiring. Natijaviy massivning uzunligini toping.
// let arr = [1,2,3,4,5,6,7];
// let arr1 = arr.unshift(11,12);
// let arr2 = arr.reverse();
// console.log(arr2,   arr.length);

// 8-misol
// Berilgan massivdan `shift` metodi yordamida birinchi elementni o'chiring va qolgan elementlarning sonini toping. Keyin, qolgan elementlarni `join` metodi yordamida string ko'rinishiga o'tkazing.
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.shift(0);
// let arr1 = arr.join(' va ')
// console.log(arr , arr1);

// 9-misol
// Berilgan massivga `push` va `unshift` metodlari yordamida 3 ta yangi element qo'shing va natijaviy massivning uzunligini toping. Keyin, massivni teskari tartibda joylashtirib string ko'rinishiga o'tkazing.
// let arr = [4,5,6];
// arr.push(7,8,9);
// arr.unshift(1,2,3);
// console.log(arr);
// let arr1 = arr.reverse();
// let arr2 = arr.toString();
// console.log(arr2);

// 10-misol
// Berilgan massivdan `pop` va `shift` metodlari yordamida birinchi va oxirgi elementlarni o'chiring. Qolgan elementlarning uzunligini va teskari tartibda joylashtirilgan massivni toping.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.pop (-1);
// arr.shift (-1);
// let arr1 = arr.reverse();
// console.log(arr1);

// 11-misol
// Berilgan massivni `reverse` metodi yordamida teskari tartibda joylashtiring va natijaviy massivni `toString` metodi yordamida string ko'rinishiga o'tkazing. Keyin, string uzunligini toping.
// let arr = [1,2,3,4,5,6,7];
// let arr1 = arr.reverse();
// let arr2 = arr.toString();
// console.log(arr2, arr.length);

// 12-misol
// Berilgan ikki massivni `concat` metodi yordamida birlashtiring va yangi massivdan har ikkinchi elementni `slice` metodi yordamida olib, natijaviy massivning uzunligini toping.
// let arr1 = [1,2,3,4];
// let arr2 = ['salom']
// // let arr3 = arr1.concat(arr2);
// console.log(arr1)

// 13-misol
// Berilgan massivni `splice` metodi yordamida ikkinchi indeksdan boshlab uchta elementni o'chiring va natijaviy massivni `join` metodi yordamida string ko'rinishiga o'tkazing. Keyin, string uzunligini toping.
// let arr = [1,2,3,4,5,6,7,8,9];
// let arr1 = arr.splice(2,3);
// let arr2 = arr.join(' ');
// console.log(arr2, arr.length);

// 14-masala
// Berilgan massivni `slice` metodi yordamida uchinchi indeksdan boshlab oxirgi indeksgacha kesib oling. So'ng, natijaviy massivni `reverse` metodi yordamida teskari tartibda joylashtirib chiqaring.
// let arr = [1,2,3,4,5,6,7,8,9];
// let arr1 = arr.splice(3,6);
// let arr2 = arr.reverse();
// console.log(arr2);

// 15-misol
// Berilgan massivni `flat` metodi yordamida bir qatlamga tushiring va natijaviy massivning oxirgi elementini `at` metodi yordamida olib, natijani chiqaring.
// let arr = [1,2,3,4,5,[6,7,8]];
// let arr1 = arr.flat();
// let arr2 = arr1.at(7);
// console.log(arr2);

// 16-misol
// Berilgan massivdan `at` metodi yordamida uchinchi elementni oling. So'ng, ushbu elementni massivning boshiga `unshift` metodi yordamida qo'shing va natijaviy massivning uzunligini toping.
// let arr = [1,2,3,'hello','hey'];
// let arr1 = arr.at(3);
// let arr2 = arr.unshift(arr1);
// console.log(arr);

// 17-misol
// Berilgan massivni `reverse` metodi yordamida teskari tartibda joylashtiring va natijaviy massivni `join` metodi yordamida string ko'rinishiga o'tkazing. Keyin, stringning oxirgi elementini aniqlang.

