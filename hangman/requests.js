const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error("Unable to get puzzle")
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch("http://restcountries.eu/rest/v2/all")
  
  if (response.status === 200) {
    const data = await response.json()
    const countryData = data.find((country) => {
      if (country.alpha2Code === countryCode) {
        return country
      }
    })
    return countryData.name
  } else {
    throw new Error("Unable to fetch country")
  }
}

const getLocation = async () => {
  const response = await fetch("https://ipinfo.io/json?token=82ba852bffd108")
  
  if (response.status === 200) {
    const data = await response.json()
    return data
  } else {
    throw new Error("Unable to fetch location")
  }
}

// const getLocationOld = () => {
//   return fetch("https://ipinfo.io/json?token=82ba852bffd108").then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error("Unable to fetch location")
//     }
//   })
// }
// const getPuzzleOld = (wordCount) => {
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

// const getCountryOld = (countryCode) => {
//   return fetch("http://restcountries.eu/rest/v2/all").then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error("Unable to fetch puzzle")
//     }
//   }).then((data) => {
//     const countryData = data.find((country) => {
//       if (country.alpha2Code === countryCode) {
//         return country
//       }
//     })
//     return countryData.name
//   })
// }