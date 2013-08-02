!function($) {
	$(function() {
		var $markup = '<div class="pp_pic_holder"> \
			<a class="pp_close" href="#">Закрыть</a> \
			<div class="pp_top"> \
				<div class="pp_left"></div> \
				<div class="pp_middle"></div> \
				<div class="pp_right"></div> \
			</div> \
			<div class="pp_content_container"> \
				<div class="pp_left"> \
					<div class="pp_right"> \
						<div class="pp_content"> \
							<div class="pp_loaderIcon"></div> \
							<div class="pp_fade"> \
								<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
								<div class="pp_hoverContainer"> \
									<a class="pp_next" href="#"><span> </span></a> \
									<a class="pp_previous" href="#"><span></span></a> \
								</div> \
								<div id="pp_full_res"></div> \
								<div class="pp_details"> \
									<table><tr><td class="head"><span class="ppt">&nbsp;</span></td> \
									<td class="dsc"><span class="pp_description"></span></td></tr></table> \
								</div> \
							</div> \
						</div> \
					</div> \
				</div> \
			</div> \
			<div class="pp_bottom"> \
				<div class="pp_left"></div> \
				<div class="pp_middle"></div> \
				<div class="pp_right"></div> \
			</div> \
		</div> \
		<div class="pp_overlay"></div>';

		$("a[rel^='prettyPhoto']").prettyPhoto({
			opacity : 0.74,
			social_tools : "",
			gallery_markup : "",
			theme : "facebook",
			autoplay: false,
			overlay_gallery: false, 
			markup : $markup
		});
		
	});
}(window.jQuery);
