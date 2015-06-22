# noDoubt Full Slider

Full Slider utilizando o Vue.js + CSS3

## Como usar

### Insira no seu html os arquivos: 
- ndslider.min.css
- vue.ndslider.min.js

--

### Logo após basta alimentar o slide

```
$ndSlider.items = [
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
];
```

--

### Inicia-lo, através da var $ndSlider

```
$ndSlider.initSlider();
```

### Loading automático

O Método initSlider() até o momento recebe 2 parâmetros:

1º = autoload
- true
- false (default)

``` Ex. $ndSlider.initSlider(true) ```

2º = delay (número inteiro em segundos)
- 10 (default)

```
Ex. $ndSlider.initSlider(true) // um delay de 10 segundos por padrão
Ex. $ndSlider.initSlider(true, 8) // um delay de 8 segundos
```
--

### Quem quiser contribuir a fim de melhorar, otimizar, corrigir ou adaptar, fiquem a vontade!

--

Licença: [MIT](http://opensource.org/licenses/MIT)

