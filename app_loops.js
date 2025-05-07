var post1 = {
    content: 'This is my first awesome post', 
    likes: 300, 
    shares: 20
}
var post2 = {
    content: 'Just completed my JavaScript basics', 
    likes: 25, 
    shares: 5
}

var post3 = {
    content: 'This is Mikes post', 
    likes: 250, 
    shares: 30
}

var facebookUserOne = {
    userName: 'Aaron', 
    password: 'newpwd', 
    email: 'aa@example.com', 
    profileImage: 'reference-image',
    friends: ['Mike', 'Ayesha', 'Zack'],
    posts: [post1, post2]
}

var facebookUserTwo = {
    userName: 'Mike', 
    password: 'mikessecretpass', 
    email: 'mike@example.com', 
    profileImage: 'reference-image',
    friends: ['', 'Dina', 'Julia'],
    posts: [post3]
}

// SINGLE LOOPS
for (post of facebookUserOne.posts) {
    post.reactions = post.likes
    delete post.likes
}

console.log("we are done with posts loop")
console.log(facebookUserOne.posts)    


var users = [facebookUserOne, facebookUserTwo]
for (user of users) {
    user.interests = []
}
console.log("we are done with users loop")
console.log(users)


// NESTED LOOPS
var users = [facebookUserOne, facebookUserTwo]
for (user of users) {
    user.interests = []
    for (post of user.posts) {
        post.reactions = post.likes
        delete post.likes
    }
}
console.log("we are done with users loop")
console.log(users)
