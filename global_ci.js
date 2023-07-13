$( document ).ready(function() {



    var url = window.location.href;
    var split = url.split("/");
    var last = split[split.length -1];
    
    if(last == "kn" || last == ""){
        
        var lang = "kn";
        
    }
    
    if(last == "en" || last == "english")
    {
        
        var lang = "en";
    }
    
    
    var d = new Date();
    var time = d.getTime();
    
    
    $(".ci-cm-photo").attr("src","cm.jpg"+lang+".png?"+time+"");
    $(".cml").attr("src","https://planning.karnataka.gov.in/frontend/opt1/images/cm_logo/chief_minister_of_karrnataka_"+lang+".png?"+time+"");
    
    
        $('#amModal').modal('show');
    }); 
    
     $( document ).ready( function () {
    
         
        $('.ceoclose').click(function(e){
      $(this).parent().addClass('hideceo');
    });
    
    
    });