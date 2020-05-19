"use strict"

let s = 1;
let timerId;
activeSlide()
autoslide()

function slideClick(arg) {
	s=arg
	$('header').css({'background-image': 'url(images/header'+s+'.png)'})
	activeSlide()
	clearTimeout(timerId)
	autoslide()
	// if(arg==1) {
		// $('header').css({'background-image': 'url(images/header1.png)'})
	// } else if(arg==2) {
		// $('header').css({'background-image': 'url(images/header2.png)'})
	// } else if(arg==3) {
		// $('header').css({'background-image': 'url(images/header3.png)'})
	// } else  {
		// $('header').css({'background-image': 'url(images/header4.png)'})
	
	// }
}

function autoslide() {
	timerId=setTimeout(slide,5000) 
}

function slide() {
	s++
	if(s>4) {
		s=1
		}
	$('header').css({'background-image': 'url(images/header'+s+'.png)'})
	activeSlide()
	clearTimeout(timerId)
	autoslide()
}

function activeSlide() {
		$('.dot').css({'border-color': '#fff',
			'background': 'transparent'})
	
		$('.dot:eq('+(s-1)+')').css({'border-color': '#18989a',
		'background': '#18989a'})
	
}

function Scroll(id) {
		let a=$(id).offset().top				
		
		$('html,body').animate({scrollTop:a},2000)
	}
	
	
$(document).scroll(function(){	
	if($('#home').offset().top>=120) {
			$('#home').css({'background-color':'#322A5D'})
		} else {
			$('#home').css({'background-color':'transparent'})
		}
	
})

