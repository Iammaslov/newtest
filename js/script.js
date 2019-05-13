//Скролл страниц
$(function() {
    
    $('.panel').css({
        'height':$(window).height(768)
    });
    
    $.scrollify({
        section:'.panel',
        scrollSpeed:800,
        offset: 0,
        scrollbars: false
    });
});



//Полоса закрашивания бегунка

function fun1() {
    var rng=document.getElementById("range"); //rng - это Input
    var div=document.getElementById("test"); // div - блок test
    div.style.width=rng.value+'px';
}






























/*
$('.horisontal_slider').on('init reInit',function(event,slick){
  var amount = slick.slideCount;
  $('#range').attr('max',amount);
})

$('.horisontal_slider').on('afterChange',function(e,slick,currentSlide){
  $('#range').val(currentSlide+1);
})

$('#range').on('input change',function(){
  $('.horisontal_slider').slick('slickGoTo',this.value-1);
});

$('.horisontal_slider').slick({
  slidesToShow:1,
  arrows:false,
  dots:false
})


*/












/*

(function(){ 
        var button = document.getElementsByClassName("button"); 
        var iceCube = document.getElementById("iceCube"); 
    
    var right=0; 
    
    for (var i = 0; i < button.length; i++) { 
        button[i].addEventListener('click',function(e){ 
            var position = e.currentTarget.value; 
            if(position==="Shape__Fragment_right"){ 
                if(right + 300 >=900) { 
                    return; 
                } 
                right+=300; 
                iceCube.style.marginLeft = right+'px'; 
            } else if(position==="Shape__Fragment_left"){ 
                if(right - 300 < 0) { 
                    return; 
                } 
                right-=300; 
                iceCube.style.marginLeft = right+'px'; 
            } else if(position==="Shape__Fragment_middle"){ 
                if(right + 300 >=900) { 
                    return; 
                } 
                right+=300; 
                iceCube.style.marginLeft = right+'px'; 
            } 
        } 
                                  ) 
    } 
}());

*/






/*<div id="content">
    <h2>Touch and drag content</h2>
    <p>Lorem ipsum dolor sit amet...</p>
</div>

*/

/*#content {
    position:absolute;
    left:50px;
    top:50px;
    width:500px;
    height:350px;
    text-align:justify;
}




(function($){
$.fn.touchanddrag = function(move){

this.wrapInner('<div>');

var box = this,
    data = this.children();
    
box.css({overflow:'hidden'});

data.css({position:'absolute',cursor:'default'});
    
data.mousedown(function(e){
        var wthBox = box.width(),
            wthData = data.width();
    
    if (wthData>wthBox) {
        
        var posTap = e.pageX,
            posData = data.position().left,
            posShift,
            
            mouseMove = function(e){
                
                if (e.which==1){
                    
                    posShift = e.pageX-posTap;
                    
                    if(data.position().left>0){
                        
                        data.css({left:(posData+posShift)/5});
                        
                        
                    } else if ((data.position().left+wthData)<wthBox){
                        
                        data.css({left:(wthBox-wthData)+(posShift/5)});
                    } else{
                        data.css({left:posData+posShift});
                    }
                } else {
                    mouseUp();
                }
            },
    mouseUp = function(){
        $(document).off('mousemove',mouseMove).off('mouseup',mouseUp);
        $(document).off('mousedown',selection);
        
        data.css({cursor:'default'});
        
        if (data.position().left>0){
        data.animate({left:0},250);
        } else if ((data.position().left+wthData)<wthBox) {
        data.animate({left:wthBox-wthData},250);
        }
    },
    selection = function(){
            if (window.getSelection){window.getSelection().removeAllRanges()}
            else {document.selection.empty()}
            return false;
        };
    data.css({cursor:'move'});
    
    $(document).on('mousedown',selection).on('mousemove',mouseMove);
    $(document).on('mouseup',mouseUp).on('contextmenu',mouseUp);
    $(window).on('blur',mouseUp);    
    }
});
    return this;
};
})(jQuery);

$('img.iceCube').touchanddrag();
*/





/*

let img = document.querySelector('.iceCube');  
   
  function move(){
        document.onmousedown=function(){
            return false
        }  
        document.onmousemove=function(e){
            x=e.pageX;
            left=img.offsetLeft;
            left=x-left;
            
            posData = document.querySelector('.iceCube').position,
            posShift = document.querySelector('.Shape').position,
            
            mouseMove = function(e){
                
                if (e.which==1){
                    
                    posShift = e.pageX-x;
                    
                    if(data.position().left>0){
                        
                        data.css({left:(posData+posShift)/5});
                        
                        
                    } else if ((document.querySelector('.iceCube').position.left+document.querySelector('.iceCube').width)<document.querySelector('.Shape').width){
                        
                        data.css({left:(wthBox-wthData)+(posShift/5)});
                    } else{
                        data.css({left:posData+posShift});
                    }
                } else {
                    mouseUp();
                }
            },
            
            
            
            
            
            document.onmousemove=function(e){
                x=e.pageX;
                img.style.left=x-left + 'px';
                if(img.style.left <= 0){
                   return false 
                }
            if(img.style.left >= document.getElementById('Shape').width){
             document.onmousedown=function(){
        }  
         
        
            }
            }
        }
        document.onmouseup=function(){
            document.onmousemove=function(){}
        }
    }
*/







/*(function(){

    var button = document.getElementsByClassName("button");
    var iceCube = document.getElementById("iceCube");


    var left=0, right=0;

    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click',function(e){
                var position = e.currentTarget.value;
            if(position==="Shape__Fragment_left"){
                left+=600;
                iceCube.style.marginRight = left+'px';
            }
            if(position==="Shape__Fragment_right"){
                right+=600;
                iceCube.style.marginLeft = right+'px';
            }

            }
        )
    }
  }());*/




/*
(function(){

    var button = document.getElementsByClassName("button");
    var iceCube = document.getElementById("iceCube");


    var left=0, right=0;

    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click',function(e){
                var position = e.currentTarget.value;
            if(position==="Shape__Fragment_right"){
                right+=300;
                iceCube.style.marginLeft = right+'px';
            }
            }
        )
    }
  
     for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click',function(e){
                var position = e.currentTarget.value;
            if(position==="Shape__Fragment_left"){
                right-=300;
                iceCube.style.marginLeft = right+'px';
            }

            }
        )
    }
    
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click',function(e){
                var position = e.currentTarget.value;
            if(position==="Shape__Fragment_middle"){
                right+=300;
                iceCube.style.marginLeft = right+'px';
            }
            
            }
        )
    }
      
}()); */