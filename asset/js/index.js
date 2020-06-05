$(document).ready(function(){
    const typed = new Typed('.title', {
        startDelay: 300,
        loop: false,
        strings: ['Julien Fustier^700'],
        typeSpeed: 75,
        onComplete: function (self) {self.cursor.remove()}
    })
    
    //Animation Zelda
    if(screen.width > 900)
    {
        $("#link-1").mouseenter(() => $("#perso1").css("display", "block"));
        $("#link-1").mouseleave(() => $("#perso1").css("display", "none"));
    
        $("#link-2").mouseenter(() => $("#perso2").css("display", "block"));
        $("#link-2").mouseleave(() => $("#perso2").css("display", "none"));
    
        $("#link-3").mouseenter(() => $("#perso3").css("display", "block"));
        $("#link-3").mouseleave(() => $("#perso3").css("display", "none"));
    }
});