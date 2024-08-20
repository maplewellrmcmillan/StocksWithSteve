var query = 'OTCMKTS%3ALRDR';
var gAPI = 'http://www.google.com/finance/info?infotype=infoquoteall&q='+query+'&callback=?';
var yAPI = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22LRDR%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?';

$(document).ready(function() {
    $.ajax({ url: gAPI,
            jsonpCallback: 'jsonCallback',
            contentType: "application/json",
            dataType: 'jsonp',
            async:false,
            success: function(json) {
               $('#result').html(json[0].l);
               $('#result').html("ERROR3");
               //document.getElementById("result").appendChild(renderer.domElement);
            },
            error: function(e) {
               //console.log(e.message);
               $('#result').html("ERROR");
            }
           });
});

document.getElementById("result").appendChild("TESTING555");