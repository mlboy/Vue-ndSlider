var $ndSlider = new Vue({
	
	el: "#nd-slider",

	data: {
		items: [
			{
				title : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus.",
				subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
				bgImage: "img/img1.jpg"
			},
			{
				title : "mattis non, imperdiet vitae, tellus. Sed odio est, auctor ac.",
				subTitle: "Morbi ut mi.",
				bgImage: "img/img2.jpg"
			},
			{
				title : "elementum et, bibendum at, posuere sit amet, nibh",
				subTitle: "Lorem ipsum dolor sit amet, consectetuer.",
				bgImage: "img/img3.jpg"
			}
		],
		showSlider : 0,
		limitSlider : '',
		delay : 10,
		autoload : false,
		varInterval : ''
	},

	ready: function(){
		this.transitionSlider();
		this.interval();
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
		},

		interval : function(){
			if(this.autoload){	
				this.varInterval = setInterval(this.autoloadSlider, this.delay * 1000);
			}
		},

		prev : function(){
			if(this.showSlider == 0){
				this.showSlider = this.limitSlider;				
				return;
			}			
			clearInterval(this.varInterval);
			this.interval();
			--this.showSlider;
		},

		next : function(){
			if(this.showSlider == this.limitSlider){
				this.showSlider = 0;
				return;
			}
			clearInterval(this.varInterval);
			this.interval();
			++this.showSlider;
		}

	}
});