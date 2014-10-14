$(document).ready(function(){
	var questionsPlayed = [];
	var numQuestions; 
	var questions;
	$.getJSON("https://spreadsheets.google.com/feeds/list/0AgMqbnja8Nj6dDNPUmE4ZDQxcGxRdTUxblBiRnhZdWc/od6/public/values?alt=json", function(data) {
		$("#question").replaceWith("<h1 id=\"question\">Ready!</h1>");
		questions = data.feed.entry;
		numQuestions = questions.length;
		
		//questions = JSON.stringify(questions[0].gsx$question);
		$("#button").removeClass("hidden");
	});

	

	function getQuestion(){
		var questionCurr;
		do  {questionCurr = Math.floor(Math.random() * numQuestions);}
		while(questionsPlayed.indexOf(questionCurr) > 0);
		return questionCurr;
	}

	
	$("#button").click(function(){
		var questionID = getQuestion();
		questionsPlayed.push(questionID);
		var question = JSON.stringify(questions[questionID].gsx$question.$t);
		$("#question").replaceWith("<h1 id=\"question\">"+question+"</h1>");
		//alert(question);
		$(this).blur();
	});	

});

<!--https://spreadsheets.google.com/feeds/list/0AgMqbnja8Nj6dDNPUmE4ZDQxcGxRdTUxblBiRnhZdWc/od6/public/values?alt=json-->
