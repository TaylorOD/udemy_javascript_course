const data = {
  get location() {
    return this._location
  },
  set location(value) {
    this._location = value.toUpperCase().trim()
  }
}

// code that uses the data object
data.location = "    Chicago    "

console.log(data.location)