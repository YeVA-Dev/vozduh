(function($) {
	$.fn.myCarousel = function(options) {
		var settings = {
		    visible : 3,
		    rotateBy : 1,
		    speed : 500,
		    timeInterval : 3000,
		    btnNext : null,
		    btnPrev : null,
		    auto : null,
		    backSlide : false
		};

		return this.each(function() {
			if (options) {
				$.extend(settings, options);
			}
			var $this = $(this);
			var $carousel = $this.children(':first');
			var itemsTotal = $carousel.children().length;
			var thisWidth = $this.width();
			var running = false;
			var intID = null;
			$this.css({
			    'position' : 'relative',
			    'overflow' : 'hidden'
			});
			$carousel.css({
			    'position' : 'relative',
			    'width' : 32767 + 'px',
			    'left' : 0
			});
			var $w1=0;
			$carousel.children().hide().each(function(i, el) {
				$w1 += $(el).width();
				if (thisWidth > $w1)
					$(el).fadeIn();
			});

			function slide(dir) {
				var direction = !dir ? -1 : 1;
				var leftIndent = 0;
				if (!running) {
					running = true;
					if (intID) {
						window.clearInterval(intID);
					}
					var $newElement = null;
					var $w = 0;
					if (!dir) {
						$newElement = $carousel.children().slice(0, settings.rotateBy);
						$carousel.children(':last').after($newElement.clone(true).hide());
						$carousel.children().slice(settings.rotateBy).each(function(i, el) {
							$w += $(el).width();
							if (thisWidth < $w)
								$(el).fadeOut();
							else
								$(el).fadeIn();
						});
					} else {
						$newElement = $carousel.children().slice(itemsTotal - settings.rotateBy, itemsTotal);
						$carousel.children(':first').before($newElement.clone(true).hide());
						$carousel.css('left', -$newElement.width() + 'px');
						$carousel.children().slice(0).each(function(i, el) {
							$w += $(el).width();
							if (thisWidth < $w)
								$(el).fadeOut();
							else
								$(el).fadeIn();
						});
					}
					leftIndent = parseInt($carousel.css('left')) + ($newElement.width() * direction);

					$carousel.animate({
						'left' : leftIndent
					}, {
					    queue : true,
					    duration : settings.speed,
					    complete : function() {
						    if (!dir)
							    $carousel.css('left', 0);
						    $newElement.remove();
						    if (settings.auto) {
							    intID = window.setInterval(function() {
								    slide(settings.backslide);
							    }, settings.timeInterval);
						    }
						    running = false;
					    }
					});
				}
				return false;
			}
			$(settings.btnNext).click(function() {
				return slide(false);
			});
			$(settings.btnPrev).click(function() {
				return slide(true);
			});
			if (settings.auto) {
				intID = window.setInterval(function() {
					slide(settings.backslide);
				}, settings.timeInterval);
			}
		});
	};
})(jQuery);