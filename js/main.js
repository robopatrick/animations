		//Custom Pager Slider / Testimonials Slider
		if($('.banner-slider').length){
			var customPagerSlider = $(".banner-slider").bxSlider({
				adaptiveHeight: true,
				auto:true,
				controls: true,
				pause: 3000,
				speed: 1000,
				nextText: '<span class="control-icon fa fa-angle-right"></span>',
				prevText: '<span class="control-icon fa fa-angle-left"></span>',
				pagerCustom: '#banner-pager',
				//onSlideAfter: function() {
					//customPagerSlider.stopAuto();
					//customPagerSlider.startAuto();
				//}
			});
        }
        	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
    }

    function showFunction() {
      document.getElementById("dropDown").classList.toggle("show");
    
    }
    window.onload = function(){
    
      const menuBtn = document.querySelector('.ham');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen) {
          menuBtn.classList.add('open');
          menuOpen = true;
      } else {
          menuBtn.classList.remove('open');
          menuOpen = false;
      }
    });
    
    
      document.querySelector('flex__column').addEventListener('click', 
    function(e){
     console.log("container clicked");
    
      document.getElementById("dropDown").classList.remove('show');
      document.querySelector('.ham').classList.remove('open')
      }
    )};
    window.addEventListener("scroll", function(){
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
  })