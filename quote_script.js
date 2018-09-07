function newQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "ro4oIz4m0FmshnTj1EZ1csEP7XGQp1ypOGUjsntOyVbIW7Fo7S",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    }).done(function(quote) {
            $("#quote-text").animate({
                opacity: 0
            }, 1000, function() {
                $(this).animate({
                    opacity: 1
                }, 1000);
                $("#quote-text").html(quote[0].quote);
            });
            
            $("#author-text").animate({
                opacity : 0
            }, 1000, function() {
                $(this).animate({
                    opacity: 1
                }, 1000);
                $("#author-text").html(quote[0].author);
            });
            
            $("#tweet-button").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quote[0].quote + '" by ' + quote[0].author));
        });
            
}

$(document).ready(function() {
    newQuote();
    $("#another-button").click(newQuote);
});