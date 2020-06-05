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

//Carousel Matière
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}


//Carousel projet
let margin = parseInt($("#container-1").css('margin-left'));
$('.next').click(() => showNextProject());
$('.prev').click(() => showNextProject());

function showNextProject(){
  let state = $('#container-1').css('display');

  if(state == 'flex')
  {
    $('#container-1').css('display', 'none');
    $('#container-3').css({'display' : 'flex',
                          'animation' : 'fadeIn 1s linear'});

    $('#description-1').css('display', 'none');
    $('#description-3').css({'display' : 'block',
                            'animation' : 'fadeIn 1s linear'});
  }

  else{
    $('#container-3').css('display', 'none');
    $('#container-1').css({'display' : 'flex',
                          'animation' : 'fadeIn 1s linear'});

    $('#description-3').css('display', 'none');
    $('#description-1').css({'display' : 'block',
                            'animation' : 'fadeIn 1s linear'});
  }
}


//Redirection vers les projets
$('#project-1').click(() => self.location.href = "../../projet/Divers/Web-GL/City/index.html");
$('#project-2').click(() => self.location.href = "../../projet/Divers/Web-GL/Galaxy/index.html");
$('#project-3').click(() => self.location.href = "../../projet/Divers/Web-GL/Planete/index.html");
$('#project-4').click(() => self.location.href = "../../projet/Divers/Web-GL/Birthday-cake/index.html");

$('#project-9').click(() => self.location.href = "../../projet/Divers/firebase/authentification/index.html");
$('#project-10').click(() => self.location.href = "../../projet/Divers/firebase/realtime-database/index.html");
$('#project-11').click(() => self.location.href = "../../projet/Divers/firebase/storage/index.html");