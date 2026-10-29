// let talabalar = [
//     {ism: "1. Aziz", yosh:16 , ball:85},
//     {ism: "2. Madina", yosh:15 , ball:92},
//     {ism: "3. Jasur", yosh:17 , ball:74},
//     {ism: "4. Dilnoza", yosh:16 , ball:88},
//     {ism: "5. Sardor", yosh:15 , ball:61},
//     {ism: "6. Kamola", yosh:16 , ball:79},
// ]
//         const barchaList = document.getElementById("barchaTalabalar");
//         const yuqoriList = document.getElementById("barchaTalabalar");
//         const statistikaDiv = document.getElementById("barchaTalabalar");

//         talabalar.forEach(talaba => {
//             const li = document.createElement("li");
//             li.innerHTML = `<strong>${talaba.ism}</strong>, ${talaba.yosh} yosh, ball: ${talaba.ball}`;
//             barchaList.appendChild(li);
//         });
//         const yuqoriBallilar = talabalar.filter(t => t.ball > 80);
//         yuqoriBallilar.forEach(talaba => {
//         const li = document.createElement("li");
//         li.innerHTML = `<strong>${talaba.ism}</strong>, ball: ${talaba.ball}`;
//         yuqoriList.appendChild(li);
//         });
//         const talabalarSoni = talabalar.length;
//         const jamiBall = talabalar.reduce((sum, t) => sum + t.ball, 0);
//         const ortachaBall = (jamiBall / talabalarSoni).toFixed(1);
//         const engYuqori = talabalar.reduce((max, t) => t.ball > max.ball ? t : max, talabalar[0]);
//         statistikaDiv.innerHTML = `
//         Talabalar soni: ${talabalarSoni}<br>
//         O'rtacha ball: ${ortachaBall}<br>
//         Eng yuqori ball: ${engYuqori.ism} (${engYuqori.ball})`;
// 1. Ma'lumotlar massivi (Array)
const talabalar = [
  { ism: "Aziz", yosh: 16, ball: 85 },
  { ism: "Madina", yosh: 15, ball: 92 },
  { ism: "Jasur", yosh: 17, ball: 74 },
  { ism: "Dilnoza", yosh: 16, ball: 88 },
  { ism: "Sardor", yosh: 15, ball: 61 },
  { ism: "Kamola", yosh: 16, ball: 79 }
];

// DOM elementlarini tanlab olamiz
const barchaList = document.getElementById("barchaTalabalar");
const yuqoriList = document.getElementById("yuqoriBalliTalabalar");
const statistikaDiv = document.getElementById("statistika");

// 2. Barcha talabalarni tartiblangan ro'yxatga (ol) chiqarish
talabalar.forEach(talaba => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${talaba.ism}</strong>, ${talaba.yosh} yosh, ball: ${talaba.ball}`;
  barchaList.appendChild(li);
});

// 3. Balli 80 dan yuqori talabalarni saralab olish va ro'yxatga (ul) chiqarish
const yuqoriBallilar = talabalar.filter(t => t.ball > 80);
yuqoriBallilar.forEach(talaba => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${talaba.ism}</strong>, ball: ${talaba.ball}`;
  yuqoriList.appendChild(li);
});

// 4. Statistika hisob-kitoblari
const talabalarSoni = talabalar.length;

// O'rtacha ballni hisoblash
const jamiBall = talabalar.reduce((sum, t) => sum + t.ball, 0);
const ortachaBall = (jamiBall / talabalarSoni).toFixed(1);

// Eng yuqori ball to'plagan talabani topish
const engYuqori = talabalar.reduce((max, t) => t.ball > max.ball ? t : max, talabalar[0]);

// Statistikani ekranga chiqarish
statistikaDiv.innerHTML = `
  Talabalar soni: ${talabalarSoni}<br>
  O'rtacha ball: ${ortachaBall}<br>
  Eng yuqori ball: ${engYuqori.ism} (${engYuqori.ball})
`;