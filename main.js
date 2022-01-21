$(document).ready(function() {
    $("#submit").click(function() {
        if($(".email_ip").value().length == 0) {
            alert("없음"); $(".email_ip").focus();return false;
        }
    })
})