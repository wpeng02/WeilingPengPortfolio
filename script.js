$(document).ready(function(){
    // $(".menu3").children().draggable();

    $("#About").click(function(){
        $("#About").toggleClass("bold");
    });

    $("#work").click(function(){
        $("#workmenu").fadeToggle(300);
        $("#work").toggleClass("bold");
    });

    var counter1 = 0;

    $("#switch1").click(function(){
        if(counter1%3 == 1){
            $("#switch1").html("<p>Illustrator</p>");
        }
        else if(counter1%3 == 2){
            $("#switch1").html("<p>UIUX Designer</p>");
        }
        else{
            $("#switch1").html("<p>Product Designer</p>");
        }
        counter1 = counter1 + 1;
    });


    var counter2 = 0;

    $("#switch2").click(function(){
        if(counter2%3 == 1){
            $("#switch2").html("<p>Entertaining</p>");
        }
        else if(counter2%3 == 2){
            $("#switch2").html("<p>Inspiring</p>");
        }
        else{
            $("#switch2").html("<p>Suprising</p>");
        }
        counter2 = counter2 + 1;
    });


    var i=0
    setInterval(function(){
        i++;
     $("img").attr("src", "Image/pic"+i+".jpg");
    if(i==1){
        $("#ProjectName").html("<p>Smart Dorm: An Energy-saving Automation Dorm System</p>")
    }
    if(i==2){
        $("#ProjectName").html("<p>Tamar:Tamarind Sauce Sphere</p>")
    }
    if(i==3){
        $("#ProjectName").html("<p>WindowSill: A Bird Watching Mobile Game</p>")
        i=0;
     }
    },5000);

    $("#menuitem2").click(function(){
        //console.log("click2")
        $("#container1").text("this is a text method");
    })

    $("#menuitem3").click(function(){
        $("#container1").append("add on something");
    })

    $(".menu").children().hover(function(){
        //console.log("children")
        $(this).toggleClass("menuitems")
        $(this).toggleClass("menuitems2")
        //$(this) select the thing clicking on
        //$("#container2").slideToggle();
        //$("#container2").fadeToggle();
        // $("#container2").animate({
        //   opacity: '0.2',
        //   height: '60%',
        //   width: '60%',},2000,function(){
        //     alert("The paragraph is now hidden");
        // });
    })
});