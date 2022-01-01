const scrapy = require('node-scrapy')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')

/**
 * Search KBBI
 *
 * @param  {String} query
 */
const kbbi = async (query) => new Promise((resolve, reject) => {
     const url = 'https://kbbi.web.id/'
     const kata = query
     const model = {
         arti: 'div#d1 ($ | trim)'
     }
fetch(url+kata)
  .then((res) => res.text())
  .then((body) => {
    const data = scrapy.extract(body, model)
    resolve({ creator: 'R', result: data.arti })
  })
  .catch(err => {
    reject(err)
  })
})

const wiki = async (query) => {
      const res = await axios.get(`https://id.m.wikipedia.org/w/index.php?search=${query}`)
      const $ = cheerio.load(res.data)
      const hasil = []
         let creator = `R`
         let wiki = $('#mf-section-0').find('p').text()
         let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
           thumb = thumb ? thumb : '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
           thumb = 'https:' + thumb
           let judul = $('h1#section_0').text()
           hasil.push({ creator, wiki, thumb, judul })
     return hasil
}

module.exports = { kbbi, wiki }