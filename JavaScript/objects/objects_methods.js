let resturant = {
  name: "Half Sour",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft

  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize
  }
}




resturant.seatParty(72)
resturant.removeParty(1)

console.log(resturant.checkAvailability(4))