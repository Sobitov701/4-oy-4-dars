// 1-misol
//1 dan 100 gacha bo'lgan barcha sonlarni konsolga chiqaring.

for (let num1 = 1; num1 <= 100; num1++) {
  console.log(num1);
}

//2-misol
//1 dan 50 gacha bo'lgan juft sonlarni konsolga chiqaring.

for (let num2 = 1; num2 <= 50; num2++) {
  if (num2 % 2 == 0) {
    console.log(num2);
  }
}

//3-misol
//1 dan 30 gacha bo'lgan toq sonlarni konsolga chiqaring.

for (let num3 = 1; num3 <= 30; num3++) {
  if (num3 % 2 == 1) {
    console.log(num3);
  }
}

//4-misol
//1 dan 20 gacha bo'lgan sonlarning kvadratlarini konsolga chiqaring.

for (let num4 = 1; num4 <= 20; num4++) {
  console.log(num4 ** 2);
}

//5-misol
//10 dan 1 gacha bo'lgan sonlarni teskari tartibda chiqaring.

for (let num5 = 10; num5 >= 1; num5--) {
  console.log(num5);
}

//6-misol
//1 dan 100 gacha bo'lgan sonlarning yig'indisini hisoblang.

let sum = 0;

for (let num6 = 1; num6 <= 100; num6++) {
  if ((sum = num6 + sum)) {
  }
}

console.log(sum);

//7-misol
//1 dan 20 gacha bo'lgan barcha juft sonlarning yig'indisini hisoblang.

let max = 0;

for (let num7 = 1; num7 <= 20; num7++) {
  if (num7 % 2 == 0) {
    max = max + num7;
  }
}

console.log(max);

//8-misol
//1 dan 15 gacha bo'lgan barcha toq sonlarning ko'paytmasini hisoblang.

let min = 0;

for (let num8 = 1; num8 <= 15; num8++) {
  if (num8 % 2 == 1) {
    min = min + num8;
  }
}

console.log(min);

//9-misol
//5 dan 25 gacha bo'lgan sonlarning kublarini konsolga chiqaring.

for (let num9 = 5; num9 <= 25; num9++) {
  if (num9) {
    console.log(num9 ** 3);
  }
}

//10-misol
//1 dan 10 gacha bo'lgan sonlarning kvadrat ildizlarini konsolga chiqaring.

for (let num10 = 0; num10 < 10; num10++) {
  console.log(num10 ** (1 / 2));
}

//11-misol
//1 dan 50 gacha bo'lgan barcha sonlar orasida 3 ga karrali sonlarni toping va konsolga chiqaring.

for (let num11 = 1; num11 < 50; num11++) {
  if (num11 % 3 == 0) {
    console.log(num11);
  }
}

//12-misol
//1 dan 100 gacha bo'lgan barcha sonlarni qo'shish davomida yig'indining oxirgi qiymatini konsolga chiqaring.

let a = 0;

for (let num12 = 1; num12 < 100; num12++) {
  if ((a = a + num12)) {
  }
}

//13-misol
//1 dan 100 gacha bo'lgan barcha sonlardan faqat 7 ga bo'linadigan sonlarni konsolga chiqaring.

console.log(a);

for (let num13 = 1; num13 <= 100; num13++) {
  if (num13 % 7 == 0) {
    console.log(num13);
  }
}

//14-misol
//1 dan 100 gacha bo'lgan barcha sonlarni qo'shib, natijaning o'rtacha qiymatini toping.

let b = 0;

for (let num14 = 1; num14 <= 100; num14++) {
  if (num14) {
    b = b + num14;
  }
}

console.log(b / 2);

//15-misol
//1 dan 20 gacha bo'lgan sonlarning faqat toqlari bilan ishlash uchun sikl yozing va ularning yig'indisini hisoblang.

let n = 0;

for (let num15 = 1; num15 < 20; num15++) {
  if (num15 % 2 == 1) {
    n = n + num15;
  }
}

