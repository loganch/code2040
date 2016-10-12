function dating() {
    $.ajax({
        url: 'http://challenge.code2040.org/api/dating',
        type: 'POST',
        data: { "token": token },
        success: function (d) {
            console.log(d);
            
            //Convert received date to Date object
            var dateIn = new Date(d.datestamp);
            console.log(dateIn);
            //Add time interval
            dateIn.setSeconds(dateIn.getSeconds() + d.interval);
            
            
            console.log(dateIn);
            //Convert new time to ISO
            var dateISO = dateIn.toISOString();
            console.log(dateISO);
            var fixedDate = dateISO.replace(/\.[0]{3}/i, "")
            console.log(dateISO);
//            //Send back
            
            $.ajax({
                url: 'http://challenge.code2040.org/api/dating/validate',
                type: 'POST',
                data: { "token": token, "datestamp": fixedDate },
                success: function (r) {
                    console.log(r);
                },
                error: function(e) {
                    console.log("ERROR");
                    console.log(e);
                }
            });
        },
        error: function (e) {
            console.log("ERROR");
            console.log(e);
        }
    });
}