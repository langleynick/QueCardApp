$(function() {

    let $cardBox = $("#cardContainer");    //container for cards
    let $cardCount = 0;  //counter for card count
    let queCards = [];  //array of que cards
    let $question;
    let $answer;

    if($('#question').val(" ") && $('#answer').val(" ")){
        $('#submit').attr('disabled', 'disabled');
    }
    $('textarea').on('input', function(){
        if($('#question').val() != " " && $('#answer').val() != " "){
            $('#submit').removeAttr('disabled');
        }
    });

    //function to store card into array
    function storeCard(arr,obj) {
        arr.push(obj);
        return arr;
    };

    //function to iterate through array and add values into container
    function displayCards(arr){
        $.each(arr, function(key,val){
        
        //create the card
        let $cardContent = $("<div class='col card m-4'></div>");

        //create header and append to card
        let $cardHeader = $("<h5 class='card-header'>QueCard #" + val.cardNum + "</h5>");
        $cardContent.append($cardHeader);

        //create body and append to card
        let $cardBody = $("<div class='card-body'><h5 class='card-title'><b><u>Question</u></b></h5><p class='h4 mb-4'>" + val.question + "</p><div><button class='btn btn-success mb-3 answer-reveal' type='button'>Reveal Answer</button><button class='btn btn-danger mx-1 mb-3 answer-hide'>Hide Answer</button></div><div class='answer'><p class='h4'>" + val.answer + "<p></div></div>");
        $cardContent.append($cardBody);

        //create footer and append to card
        let $cardFooter = $("<div class='card-footer'><input type='checkbox' class='btn-check' id='" + val.cardCount + "answered' autocomplete='off'><label class='btn btn-lg btn-outline-success' for='" + val.cardCount + "answered'>Complete</label></div></div>");
        $cardContent.append($cardFooter);
        
        //add values into the container
        $cardBox.append($cardContent);
        });
    };

    //on submit of modal input
    $('#submit').on('click', function(){

        $cardCount++;    //increase card count
        //display newest card count
        $('#cardCount').text("Total Cards: " + $cardCount);

        //get values from input tags
        $question = $("#question").val();
        $answer = $("#answer").val();

        //declare card object
        let obj = {
            'cardNum': $cardCount,
            'question': $question,
            'answer': $answer
        };

        //call function to add input to array
        storeCard(queCards, obj);

        //reset container
        $cardBox.text('');

        //output each card in array into the container
        displayCards(queCards);
        
        //button event to reveal the answer
        $('button.answer-reveal').on('click', function(){
            $(this).parent().next().css("display", "block");
        });

        //button event to hide the answer
        $('button.answer-hide').on('click', function(){
            $(this).parent().next().css("display", "none");
        });

        //reset the modal
        $("#question").val(" ");
        $("#answer").val(" ");
        $('#submit').attr('disabled', 'disabled');
    });
});