console.log(n);

//16-misol
//Foydalanuvchidan son kiriting. Shu sondan kichik barcha juft sonlarni konsolga chiqaring.

let num16 = +prompt("sonni kirting");

for (let num_16 = 0; num_16 < num16; num_16++) {
  if (num_16 % 2 == 0) {
    console.log(num_16);
  }
}

//17-misol
//1 dan 50 gacha bo'lgan sonlarning faqat 5 ga va 3 ga bo'linadiganlarini aniqlang.

for (let num17 = 1; num17 < 50; num17++) {
  if (num17 % 3 == 0 && num17 % 5 == 0) {
    console.log(num17);
  }
}

//18-misol
//1 dan 30 gacha bo'lgan sonlarning har birining kvadratini hisoblang va ularning yig'indisini toping.

let num_ = 0;

for (let num18 = 1; num18 <= 30; num18++) {
  if (num18) {
    num18 ** 2;
    num_ = num18 + num_;
  }
}

console.log(num_);

//19-misol
//1 dan 100 gacha bo'lgan barcha toq sonlarni konsolga chiqaring va ular sonini hisoblang.

let m = 0;

for (let num19 = 1; num19 < 100; num19++) {
  if (num19 % 2 == 1) {
    console.log(num19);
    m = num19 + m;
  }
}

console.log(m);

//20-misol
//Foydalanuvchi kiritgan ikkita son orasidagi barcha sonlarning yig'indisini hisoblang.

let num20 = +prompt("sonni kiriting");
let _num20 = +prompt("sonni kiriting");

let ma_x;
let mi_n;

if (num20 > _num20) {
  ma_x = num20;
  mi_n = _num20;
} else {
  ma_x = _num20;
  mi_n = num20;
}

let su_m = 0;

for (let nu_m20 = mi_n; nu_m20 < ma_x; nu_m20++) {
  su_m += nu_m20;
}

console.log(su_m);

//21-misol
//1 dan 50 gacha bo'lgan barcha sonlar ichidan faqat 3 ga karrali bo'lmagan sonlarni chiqaring.

for (let num21 = 1; num21 < 50; num21++) {
  if (num21 % 3 == 0) {
    console.log(num21);
  }
}

//22-misol
//1 dan 20 gacha bo'lgan sonlarni konsolga chiqarishda faqat toqlari chiqsin, juftlari o'rniga "Juft son" so'zi chiqsin.

for (let num22 = 1; num22 <= 20; num22++) {
  if (num22 % 2 == 1) {
    console.log(num22);
  } else if (num22 % 2 == 0) {
    console.log("juft son");
  }
}

//23-misol
//1 dan 100 gacha bo'lgan sonlar yig'indisini hisoblang, lekin faqat 10 ga bo'linmaydigan sonlar uchun.

let g = 0;

for (let num23 = 1; num23 < 100; num23++) {
  if (num23 % 10 != 0) {
    g = num23 + g;
  }
}

console.log(g);

//24-misol
//1 dan 30 gacha bo'lgan barcha sonlarning ko'paytmasini hisoblang.

let f = 1;

for (let num24 = 1; num24 < 30; num24++) {
  if (num24) {
    f = f * num24;
  }
}

console.log(f);

//25-misol
//Foydalanuvchidan boshlang'ich va tugash sonlarini kiritishni so'rang va shu oralig'dagi sonlarni konsolga chiqaring.

let num25 = promt("son");
let $num25 = promt("son");

for (let num_25 = num25; num_25 <= $num25; num_25++) {
  console.log(num_25);
}

//26-misol
//1 dan 100 gacha bo'lgan sonlardan faqat 3 ga va 5 ga bo'linadiganlarini konsolga chiqaring.

for (let num26 = 1; num26 <= 100; num26++) {
  if (num26 % 3 == 0 && num26 % 5 == 0) {
    console.log(num26);
  }
}

//27-misol
//Foydalanuvchidan kiritilgan sonning faktorialini hisoblang.

