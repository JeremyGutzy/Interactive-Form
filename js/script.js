
// "Name" input field is selected on load
$( "#name" ).focus();


// Hides text field by degault unless "Other" is selected
$('#other-title').hide();
$('#title').change(function(){
    if($(this).val()==="other") {
        $('#other-title').show();
        // Wanted to clear "Your Job Role" when user clicks
        $("#other-title").on("click", function() {
            if ($(this).val() == "Your Job Role") {
                $(this).val("")
            } 
            });
   } else{
        $('#other-title').hide();        
    }
});





// T-Shirt Info changes color options when certain shirt theme is selected
$('#design').change(function(){
   if($(this).val()==="heart js"){
    $('#color option').removeAttr("selected");
    $('#color').find('option[value="tomato"]').attr('selected','selected')
    $("#color > option").each(function() {
      $(this).show();
        if(/Puns*/.test(this.text)){
            $(this).hide();
        }
    });
}
    else if($(this).val()==="js puns"){
        $('#color option').removeAttr("selected");
        $('#color').find('option[value="cornflowerblue"]').attr('selected','selected')
        $("#color > option").each(function() {
           $(this).show();
            if(/Puns*/.test(this.text)==false){
                $(this).hide();
            }
        });
    }

    else{
        $('#color option').removeAttr("selected");
        $('#color').find('option[value="cornflowerblue"]').attr('selected','selected')
        $("#color > option").each(function() {
            $(this).show();
        });
    }
});




let total = 0;
let count =0;
let $finalTotal = $('<label>Total: $<span id="total"></span></label>');

$($finalTotal).insertAfter('.activities');

$finalTotal.hide();
$('.activities input').on('change', function(){
  $finalTotal.show();
});

$('.activities input[name="all"]').on('change', function(event){
  const checked = $(this).prop('checked');
    if(checked){
      total += 200;
      count+=1;
      $('#total').text(total);
    } else {
      total -= 200;
      count-=1;
      $('#total').text(total);
    }
});

$('.activities input[name="js-frameworks"]').on('change', function(event){
  const checked = $(this).prop('checked');
    if(checked){
      $('.activities input[name="express"]').attr('disabled', true).parent().css("color", "#6c727e");
      total += 100;
      count+=1;
      $('#total').text(total);
    } else {
      $('.activities input[name="express"]').attr('disabled', false).parent().css("color", "black");
      total -= 100;
      count-=1;
      $('#total').text(total);
    }
});

$('.activities input[name="js-libs"]').on('change', function(event){
    const checked = $(this).prop('checked');
      if(checked){
        $('.activities input[name="node"]').attr('disabled', true).parent().css("color", "#6c727e");
        total += 100;
        count+=1;
        $('#total').text(total);
      } else {
        $('.activities input[name="node"]').attr('disabled', false).parent().css("color", "black");
        total-= 100;
        count-=1;
        $('#total').text(total);
      }
  });

  $('.activities input[name="express"]').on('change', function(event){
    const checked = $(this).prop('checked');
      if(checked){
        $('.activities input[name="js-frameworks"]').attr('disabled', true).parent().css("color", "#6c727e");
        total += 100;
        count+=1;
        $('#total').text(total);
      } else {
        $('.activities input[name="js-frameworks"]').attr('disabled', false).parent().css("color", "black");
        total -= 100;
        count-=1;
        $('#total').text(total);
      }
  });

  $('.activities input[name="node"]').on('change', function(event){
    const checked = $(this).prop('checked');
      if(checked){
        $('.activities input[name="js-libs"]').attr('disabled', true).parent().css("color", "#6c727e");
        total += 100;
        count+=1;
        $('#total').text(total);
      } else {
        $('.activities input[name="js-libs"]').attr('disabled', false).parent().css("color", "black");
        total -= 100;
        count-=1;
        $('#total').text(total);
      }
  });

  $('.activities input[name="build-tools"]').on('change', function(event){
    const checked = $(this).prop('checked');
      if(checked){
        total += 100;
        count+=1;
        $('#total').text(total);
      } else {
        total -= 100;
        count-=1;
        $('#total').text(total);
      }
  });

  $('.activities input[name="npm"]').on('change', function(event){
    const checked = $(this).prop('checked');
      if(checked){
        total += 100;
        count+=1;
        $('#total').text(total);
      } else {
        total -= 100;
        count-=1;
        $('#total').text(total);
      }
  });





