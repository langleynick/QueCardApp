$(function() {

    let cardBox = $("#queCardBox");

    //On submit of modal input
    $('#submit').on('click', function(){
        
        let card = "";

        //get values from input tags

        let question = $("#question").val();
        let answer = $("#answer").val();
        //add tags and values into card var

        card += "<div class='card m-4' style='width:450px'><h5 class='card-header'>Que Card</h5><div class='card-body'><h5 class='card-title'><b>Question</b></h5><p class='h5'>" + question + "</p><h5 class='card-title'><b>Answer</b></h5><p class='h5'>" + answer + "</p></div><div class='card-footer'><input type='checkbox' class='btn-check' id='answered' autocomplete='off'><label class='btn btn-outline-success' for='answered'>Complete</label></div></div>";

        //add card into collape box

        cardBox.append(card);
    });
});