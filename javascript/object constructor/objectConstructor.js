// prototype is a property of the Object constructor. It allow you add new property to the Object constructor.

function TwitterApplication(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
    this.timeline = []
}

TwitterApplication.prototype.showInfo = function(){
    console.log(`Username: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}\nAvatar: ${this.avatar}\nTweets: ${this.timeline}`)
}

TwitterApplication.prototype.updatePassword= function(newPassword){
    return this.password = newPassword;
}

TwitterApplication.prototype.sendTweet = function(tweet){
    this.timeline.push(tweet)
}

TwitterApplication.prototype.deleteTweet = function(){
    this.timeline.pop()
}

TwitterApplication.prototype.avatar ="myAvatar.jpg" // added new property to the prototype of the Object constructor

let user1 = new TwitterApplication('Jack','jack@jack.com','12345');
user1.updatePassword('hellofriend123')
user1.sendTweet('Hello world')
user1.sendTweet('js is cool')
user1.sendTweet('learning js')
user1.showInfo();

let user2 = new TwitterApplication('Ersin','ersin@ersin.com','ersin123');
user2.sendTweet('I am Ersin')
user2.sendTweet("I'm learning js")
user2.showInfo();
user2.deleteTweet()
user2.timeline.forEach(function(tweet){
    console.log(tweet)
})