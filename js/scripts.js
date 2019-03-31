//Business logic //
function set() {
    var name = document.getElementById("firstName").Value;
    var name = document.getElementById("secondName").value;
}

//U.I Logic//
$(document).ready(function () {
    $("#quiz").submit(function (event) {
        event.preventDefault();
        var a = parseInt($("input:radio[name=Q1]:checked").val());
        var b = parseInt($("input:radio[name=Q2]:checked").val());
        var c = parseInt($("input:radio[name=Q3]:checked").val());
        var d = parseInt($("input:radio[name=Q4]:checked").val());
        var e = parseInt($("input:radio[name=Q5]:checked").val());

        var total = parseInt((a + b + c + d + e) / 50 * 100);
        var name = $("input#firstName").val();
        var name = $("input#secondName").val();
        $("#results").text(name + " " + "your score is :" + " " + display + "%");
        $("#submit").click(function () {
            $("#results").slideToggle();
        });
    });

})