const getPuzzle = (wordCount, callback) => {
  
  const request = new XMLHttpRequest()

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
      callback(`An error has taken place`, undefined)
    }
  })

  request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()

}


const getCountry = (countryCode, callback) => {
  
  const countryRequest = new XMLHttpRequest()

  countryRequest.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const countryData = JSON.parse(e.target.responseText)
      
      countryData.forEach((country) => {
        if (country.alpha2Code === countryCode) {
          callback(undefined, country.name)
        } 
      })
    } else if (e.target.readyState === 4) {
      callback("An error has taken place.", undefined)
    }
  })

  countryRequest.open("GET", "http://restcountries.eu/rest/v2/all")
  countryRequest.send()
 
}


// const countryCode = "US"




// const getPuzzleSync = () => {
//   const request = new XMLHttpRequest()

//   request.open("GET", "http://puzzle.mead.io/puzzle", false)
//   request.send()

//   if (request.readyState === 4 && request.status === 200) {
//     const data = JSON.parse(request.responseText)
//     return data.puzzle
//   } else if (request.readyState === 4) {
//     throw new Error("Things did not go well")
//   }

// }
