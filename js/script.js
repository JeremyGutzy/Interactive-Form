
// "Name" input field is selected on load
$( "#name" ).focus();

// Hides text field by degault unless "Other" is selected
$('#other-title').hide();
$('#title').change(function(){
    if($(this).val()==="other"){
        $('#other-title').show();
    }
    else{
        $('#other-title').hide();        
    }
});


// T-Shirt Info changes color options when certain shirt theme is selected
$('#design').change(function(){
    if($(this).val()==="other"){
        $('#other-title').show();
    }
    else{
        $('#other-title').hide();        
    }
});


