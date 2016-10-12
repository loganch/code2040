function findIt() {
    console.log("Getting the needle and haystack");
    $.post('http://challenge.code2040.org/api/haystack', { "token": token }, function(data) {
        
//        $('#results').text(data);
        console.log(data);
        
        var needleLocation = $.inArray(data.needle, data.haystack);
        $('#results').text(needleLocation);
        
        //Send it back for validation
        
        $.post('http://challenge.code2040.org/api/haystack/validate',
              { "token": token, "needle": needleLocation}, function(data) {
                $('#results').append('<br/>' + data);
        });
        
    });
}