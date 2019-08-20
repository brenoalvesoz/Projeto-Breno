
$(document).ready(function(){
	$("#flip").click(function(){
		//$("#panel").slideDown("slow");
		//$("#panel").slideDown("");
		//$("#panel").slideDown(100);
		$("#panel").slideDown("");
	});

	$("#flip2").click(function(){
		//$("#panel").slideDown("slow");
		//$("#panel").slideDown("");
		//$("#panel").slideDown(100);
		$("#panel").slideUp("");
	});

	$("#flip3").click(function(){
		
		$("#panel").slideToggle("");

	});


});

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
  });
});
