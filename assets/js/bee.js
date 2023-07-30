var size = 100;

function init() {
	
	canvas = document.getElementById('new');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.width = canvas.width + 'px';
	canvas.style.height = canvas.height + 'px';
	ctx = canvas.getContext('2d');
	
	var hw = Math.ceil( canvas.width / ( 1.5 * hexagon_radius + hexagon_space_between * 2 ) ) + 1;
	var hh = Math.ceil( canvas.height / ( s3p3 * hexagon_radius + hexagon_space_between * 2 ) ) + 1;
	
	for(var x = -1;x<hw;x++)
		for(var y=0;y<hh;y++)
			addHexagon(
				 hexagon_radius + hexagon_space_between + ( 1.5 * hexagon_radius + hexagon_space_between * 2 ) * x,
				s3p3 * hexagon_radius / 2 + hexagon_space_between + ( s3p3 * hexagon_radius + hexagon_space_between * 2 ) * y - ( x%2 ? s3p3 * hexagon_radius / 2 : 0 ),
				{x: x, y: y}
			);
	
	ctx.fillStyle = 'rgba(0, 0, 0, 1)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	//loop();
	
} 