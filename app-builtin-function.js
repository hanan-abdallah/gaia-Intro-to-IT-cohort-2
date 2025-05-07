// BUILT-IN FUNCTIONS FOR DIFFERENET DATA TYPES
console.log("parameter")

var friends = ["Aliya", "Mike", "Hanna"]
friends.pop()
friends.push("newfriend")

// string.replace - username changed from Maria to maria02
var someText = "User Aliya - active user since xxx. Aliya has 50 posts. Aliya last changed her password last year"
someText.replace("Aliya", "aliya02") // this will match only first
someText.replace(/Aliya/g, "aliya02") // this will match all occurences

// slice full name into first and lastname
var fullName = "Mike Clifford"
fullName.split() // returns array with whole string in it
fullName.split(/\s+/)
// \s matches any character that is a whitespace, adding + makes it greedy, 
// matching a group starting with characters and ending with whitespace, 
// and the next group starts when there is a character after the whitespace etc.

var fullNames = ["Hanna Kenturky", "Mike Clifford", "Aliya Sharda"]
// loop through and turn the array of fullnames into array of objects with name and lastname
var firstAndLastNames = []
for (fullName of fullNames) {
    names = fullName.split(/\s+/)
    var firstAndLastName = {
        firstName: names[0],
        lastName: names[1]
    }
    firstAndLastNames.push(firstAndLastName)
}

console.log(firstAndLastNames)


// CALCULATE AGE FROM BIRTHDAY
var facebookUserOne = {
    userName: 'Aliya', 
    password: 'newpwd', 
    email: 'aa@example.com', 
    profileImage: 'reference-image',
    friends: ['Hanna', 'Mike', 'Ellie'],
    birthDate: "2002/08/18" // or "2002.08.18"
}

var facebookUserTwo = {
    userName: 'Mike', 
    password: 'mikessecretpass', 
    email: 'mike@example.com', 
    profileImage: 'reference-image',
    friends: ['Mike', 'Hanna', 'Julia'],
    birthDate: "2005/03/10"
}

function getAge(birthDateString) {
    var today = new Date()
    var birthDate = new Date(birthDateString)

    var age = today.getFullYear() - birthDate.getFullYear()
    var birthdayMonthInFuture = today.getMonth() < birthDate.getMonth()
    var sameMonthDateInFuture = today.getMonth() === birthDate.getMonth() 
        && today.getDate() < birthDate.getDate()
    
    if (birthdayMonthInFuture || sameMonthDateInFuture) {
        age--
    }

    return age
}



var users = [facebookUserOne, facebookUserTwo]
for (user of users) {
    user.age = getAge(user.birthDate)
}

console.log(users)

