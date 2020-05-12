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
  ctx.fillRect(560, 48, 2, 20);

  ctx.fillStyle = '#008000'
  ctx.fillRect(562, 53, 40, 15);

  ctx.fillStyle="#FF4422";
  ctx.fillRect(600, 48, 2, 20);

  ctx.fillRect(800, 48, 2, 75);

  ctx.moveTo(900, 50);
  ctx.arc(900, 50, 10, 0, Math.PI * 2, true);
  ctx.fillRect(1028, 48, 2, 20);

  ctx.fillStyle = '#008000'
  ctx.fillRect(1030, 53, 20, 15);

  ctx.fillStyle="#FF4422";
  ctx.fillRect(1050, 48, 2, 20);
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

});