"use strict";


$(document).ready( () => {

    const  chars =  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@" ;

    $("#buttonSubmit").click( evt => {

        if($("#inputLength").val().trim() == "")
        {
            alert("Please enter a number");
            return;
        }

        const length = $("#inputLength").val();

        let newPass = "";
        let randLength = chars.length;
        for(let i = 0; i < length; i++)
        {
            let rand = getRandomNumber(randLength);
            newPass += chars[rand];
        }
        $("#textBoxPassword").val(newPass);
        evt.preventDefault();
    });

    $("#inputLength")
    .change(function () {
        var str = "";
        $("#textBoxPassword").val(str);
    })
    .change();
    
    const  getRandomNumber = max  =>  {
        let  random =  null ;
        if  (!isNaN(max)) {
           random = Math.random();              // value >= 0.0 and < 1.0
           random = Math.floor(random * max);   // value is an integer between 0 and max - 1
           random = random +  1 ;                 // value is an integer between 1 and max
       }
        return  random;
    };

    $("input[type='text']").on("click", function () {
        $(this).select();
     });
});