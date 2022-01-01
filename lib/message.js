
const fs = require("fs");



const addMessage = (soal, jawaban, sender, _dir) => {
     let owh = { message: soal, jawaban: jawaban, created: sender }
      _dir.push(owh)
     fs.writeFileSync('./database/message.json', JSON.stringify(_dir, null, 2))
}

const getJawabanMsg = (soal, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].message === soal) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}

const getSoalMsg = (soal, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].message === soal) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].soal
    }
}

const getMessagePosi = (soal, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].message === soal) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const checkMessage = (soal, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
            if (_db[i].message === soal) {
            status = true
        }
    })
    return status
}

const isCreated = (soal, sender, _db, isOwner) => {
    if (isOwner) return
    let status = true
    Object.keys(_db).forEach((i) => {
            if (_db[i].message === soal) {
            if (_db[i].created === sender)
            status = false
        }
    })
    return status
}

const deleteMessage = (soal, _db) => {
      _db.splice(getMessagePosi(soal, _db), 1)
      fs.writeFileSync('./database/message.json', JSON.stringify(_db, null, 2))
}

module.exports = {
      addMessage,
      getJawabanMsg,
      getSoalMsg,
      getMessagePosi,
      checkMessage,
      isCreated,
      deleteMessage
}