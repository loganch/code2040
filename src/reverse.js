
function getString() {
    $.post('http://challenge.code2040.org/api/reverse', 
           {"token": token}, 
           function(d) {
                reverseString(d);
    });
}

function reverseString(word) {
    
    //Reverse the string
    var flipped = word.split("").reverse().join("");
    $('#results').text(word + " -> " + flipped);
    
    //Send it back
    $.post('http://challenge.code2040.org/api/reverse/validate', 
          { "token": token, "string": flipped },
           function(d) {
                $('results').text(d); 
    });
}