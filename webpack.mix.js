let mix = require('laravel-mix');



// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');

mix.styles(['resources/assets/css/material-dashboard.css',
			'resources/assets/css/estilos.css'],'public/css/main.css')
.scripts(['resources/assets//js/jquery.min.js',
	'resources/assets/js/popper.min.js',
	'resources/assets/js/bootstrap-material-design.min.js',
	'resources/assets/js/perfect-scrollbar.jquery.min.js',
	'resources/assets/js/chartist.min.js',
	'resources/assets/js/bootstrap-notify.js',
	'resources/assets/js/material-dashboard.min.js'],'public/js/main.js');
