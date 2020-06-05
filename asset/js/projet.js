const revealElements = document.querySelectorAll('.reveal')
const revealItems = []
const scrollY = window.scrollY

for(const _element of revealElements)
{
    const item = {}
    item.revealed = false
    item.element = _element
    
    const bouding = _element.getBoundingClientRect()
    item.top = bouding.top + scrollY
    item.height = bouding.height
    
    revealItems.push(item)
}

window.addEventListener('resize', () =>
{
    const scrollY = window.scrollY

    for(const _item of revealItems)
    {
        const bounding = _item.element.getBoundingClientRect();
        _item.top = bounding.top + scrollY
        _item.height = bounding.height
    }
})

window.addEventListener('scroll', () =>
{
    const limit = window.scrollY + window.innerHeight

    for(const _item of revealItems)
    {
        if(!_item.revealed && limit > _item.top + _item.height * 0.5)
        {
            _item.revealed = true
            _item.element.classList.add('revealed')
        }
    }
})

//Animation Zelda (nav bar)
if(screen.width > 900)
{
    $("#link-1").mouseenter(() => $("#perso6").css("display", "block"));
    $("#link-1").mouseleave(() => $("#perso6").css("display", "none"));

    $("#link-2").mouseenter(() => $("#perso7").css("display", "block"));
    $("#link-2").mouseleave(() => $("#perso7").css("display", "none"));

    $("#link-3").mouseenter(() => $("#perso8").css("display", "block"));
    $("#link-3").mouseleave(() => $("#perso8").css("display", "none"));
}


//Animation Zelda (projet)
if(screen.width > 650)
{
    $("#item-1").mouseenter(() => $("#perso1").css("display", "block"));
    $("#item-1").mouseleave(() => $("#perso1").css("display", "none"));

    $("#item-2").mouseenter(() => $("#perso2").css("display", "block"));
    $("#item-2").mouseleave(() => $("#perso2").css("display", "none"));

    $("#item-3").mouseenter(() => $("#perso3").css("display", "block"));
    $("#item-3").mouseleave(() => $("#perso3").css("display", "none"));

    $("#item-4").mouseenter(() => $("#perso4").css("display", "block"));
    $("#item-4").mouseleave(() => $("#perso4").css("display", "none"));

    $("#item-5").mouseenter(() => $("#perso5").css("display", "block"));
    $("#item-5").mouseleave(() => $("#perso5").css("display", "none"));
}


//Redirection vers les projets
$("#item-1").click(() => self.location.href = "../../projet/global-magazine/index.html");
$("#item-2").click(() => self.location.href = "../../projet/kwick/index.html");
$("#item-3").click(() => self.location.href = "../../projet/Space-Run/index.html");
$("#item-4").click(() => self.location.href = "../../projet/Manage-SCH/index.html");
$("#item-5").click(() => self.location.href = "../../projet/Divers/divers.html");