$(document).ready(function(){

	$("#submit").click(function(){
    event.preventDefault();
      //alert(name + email + question);
      var content = {
        "key": "vaZB2if-VNzI-FNjZux5VA",
        "message": {
          "text": "question_text",
          "subject": "new question suggestion",
          "from_email": "ericlamb89@gmail.com",
          "from_name": "irk",
          "to": [
              {
                  "email": "dbgamesnyc@gmail.com"
                }
          ],
        }
      }
      var name = $("#name").val();
      var email = $("#email").val();
      var question = $("#question").val();

      if (name){
        content.message.from_name=name;
      }

      if (email){
        content.message.from_email=email;
      }

      if(question){
        content.message.text=question;
      }

      $.post("https://mandrillapp.com/api/1.0/messages/send.json",content,
        function(data, status){
          if(status==="success"){
            $("#submit").before("<div id=\"success\" class=\"alert alert-success\" role=\"alert\">Success! Question sent to DBGamesHQ for testing...</div>")
          }
      });

	});
});