let num27 = promt("son");

let factorial = 1;

for (let $num27 = 1; $num27 < num27; $num27++) {
  factorial *= $num27;
}

console.log(factorial);

//28-misol
//1 dan 50 gacha bo'lgan barcha sonlarning juftlarini yig'ing, toqlarini esa chiqarib yuboring.

let k = 0;

for (let num28 = 1; num28 < 50; num28++) {
  if (num28 % 2 == 0) {
    k = num28 + k;
  }
}

console.log(k);

//29-misol
//1 dan 10 gacha bo'lgan barcha sonlarning kublarini konsolga chiqaring va ularning yig'indisini hisoblang.

for (let num29 = 1; num29 <= 10; num29++) {
  if (num29) {
    console.log(num29 ** 3);
  }
}

//30-misol
//1 dan 20 gacha bo'lgan barcha sonlarni konsolga chiqaring va har biriga "Bu sonning kvadrati: [kvadrat]" qo'shimchasini yozing.

for (let num30 = 1; num30 <= 20; num30++) {
  console.log(`${num30} - Bu sonning kvadrati: ${num30 * num30}`);
}

//31-misol
//1 dan 100 gacha bo'lgan sonlar ichidan faqat 7 ga bo'linadigan sonlarni toping va ularning ko'paytmasini hisoblang.

let num1 = 1;

for (let num31 = 1; num31 <= 100; num31++) {
  if (num31 % 7 == 0) {
    num1 = num1 * num31;
  }
}

console.log(num1);

//32-misol
//1 dan 30 gacha bo'lgan sonlarni o'nlikda aylantirib (har bir sonni 10 ga ko'paytirib) konsolga chiqaring.

for (let num32 = 1; num32 < 30; num32++) {
  if (num32) {
    console.log(num32 * 10);
  }
}

//34-misol
//Foydalanuvchidan bitta musbat son kiriting. Shu sondan kichik barcha juft sonlarning yig'indisini hisoblang.

let number = prompt("son");

let $sum = 0;

for (let num34 = 0; num34 < number; num34++) {
  if (num34 % 2 === 0) {
    $sum += num34;
  }
}

console.log($sum);

//35-misol
//Foydalanuvchidan kiritilgan 2 ta sonning o'rtasidagi barcha sonlarning ko'paytmasini hisoblang.

let num35 = +prompt("son ");
let $num35 = +prompt("son ");

let num_35 = 1;

let start_max;
let end_min;

if (num35 > $num35) {
  start_max = num35;
  end_min = $num35;
} else {
  start_max = $num35;
  end_min = num35;
}

for (let _num35 = start_max; _num35 <= end_min; _num35++) {
  num_35 *= _num35;
}

console.log(num_35);

//36-misol
//Foydalanuvchidan kiritilgan musbat sondan katta bo'lgan barcha 10 ga bo'linadigan sonlarni toping va chiqaring.

let num36 = +prompt("son ");

for (let $num36 = num36 + 1; $num36 <= num36 + 100; $num36++) {
  if ($num36 % 10 === 0) {
    console.log($num36);
  }
}

//37-misol
//1 dan 15 gacha bo'lgan barcha sonlarning kvadratlarini chiqarib, ularning yig'indisini hisoblang.

let $num37 = 0;

for (let num37 = 1; num37 < 15; num37++) {
  $num37 += num37 ** 2;
}

console.log($num37);

//38-misol
//1 dan 10 gacha bo'lgan sonlarning faktorialini chiqaruvchi sikl yozing.

for (let num38 = 1; num38 <= 10; num38++) {
  let factorial = 1;
  for (let $num38 = 1; $num38 <= num38; $num38++) {
    factorial *= $num38;
  }
  console.log(factorial);
}

//39-misol
//Foydalanuvchidan musbat son kiritishni so'rang va 1 dan shu songacha bo'lgan sonlarning kvadratlarini chiqarib, yig'indisini hisoblang.

