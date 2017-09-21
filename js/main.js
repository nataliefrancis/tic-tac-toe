
var xmoves = [];
var omoves = [];
var turn = 0;
var winning = [
	[1,2,3], [4,5,6], [7,8,9], 
	[1,4,7], [2,5,8], [3,6,9],
	[1,5,9], [3,5,7]
];

$(document).ready(function() {

	//Upon clicking a box, alternate between x's and o's//
	$('#gameBoard td').on('click', function() {
		if(turn %2 !== 0) {
			$(this).html("X");
			turn=1;
			//$(this).attr('data-num').appendTo(xmoves);     //work on this line
		//	let sqNum = $(this).dataset.num;
		} else
			$(this).html("O");
			turn++;
	});

	//checking for win- I have an idea but can't get it to work//
//	for (var i = 0, i < winning.length, i++) {
//		if ($.inArray(winning[i], xmoves) > -1) {
//			alert("X wins!");
//		} else if ($.inArray(winning[i], omoves) > -1) {
//			alert("O wins!");
//		}	
//	};

		//reset button//
	$(':reset').click(function(){
		$('td').empty();
	});	


});
