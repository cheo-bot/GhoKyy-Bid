const { limitAdd, addBalance } = require("./limit.js")
const nebal = (angka) => { return Math.floor(angka) }
function randomNomor(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
String.prototype.kapitalis = function() { return this.charAt(0).toUpperCase() + this.slice(1); }

const suitJs = async (pilihan, sender, balance) => {
  return new Promise((resolve, reject) => {
    setTimeout(async() => {
      let computer;
      if (Math.random() >= 2 / 3) {
        computer = "gunting";
      } else if (Math.random() >= 1 / 3) {
        computer = "batu";
      } else {
        computer = "kertas";
      }
      //console.log(`Computer : ${computer}\nAnda: ${suit}\n`);
      const suit = pilihan.toLowerCase();
      const hadiah = randomNomor(50, 100)
      if (suit === "gunting" || "batu" || "kertas") {
        if (suit === computer) {
          resolve(`Bot memilih : ${computer.kapitalis()}\nAnda memilih : ${suit.kapitalis()}\n\nHasil seri`);
        } else {
          if (suit === "gunting") {
            switch (computer) {
              case "kertas":
                resolve(`Bot memilih : ${computer.kapitalis()}\nAnda memilih : ${suit.kapitalis()}\n\nAnda menang, dan mendapatkan $${hadiah} balance`);
                addBalance(sender, nebal(hadiah), balance)
                break;
              case "batu":
                resolve(`Bot memilih : ${computer.kapitalis()}\nAnda memilih : ${suit.kapitalis()}\n\nAnda kalah`);
                break;
            }
          }
          if (suit === "batu") {
            switch (computer) {
              case "gunting":
                resolve(`Bot memilih : ${computer.kapitalis()}\nAnda memilih : ${suit.kapitalis()}\n\nAnda menang, dan mendapatkan $${hadiah} balance`);
                addBalance(sender, nebal(hadiah), balance)
                break;
              case "kertas":
                resolve(`Bot memilih : ${computer.kapitalis()}\nAnda memilih : ${suit.kapitalis()}\n\nAnda Kalah`);
                break;
            }
          }
          if (suit === "kertas") {
            switch (computer) {
              case "batu":
                resolve(`Bot memilih : ${computer.kapitalis()}\nAnda memilih : ${suit.kapitalis()}\n\nAnda menang dan mendapatkan $${hadiah} balance`);
                addBalance(sender, nebal(hadiah), balance)
                break;
              case "gunting":
                resolve(`Bot memilih : ${computer.kapitalis()}\nAnda memilih : ${suit.kapitalis()}\n\nAnda kalah`);
                break;
            }
          }
        }
      } else {
        reject(new Error(`Error System!`));
      }
    },
      300);
  });
};

const getSuit = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const isSuit = (chatId, _db) => {
    let status = false
      if (_db === undefined) {
        status = false
      } else if (_db.id === chatId) {
            status = true
    }
    return status
}

const cekWaktuSuit = (from, xinz, _dir) => {
    setInterval(() => {
      let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
              position = i
            }
        })
        if (position !== null) {
            xinz.deleteMessage(from, _dir[position].mek.key)
            _dir.splice(position, 1)
        }
    }, 1000)
}

module.exports = { suitJs, getSuit, isSuit, cekWaktuSuit }
