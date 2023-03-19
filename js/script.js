
$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $.validator.addMethod("passwordRegex", function(value, element) {
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value);
    }, "");
});

function ValidatePassword() {
  var rules = [{
      Pattern: "[A-Z]",
      Target: "UpperCase"
    },
    {
      Pattern: "[a-z]",
      Target: "LowerCase"
    },
    {
      Pattern: "[0-9]",
      Target: "Numbers"
    },
    {
      Pattern: "[!@@#$%^&*]",
      Target: "Symbols"
    }
  ];
  var password = $(this).val();

  $("#Length").removeClass(password.length > 8 ? "glyphicon-remove" : "glyphicon-ok");
  $("#Length").addClass(password.length > 8 ? "glyphicon-ok" : "glyphicon-remove");

  for (var i = 0; i < rules.length; i++) {

    $("#" + rules[i].Target).removeClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-remove" : "glyphicon-ok"); 
    $("#" + rules[i].Target).addClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-ok" : "glyphicon-remove");
      }
    }

    $(document).ready(function() {
      $(".password").on('keyup', ValidatePassword)
    });



$(function() {
    $(".login-form-valid").validate({
        rules: {
            "user": {
                required: true,
                minlength: 2,
            },
            "password": {
                required: true,
                passwordRegex: true,
            },
        },
        messages: {
            "user": {
                required: "Required",
                minlength: "Enter your full name",
            },
            "password": {
                required: "",
                passwordRegex: "",
            },
        },
    });
});





















