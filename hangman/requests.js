// const getPuzzle = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error("Unable to fetch puzzle")
//     }
//   }).then((data) => {
//     return data.puzzle
//   })
// }


const getCountry = (countryCode) => {
  return fetch("http://restcountries.eu/rest/v2/all").then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error("Unable to fetch puzzle")
    }
  }).then((data) => {
    const countryData = data.find((country) => {
      if (country.alpha2Code === countryCode) {
        return country
      }
    })
    return countryData.name
  })
}


// const getCountry = (countryCode) => {
//   return fetch("http://restcountries.eu/rest/v2/all").then((response) => {
//     if (response.status === 200) {
//       const countryData = response.json()
//       countryData.forEach((country) => {
//         if (country.alpha2Code === countryCode) {
//           return country.name
//         } else {
//           throw new Error("Unable to fetch data")
//         }
//       })
//     }
//   })
// }