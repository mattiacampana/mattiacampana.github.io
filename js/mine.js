(function ($) {
  // custom css expression for a case-insensitive contains()
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };

  function applyFilter(filter, list){
    
    console.log(filter);
  
    if(filter) {

      var els = $(list).children('li');

      $(list).children('li').each(function(){

        var elementId = $(this).attr('id');
        
        console.log($(this).innerHTML);

        if(elementId != filter){
          console.log(elementId + " - " +filter);
          $(this).slideUp();
        }else{
          $(this).slideDown();
        }
      });

      //$(list).find("a:not(:Contains(" + filter + "))").parent().slideUp();
      //$(list).find("a:Contains(" + filter + ")").parent().slideDown();
    } else {
      $(list).find("li").slideDown();
    }
  }


  function listFilter(pubList) {

    $("#allButton").click(function(){
      applyFilter(null, pubList);
    });

    $("#journalButton").click(function(){
      applyFilter("journal", pubList);
    });

    $("#confButton").click(function(){
      applyFilter("conf", pubList);
    });
  }


  //ondomready
  $(function () {
    listFilter($("#pubList"));
    $('#allButton').addClass('active');
  });
}(jQuery));

  