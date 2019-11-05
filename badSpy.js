const spy = require("./utilities/spy");
const urls = [
    "http://javascript.ru/",
    "https://korrespondent.net/",
    "https://translate.google.com/?hl=ru",
    "https://blogs.korrespondent.net/",
    "https://obmenka.od.ua/",
    "http://livestyle.emmet.io/",
    "http://ostro.org",
    "http://dumskaya.net",
    "https://www.html5rocks.com/",
    "https://www.w3schools.com/",
    "https://www.animatron.com/",
    "https://daneden.github.io/animate.css/",
    "https://ebanoe.it/",
    "https://intellij-support.jetbrains.com/"
];

// urls.forEach(url => {
//     spy(url,()=>{
//
//     });
// });

Promise.all(urls.map(url => {
    spy(url,()=>{});
}));
