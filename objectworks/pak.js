var pakdata=[
    {
      "name": "Pakistan",
      "topLevelDomain": [
        ".pk"
      ],
      "alpha2Code": "PK",
      "alpha3Code": "PAK",
      "callingCodes": [
        "92"
      ],
      "capital": "Islamabad",
      "altSpellings": [
        "PK",
        "Pākistān",
        "Islamic Republic of Pakistan",
        "Islāmī Jumhūriya'eh Pākistān"
      ],
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 220892331,
      "latlng": [
        30,
        70
      ],
      "demonym": "Pakistani",
      "area": 881912,
      "gini": 31.6,
      "timezones": [
        "UTC+05:00"
      ],
      "borders": [
        "AFG",
        "CHN",
        "IND",
        "IRN"
      ],
      "nativeName": "Pakistan",
      "numericCode": "586",
      "flags": {
        "svg": "https://flagcdn.com/pk.svg",
        "png": "https://flagcdn.com/w320/pk.png"
      },
      "currencies": [
        {
          "code": "PKR",
          "name": "Pakistani rupee",
          "symbol": "₨"
        }
      ],
      "languages": [
        {
          "iso639_1": "ur",
          "iso639_2": "urd",
          "name": "Urdu",
          "nativeName": "اردو"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Paquistão",
        "pt": "Paquistão",
        "nl": "Pakistan",
        "hr": "Pakistan",
        "fa": "پاکستان",
        "de": "Pakistan",
        "es": "Pakistán",
        "fr": "Pakistan",
        "ja": "パキスタン",
        "it": "Pakistan",
        "hu": "Pakisztán"
      },
      "flag": "https://flagcdn.com/pk.svg",
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "PAK",
      "independent": true
    }
  ]
 let countryname=pakdata[0].name
 let capital=pakdata[0].capital
 let population=pakdata[0].population
let borders=[...pakdata[0].borders]
let cuurencyname=pakdata[0].currencies[0].name
let symbol=pakdata[0].currencies[0].symbol
let finaldata={countryname,capital,population,borders,cuurencyname,symbol}
console.log(finaldata);