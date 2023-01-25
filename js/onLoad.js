$(function() {
    $("#ageVerify").modal('show');
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
    })
})