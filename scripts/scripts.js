$(function () {

    $( ".toggle-menu" ).on( "click", function() {
        $('.nav-mobile').toggleClass('nav-hidden');
        $('.toggle').toggleClass('nav-hidden');
    } );

    $(function () {
        $(document).scroll(function () {
          var $nav = $("header");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

    let headerItems = [...document.querySelectorAll('.animate-image')];

    const images = [
        "/images/benefit-1.png",
        "/images/benefit-2.png",
        "/images/benefit-3.png",
    ]

    let options = {
        rootMargin: '-50% 0% -50% 0%',
        threshold: 0.0
    }

    let observer = new IntersectionObserver(showItem, options);

    function showItem(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if ($("#benefit-1").hasClass('active')) {
                    $(".benefit-image img").attr('src', '/images/benefit-1.png')
                }
                else if ($("#benefit-2").hasClass('active')) {
                    $(".benefit-image img").attr('src', '/images/benefit-2.png')
                }
                else if ($("#benefit-3").hasClass('active')) {
                    $(".benefit-image img").attr('src', '/images/benefit-3.png')
                }
                else {
                    $(".benefit-image img").attr('src', '/images/benefit-1.png')
                }
            }
            else {
                entry.target.classList.remove('active');
            }
        });
    }
    headerItems.forEach(item => {
        observer.observe(item);
    })

    var allPanels = $('.accordion div.content').hide();

    function durationSlider(num) {
        var listItems = 3;
        var count = num;
        timerInterval = setInterval(switchAccordion, 7000)
        function switchAccordion() {
            allPanels.removeClass('active').slideUp();
            $('#feature-' + (count + 1)).addClass('active').slideDown();
            if ($("#feature-1").hasClass('active')) {
                $(".feature-image img")
                    .fadeOut(100, function() {
                        $(".feature-image img").attr('src','/images/feature-1.png');
                    })
                    .fadeIn(100);
            }
            else if ($("#feature-2").hasClass('active')) {
                $(".feature-image img")
                    .fadeOut(50, function() {
                        $(".feature-image img").attr('src','/images/feature-2.png');
                    })
                    .fadeIn(100);
            }
            else if ($("#feature-3").hasClass('active')) {
                $(".feature-image img")
                    .fadeOut(100, function() {
                        $(".feature-image img").attr('src','/images/feature-3.png');
                    })
                    .fadeIn(100);
            }
            count += 1;
            if (count >= listItems) {
                count = 0;
            }
        };
    
    }

    function startAccordion() {
        allPanels.removeClass('active').slideUp();
        $('#feature-1').addClass('active').slideDown();
        durationSlider(1);
    }

    startAccordion();

    function changeAccordion(num) {
        clearInterval(timerInterval)
        durationSlider(num)
    }
    
    $('.accordion > div > div > a').click(function () {
        $this = $(this);
        $target = $this.parent().next();

        if (!$target.hasClass('active')) {
            allPanels.removeClass('active').slideUp();
            $target.addClass('active').slideDown();
            if ($("#feature-1").hasClass('active')) {
                $(".feature-image img")
                    .fadeOut(100, function() {
                        $(".feature-image img").attr('src','/images/feature-1.png');
                    })
                    .fadeIn(100);
                    changeAccordion(1)
            }
            else if ($("#feature-2").hasClass('active')) {
                $(".feature-image img")
                    .fadeOut(50, function() {
                        $(".feature-image img").attr('src','/images/feature-2.png');
                    })
                    .fadeIn(100);
                    changeAccordion(2)
            }
            else if ($("#feature-3").hasClass('active')) {
                $(".feature-image img")
                    .fadeOut(100, function() {
                        $(".feature-image img").attr('src','/images/feature-3.png');
                    })
                    .fadeIn(100);
                    changeAccordion(0)
            }
        }

        return false;
    });

    
  
});