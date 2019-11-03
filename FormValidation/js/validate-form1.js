$(document).ready(function() {
    $('#first-form').submit(function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var phone = $('#phone').val();
      var street = $('#street').val();
      var apt = $('#apt').val();
      var city = $('#city').val();
   
      $(".error").remove();
   
      if (name.length< 1) {
        $('#name').after('<span class="error">This field is required</span>');
      }
      if (phone == "") {
        $('#phone').after('<span class="error">Please enter phone number</span>');
      }
      if (street.length< 1) {
        $('#street').after('<span class="error">This field is required</span>');
      }
      if (apt.length< 1) {
        $('#apt').after('<span class="error">This field is required</span>');
      }
      if (city.length< 1) {
        $('#city').after('<span class="error">This field is required</span>');
      }
      
    });
  });
