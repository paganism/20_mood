function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

var quotes = [
      {
        "phrase": "Кукурузные хлопья - теперь без асбеста!",
        "signature": "©Неизвестный маркетолог"
      },
      {
        "phrase": "Собираюсь жить вечно, пока всё идёт нормально"
      },
      {
        "phrase": "Вывеска над кафе — '\u003cМы открылись\u003e'. Что-то не так. Где же '\u003c/Мы открылись\u003e'?"
      },
      {
        "phrase": "Если ты будешь усердно работать по 8 часов в день, то обязательно станешь боссом и начнешь работать по 12"
      },
      {
  "phrase": "У каждого свои понятия о любви — для одних это только постель, другие просто хотят быть рядом с кем-то, для меня же это возможность всегда положиться на кого-либо, особенно когда мы в дороге. Там ты действительно можешь потерять самого себя",
  "signature": "Джеймс Хэтфилд",
      },
      {
        "phrase": "Я не думаю, что успех изменил нас как людей вообще. Мы такие же безумцы, какими мы и были, когда только начинали. И мы никогда не ставили себя на более высокий уровень, чем тот, на котором находятся наши фаны",
        "signature": "Джеймс Хэтфилд"
      },
      {
        "phrase": "Все эти игры и развлечения продолжаются до тех пор, пока кто-то не потеряет способность видеть. Потом игры и развлечения тоже продолжаются, но ты уже слеп.",
        "signature": "Джеймс Хэтфилд"
      },
      {
        "phrase": "Metallica всегда была объектом различных шуток. Мы всегда были аутсайдерами. Это ведь так легко выбрать человека, непохожего на тебя и смеяться над ним",
        "signature": "Джеймс Хэтфилд"
      }

    ];

var quotesQty = quotes.length;
var randomElement = getRandomInt(0, quotesQty);
document.getElementById("phrases").textContent = quotes[randomElement].phrase;
document.getElementById("signature").textContent = quotes[randomElement].signature;

