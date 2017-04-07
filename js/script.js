$(document).ready(function(){
        $("#shmutton").click(function(){
            var val = $("#shmimput").val();
        $('.content').append('<a href="#" id="hua">'+val+' </a>');
    });
    $(document).on("click","a",function(){
        alert($('a').html()
        );
    });
});

