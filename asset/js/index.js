$(document).ready(function(){
    console.log("Debug");
})

const typed = new Typed('.test', {
    startDelay: 300,
    loop: false,
    strings: ['Marceau cyril^700'],
    typeSpeed: 75,
    onComplete: function (self) {self.cursor.remove()}
})