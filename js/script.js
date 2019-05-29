
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


