(function() {
    var key;
    $.ajax({
            url: 'config.json',
            dataType: 'json',
            type: 'GET',
            success: function(data) {
                key = data['0'].API_KEY;
                // console.log(key);
            },
            error: function(error) {
                console.log('ERROR SOMETHING WENT WRONG');
                console.log(error);
            }
    });

   //  $.ajax({
   //           url: 'https://api.spotify.com/v1/me',
   //           headers: {
   //               'Authorization': 'Bearer ' + accessToken
   //           },
   //           success: function(response) {
   //               ...
   //           }
   // });

}()); //iife ends
