
var xmoves = [];
var omoves = [];
var turn = 0;
var winning = [
	[1,2,3], [4,5,6], [7,8,9], 
	[1,4,7], [2,5,8], [3,6,9],
	[1,5,9], [3,5,7]
];

$(document).ready(function() {

	$('#gameBoard td').on('click', function() {
		if(turn %2 !== 0) {
			$(this).html("X");
			turn=1;
		} else
			$(this).html("O");
			turn++;
	});

});

//$(this).attr('data-num').appendTo(xmoves);         //work on this line