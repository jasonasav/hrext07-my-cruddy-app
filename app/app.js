/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?

  // maybe load all of our old todo lists when the page loads
  /* <script>window.onload = function() {
  // $( "p" ).prepend( $( "b" ) );
   };</script>
   http://api.jquery.com/prepend/ */
  
  // $('.container-data').on('click', '.chkBox', function(e){
  // $('.chkBox').toggle(parent());
  // });

  var timeStamp = function() {
      var time = new Date().getTime();
      var date = new Date(time);
      return  date.toString();
      }
 
  //var chkBox = $('<span class="chkBox">√BX</span>');
 //var chkBox = $('<div class="chkBox">√BX</div>');
 
 
  
  var createChkBox = function (div) {
    return $('<span class="chkBox">√BX  </span>').prependTo($(div));

  };
   
   var createMotivate = function (div) {
    return $('<span class="Motivate">  Motiƒa†e!: <input type ="text"><smal>(ft)</small></span>').appendTo($(div));

  };

  // var theMotivate = function() {
  //   $(this).parent().innerHTML +=
  //   '<span>Label: <input type="text"><small>(ft)</small></span>\r\n';
  //  }

  $('.btn-add').on('click', function(e){
    

 

    console.log(e);
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();

        /*write to db*/
    localStorage.setItem(keyData, valueData);
   
   // var chkBox = $('<div class="chkBox">√BX</div>')
    
    //chkBox.text('√BX');
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    var stickyNote = $('<div class="display-data-item" data-keyValue="'+ keyData +'">'+keyData+ ' ' +valueData/*+ ' ' +timeStamp()*/+'</div>');
    //var stickyNote = $('<span class="display-data-item" data-keyValue="'+ keyData +'">'+keyData+ ' ' +valueData/*+ ' ' +timeStamp()*/+'</span>');
    // (not working, adds button every submit) $(".check-box").prependTo($(".display-data-item"))
    //$(chkBox).prepend($(stickyNote));
  
    //$(stickyNote).appendTo($(".display-data-item"));
    
    //$(chkBox).prependTo($(stickyNote));

    createChkBox(stickyNote);
    createMotivate(stickyNote);
    $(stickyNote).appendTo('.container-data');
    //$(chkBox).appendTo($(stickyNote));
    
    
    //$('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
    $('.input-key').val('');
    $('.input-value').val('');
  });
    //$(".check-box").prependTo($(".display-data-item"))

    //$(chkBox).prependTo($(".display-data-item"))
// $(document).on('click', '.chkBox', function(e){
//   $('.chkBox').toggle(parent());
//   });

  // update db
    // need to expand when  more than 1 item is added


 
  $('.container-data').on('click', '.chkBox', function(e){
  // // $('.container-data').on('click', '.display-data-item', function(e){
    console.log(e.currentTarget.dataset.keyvalue);
    var keyData = e.currentTarget.dataset.keyvalue;
    localStorage.removeItem(keyData);
    $('.container-data').text('');
  });
  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });

});