//Code for eventListener from mouse click
document.querySelector(".js-go").addEventListener('click',function(){
    var input = document.querySelector("input").value;
    //GIPHY URL
    var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC";

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){
    var data = e.target.response;
    pushToDOM(data);
    });
});

////Code for eventListener from keyboard enter key
document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    var input = document.querySelector("input").value;
    if(e.which===13){
        //GIPHY URL
        var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC";

        // AJAX Request
        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open( 'GET', url );
        GiphyAJAXCall.send();

        GiphyAJAXCall.addEventListener('load',function(e){
        var data = e.target.response;
        pushToDOM(data);
        });
    }
});

function pushToDOM(input){
    var response = JSON.parse(input);
    var imageUrls = response.data;
    var container = document.querySelector(".js-container");
    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;
        //console.log(src);
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    });
    document.querySelector(".js-userinput").addEventListener('keyup',function(e){
        if(e.which===8){
            container.innerHTML=" ";
        }else{
            
        }
    });    
}
