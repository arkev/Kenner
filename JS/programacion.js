$(document).ready(function () {
	//Inicializar WOW
	new WOW().init();
});

//ir a arriba al dar click en la segunda llamada a la acción
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//Ir a Twitter
$(".twitter").on('click', function () {
	window.location = "https://twitter.com/";
});

//Ir a Facebook
$(".facebook").on('click', function () {
	window.location = "https://www.facebook.com/Kenner-Accounting-Tax-and-Services-1545385835576829/";
});

//Ir a Whatsapp
$(".whatsapp").on('click', function () {
	window.location = "https://api.whatsapp.com/send?phone=5218114894056";
});

//Formulario de Agile
(function (a) {
	var b = a.onload,
		p = true;
	isCaptcha = false;
	if (p) {
		a.onload = "function" != typeof b ? function () {
			try {
				_agile_load_form_fields()
			} catch (a) {}
		} : function () {
			b();
			try {
				_agile_load_form_fields()
			} catch (a) {}
		}
	};
	var formLen = document.forms.length;
	for (i = 0; i < formLen; i++) {
		if (document.forms.item(i).getAttribute("id") == "agile-form") {
			a.document.forms.item(i).onsubmit = function (a) {
				a.preventDefault();
				try {
					_agile_synch_form_v5(this)
				} catch (b) {
					this.submit()
				}
			}
		}
	}
})(window);
