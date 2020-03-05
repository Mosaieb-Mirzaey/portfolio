$.fn.ActingFy = function() {
    let offset = 400;
    let element = this;
    function execAction() {
        element.css( "color", "green" );
    }
    function calcLengthOfTop() {
        var scrollTop     = $(window).scrollTop(),
            elementOffset = element.offset().top,
            distance      = (elementOffset - scrollTop);
        return distance
    }
    $(window).on("scroll",function () {
        if (calcLengthOfTop()<offset)
            execAction()
    });
};

$("#id-select").ActingFy();