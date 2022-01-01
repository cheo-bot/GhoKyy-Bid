const axios = require('axios')

const google = async (query) => new Promise((resolve, reject) => {
  const url = 'https://megayaa.herokuapp.com/api/gimg?q='
  let hasilnya = []
  axios.get(url+query)
  .then(async(res) => {
    for (let x of res.data.result) {
    hasilnya.push(x)
     }
  resolve({ creator: 'R', result: hasilnya })
  })
  .catch(err => {
    reject(err)
  })
})

module.exports = { google }