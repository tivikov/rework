$(function() {

	$(".chosen-select").chosen({no_results_text: "Ничего не найдено!"}); 
	$(".chosen-select-busy").chosen({disable_search_threshold: 10});
	$(".chosen-select-busy-with-search").chosen({no_results_text: "Ничего не найдено!"});

});
