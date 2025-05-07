var post1 = {
    content: 'This is my first awesome post', 
    likes: 300, 
    shares: 20
}
var post2 = {
    content: 'Just completed my JavaScript basics', 
    likes: 30, 
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
    friends: ['Nathan', 'Dina', 'Julia'],
    posts: [post3]
}


// CALL FUNCTION SEPARATELY
function addReactionsToPost(user) {
    for (post of user.posts) {
        post.reactions = post.likes
        delete post.likes
    }
}

addReactionsToPost(facebookUserOne)
addReactionsToPost(facebookUserTwo)



// CALL FUNCTION IN LOOP
var users = [facebookUserOne, facebookUserTwo]
for (user of users) {
    user.interests = []
    addReactionsToPost(user)
}
console.log("we are done with users loop")
console.log(users)


