//Canvas
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = '#ff3019';
ctx.beginPath();
  ctx.fillStyle="#FF4422";
  ctx.arc(100, 50, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.fillRect(250, 48, 2, 75);

  ctx.moveTo(100,48);
  ctx.fillRect(100, 48, 1400, 5);

  ctx.moveTo(500, 50);
  ctx.arc(500, 50, 10, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.fillStyle="#FF4422";

  ctx.fillRect(800, 48, 2, 75);

  ctx.fillRect(1055, 48, 2, 75);

  ctx.moveTo(900, 50);
  ctx.arc(900, 50, 10, 0, Math.PI * 2, true);

  ctx.fillStyle="#FF4422";
  ctx.fill();

  ctx.moveTo(1300, 50);
  ctx.arc(1300, 50, 10, 0, Math.PI * 2, true);
  ctx.fill();


ctx.stroke();

$(document).ready(function(){

  $('#bottom-section-img > img:eq(0)').click(function(){
      $('#bottom-section-img > img:eq(0)').css('display', 'none');
      $('#bottom-section-img > img:eq(1)').css('display', 'block');
  });
  
  $('#bottom-section-img > img:eq(2)').click(function(){
    $('#bottom-section-img > img:eq(2)').css('display', 'none');
    $('#bottom-section-img > img:eq(3)').css('display', 'block');
  });

  $('#bottom-section-img > img:eq(4)').click(function(){
    $('#bottom-section-img > img:eq(4)').css('display', 'none');
    $('#bottom-section-img > img:eq(5)').css('display', 'block');
  });


  $('#img-1').click(function(){
    $('#img-1').css('animation', 'fadeOut 1s linear');
    $('#img-1').css('opacity', '0');
    $('#img-1').css('display', 'none');

    $('#text-container-1').css('display', 'block');
    $('#text-container-1').css('animation', 'fadeIn 1s linear');
    $('#text-container-1').css('opacity', '1');
  })

  $('.close-logo').click(function(){
    $('#text-container-1').css('animation', 'fadeOut 1s linear');
    $('#text-container-1').css('opacity', '0');
    $('#text-container-1').css('display', 'none');

    $('#img-1').css('display', 'block');
    $('#img-1').css('animation', 'fadeIn 1s linear');
    $('#img-1').css('opacity', '1');
  })

  $('#img-2').click(function(){
    $('#img-2').css('animation', 'fadeOut 1s linear');
    $('#img-2').css('opacity', '0');
    $('#img-2').css('display', 'none');

    $('#text-container-2').css('display', 'block');
    $('#text-container-2').css('animation', 'fadeIn 1s linear');
    $('#text-container-2').css('opacity', '1');
  })

  $('.close-logo').click(function(){
    $('#text-container-2').css('animation', 'fadeOut 1s linear');
    $('#text-container-2').css('opacity', '0');
    $('#text-container-2').css('display', 'none');

    $('#img-2').css('display', 'block');
    $('#img-2').css('animation', 'fadeIn 1s linear');
    $('#img-2').css('opacity', '1');
  })

  $('#img-3').click(function(){
    $('#img-3').css('animation', 'fadeOut 1s linear');
    $('#img-3').css('opacity', '0');
    $('#img-3').css('display', 'none');

    $('#text-container-3').css('display', 'block');
    $('#text-container-3').css('animation', 'fadeIn 1s linear');
    $('#text-container-3').css('opacity', '1');
  })

  $('.close-logo').click(function(){
    $('#text-container-3').css('animation', 'fadeOut 1s linear');
    $('#text-container-3').css('opacity', '0');
    $('#text-container-3').css('display', 'none');

    $('#img-3').css('display', 'block');
    $('#img-3').css('animation', 'fadeIn 1s linear');
    $('#img-3').css('opacity', '1');
  })

});