$(document).ready(function(){
  $("form#stress-survey").submit(function(event){
    event.preventDefault();
    var warningCount = 0;
    var symptomsCount = 0;
    var copingCount = 0;

    $("#stress-survey").hide();

    $("input:checkbox[name=warning-signs]:checked").each(function(){
      warningCount++;
    });

    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      symptomsCount++;
    });

    if (warningCount + symptomsCount >= 10) {
      $("#stressed").show();
      $("form#stressed-survey").submit(function(event){
        event.preventDefault();
        $("#uh-oh").hide();
        $("input:checkbox[name=coping-methods]:checked").each(function(){
          copingCount++;
        });
        $("#stressed-survey").hide();
        if (copingCount >= 5) {
          $("#stressed-survey").hide();
          $("#stressedMessage").after("You are doing all you can my good human. Stick in there!");
        } else {
          $("#stressedMessage").after('You could be doing more to help reduce your stress. <a href="#">Check out this link for suggestions.</a>');
        }
      });
    } else {
      $("#chill").show();
    }
  });
});
