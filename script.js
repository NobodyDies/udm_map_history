$(function() {
		  
   		 $('#draggables').draggable({
   			 containment: "parent"
   		 });
		 
		 $('#draggables1').draggable({
   			 containment: "parent"
   		 });
		 
		 $('#draggables2').draggable({
   			 containment: "parent"
   		 });
		 
		 $('#draggables3').draggable({
   			 containment: "parent"
   		 });
		 
		 $('#draggables4').draggable({
   			 containment: "parent"
   		 });
   		 
   		 $('#droppable').droppable({
   			 drop: function() {
   				 $('#draggables').text("Правильно! Ижевск");
   				 document.getElementById("draggables").id="used";
   				 document.getElementById("draggables").class="used";
   			 }
   		 });
	  });