var $ndSlider = new Vue({
	
	el: "#nd-slider",

	data: {
		items: [
			{
				title : "Você não irá acreditar",
				subTitle: "fazemos acontecer",
				bgImage: "img/img1.jpg"
			},
			{
				title : "Você não irá acreditar 2",
				subTitle: "fazemos acontecer 2",
				bgImage: "img/img2.jpg"
			},
			{
				title : "Você não irá acreditar 3",
				subTitle: "fazemos acontecer 3",
				bgImage: "img/img3.jpg"
			}
		],
		showSlider : 0,
		limitSlider : '',
		delay : 5,
		autoload: true
	},

	ready: function(){
		this.transitionSlider();
		if(!!this.autoload){	
			setInterval(this.autoloadSlider, this.delay * 1000);	
		}
	},

	methods: {
		transitionSlider: function(){
			var elem = document.getElementById('nd-slider');
			var countItems = elem.getElementsByClassName('nds-item').length - 1; 
			this.limitSlider = countItems;			
		},

		autoloadSlider : function(){
			if(this.showSlider == this.limitSlider){
				this.showSlider = 0;
				return;
			}
			++this.showSlider;	
			console.log(this.showSlider);				
		},

		prev : function(){
			if(this.showSlider == 0){
				this.showSlider = this.limitSlider;
				return;
			}
			--this.showSlider;
		},

		next : function(){
			if(this.showSlider == this.limitSlider){
				this.showSlider = 0;
				return;
			}
			++this.showSlider;
		}

	}
});

// autoload
//setInterval(function(){
//	if(!!$ndSlider.autoload){
//		$ndSlider.autoloadSlider();
//	}
//}, $ndSlider.intervalSlider * 1000);