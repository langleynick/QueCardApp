$(function() {

    let cardBox = $("#queCardBox");
    let cardCount = 0;
    let queCards = [];

    //On submit of modal input
    $('#submit').on('click', function(){
        
        let card = "";

        cardCount++;

        //get values from input tags

        let question = $("#question").val();
        let answer = $("#answer").val();

        //add tags and values into card var

        card += '<div class="col card m-4"><h5 class="card-header">Que Card #' + cardCount + '</h5><div class="card-body"><h5 class="card-title"><b><u>Question</u></b></h5><p class="h4 mb-4">' + question + '</p><button class="btn btn-dark mb-3 answer-reveal" type="button">Reveal Answer</button><div class="answer"><p>' + answer + '<p></div></div><div class="card-footer"><input type="checkbox" class="btn-check" id="' + cardCount + 'answered" autocomplete="off"><label class="btn btn-outline-success" for="' + cardCount + 'answered">Complete</label></div></div>';

        //add card into collape box

        cardBox.append(card);
        $('button.answer-reveal').on('click', function(){
            $(this).next().slideToggle();
        });
    });
});