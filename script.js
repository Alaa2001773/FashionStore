

$(document).ready(function () {
//contact
    $("button").mouseenter(function() {
        // Change the color of the button when the mouse enters
        $(this).css("background-color", "gray");
        $(this).css("color", "black");
      });
      $(" button").mouseleave(function() {
        // Change the color back to the original when the mouse leaves
        $(this).css("background-color", "#042645");
        $(this).css("color", "white");
      });
//blog
    $('.blog-details a ').click(function() {
        $(".blog-details p").slideUp(2000);
        $('.blog-details a ').click(function() {
            $(".blog-details p").slideToggle(2000);
        });
    });
 // sPRODUCT
$(".single-pro-details button").click(function (){
                $(".single-pro-details span").hide(3000).show(3000).fadeOut(2000);
        // $(".single-pro-details button").click(function(){
        //       $(".single-pro-details button").click(function(){
        //       //  $(".single-pro-details span").stop()
        //       });
        // });   
            });
            
    $('input[type="text"]').click(function() {

        $(this).css("background-color" , "rgba(59, 130, 246, 0.5)");
    });

   $("#newsletter input").val("@gmail.com");
      console.log($("input").val()); 

      
      
        
        $(".form button").click(function (){
            $("#newsletter h4").toggle();

    });
    //about
    $("#about-app a").click(function(){
        $("#about-app video ").animate({

            left: "100px",
            width: "400px"
            
        });
  });



});

//fadeIn  show 
//fadetoggle toggle
// fadout hide
//click mouseenter mouseleave


//fashionstor 
function h(){
    alert("Welcome to our store, now it's easier to shop anywhere");
}

//newsletter
function n() {
    var x = prompt("Please enter your password");
    if (x != null) 

        { 
        alert("Welcome to our store, now it's easier to shop anywhere");
        } else{
        alert("Please Enter Your Password");
        }
}


// shopping_cart




function c(){
    var x = document.getElementById("bu");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("car").innerHTML += " aa66 ";}
function mySecondFunction() {
    document.getElementById("car").innerHTML += " bb5 "; }
function myThirdFunction() {
    document.getElementById("car").innerHTML+="bb7 ";}

}

function x(){
    var x=parseInt(document.getElementById("num1").value),
        y=parseInt(document.getElementById("num2").value),
        z=parseInt(document.getElementById("num3").value),
        res= x + y + z;
    document.getElementById('shop1').innerHTML=res;
    //
    document.getElementById('lol').onclick=function(){
    document.getElementById('lolo').innerHTML="Your request has been submitted successfully and we will contact you within a few minutes";
}
}
// sproduct
function s() {
    var x=document.getElementById('size').value;
    if (x<=2) {
    alert('Done')
    } else{
    alert('InValid')
    }
}

var MainImg = document.getElementById("MainImg"),
    smallimg = document.getElementsByClassName("small-img");
smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick =function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick= function(){
    MainImg.src = smallimg[3].src;
}


//contact
function f() {
    var x = prompt("Do you have any other problem");
    if (x === "Yes") {
        var y=prompt("Enter your problem");
    }
    else if (x === "No") {
        alert("Thanks for helping us develop");

    }
    else {
        confirm('welcome');

    }
}


