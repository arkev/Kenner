$(document).ready(function () {
	//Inicializar WOW
	new WOW().init();
});

//ir a arriba al dar click en la segunda llamada a la acción
$('.irPaRriba').click(function go2Top() {
	$("html, body").animate({
		scrollTop: 0
	}, 600);
	return false;
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
	window.location = "https://api.whatsapp.com/send?phone=5218126681066";
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
