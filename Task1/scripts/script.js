$(document).ready(function() {
    //alert(String.fromCodePoint("0x1F49C"))
    $(".border-square").hover(function (eventIn) {
        let square = eventIn.target;
        $(square).addClass("hover-square")
    },
        function(eventOut) {
            let square = eventOut.target;
            $(square).removeClass("hover-square")
        });
})