let $num39 = prompt("musbat sonni kirting");

let s$um = 0;

for (let num39 = 1; num39 < $num39; num39++) {
  s$um += num39 ** 2;
}

console.log(s$um);

//40-misol
//Foydalanuvchi kiritgan musbat sondan kichik barcha sonlarni teskari tartibda konsolga chiqaring.

let num$40 = promt("son");

for (let num40 = num$40; num40 < 1; num40--) {
  console.log(num40);
}

//41-misol
//1 dan 50 gacha bo'lgan barcha sonlarning har birining kubini chiqarishda faqat 2 ga bo'linadiganlarini tanlang.

let $num41 = 0;

for (let num41 = 1; num41 < 50; num41++) {
  if (num41 % 2 == 0) {
    $num41 = num41 ** 3;
    console.log($num41);
  }
}

//42-misol
//1 dan 100 gacha bo'lgan sonlardan faqat 5 ga bo'linmaydiganlarini chiqaring.

for (let num42 = 1; num42 <= 100; num42++) {
  if (num42 % 5 != 0) {
    console.log(num42);
  }
}

//43-misol
//Foydalanuvchi kiritgan musbat sondan kichik bo'lgan barcha sonlarni ekranga chiqarib, ularning faqat 3 ga karralilarini hisoblang.

let _num43 = +prompt("musbat son kirting");
let $num43 = 0;

for (let num43 = 1; num43 < _num43; num43++) {
  if (num43 % 3 == 0) {
    $num43 += num43;
  }
}

console.log($num43);

//44-misol
//1 dan 20 gacha bo'lgan sonlarni chiqarishda har bir juft son uchun "Juft son", toq son uchun "Toq son" so'zini chiqaring.

for (let num44 = 1; num44 < 20; num44++) {
  if (num44 % 2 == 0) {
    console.log("juft son");
  } else {
    console.log("toq son");
  }
}

//45-misol
//1 dan 10 gacha bo'lgan sonlarni konsolga chiqarishda faqat toq sonlarning kvadratlarini chiqarib, ularning yig'indisini hisoblang.

let $num45 = 0;

for (let num45 = 0; num45 < 10; num45++) {
  if (num45 % 2 == 1) {
    $num45 += num45 ** 2;
  }
}

console.log($num45);

//47-misol
//1 dan 30 gacha bo'lgan sonlarni konsolga chiqarishda faqat 3 va 4 ga bo'linadiganlarini tanlang va ularni yig'indisini hisoblang.

let $num47 = 0;

for (let num47 = 1; num47 < 30; num47++) {
  console.log(num47);
  if (num47 % 3 == 0 && num47 % 4 == 0) {
    $num47 += num47;
  }
}

console.log($num47);

//48-misol
//1 dan 50 gacha bo'lgan sonlarning har birini chiqarishda juft sonlarni chiqarib yuboring va faqat toqlarini ekranga chiqaring.

for (let num48 = 1; num48 < 50; num48++) {
  if (num48 % 2 == 1) {
    console.log(num48);
  }
}

//49-misol
//Foydalanuvchidan son kiritishni so'rang va shu sondan kichik barcha 7 ga karrali sonlarning ko'paytmasini hisoblang.

let $num49 = +prompt("Son kiriting:");
let kopaytmasi = 1;

for (let num49 = 7; num49 < $num49; num49 += 7) {
  kopaytmasi *= num49;
}

console.log(kopaytmasi);

//50-misol
//Foydalanuvchidan boshlang'ich va tugash sonini kiritishni so'rang va shu oraliqdagi har bir sonning kvadratini chiqarib, ularning yig'indisini hisoblang.

let boshla = +prompt("boshlang'ich sonni kirtin");
let Tugat = +prompt("tugash sonini kirting");
let $num50 = 0;
let kvadrat;

for (let num50 = boshla; num50 <= Tugat; num50++) {
  kvadrat = num50 ** 2;
  sum += kvadrat;
}

console.log($num50);
