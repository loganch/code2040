/*global $, token*/

function prefix() {
    'use strict';
    var newArray = [], i;
    
    //Get the array and prefix
    $.post('http://challenge.code2040.org/api/prefix', { "token": token }, function (data) {
        console.log(data);
        console.log(data.prefix);
        console.log(data.array);
        
        
        var loopLen = data.prefix.length - 1;
        
        //Loop through each 
        for (i = 0; i < data.array.length; i++) {
            if (data.array[i][0] === data.prefix[0] &&
                    data.array[i][1] === data.prefix[1] &&
                    data.array[i][2] === data.prefix[2] &&
                    data.array[i][3] === data.prefix[3]) {
                
                continue;
            } else {
                newArray.push(data.array[i]);
            }
        }
        
        console.log(newArray);
        
        $.ajax({
            url: 'http://challenge.code2040.org/api/prefix/validate',
            type: 'POST',
            data: { "token": token, "array": newArray },
            success: function(data) {
                console.log(data);
            },
            error: function(data) {
                console.log("ERROR");
                console.log(data);
            }
        });
    });
    
//    $.post('http://challenge.code2040.org/api/prefix/validate', params, function(data){
//        console.log("Trying again: ");
//        console.log(data);
//    });
    
    

}

function sendBack(array) {
    
//    var jArray = JSON.stringify(array);
    
    
}
