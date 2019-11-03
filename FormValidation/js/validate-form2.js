$(document).ready(function() {
    $('#second-form').submit(function(e) {
      e.preventDefault();
      var cardName = $('#cardName').val();
      var cardNumber = $('#cardNumber').val();
      var cardDate = $('#cardDate').val();
      var cvvCode = $('#cvvCode').val();
   
      $(".error").remove();
   
      if (cardName.length< 1) {
        $('#cardName').after('<span class="error">Please enter your name on the card</span>');
      }
      if (cardNumber =="" || cardNumber.length< 16 || cardNumber.length > 16) {
        $('#cardNumber').after('<span class="error">Please enter card number</span>');
      }
      if (cardDate=="" || cardDate.length< 4 || cardDate.length > 4) {
        $('#cardDate').after('<span class="error">Please enter card date</span>');
      }
      if (cvvCode.length< 3 || cvvCode.length > 3 || cvvCode == "") {
        $('#cvvCode').after('<span class="error">Please enter cvv code</span>');
      }
      
    });
  });
