var $ndSlider = new Vue({
	
	el: "#nd-slider",

	data: {
		items: [],
		showSlider : 0,
		limitSlider : '',
		delay : '',
		autoload : '',
		varInterval : ''
	},

	methods: {
		initSlider: function(autoload, delay){
			// Pega a quantidade de itens tem no slide 
			this.limitSlider = this.items.length - 1;
			// atribui autoload (true or false)
			this.autoload = !!autoload ? true : false;
			// atribui delay, default 10
			this.delay = !!delay ? delay : 10;
			// executa autoload, caso true
			if(this.autoload){
				this.varInterval = setInterval(this.autoloadSlider, this.delay * 1000);
			}						
		},

		autoloadSlider : function(){
			if(this.showSlider == this.limitSlider){
				this.showSlider = 0;
				return;
			}
			++this.showSlider;	
		},

		resetInterval: function(){	
			if(this.autoload){	
				clearInterval(this.varInterval);
				this.varInterval = setInterval(this.autoloadSlider, this.delay * 1000);
			}
		},

		prev : function(){
			if(this.showSlider == 0){
				this.showSlider = this.limitSlider;	
				this.resetInterval();			
				return;
			}		
			this.resetInterval();		
			--this.showSlider;
		},

		next : function(){
			if(this.showSlider == this.limitSlider){
				this.showSlider = 0;
				this.resetInterval();
				return;
			}
			this.resetInterval();
			++this.showSlider;
		}

	},

	// template do slider
	template: '<div v-repeat="item: items" class="nds-item" v-class="nds-active: $index==showSlider"><div class="nds-titles"><h2 v-text="item.title" class="nds-title"></h2><span v-text="item.subTitle" class="nds-subtitle"></span></div><div class="nds-bgimage" style="background-image: url({{item.bgImage}});"></div></div><span class="nds-prev" v-on="click: prev">&laquo;</span><span class="nds-next" v-on="click: next">&raquo;</span>'

});