$(document).ready(function() {

    const api_key = "bZ12LZeqE02QxK1ePlS7HZ2TC2FZ2dWB"

    $("#submit").on("click", (event) => {
        event.preventDefault()

        var animalName = $("#textBox").val()
        // console.log(searchText)
        
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${animalName}&limit=10&offset=0&lang=en`,
            method: "GET",
        }).then(response => {
            console.log(response)

            for(let i = 0; i < response.data.length; i++){
                console.log(response.data[i]);

                let stillImgUrl = response.data[i].images["480w_still"].url;
                let animatedImgUrl = response.data[i].images.original.url;

                let newImg = $('<img>');
                newImg.attr('src', animatedImgUrl);
                newImg.attr('class', 'new-img');

                //<img src="somethingthatisanimated" class="new-img">
                $("#gif-container").append(newImg)
            }
        })
  

    })
});

