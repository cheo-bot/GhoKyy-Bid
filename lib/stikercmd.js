// Sticker Cmd
const fs = require("fs");

const addCmd = (id, command, _db) => {
    const obj = { id: id, chats: command }
    _db.push(obj)
    fs.writeFileSync('./database/stickercmd.json', JSON.stringify(_db, null, 2))
}

const getCommandPosition = (chats, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].chats === chats) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _db[position].chats
    }
}


const checkSCommand = (id, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === id) {
            status = true
        }
    })
    return status
}

module.exports = { addCmd, getCommandPosition, getCmd, checkSCommand }