$(document).ready(function(){
  $('#appointment').submit(function(event){
    var name1 = $("input#InputName").val();
    var desc1 = $("input#InputDesc").val();
    var time1 = $("input#InputTime").val();
    $("#nameInsert").text(name1);
    $('#descInsert').text(desc1);
    $('#timeInsert').text(time1);
    $('#appointment').hide();
    $('#confirmArea').show();
    event.preventDefault();
  });
});
