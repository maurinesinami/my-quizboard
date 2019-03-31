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
        if (percent > 79) {
            $("#correct").text( " You scored " + percent + "%. " + "EXCELLENT");
          } else if (percent > 59 && percent < 79) {
            $("#correct").text(" You scored " + percent + "%. " + "FAIR YOU CAN DO BETTER");
          } else if (percent > 39 && percent < 59) {
            $("#correct").text(" You scored " + percent + "%. " + "Below Average !.");
          } else if(percent >0 && percent<20) {
            $("#correct").text(" You scored " + percent + "%. " + "POOR!");
          }else if(percent === 0){
            $("#correct").text("You scored "+ percent+ " %. " + " !!!!! ");
          } else{
            $("#correct").text("You need to answer ALL the questions")
          };
            $("#hidden").fadeToggle();
          });
        });
      });
      
        $("#submit").click(function () {
            $("#results").slideToggle();
        });
    });

});