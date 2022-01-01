const axios = require("axios")
const URL = "https://disease.sh/v3/covid-19/"

const covid = async (countries) => {
    let covid = {}
    await axios.get(URL + `countries/${countries}`).then((response) => {
        covid = {
            kasus: response.data.cases,
            sembuh: response.data.recovered,
            meninggal: response.data.deaths,
            negara: response.data.country,
        }
    })
    return covid
}
const covidGlobal = async () => {
    let covidGlobal = {}
    await axios.get(URL + "all").then((response) => {
        covidGlobal = {
            kasus: response.data.cases,
            sembuh: response.data.recovered,
            meninggal: response.data.deaths,
        }
    })
    return covidGlobal
}

module.exports = { covid, covidGlobal }