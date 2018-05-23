$("#panel-sigup").css("display", "none");

$("#btn-signin-signin").on("click", function(){
    var username = ($("#signin-username").val() && $("#signin-username").val() !== undefined)? $("#signin-username").val(): null;
    var password = ($("#signin-password").val() && $("#signin-password").val() !== undefined)? $("#signin-password").val(): null;

    var form_submit = false;
    if(username != null && password != null)
        form_submit = true;

    if(form_submit){
        $("#signin-alert").removeClass("alert-danger").addClass("alert-success");
        $("#signin-alert").html("Please wait, you are redirecting...");

        $.ajax({
            type: "POST",
            url: "/user/login",
            data: {username: username, auth_key: password},
            dataType: "json",
            success: function(response, status) {
                if(response && !response.error){
                    // alert(JSON.stringify(response));
                    location.reload();
                }
                else {
                    $("#signin-alert").removeClass("alert-success").addClass("alert-danger");
                    $("#signin-alert").html("Sorry, there's something problem in our internal.");
                }
            },
            error: function (response, status) {
                $("#signin-alert").removeClass("alert-success").addClass("alert-danger");
                $("#signin-alert").html("Sorry, there's something problem in our internal.");
            },
        });
    }
    else{
        $("#signin-alert").removeClass("alert-info").addClass("alert-danger");
        $("#signin-alert").html("Please fill all requirement fields");

        if(username == null)
            $("#signin-username").parent().removeClass("has-success").addClass("has-error");
        else $("#signin-username").parent().removeClass("has-error").addClass("has-success");
        
        if(password == null)
            $("#signin-password").parent().removeClass("has-success").addClass("has-error");
        else $("#signin-password").parent().removeClass("has-error").addClass("has-success");
    }
});

$("#btn-signin-signup").on("click", function(){
    $("#panel-sigin").css("display", "none");
    $("#panel-sigup").css("display", "block");
});

$("#btn-signup-signup").on("click", function(){
    var username = ($("#signup-username").val() && $("#signup-username").val() !== undefined)? $("#signup-username").val(): null;
    var password = ($("#signup-password").val() && $("#signup-password").val() !== undefined)? $("#signup-password").val(): null;
    var password2 = ($("#signup-password2").val() && $("#signup-password2").val() !== undefined)? $("#signup-password2").val(): null;
    
    var form_submit = false;
    if(username != null && password != null && password2 != null)
        if(password == password2)
            form_submit = true;
    
    if(form_submit){
        $("#signup-alert").removeClass("alert-danger").addClass("alert-success");
        $("#signup-alert").html("Please wait, you are redirecting...");

        $.ajax({
            type: "POST",
            url: "/user",
            data: {username: username, auth_key: password},
            dataType: "json",
            success: function(response, status) {
                if(response && !response.error){
                    setTimeout(function(){
                        $("#panel-sigin").css("display", "block");
                        $("#panel-sigup").css("display", "none");
                     }, 2000);
                }
                else {
                    $("#signup-alert").removeClass("alert-success").addClass("alert-danger");
                    $("#signup-alert").html("Sorry, there's something problem in our internal.");
                }
            },
            error: function (response, status) {
                $("#signup-alert").removeClass("alert-success").addClass("alert-danger");
                $("#signup-alert").html("Sorry, there's something problem in our internal.");
            },
        });
    }
    else{
        $("#signup-alert").removeClass("alert-info").addClass("alert-danger");
        $("#signup-alert").html("Please fill all requirement fields");

        if(username == null)
            $("#signup-username").parent().removeClass("has-success").addClass("has-error");
        else $("#signup-username").parent().removeClass("has-error").addClass("has-success");
        
        if(password == null)
            $("#signup-password").parent().removeClass("has-success").addClass("has-error");
        else $("#signup-password").parent().removeClass("has-error").addClass("has-success");
        
        if(password2 == null || password != password2){
            $("#signup-password").parent().removeClass("has-success").addClass("has-error");
            $("#signup-password2").parent().removeClass("has-success").addClass("has-error");
            $("#signup-alert").html("Password and confirm password is not match!");
        }
        else{
            $("#signup-password").parent().removeClass("has-error").addClass("has-success");
            $("#signup-password2").parent().removeClass("has-error").addClass("has-success");
        }
    }
});

$("#btn-signup-signin").on("click", function(){
    $("#panel-sigin").css("display", "block");
    $("#panel-sigup").css("display", "none");
});


$("#row-form-url-list").css("display", "none");
$("#form-url-original").on("keyup", function(){
    var url_original = $("#form-url-original").val();
    $.ajax({
        type: "POST",
        url: "/urlconversion/baseconvert",
        data: {url: url_original},
        dataType: "json",
        success: function(response, status) {
            if(response && !response.error){
                $("#form-url-conversion").val(response.url_conversion);
            }
            else {
                $("#form-url-alert").removeClass("alert-success").addClass("alert-danger");
                $("#form-url-alert").html("Sorry, there's something problem in our internal.");
            }
        },
        error: function (response, status) {
            $("#form-url-alert").removeClass("alert-success").addClass("alert-danger");
            $("#form-url-alert").html("Sorry, there's something problem in our internal.");
        },
    });
});
$("#btn-add-form-url-list").on("click", function(){
    $("#row-table-url-list").css("display", "none");
    $("#row-form-url-list").css("display", "block");

    $("#btn-save-form-url-list").css("display", "Inline ");
    $("#btn-update-form-url-list").css("display", "none");

    $("#btn-save-form-url-list").on("click", function(){
        var url_original = $("#form-url-original").val();
        var url_conversion = $("#form-url-conversion").val();
        $.ajax({
            type: "POST",
            url: "/urlconversion",
            data: {url_original: url_original, url_conversion: url_conversion},
            dataType: "json",
            success: function(response, status) {
                if(response && !response.error){
                    location.reload();
                }
                else {
                    $("#form-url-alert").removeClass("alert-success").addClass("alert-danger");
                    $("#form-url-alert").html("Sorry, there's something problem in our internal.");
                }
            },
            error: function (response, status) {
                $("#form-url-alert").removeClass("alert-success").addClass("alert-danger");
                $("#form-url-alert").html("Sorry, there's something problem in our internal.");
            },
        });
    });
});

$("#btn-cancel2-delete-url-list").on("click", function(){
    location.reload();
});

$("#btn-cancel-delete-url-list").on("click", function(){
    location.reload();
});

$("#btn-cancel-form-url-list").on("click", function(){
    location.reload();
});