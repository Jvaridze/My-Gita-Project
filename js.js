//----this function is to modify menu bar on scroll in index.html-----!
window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})
//--- This function is to hide and show Quick navigation in VisitorGuide.html------!
/*function myFunction() {
    var x = document.getElementById("mini-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/

    //-----------Jquery--------------

    $(document).ready(function(){
        //-----this function is to show Welcome message while loading the website home page----!
        setTimeout(function (){
            $('#board').fadeOut('slow');
        },1000);

        //this toggle function is to show hidden winter/summer/capital activities in index.html----!
        $( "#winter-click" ).click(function() {
        $( "#resorts" ).toggle('slow');
        $("#resorts1,#tbilisi").hide();
        $
    });
        $( "#summer-click" ).click(function() {
        $( "#resorts1" ).toggle('slow');
        $("#resorts,#tbilisi").hide();
        $
    });
        $( "#clicktb" ).click(function() {
        $( "#tbilisi" ).toggle('slow');
        $("#resorts1,#resorts").hide();
        $
    });

        //-----this function is for sliding photo gallery-----!
        $('.next').on('click', function(){
            var currentImg = $('.active');
            var nextImg = currentImg.next();

            if(nextImg.length){
                currentImg.removeClass('active').css('z-index', -666);
                nextImg.addClass('active').css('z-index', 10);
            }
        });
        $('.prev').on('click', function(){
            var currentImg = $('.active');
            var prevImg = currentImg.prev();

            if(prevImg.length){
                currentImg.removeClass('active').css('z-index', -666);
                prevImg.addClass('active').css('z-index', 10);
            }
        });

        //----this function changes html text on hovering mouse on html element-----!
        $("#text-btn").mouseover(function(){
            $("#text-btn").text("Scroll Down");
        });
        $("#text-btn").mouseout(function(){
            $("#text-btn").text("Discover More");
        });

        //--------this function fades in the hidden quick menu elements------!
        $("#nav0").click(function(){
            $("#link1").fadeToggle(100);
            $("#link2").fadeToggle(400);
            $("#link3").fadeToggle(800);
            $("#link4").fadeToggle(1000);
            $("#link5").fadeToggle(1200);
            $("#link6").fadeToggle(1400);
        });

        //this function is to alert the information source link when button is clicked----!
        $("#source-btn").click(function(){
            alert("This information is imported from the following source: \n"+$("#info-source").attr("href"));
        });
        $("#information-sector").children("h2").css({
            "color":"brown",
            "font-size":"16pt",
            "text-transform" : "capitalize"
        });
        $("#innerdiv").parent().css({
            "box-shadow":"rgba(0, 0, 0, 0.7) 0px 4px 12px",
            "border-radius": "3px"
        });
        $("#innerdiv2").parent().css({
            "box-shadow":"rgba(0, 0, 0, 0.7) 0px 4px 12px",
            "border-radius": "3px"
        });
        $("#tbilisi").children().css({
            "box-shadow":"rgba(0, 0, 0, 0.7) 0px 4px 12px",
            "border-radius": "3px"
        });
        $("#list-btn").click(function(){
            $("#mini-menu").slideToggle(1000);
        });
    });
