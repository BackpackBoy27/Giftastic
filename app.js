$(document).ready(function() {
    $(".submit-btn").on("click", (event) => {
        event.preventDefault()
        // console.log("deezmittens")
        
        console.log( $(".search-input").val() )

        $(".search-input").val("")
    })
});
