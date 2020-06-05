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

  ctx.fillRect(750, 48, 2, 75);

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
  /**
   * Reveal
   */
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
          if(!_item.revealed && limit > _item.top + _item.height * 0.2)
          {
              _item.revealed = true
              _item.element.classList.add('revealed')
          }
      }
  })

  const lazyLoadElements = document.querySelectorAll('.lazy-load')

  for(const _lazyLoadElement of lazyLoadElements)
  {
      const loaded = () =>
      {
          window.setTimeout(() =>
          {
              _lazyLoadElement.classList.add('loaded')
          }, Math.random() * 1000)
      }

      if(_lazyLoadElement.complete)
      {
          loaded()
      }
      else
      {
          _lazyLoadElement.addEventListener('load', loaded)
      }
  }

  //Animation Zelda
  if(screen.width > 900)
  {
    $("#link-1").mouseenter(() => $('#perso3').css('display', 'block'));
    $("#link-1").mouseleave(() => $('#perso3').css('display', 'none'));

    $("#link-2").mouseenter(() => $('#perso4').css('display', 'block'));
    $("#link-2").mouseleave(() => $('#perso4').css('display', 'none'));

    $("#link-3").mouseenter(() => $('#perso5').css('display', 'block'));
    $("#link-3").mouseleave(() => $('#perso5').css('display', 'none'));
  }

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

  window.onresize = showImage;

  function showImage()
  {
    $('#text-container-1').css('display', 'none');
    $('#text-container-2').css('display', 'none');
    $('#text-container-3').css('display', 'none');

    if(window.innerWidth > 800)
    {

      $('#img-1').css({'display' : 'block',
                                  'animation' : 'fadeIn 1s linear',
                                  'opacity' : '1'});

      $('#img-2').css({'display' : 'block',
                                  'animation' : 'fadeIn 1s linear',
                                  'opacity' : '1'});

      $('#img-3').css({'display' : 'block',
                                  'animation' : 'fadeIn 1s linear',
                                  'opacity' : '1'});

      $('#responsive-img-1').css('display', 'none');
      $('#responsive-img-2').css('display', 'none');
      $('#responsive-img-3').css('display', 'none');
      
      $('#responsive2-img-1').css('display', 'none');
      $('#responsive2-img-2').css('display', 'none');
      $('#responsive2-img-3').css('display', 'none');
    }

    else if(window.innerWidth > 450)
    {
      $('#img-1').css('display', 'none');
      $('#img-2').css('display', 'none');
      $('#img-3').css('display', 'none');

      $('#responsive-img-1').css({'display' : 'block',
                                  'animation' : 'fadeIn 1s linear',
                                  'opacity' : '1'});

      $('#responsive-img-2').css({'display' : 'block',
                                  'animation' : 'fadeIn 1s linear',
                                  'opacity' : '1'});

      $('#responsive-img-3').css({'display' : 'block',
                                  'animation' : 'fadeIn 1s linear',
                                  'opacity' : '1'});

      $('#responsive2-img-1').css('display', 'none');
      $('#responsive2-img-2').css('display', 'none');
      $('#responsive2-img-3').css('display', 'none');
    }

    else
    {
      $('#img-1').css('display', 'none');
      $('#img-2').css('display', 'none');
      $('#img-3').css('display', 'none');

      $('#responsive-img-1').css('display', 'none');
      $('#responsive-img-2').css('display', 'none');
      $('#responsive-img-3').css('display', 'none');

      $('#responsive2-img-1').css({'display' : 'block',
                                  'animation' : 'fadeIn 1s linear',
                                  'opacity' : '1'});

      $('#responsive2-img-2').css({'display' : 'block',
                                  'animation' : 'fadeIn 1s linear',
                                  'opacity' : '1'});

      $('#responsive2-img-3').css({'display' : 'block',
                                  'animation' : 'fadeIn 1s linear',
                                  'opacity' : '1'});
    }
  }
  
  $('#img-1').click(function(){
    $('#img-1').css({'animation' : 'fadeOut 1s linear',
                    'opacity' : '0',
                    'display' : 'none'});

    $('#text-container-1').css({'display' : 'block',
                              'animation' : 'fadeIn 1s linear',
                              'opacity' : '1'});
  })

  $('.close-logo').click(function(){
    $('#text-container-1').css({'animation' : 'fadeOut 1s linear',
                                'opacity' : '0',
                                'display' : 'none'});

    $('#img-1').css({'display' : 'block',
                    'animation' : 'fadeIn 1s linear',
                    'opacity' :'1'});
  })

  $('#img-2').click(function(){
    $('#img-2').css({'animation' : 'fadeOut 1s linear',
                    'opacity' : '0',
                    'display' : 'none'});

    $('#text-container-2').css({'display' : 'block',
                              'animation' : 'fadeIn 1s linear',
                              'opacity' : '1'});
  })

  $('.close-logo').click(function(){
    $('#text-container-2').css({'animation' : 'fadeOut 1s linear',
                                'opacity' : '0',
                                'display' : 'none'});

    $('#img-2').css({'display' : 'block',
                    'animation' : 'fadeIn 1s linear',
                    'opacity' :'1'});
  })

  $('#img-3').click(function(){
    $('#img-3').css({'animation' : 'fadeOut 1s linear',
                    'opacity' : '0',
                    'display' : 'none'});

    $('#text-container-3').css({'display' : 'block',
                              'animation' : 'fadeIn 1s linear',
                              'opacity' : '1'});
  })

  $('.close-logo').click(function(){
    $('#text-container-3').css({'animation' : 'fadeOut 1s linear',
                                'opacity' : '0',
                                'display' : 'none'});

    $('#img-3').css({'display' : 'block',
                    'animation' : 'fadeIn 1s linear',
                    'opacity' :'1'});
  })
});