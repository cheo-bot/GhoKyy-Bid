const {
	MessageType,
	Mimetype
} = require("@adiwajshing/baileys");
const toMs = require('ms');
const fs = require("fs");

// TEBAK GAMBAR
const addgambar = (chatId, jawaban, expired, quoted ,_db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`), qtd: quoted }
    _db.push(obi)
}
const getJawabanTG = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isTebakGambar = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTG = (xinz, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            xinz.sendMessage(_dir[position].id, `*--「 Tebak Gambar 」--*\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text, { quoted: _dir[position].qtd })
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTGPosi = (chatId, _db) => {
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

// Math Game
const addMath = (chatId, jawaban, poin, expired, quoted, _db) => {
    let obi = { id: chatId, jawaban: jawaban, poin: poin, expired: Date.now() + toMs(`${expired}s`), qtd: quoted }
    _db.push(obi)
}
const getJawabanMath = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const getHadiahMath = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].poin
    }
}
const isMathGame = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuMath = (xinz, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            xinz.sendMessage(_dir[position].id, `*--「 Math Game 」--*\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text, { quoted: _dir[position].qtd })
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getMathPosi = (chatId, _db) => {
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

// Tebak Lagu
const addLagu = (chatId, jawaban, expired, quoted, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`), qtd: quoted }
    _db.push(obi)
}
const getJawabanTL= (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isTebakLagu = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTL = (xinz, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            xinz.sendMessage(_dir[position].id, `*--「 Tebak Lagu 」--*\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text, { quoted: _dir[position].qtd })
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTLPosi = (chatId, _db) => {
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

// Kuis
const addKuis = (chatId, jawaban, expired, quoted, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`), qtd: quoted }
    _db.push(obi)
}
const getJawabanKuis = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isKuisGame = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuKuis = (xinz, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            xinz.sendMessage(_dir[position].id, `*--「 Kuis Game 」--*\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text, { quoted: _dir[position].qtd })
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getKuisPosi = (chatId, _db) => {
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

// Bendera
const addBendera = (chatId, jawaban, expired, quoted, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`), qtd: quoted }
    _db.push(obi)
}
const getJawabanBendera = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isBenderaGame = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuBendera = (xinz, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            xinz.sendMessage(_dir[position].id, `*--「 Tebak Bendera 」--*\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text, { quoted: _dir[position].qtd })
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getBenderaPosi = (chatId, _db) => {
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

// Family 100
const addfam = (chatId, jawaban, expired, quoted, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`), qtd: quoted }
    _db.push(obi)
}
const getjawaban100 = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isfam = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuFam = (xinz, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            var juwu = `*--「 Family 100 」--*\n\n*Waktu habis*\n*Jawaban yang belum terjawab :*\n\n`
            aae = _dir[position].jawaban
            for (let i of aae){
                juwu += `${i}\n`
            }
            xinz.sendMessage(_dir[position].id, juwu, MessageType.text, { quoted: _dir[position].qtd })
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getfamposi = (chatId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

// Siapa Aku
const addSiapa = (chatId, jawaban, expired, quoted ,_db) => {
	 let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`), qtd: quoted }
	 _db.push(obi)
}
const getJawabanSA = (chatId, _db) => {
     let found = false
	 Object.keys(_db).forEach((i) => {
	  if (_db[i].id === chatId) {
			found = i
	  }
	 })
	 if (found !== false) {
		return _db[found].jawaban
	 }
}
const isSiapaAku = (chatId, _db) => {
     let status = false
     Object.keys(_db).forEach((i) => {
      if (_db[i].id === chatId) {
	   status = true
	  }
	 })
       return status
}
const cekWaktuSA = (xinz, _dir) => {
     setInterval(() => {
		let position = null
		Object.keys(_dir).forEach((i) => {
		if (Date.now() >= _dir[i].expired) {
			position = i
		}
        })
	    if (position !== null) {
		  xinz.sendMessage(_dir[position].id, `*--「 Siapa Aku 」--*\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text, { quoted: _dir[position].qtd })
		  _dir.splice(position, 1)
		}
		}, 1000)
}
const getSAPosi = (chatId, _db) => {
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

const casinoSave = (db, obj, session) => {
    mine = db
    const dbdir = `./media/casino/${session}.json`
    fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
}

const setCasino = (session) => {
    const dbdir = `./media/casino/${session}.json`
    if (!fs.existsSync(dbdir)) {
        const objcas = {
        status: true,
        turn: 'Z',
        session: session,
        Z: null,
        Y: null,
        nominal: null,
        }
    casinoSave(dbdir, objcas, session)
    return objcas
    } else {
       const read = JSON.parse(fs.readFileSync(dbdir))
       return read
    }
}

const deleteCasino = (from) => {
     fs.unlinkSync('./media/casino/' + from + '.json')
}

module.exports = {
    addgambar,
    getJawabanTG,
    isTebakGambar,
    cekWaktuTG,
    getTGPosi,
    addMath,
    getJawabanMath,
    getHadiahMath,
    isMathGame,
    cekWaktuMath,
    getMathPosi,
    addLagu,
    getJawabanTL,
    isTebakLagu,
    cekWaktuTL,
    getTLPosi,
    addKuis,
    getJawabanKuis,
    isKuisGame,
    cekWaktuKuis,
    getKuisPosi,
    addBendera,
    getJawabanBendera,
    isBenderaGame,
    cekWaktuBendera,
    getBenderaPosi,
    addfam,
    getjawaban100,
    isfam,
	cekWaktuFam,
	getfamposi,
	addSiapa,
	getJawabanSA,
	isSiapaAku,
	cekWaktuSA,
	getSAPosi,
    casinoSave,
    setCasino,
    deleteCasino
}