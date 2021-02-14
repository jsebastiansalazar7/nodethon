const celebration = {
    name: "Birthday Party",
    guestList : ["Andrew", "Jen", "Mike"],
    printGuestList() {
        console.log("Guest list for " + this.name)
         
        //The arrow function doesn't have 'this' binding
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending' + this.name)
        })
    }
}
celebration.printGuestList()