$('#credit-card').next().hide();
  $('#credit-card').next().next().hide();
  $('option[value="select_method"]').attr("disabled", "disabled");
  $('select option[value="credit card"]').attr("selected",true);
  var creditcardflag = true;
  $('#payment').change(function(){
    if($(this).val()==="credit card"){
        $('#credit-card').show();
        $('#credit-card').next().hide();
        $('#credit-card').next().next().hide();
        creditcardflag = true;
    }
    else if($(this).val()==="paypal"){
        $('#credit-card').hide();
        $('#credit-card').next().show();
        $('#credit-card').next().next().hide();
        $('.ccerror').text("");
        $('.cvverror').text("");
        $('.ziperror').text("");
        creditcardflag = false;
    }
    else if($(this).val()==="bitcoin"){
        $('#credit-card').hide();
        $('#credit-card').next().hide();
        $('#credit-card').next().next().show();
        $('.ccerror').text("");
        $('.cvverror').text("");
        $('.ziperror').text("");
        creditcardflag = false;
    }
    });


    let ccflag = true;
    let zipflag =true;
    let cvvflag = true;
    let nameflag = true;
    let emailflag = true;
    let activityflag = true;
    let nameempty = false;
    let emailempty = false;
    let activityempty = false;
    let cvvempty = false;
    let ccempty = false;
    let zipempty = false;
    $("form").on('submit', function(){
        isValidName(event);
        isValidEmail(event);
        isValidActivity(event)
        isValidCardNum(event);
        isValidCvv(event);
        isValidZip(event)
        if(nameempty||emailempty||activityempty){
          nameempty = false;
          emailempty = false;
          activityempty = false;
          cvvempty = false;
          ccempty = false;
          zipempty = false;
            return false;
         }
        if(creditcardflag&&(cvvempty||ccempty||zipempty)){
          return false;
        }
        if(zipflag==false||ccflag==false||cvvflag==false||nameflag==false||emailflag==false||activityflag==false){
          zipflag = true;
          ccflag = true;
          cvvflag = true;
          nameflag = true;
          emailflag = true;
          activityflag = truel
            return false;
        }
        else{
            return true;
        }
    });

    if(creditcardflag){
    $("#cc-num").on("keyup", function() {
        if($('#cc-num').val().length == 0){
            $('#cc-num').css("backgroundColor","#ff7149");
            $('.ccerror').text("Please enter the credit card number");
            ccflag = false;
        }
        else if(/^\d{13,16}$/gm.test($('#cc-num').val())){  
            $('#cc-num').css("backgroundColor","#C1DEEB");
            $('.ccerror').text("");
            ccflag = true;
        }
        else{
            $('#cc-num').css("backgroundColor","#ff7149");
            $('.ccerror').text("Credit Card must be 13 through 16 digits");
            ccflag = false;
        }
    });

    $("#zip").on("keyup", function() {
        if($('#zip').val().length == 0){
            $('#zip').css("backgroundColor","#ff7149");
            $('.ziperror').text("Please enter the zip code");
            zipflag = false            
        }
        else if(/^[0-9]{5}$/gm.test($('#zip').val())){        
            $('#zip').css("backgroundColor","#C1DEEB");
            $('.ziperror').text("");
            zipflag = true;
        }
        else{
            $('#zip').css("backgroundColor","#ff7149");
            $('.ziperror').text("Zip code must be 5 digits");
            zipflag = false
        }
    });

    $("#cvv").on("keyup", function() {
        if($('#cvv').val().length == 0){
            $('#cvv').css("backgroundColor","#ff7149");
            $('.cvverror').text("Please enter the cvv");
            cvvflag = false;
        }
        else if(/^[0-9]{3}$/gm.test($('#cvv').val())){          
            $('#cvv').css("backgroundColor","#C1DEEB");
            $('.cvverror').text("");
            cvvflag = true;
        }
        else{
            $('#cvv').css("backgroundColor","#ff7149");
            $('.cvverror').text("Cvv must be 3 digits");
            cvvflag = false;
        }
    });
  }
        

    $("#name").on("keyup", function() {
    if($('#name').val().length != 0){
      $('#name').css("backgroundColor","#C1DEEB");
      $('.namespan').text("");
      nameflag = true;
        }
      else{
        $('#name').attr("placeholder","Please enter the name");
        $('#name').css("backgroundColor","#ff7149");
        $('.namespan').text("Please enter a name");
        nameflag = false
      }
    });

    //validating email for the correct format
    $("#mail").on("keyup", function() { 
        if($('#mail').val().length == 0){
            $('#mail').css("backgroundColor","#ff7149");
            $('.emailspan').text("Please enter an email");
            emailflag = false;
              } 
        else if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test($('#mail').val())==false||$('#mail').val().length != 0){
            $('#mail').css("backgroundColor","#C1DEEB");
            $('.emailspan').text("");
            emailflag = true;
        }
        else{
            $('#mail').attr("placeholder","Please enter a valid email id");
            $('#mail').css("backgroundColor","#ff7149");
            $('.emailspan').text("Please enter a valid email");
            emailflag = false;
        }
    });

    $('input[type="checkbox"]').on("click", function(){
        if($(this).prop("checked") == true){
            //alert("Checkbox is checked.");
            $('.activities').css("color","#184f68");
            $('.activityspan').text("");
            activityflag = true;
        }
    });


   function isValidName(event){
    if($('#name').val().length === 0){
        $('#name').attr("placeholder","Please enter the name");
        $('#name').css("backgroundColor","#ff7149");
        $('.namespan').text("Please enter a name");
        nameempty = true;
        }
    }


    function isValidEmail(event){
        if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test($('#mail').val())==false||$('#mail').val().length === 0){        
            $('#mail').attr("placeholder","Please enter an email");
            $('#mail').css("backgroundColor","#ff7149");
            $('.emailspan').text("Please enter a valid email");
            emailempty = true;         
        }
    }


    function isValidActivity(event){
        if(count==0){
            $('.activities').css("color","#ff7149");
            $('.activityspan').text("Please select any one of these");
            activityempty = true;
        }
    }

    //Validating all the details for credit cards are entered
    function isValidCardNum(event){
        if($('#cc-num').val().length === 0){
            $('#cc-num').css("backgroundColor","#ff7149");
            ccempty = true;
        }
        }
        
    function isValidZip(){
        if($('#zip').val().length === 0){
            $('#zip').css("backgroundColor","#ff7149");
            zipempty = true;          
        }
    }

    function isValidCvv(){
        if($('#cvv').val().length === 0){
            $('#cvv').css("backgroundColor","#ff7149");
            cvvempty = true;           
         }
       
    }


