const axios = require('axios')

const spamcall = async (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan nomer.') }
        var url = `https://api.caliph71.xyz/api/spamcall?no=${query}&apikey=x2ePohLi`
        axios.get(url)
            .then(res => {
                resolve({ result: res.data.result, creator: "R", status: res.data.status })
          })
    })
}

module.exports = { spamcall }