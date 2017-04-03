$(document).ready(function(){
    var getQuote = function (){
    var url='http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
    var quote={"quoteText":" ", "quoteAuthor":" "};
    $.getJSON(url,function(json){
        quote = json;
    $('#quoteText').html(quote.quoteText);
       $('#authorText').html('-' + quote.quoteAuthor);
    });
        return quote;
    }
   getQuote();
 $('#newquote').on('click',function(){
        getQuote();
    });
 $('#newtweet').on('click',function(){
        console.log(quoteText.innerHTML);
        var quoteTextToTweet = quoteText.innerHTML;
        var quoteAuthorToTweet = authorText.innerHTML.trim();
        var tweet;
        if (quoteTextToTweet.length + quoteAuthorToTweet.length <= 90){
            tweet ='"'+ quoteTextToTweet + 'by"' + quoteAuthorToTweet;
        }
        else{
            tweet = '"'+ quoteTextToTweet.substr(0,65)  + '...." by' + quoteAuthorToTweet;

        }
    	window.open("https://twitter.com/intent/tweet?text=" + tweet);
    	
        	});
});