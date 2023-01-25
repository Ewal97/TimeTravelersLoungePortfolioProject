$(function() {
    $("#ageVerify").modal('show');
    $("#ageVerify").modal({backdrop: "static"});

});

$(function() {
    $("#btnYes").click(function(){
        $("#ageVerify").modal("hide");
    })
})

$(function() {
    $("#btnNo").click(function(){
        $("#ageVerify").modal("hide");
        $("#ageGateModal").modal("show");
        $("#ageGateModal").modal({backdrop: "static"});
    })
})