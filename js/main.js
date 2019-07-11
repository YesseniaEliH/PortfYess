(function(){
	$("#menu-opener").on("click",function() {
		$("#responsive-nav ul").toggleClass("active");
		$(this).toggleClass("glyphicon-menu-hamburger")
	})
	consoleText(['Developer','Passionate', 'Curious'], 'text',['#F4AEB6']);
	var con = document.getElementById('console-menu');
	function consoleText(words, id, colors) {
	  if (colors === undefined) colors = ['#fff'];
	  var visible = true;
	  var letterCount = 1;
	  var x = 1;
	  var waiting = false;
	  var target = document.getElementById(id)
	  target.setAttribute('style', 'color:' + colors[0])
	  window.setInterval(function() {

	    if (letterCount === 0 && waiting === false) {
	      waiting = true;
	      target.innerHTML = words[0].substring(0, letterCount)
	      window.setTimeout(function() {
	        var usedColor = colors.shift();
	        colors.push(usedColor);
	        var usedWord = words.shift();
	        words.push(usedWord);
	        x = 1;
	        target.setAttribute('style', 'color:' + colors[0])
	        letterCount += x;
	        waiting = false;
	      }, 1000)
	    } else if (letterCount === words[0].length + 1 && waiting === false) {
	      waiting = true;
	      window.setTimeout(function() {
	        x = -1;
	        letterCount += x;
	        waiting = false;
	      }, 1000)
	    } else if (waiting === false) {
	      target.innerHTML = words[0].substring(0, letterCount)
	      letterCount += x;
	    }
	  }, 120)
	  window.setInterval(function() {
	    if (visible === true) {
	      con.className = 'console-underscore hidden';
	      visible = false;

	    } else {
	      con.className = 'console-underscore';
	      visible = true;
	    }
	  }, 400)
	}
	let sticky=false;

	$(window).scroll((ev)=>{
				const inBottom = isInBottom();
				if(!sticky && inBottom){
					sticky= true
					stickNavigation()
				}
				if(!inBottom && sticky){
					sticky= false
					unStickNavigation()
				}
	})


		const image_counter = parseInt($("[data-name='image_counter']").attr("content") - 1);
		let current_position = 0;
		setInterval(()=>{
			if(current_position < image_counter){
				current_position++;
			}else{
				current_position = 0;
			}
			$("#sobremi .inner").css({
				left: "-"+(current_position * 100)+"%"
			});
		},3000)


	function isOpen(){
		const current_hour = (new Date()).getHours();
		if(current_hour < 17 || current_hour > 23){
			$("#is_open .text").html("Cerrado ahora <br> Abierto de 5:00pm a 11:00pm")
		}
	}

	function isInBottom(){
		const $description = $("#description");
		const descriptionHeight = $description.height()
		return $(window).scrollTop() > $(window).height() - descriptionHeight*2;
	}

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").addClass("hidden")
		$("#sticky-navigation").removeClass("hidden")
	}
	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute");
		$("#navigation").removeClass("hidden")
		$("#sticky-navigation").addClass("hidden")
	}
	// $(".skill").hover(function(){
	// 	$(this).siblings('.hoverhide').removeClass("hidden")
	// 	}, function(){
	// 		$(this).siblings('.hoverhide').addClass("hidden")
	// });

	$('.bar-percentage[data-percentage]').each(function () {
		var progress = $(this);
		var percentage = Math.ceil($(this).attr('data-percentage'));
		$({countNum: 0}).animate({countNum: percentage}, {
			duration: 2000,
			easing:'linear',
			step: function() {
				// What todo on every count
				var pct = Math.floor(this.countNum) + '%';
				progress.text(pct) && progress.siblings().children().css('width',pct);
			}
		});
	});
})();
function openChat(){
	
	$('#maximizeChat').click();

}