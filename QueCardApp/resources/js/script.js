$(function() {

    let queCards = [];

    $('#submit', '#close').on('click', function(){
        let form = $("#inputs");

        if(form[0].checkValidity() === false) {
            this.preventDefault()
            this.stopPropagation()
        }
        form.addClass('was-validated');

        //TODO: FUNCTION TO ADD QUESTIONS
        
    });
});