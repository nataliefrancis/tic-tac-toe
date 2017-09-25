
var xmoves = [];
var omoves = [];
var turn = 0;
var counter = 0;
var square = $('#gameBoard td');
var winning = [
	[1,2,3], [4,5,6], [7,8,9], 
	[1,4,7], [2,5,8], [3,6,9],
	[1,5,9], [3,5,7]
];

$(document).ready(function() {

	//Upon clicking a box, alternate between x's and o's//
	$('#gameBoard td').on('click', function() {
		while(this.hasChildNodes()) { //this won't allow a player to click on an already used square
			return false;
		}
		if(turn %2 !== 0) {
			omoves.push(parseInt(event.target.getAttribute("data-num"))); //pushes square value into array
			$(this).html("O");
			turn++;
			checkWin(omoves, "O");
		} else {
			xmoves.push(parseInt(event.target.getAttribute("data-num")));
			$(this).html("X");
			turn++;
			checkWin(xmoves, "X");
		}
	});

		
	function checkWin(player, name) {
		for (var i = 0; i < winning.length; i++) { //checks through winning combo array
			counter = 0;
			for (var j = 0; j < winning[i].length; j++) //checks through player combo array
				if(player.indexOf(winning[i][j]) !== -1) { //compares arrays
        			counter++;
				} if (counter === 3) {
					alert(name + " wins!");
				}	
		}
	};

		//reset button//
	$(':reset').click(function(){
		$('td').empty();
		xmoves = [];
		omoves = [];
		counter = 0;
		turn = 0;
		$('square').html(""); 
	});	

});
