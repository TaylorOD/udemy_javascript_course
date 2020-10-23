const data = {
  locations: [],
  get location() {
    return this._location
  },
  set location(value) {
    this._location = value.toUpperCase().trim()
    this.locations.push(this._location)
  }
}

// code that uses the data object
data.location = "    Chicago    "
data.location = "new york"
console.log(data)