// run the script when the document is loaded
$(document).ready(function(){

    // strike through functionality
    $('ul').on('click', 'li', function(){
        $(this).toggleClass("done");            // done is a css object which specifies the color change
    });

    // deleting 
    $('ul').on('click','span', function(){
        $(this).parent().fadeOut(300, function(){
            $(this).remove();
        });

        // stops the event from going up the inheritence chain.. i.e. to stop the propogation chain
        event.stopPropagation();
    });

    // adding
    // keypress is an on fucntion
    // .on(), works on dynamic elements
    $('input').keypress(function(e){
        if(event.which == 13){
            let task = $('input').val();
            $('ul').append(`<li><span class="delete"><i class="fa fa-trash" aria-hidden="true"></i></span> ${task} </li>`);
            $('input').val('');
        }
    });

    // adding functionility to the plus sign
    $('span#plus').click(function(){
        $('input').fadeToggle();            //..toggling the input with fade effect
    });
});