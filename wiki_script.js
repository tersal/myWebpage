$(document).ready(function() {
    
    $(".search-button").click(function() {
        var something = $("input").val();
        
        if (something == "") {
            alert("Please write something in the box");
        } else {
            var address = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
            address = address + something;
            
            $.ajax({
                type: "GET",
                url: address,
                dataType: 'jsonp'
            }).done(function(data) {
                for (var i = 0; i < data[1].length; i++) {
                    $("#text-cards").append(`
                    <div class="card">
                        <div class="card-body card-result">
                            <h5 class="card-title">${data[1][i]}</h5>
                            <p class="card-text">${data[2][i]}</p>
                            <a href="${data[3][i]}" target="_blank" class="btn btn-secondary">See the full article</a>
                        </div>
                    </div>
                `);
                }
            });
        }
    });
});