
(function ($) {
  $(window).on('load', function(){
    $(".loader_icon").delay(600).fadeOut("slow");
    $(".loader").delay(600).fadeOut("slow");
  });
  $(document).ready(function () {
    // Adding piling.js
    (function () {
      if($('#pagepiling_1').length){
        $('#pagepiling_1').pagepiling({
          scrollingSpeed: 1000,
          anchors: ['page1-1', 'page1-2' , 'page1-3', 'page1-4', 'page1-5', 'page1-6', 'page1-7', 'page1-8'],
          onLeave: direction 
        });
        $.fn.pagepiling.setAllowScrolling(false);
        $.fn.pagepiling.setMouseWheelScrolling(false);
        $.fn.pagepiling.setKeyboardScrolling(false);
        $('.slider__submit button').on('click', function(e){
          e.preventDefault
          $.fn.pagepiling.moveSectionDown();
        })
        $('.header__back-link').on('click', function(e){
          e.preventDefault
          $.fn.pagepiling.moveSectionUp();
        })
      }

      if($('#pagepiling_2').length){
        $('#pagepiling_2').pagepiling({
          scrollingSpeed: 1000,
          anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
          onLeave: direction 
        });
        $.fn.pagepiling.setAllowScrolling(false);
        $.fn.pagepiling.setMouseWheelScrolling(false);
        $.fn.pagepiling.setKeyboardScrolling(false);
        $('.slider__submit button').on('click', function(e){
          e.preventDefault
          $.fn.pagepiling.moveSectionDown();
        })
        $('.header__back-link').on('click', function(e){
          e.preventDefault
          $.fn.pagepiling.moveSectionUp();
        })
      }


      function direction(index, nextIndex, direction) {
          if (direction === 'down') {
            $('.active').nextAll('.pp-section').css("transform", "translate3d(0px, 100%, 0px)");
            $('.active').css("transform", "translate3d(0px, 0px, 0px)");
            $('.active').removeClass('hidden');
          }
          if (direction === 'up') {
            $('.active').next('.section').addClass('hidden');
            $('.active').removeClass('hidden');
          }
          if( $('.pp-section.active').hasClass('question_blue') ){
            $('#pp-nav').addClass('blue_bg').removeClass('pink_bg orange_bg')
          }
          else if($('.pp-section.active').hasClass('question_pink-blue') ){
            $('#pp-nav').addClass('orange_bg').removeClass('pink_bg blue_bg ')
          }
          else if($('.pp-section.active').hasClass('question_pink') ){
            $('#pp-nav').addClass('pink_bg').removeClass('blue_bg orange_bg')
          }
          else if($('.pp-section.active').hasClass('question_green') ){
            $('#pp-nav').addClass('blue_bg').removeClass('pink_bg orange_bg')
          }
          else if($('.pp-section.active').hasClass('question_orange') ){
            $('#pp-nav').addClass('orange_bg').removeClass('pink_bg blue_bg')
          }
        }
      if( $('.pp-section.active').hasClass('question_blue') ){
        $('#pp-nav').addClass('blue_bg').removeClass('pink_bg orange_bg')
      }
      else if($('.pp-section.active').hasClass('question_pink-blue') ){
        $('#pp-nav').addClass('orange_bg').removeClass('pink_bg blue_bg ')
      }
      else if($('.pp-section.active').hasClass('question_pink') ){
        $('#pp-nav').addClass('pink_bg').removeClass('blue_bg orange_bg')
      }
      else if($('.pp-section.active').hasClass('question_green') ){
        $('#pp-nav').addClass('blue_bg').removeClass('pink_bg orange_bg')
      }
      else if($('.pp-section.active').hasClass('question_orange') ){
        $('#pp-nav').addClass('orange_bg').removeClass('pink_bg blue_bg')
      }


      $('.active').nextAll('.section').addClass('hidden pp-easing');
      $('.active').nextAll('.pp-section').css("transform", "translate3d(0px, 100%, 0px)");

      
    })();

    // Select
    (function(){
      const selectOptions = [
        {
          label: "אדריכל",
          value: "1",
        },
        {
          label: "אדריכל",
          value: "2",
        },
        {
          label: "אדריכל",
          value: "3",
        },
        {
          label: "אדריכל",
          value: "4",
        },
        {
          label: "אדריכל",
          value: "5",
        },
        {
          label: "אדריכל",
          value: "6",
        }
      ];
      
      var instance = new SelectPure(".select__container", {
        options: selectOptions,
        multiple: true,
        autocomplete: true,
        icon: "icon-remove",
        value: ['2','3']
      });
      
    })();

    // Pop-ups
    (function(){
      //Pop-up Question 2/2
      $('.question_2-2 .slider__modal button').on('click', function(e){
        e.preventDefault
        $('.modal_2-2').addClass('modal_2-2_visible');
        $('.wrapper').addClass('wrapper_blur')
      })
      $('.modal_2-2 .modal__close').on('click', function(){
        $('.modal_2-2').removeClass('modal_2-2_visible');
        $('.wrapper').removeClass('wrapper_blur')
      })

      //Pop-up Question 2/3
      $('.question_2-3 .slider__modal button').on('click', function(e){
        e.preventDefault
        $('.modal_2-3').addClass('modal_2-3_visible');
        $('.wrapper').addClass('wrapper_blur')
      })
      $('.modal_2-3 .modal__btn').on('click', function(e){
        e.preventDefault
        $('.modal_2-3').removeClass('modal_2-3_visible');
        $('.wrapper').removeClass('wrapper_blur')
        $.fn.pagepiling.moveSectionDown();
      })

    })();

    // Slider
    (function(){
      const rangeInputs = document.querySelectorAll('#range')
      const numberInput = document.querySelector('#rangenumber')

      function handleInputChange(e) {
        let target = e.target
        if (e.target.type !== 'range') {
          target = document.getElementById('range')
        } 
        const min = target.min
        const max = target.max
        const val = target.value
        
        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
      }

      rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange)
      })

      if($('#rangenumber').length){
        numberInput.addEventListener('input', handleInputChange)
      }
    })();


    (function(){
      
      if($('#chart').length){
        $("#chart_1").circliful({
          animation: 1,
          animationStep: 5,
          foregroundBorderWidth: 1.3,
          backgroundBorderWidth: 1.3,
          percent: 70,
          multiPercentage: 1,
          backgroundColor: '#F2F2F2',
          foregroundColor: '#34C779',
          textSize: 12,
        });
        $("#chart_2").circliful({
          animation: 1,
          animationStep: 5,
          foregroundBorderWidth: 1.4,
          backgroundBorderWidth: 1.4,
          percent: 57,
          multiPercentage: 1,
          backgroundColor: '#F2F2F2',
          foregroundColor: '#FF9556',
          textSize: 12,
        });
        $("#chart_3").circliful({
          animation: 1,
          animationStep: 5,
          foregroundBorderWidth: 1.8,
          backgroundBorderWidth: 1.8,
          percent: 69,
          multiPercentage: 1,
          backgroundColor: '#F2F2F2',
          foregroundColor: '#000000',
          textSize: 12,
        });
        $("#chart_4").circliful({
          animation: 1,
          animationStep: 5,
          foregroundBorderWidth: 2.2,
          backgroundBorderWidth: 2.2,
          percent: 62,
          multiPercentage: 1,
          backgroundColor: '#F2F2F2',
          foregroundColor: '#50C1DC',
          textSize: 12,
        });
        $("#chart_5").circliful({
          animation: 1,
          animationStep: 5,
          foregroundBorderWidth: 2.7,
          backgroundBorderWidth: 2.7,
          percent: 65,
          multiPercentage: 1,
          backgroundColor: '#F2F2F2',
          foregroundColor: '#FFBEC0',
          textSize: 12,
        });
        $("#chart_6").circliful({
          animation: 1,
          animationStep: 5,
          foregroundBorderWidth: 4,
          backgroundBorderWidth: 4,
          percent: 80,
          multiPercentage: 1,
          backgroundColor: '#F2F2F2',
          foregroundColor: '#FFF0F0',
          textSize: 12,
        });
      }
    })();

    (function(){
      $('.investment-offer__chart-header').on('click', function(){
        $('.investment-offer__chart-body-modal').fadeIn()
      })
      $('.investment-offer__chart-body-modal-header-icon').on('click', function(){
        $('.investment-offer__chart-body-modal').fadeOut()
      })
    })();

  });
})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICQoXCIubG9hZGVyX2ljb25cIikuZGVsYXkoNjAwKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIubG9hZGVyXCIpLmRlbGF5KDYwMCkuZmFkZU91dChcInNsb3dcIik7XHJcbiAgfSk7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gQWRkaW5nIHBpbGluZy5qc1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYoJCgnI3BhZ2VwaWxpbmdfMScpLmxlbmd0aCl7XHJcbiAgICAgICAgJCgnI3BhZ2VwaWxpbmdfMScpLnBhZ2VwaWxpbmcoe1xyXG4gICAgICAgICAgc2Nyb2xsaW5nU3BlZWQ6IDEwMDAsXHJcbiAgICAgICAgICBhbmNob3JzOiBbJ3BhZ2UxLTEnLCAncGFnZTEtMicgLCAncGFnZTEtMycsICdwYWdlMS00JywgJ3BhZ2UxLTUnLCAncGFnZTEtNicsICdwYWdlMS03JywgJ3BhZ2UxLTgnXSxcclxuICAgICAgICAgIG9uTGVhdmU6IGRpcmVjdGlvbiBcclxuICAgICAgICB9KTtcclxuICAgICAgICAkLmZuLnBhZ2VwaWxpbmcuc2V0QWxsb3dTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICQuZm4ucGFnZXBpbGluZy5zZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgICAgICAkLmZuLnBhZ2VwaWxpbmcuc2V0S2V5Ym9hcmRTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX3N1Ym1pdCBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHRcclxuICAgICAgICAgICQuZm4ucGFnZXBpbGluZy5tb3ZlU2VjdGlvbkRvd24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5oZWFkZXJfX2JhY2stbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdFxyXG4gICAgICAgICAgJC5mbi5wYWdlcGlsaW5nLm1vdmVTZWN0aW9uVXAoKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZigkKCcjcGFnZXBpbGluZ18yJykubGVuZ3RoKXtcclxuICAgICAgICAkKCcjcGFnZXBpbGluZ18yJykucGFnZXBpbGluZyh7XHJcbiAgICAgICAgICBzY3JvbGxpbmdTcGVlZDogMTAwMCxcclxuICAgICAgICAgIGFuY2hvcnM6IFsncGFnZTEnLCAncGFnZTInLCAncGFnZTMnLCAncGFnZTQnLCAncGFnZTUnXSxcclxuICAgICAgICAgIG9uTGVhdmU6IGRpcmVjdGlvbiBcclxuICAgICAgICB9KTtcclxuICAgICAgICAkLmZuLnBhZ2VwaWxpbmcuc2V0QWxsb3dTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICQuZm4ucGFnZXBpbGluZy5zZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgICAgICAkLmZuLnBhZ2VwaWxpbmcuc2V0S2V5Ym9hcmRTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX3N1Ym1pdCBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHRcclxuICAgICAgICAgICQuZm4ucGFnZXBpbGluZy5tb3ZlU2VjdGlvbkRvd24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5oZWFkZXJfX2JhY2stbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdFxyXG4gICAgICAgICAgJC5mbi5wYWdlcGlsaW5nLm1vdmVTZWN0aW9uVXAoKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgZnVuY3Rpb24gZGlyZWN0aW9uKGluZGV4LCBuZXh0SW5kZXgsIGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XHJcbiAgICAgICAgICAgICQoJy5hY3RpdmUnKS5uZXh0QWxsKCcucHAtc2VjdGlvbicpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZTNkKDBweCwgMTAwJSwgMHB4KVwiKTtcclxuICAgICAgICAgICAgJCgnLmFjdGl2ZScpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpXCIpO1xyXG4gICAgICAgICAgICAkKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xyXG4gICAgICAgICAgICAkKCcuYWN0aXZlJykubmV4dCgnLnNlY3Rpb24nKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiggJCgnLnBwLXNlY3Rpb24uYWN0aXZlJykuaGFzQ2xhc3MoJ3F1ZXN0aW9uX2JsdWUnKSApe1xyXG4gICAgICAgICAgICAkKCcjcHAtbmF2JykuYWRkQ2xhc3MoJ2JsdWVfYmcnKS5yZW1vdmVDbGFzcygncGlua19iZyBvcmFuZ2VfYmcnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZigkKCcucHAtc2VjdGlvbi5hY3RpdmUnKS5oYXNDbGFzcygncXVlc3Rpb25fcGluay1ibHVlJykgKXtcclxuICAgICAgICAgICAgJCgnI3BwLW5hdicpLmFkZENsYXNzKCdvcmFuZ2VfYmcnKS5yZW1vdmVDbGFzcygncGlua19iZyBibHVlX2JnICcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKCQoJy5wcC1zZWN0aW9uLmFjdGl2ZScpLmhhc0NsYXNzKCdxdWVzdGlvbl9waW5rJykgKXtcclxuICAgICAgICAgICAgJCgnI3BwLW5hdicpLmFkZENsYXNzKCdwaW5rX2JnJykucmVtb3ZlQ2xhc3MoJ2JsdWVfYmcgb3JhbmdlX2JnJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYoJCgnLnBwLXNlY3Rpb24uYWN0aXZlJykuaGFzQ2xhc3MoJ3F1ZXN0aW9uX2dyZWVuJykgKXtcclxuICAgICAgICAgICAgJCgnI3BwLW5hdicpLmFkZENsYXNzKCdibHVlX2JnJykucmVtb3ZlQ2xhc3MoJ3BpbmtfYmcgb3JhbmdlX2JnJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYoJCgnLnBwLXNlY3Rpb24uYWN0aXZlJykuaGFzQ2xhc3MoJ3F1ZXN0aW9uX29yYW5nZScpICl7XHJcbiAgICAgICAgICAgICQoJyNwcC1uYXYnKS5hZGRDbGFzcygnb3JhbmdlX2JnJykucmVtb3ZlQ2xhc3MoJ3BpbmtfYmcgYmx1ZV9iZycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBpZiggJCgnLnBwLXNlY3Rpb24uYWN0aXZlJykuaGFzQ2xhc3MoJ3F1ZXN0aW9uX2JsdWUnKSApe1xyXG4gICAgICAgICQoJyNwcC1uYXYnKS5hZGRDbGFzcygnYmx1ZV9iZycpLnJlbW92ZUNsYXNzKCdwaW5rX2JnIG9yYW5nZV9iZycpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZigkKCcucHAtc2VjdGlvbi5hY3RpdmUnKS5oYXNDbGFzcygncXVlc3Rpb25fcGluay1ibHVlJykgKXtcclxuICAgICAgICAkKCcjcHAtbmF2JykuYWRkQ2xhc3MoJ29yYW5nZV9iZycpLnJlbW92ZUNsYXNzKCdwaW5rX2JnIGJsdWVfYmcgJylcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKCQoJy5wcC1zZWN0aW9uLmFjdGl2ZScpLmhhc0NsYXNzKCdxdWVzdGlvbl9waW5rJykgKXtcclxuICAgICAgICAkKCcjcHAtbmF2JykuYWRkQ2xhc3MoJ3BpbmtfYmcnKS5yZW1vdmVDbGFzcygnYmx1ZV9iZyBvcmFuZ2VfYmcnKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoJCgnLnBwLXNlY3Rpb24uYWN0aXZlJykuaGFzQ2xhc3MoJ3F1ZXN0aW9uX2dyZWVuJykgKXtcclxuICAgICAgICAkKCcjcHAtbmF2JykuYWRkQ2xhc3MoJ2JsdWVfYmcnKS5yZW1vdmVDbGFzcygncGlua19iZyBvcmFuZ2VfYmcnKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoJCgnLnBwLXNlY3Rpb24uYWN0aXZlJykuaGFzQ2xhc3MoJ3F1ZXN0aW9uX29yYW5nZScpICl7XHJcbiAgICAgICAgJCgnI3BwLW5hdicpLmFkZENsYXNzKCdvcmFuZ2VfYmcnKS5yZW1vdmVDbGFzcygncGlua19iZyBibHVlX2JnJylcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgICQoJy5hY3RpdmUnKS5uZXh0QWxsKCcuc2VjdGlvbicpLmFkZENsYXNzKCdoaWRkZW4gcHAtZWFzaW5nJyk7XHJcbiAgICAgICQoJy5hY3RpdmUnKS5uZXh0QWxsKCcucHAtc2VjdGlvbicpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZTNkKDBweCwgMTAwJSwgMHB4KVwiKTtcclxuXHJcbiAgICAgIFxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBTZWxlY3RcclxuICAgIChmdW5jdGlvbigpe1xyXG4gICAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIteQ15PXqNeZ15vXnFwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi15DXk9eo15nXm9ecXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLXkNeT16jXmdeb15xcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIteQ15PXqNeZ15vXnFwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiNFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi15DXk9eo15nXm9ecXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCI1XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLXkNeT16jXmdeb15xcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjZcIixcclxuICAgICAgICB9XHJcbiAgICAgIF07XHJcbiAgICAgIFxyXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgU2VsZWN0UHVyZShcIi5zZWxlY3RfX2NvbnRhaW5lclwiLCB7XHJcbiAgICAgICAgb3B0aW9uczogc2VsZWN0T3B0aW9ucyxcclxuICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICBhdXRvY29tcGxldGU6IHRydWUsXHJcbiAgICAgICAgaWNvbjogXCJpY29uLXJlbW92ZVwiLFxyXG4gICAgICAgIHZhbHVlOiBbJzInLCczJ11cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBQb3AtdXBzXHJcbiAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgLy9Qb3AtdXAgUXVlc3Rpb24gMi8yXHJcbiAgICAgICQoJy5xdWVzdGlvbl8yLTIgLnNsaWRlcl9fbW9kYWwgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdFxyXG4gICAgICAgICQoJy5tb2RhbF8yLTInKS5hZGRDbGFzcygnbW9kYWxfMi0yX3Zpc2libGUnKTtcclxuICAgICAgICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyX2JsdXInKVxyXG4gICAgICB9KVxyXG4gICAgICAkKCcubW9kYWxfMi0yIC5tb2RhbF9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5tb2RhbF8yLTInKS5yZW1vdmVDbGFzcygnbW9kYWxfMi0yX3Zpc2libGUnKTtcclxuICAgICAgICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCd3cmFwcGVyX2JsdXInKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy9Qb3AtdXAgUXVlc3Rpb24gMi8zXHJcbiAgICAgICQoJy5xdWVzdGlvbl8yLTMgLnNsaWRlcl9fbW9kYWwgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdFxyXG4gICAgICAgICQoJy5tb2RhbF8yLTMnKS5hZGRDbGFzcygnbW9kYWxfMi0zX3Zpc2libGUnKTtcclxuICAgICAgICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyX2JsdXInKVxyXG4gICAgICB9KVxyXG4gICAgICAkKCcubW9kYWxfMi0zIC5tb2RhbF9fYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdFxyXG4gICAgICAgICQoJy5tb2RhbF8yLTMnKS5yZW1vdmVDbGFzcygnbW9kYWxfMi0zX3Zpc2libGUnKTtcclxuICAgICAgICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCd3cmFwcGVyX2JsdXInKVxyXG4gICAgICAgICQuZm4ucGFnZXBpbGluZy5tb3ZlU2VjdGlvbkRvd24oKTtcclxuICAgICAgfSlcclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIFNsaWRlclxyXG4gICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnN0IHJhbmdlSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3JhbmdlJylcclxuICAgICAgY29uc3QgbnVtYmVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZ2VudW1iZXInKVxyXG5cclxuICAgICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgICAgIGlmIChlLnRhcmdldC50eXBlICE9PSAncmFuZ2UnKSB7XHJcbiAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2UnKVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY29uc3QgbWluID0gdGFyZ2V0Lm1pblxyXG4gICAgICAgIGNvbnN0IG1heCA9IHRhcmdldC5tYXhcclxuICAgICAgICBjb25zdCB2YWwgPSB0YXJnZXQudmFsdWVcclxuICAgICAgICBcclxuICAgICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAodmFsIC0gbWluKSAqIDEwMCAvIChtYXggLSBtaW4pICsgJyUgMTAwJSdcclxuICAgICAgfVxyXG5cclxuICAgICAgcmFuZ2VJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBoYW5kbGVJbnB1dENoYW5nZSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmKCQoJyNyYW5nZW51bWJlcicpLmxlbmd0aCl7XHJcbiAgICAgICAgbnVtYmVySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBoYW5kbGVJbnB1dENoYW5nZSlcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuXHJcblxyXG4gICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgIFxyXG4gICAgICBpZigkKCcjY2hhcnQnKS5sZW5ndGgpe1xyXG4gICAgICAgICQoXCIjY2hhcnRfMVwiKS5jaXJjbGlmdWwoe1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiAxLFxyXG4gICAgICAgICAgYW5pbWF0aW9uU3RlcDogNSxcclxuICAgICAgICAgIGZvcmVncm91bmRCb3JkZXJXaWR0aDogMS4zLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEJvcmRlcldpZHRoOiAxLjMsXHJcbiAgICAgICAgICBwZXJjZW50OiA3MCxcclxuICAgICAgICAgIG11bHRpUGVyY2VudGFnZTogMSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGMkYyRjInLFxyXG4gICAgICAgICAgZm9yZWdyb3VuZENvbG9yOiAnIzM0Qzc3OScsXHJcbiAgICAgICAgICB0ZXh0U2l6ZTogMTIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNjaGFydF8yXCIpLmNpcmNsaWZ1bCh7XHJcbiAgICAgICAgICBhbmltYXRpb246IDEsXHJcbiAgICAgICAgICBhbmltYXRpb25TdGVwOiA1LFxyXG4gICAgICAgICAgZm9yZWdyb3VuZEJvcmRlcldpZHRoOiAxLjQsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQm9yZGVyV2lkdGg6IDEuNCxcclxuICAgICAgICAgIHBlcmNlbnQ6IDU3LFxyXG4gICAgICAgICAgbXVsdGlQZXJjZW50YWdlOiAxLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0YyRjJGMicsXHJcbiAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3I6ICcjRkY5NTU2JyxcclxuICAgICAgICAgIHRleHRTaXplOiAxMixcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2NoYXJ0XzNcIikuY2lyY2xpZnVsKHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogMSxcclxuICAgICAgICAgIGFuaW1hdGlvblN0ZXA6IDUsXHJcbiAgICAgICAgICBmb3JlZ3JvdW5kQm9yZGVyV2lkdGg6IDEuOCxcclxuICAgICAgICAgIGJhY2tncm91bmRCb3JkZXJXaWR0aDogMS44LFxyXG4gICAgICAgICAgcGVyY2VudDogNjksXHJcbiAgICAgICAgICBtdWx0aVBlcmNlbnRhZ2U6IDEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjJGMkYyJyxcclxuICAgICAgICAgIGZvcmVncm91bmRDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgdGV4dFNpemU6IDEyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjY2hhcnRfNFwiKS5jaXJjbGlmdWwoe1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiAxLFxyXG4gICAgICAgICAgYW5pbWF0aW9uU3RlcDogNSxcclxuICAgICAgICAgIGZvcmVncm91bmRCb3JkZXJXaWR0aDogMi4yLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEJvcmRlcldpZHRoOiAyLjIsXHJcbiAgICAgICAgICBwZXJjZW50OiA2MixcclxuICAgICAgICAgIG11bHRpUGVyY2VudGFnZTogMSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGMkYyRjInLFxyXG4gICAgICAgICAgZm9yZWdyb3VuZENvbG9yOiAnIzUwQzFEQycsXHJcbiAgICAgICAgICB0ZXh0U2l6ZTogMTIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNjaGFydF81XCIpLmNpcmNsaWZ1bCh7XHJcbiAgICAgICAgICBhbmltYXRpb246IDEsXHJcbiAgICAgICAgICBhbmltYXRpb25TdGVwOiA1LFxyXG4gICAgICAgICAgZm9yZWdyb3VuZEJvcmRlcldpZHRoOiAyLjcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQm9yZGVyV2lkdGg6IDIuNyxcclxuICAgICAgICAgIHBlcmNlbnQ6IDY1LFxyXG4gICAgICAgICAgbXVsdGlQZXJjZW50YWdlOiAxLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0YyRjJGMicsXHJcbiAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3I6ICcjRkZCRUMwJyxcclxuICAgICAgICAgIHRleHRTaXplOiAxMixcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2NoYXJ0XzZcIikuY2lyY2xpZnVsKHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogMSxcclxuICAgICAgICAgIGFuaW1hdGlvblN0ZXA6IDUsXHJcbiAgICAgICAgICBmb3JlZ3JvdW5kQm9yZGVyV2lkdGg6IDQsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQm9yZGVyV2lkdGg6IDQsXHJcbiAgICAgICAgICBwZXJjZW50OiA4MCxcclxuICAgICAgICAgIG11bHRpUGVyY2VudGFnZTogMSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGMkYyRjInLFxyXG4gICAgICAgICAgZm9yZWdyb3VuZENvbG9yOiAnI0ZGRjBGMCcsXHJcbiAgICAgICAgICB0ZXh0U2l6ZTogMTIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcblxyXG4gICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5pbnZlc3RtZW50LW9mZmVyX19jaGFydC1oZWFkZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5pbnZlc3RtZW50LW9mZmVyX19jaGFydC1ib2R5LW1vZGFsJykuZmFkZUluKClcclxuICAgICAgfSlcclxuICAgICAgJCgnLmludmVzdG1lbnQtb2ZmZXJfX2NoYXJ0LWJvZHktbW9kYWwtaGVhZGVyLWljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5pbnZlc3RtZW50LW9mZmVyX19jaGFydC1ib2R5LW1vZGFsJykuZmFkZU91dCgpXHJcbiAgICAgIH0pXHJcbiAgICB9KSgpO1xyXG5cclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIl19
