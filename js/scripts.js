$(document).ready(function() {
  $("#formInput").submit(function(event){
    event.preventDefault();

    var hadExperience = 0 ;


    $("input:checkbox[name=experience]:checked").each(function() {
        hadExperience += parseInt($(this).val());

      if (hadExperience >= 2) {
          $('#advice').append("hhey, go for a walk!")
          $("#advice").show();
        }

    });
    $("input:checkbox[name=health]:checked").each(function() {
      var hadHealth = parseInt($(this).val());
    $('#advice').append(hadHealth + "<br>")


      });
    });
  });
