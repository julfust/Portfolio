//Animation
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

//Redirection vers les projets
$("#item-1").click(() => self.location.href = "../../projet/global-magazine/index.html");
$("#item-2").click(() => self.location.href = "../../projet/kwick/index.html");
$("#item-3").click(() => self.location.href = "../../projet/Space-Run/index.html");
$("#item-4").click(() => self.location.href = "../../projet/Manage-SCH/index.html");
$("#item-5").click(() => self.location.href = "../../projet/divers/divers.html");