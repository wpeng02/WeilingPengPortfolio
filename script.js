$(document).ready(function(){    
  
    $("#work").click(function(){
        $("#workmenu").fadeToggle(300);
    });

    $("#mobilemenu").click(function(){
      $("#navmenuopened").slideToggle(300);
  });

    var text1 = ["Illustrator", "UIUX Designer", "Product Designer"];
    var counter1 = 0;
    var elem1 = document.getElementById("switch1");
    var inst = setInterval(change1, 4500);
    
    function change1() {
      elem1.innerHTML = text1[counter1];
      counter1++;
      if (counter1 >= text1.length) {
        counter1 = 0;
      }
    }

    var text2 = ["Entertaining", "Inspiring", "Suprising"];
    var counter2 = 0;
    var elem2 = document.getElementById("switch2");
    var inst = setInterval(change2, 1500);
    
    function change2() {
      elem2.innerHTML = text2[counter2];
      counter2++;
      if (counter2 >= text2.length) {
        counter2 = 0;
      }
    }

    var text3 = ["Illustrator", "UIUX Designer", "Product Designer"];
    var counter3 = 0;
    var elem3 = document.getElementById("switch3");
    var inst = setInterval(change3, 4500);
    
    function change3() {
      elem3.innerHTML = text3[counter3];
      counter3++;
      if (counter3 >= text3.length) {
        counter3 = 0;
      }
    }

    var text4 = ["Entertaining", "Inspiring", "Suprising"];
    var counter4 = 0;
    var elem4 = document.getElementById("switch4");
    var inst = setInterval(change4, 1500);
    
    function change4() {
      elem4.innerHTML = text4[counter4];
      counter4++;
      if (counter4 >= text4.length) {
        counter4 = 0;
      }
    }

    $("#box1").flip();

    var balls = document.getElementsByClassName("ball");
    document.onmousemove = function(){
        var x = event.clientX * 100 / window.innerWidth + "%";
        var y = event.clientY * 100 / window.innerHeight + "%";

        for(var i=0; i<2; i++){
            balls[i].style.left = x;
            balls[i].style.top = y;
            balls[i].style.transform = "translate(-"+x+",-"+y+")";
        }
    }

    anime({
        targets: '#wplinedrawing path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInSine',
        duration: 1000,
        direction: 'alternate',
        loop: false,
      });


    var i=0
    setInterval(function(){
        i++;
     $("#pi").attr("src", "Image/pic"+i+".jpg");
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

    $("#Uncanny").click(function(){
      $("#UncannySeries").css({'display':'block'});
      $(".close").click(function(){
        $("#UncannySeries").css({'display':'none'});
      });
    });

    $("#Icant").click(function(){
      $("#IcantSeries").css({'display':'block'});
      $(".close").click(function(){
        $("#IcantSeries").css({'display':'none'});
      });
    });

    $("#Apples").click(function(){
      $("#ApplesSeries").css({'display':'block'});
      $(".close").click(function(){
        $("#ApplesSeries").css({'display':'none'});
      });
    });

    $("#LeMooz").click(function(){
      $("#LeMoozseries").css({'display':'block'});
      $(".close").click(function(){
        $("#LeMoozseries").css({'display':'none'});
      });
    });

    $("#Stoolpigeon").click(function(){
      $("#Stoolpigeonseries").css({'display':'block'});
      $(".close").click(function(){
        $("#Stoolpigeonseries").css({'display':'none'});
      });
    });

    var modal = document.getElementById('modalsingular');
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function(){ 
      modal.style.display = "none";
    }
    var images = document.getElementsByClassName('heroimg1');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var Title = document.getElementById("titlesingular");
    var i;
    for (i = 0; i < images.length; i++) {
    images[i].onclick = function(){
       modal.style.display = "block";
       modalImg.src = this.src;
       modalImg.alt = this.alt;
       captionText.innerHTML = this.nextElementSibling.innerHTML;
       Title.innerHTML = this.parentElement.nextElementSibling.innerHTML;
   }
}

});