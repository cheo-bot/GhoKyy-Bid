
const fs = require("fs");



const addSticker = (soal, sender, _dir) => {
     let owh = { commands: soal, created: sender }
      _dir.push(owh)
     fs.writeFileSync('./database/sticker.json', JSON.stringify(_dir, null, 2))
}

const getSoalStc = (soal, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].commands === soal) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].soal
    }
}

const getStickerPosi = (soal, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].commands === soal) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const checkSticker = (soal, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
            if (_db[i].commands === soal) {
            status = true
        }
    })
    return status
}

const isCreatedStc = (soal, sender, _db, isOwner) => {
    if (isOwner) return
    let status = true
    Object.keys(_db).forEach((i) => {
            if (_db[i].commands === soal) {
            if (_db[i].created === sender)
            status = false
        }
    })
    return status
}

const deleteSticker = (soal, _db) => {
      _db.splice(getStickerPosi(soal, _db), 1)
      fs.writeFileSync('./database/sticker.json', JSON.stringify(_db, null, 2))
}

module.exports = {
      addSticker,
      getSoalStc,
      getStickerPosi,
      checkSticker,
      isCreatedStc,
      deleteSticker
}