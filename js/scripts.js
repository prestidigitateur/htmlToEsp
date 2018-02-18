function convertCode(){
    var s = $("#sourse").val();
    s = s.replace(/(\r\n|\n|\r)/gm," ");
    s = s.replace(/"/g, '\\"');
    s = s.replace(/\s+/g," ");
    $("#compressed").val(s);
    $("#e").click();
}

function restoreCode(){
    var s = $("#compressed").val();
    s = s.replace(/>/g,'> \n');
    s = s.replace(/\\\"/g, '\"');
    $("#sourse").val(s);
    $("#h").click();
}
function copyCode(s){
    $("#"+s).select().focus();
    document.execCommand("copy");
    $("#"+s).blur();
}
function copyCodeAsString(s){
    $temp = $("<input>");
    $("body").append($temp);
    $temp.val("String myHtml = \"" + $("#"+s).val() + "\";").select().focus();
    document.execCommand("copy");
    $temp.remove();
    $("#"+s).focus();
}
function clearCode(s){
    $("#"+s).val("");
}

function onFileDrop(e) {      
      var file = e.dataTransfer.files[0];
      var reader = new FileReader();
      reader.onload = function (event) {
        var textFromFileLoaded = event.target.result;
        $('#sourse').val(textFromFileLoaded);
      }
      reader.readAsText(file);
      e.preventDefault();
}