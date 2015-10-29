
/* Highlight */
$( document ).ready(function() {
    hljs.initHighlightingOnLoad();
    $('table').addClass('table table-striped table-hover');
});


$('body').scrollspy({
    target: '.bs-sidebar',
});


/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});


/* Change image stuff */

function getCheckedRadioValue(name) {
    var elements = document.getElementsByName(name);
    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[i].checked) return elements[i].value;
}

function changeURL() {
    var d1 = $("#chrom").find(":selected").attr("value");
    var d2 = getCheckedRadioValue("var_fill");
    var d3 = getCheckedRadioValue("aggregation");
    var d4 = getCheckedRadioValue("padding");
    var url = ("http://public.ryantaylor.net/figure/04b3-" + d1 + "-l2-" + d2 + "-" + d3 + "-" + d4 + ".png");
    $('#plotimage').attr("src", url);
}

$( ".radio input[type="radio"]" ).change(function() {
  changeURL();
});
