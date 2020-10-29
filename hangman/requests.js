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
        return country.name
      }
    })
    return countryData
  } else {
    throw new Error("Unable to fetch country")
  }
}

// const getLocation = async () => {
//   const response = await fetch("https://ipinfo.io/json?token=82ba852bffd108")
  
//   if (response.status === 200) {
//     return response.json()
//   } else {
//     throw new Error("Unable to fetch location")
//   }
// }

const getCurrentCountry = async () => {
  const response = await fetch("https://ipinfo.io/json?token=82ba852bffd108")

  if (response.status === 200) {
    const currentCountryData = await response.json()
    return getCountry(currentCountryData.country)
  } else {
    throw new Error("Unable to fetch current location")
  } 
}


// getLocation().then((location) => {
//   console.log(`You are located at ${location.city}, ${location.region} ${location.country}`)
//   return getCountry(location.country)
// }).then((country) => {
//   console.log(country)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })