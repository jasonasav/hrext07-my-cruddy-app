/*
Init app
interact with DOM
interact with localstorage

 */



Init app
interact with DOM
interact with localstorage

 */

 version 1.1

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?

  // maybe load all of our old todo lists when the page loads
  /* <script>window.onload = function() {
  // $( "p" ).prepend( $( "b" ) );
   };</script>
   http://api.jquery.com/prepend/ */
  

  var timeStamp = function() {
      var time = new Date().getTime();
      var date = new Date(time);
      return  date.toString();
      }

 var chkBox = $('<span class="chkBox">√BX</span>');
 //$(".check-box").prependTo($(".display-data-item"))
  
  $('.btn-add').on('click', function(e){
    console.log(e);
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    //var chkBox = $(<button class="check-box">√BX</button>);
        /*write to db*/
    localStorage.setItem(keyData, valueData);
    
    // chkBox.text('√BX');
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    var stickyNote = $('<div class="display-data-item" data-keyValue="'+ keyData +'">'+keyData+ ' ' +valueData+ ' ' +timeStamp()+'</div>');
    // (not working, adds button every submit) $(".check-box").prependTo($(".display-data-item"))
    //$(chkBox).prepend($(stickyNote));
    //$(stickyNote).html($(chkBox));
    $(chkBox).prependTo($(".display-data-item"));
    $(stickyNote).appendTo('.container-data');
    //$(".check-box").prepend($(".display-data-item"))
    //$('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
    $('.input-key').val('');
    $('.input-value').val('');
  });
    //$(".check-box").prependTo($(".display-data-item"))

    //$(chkBox).prependTo($(".display-data-item"))


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  // not working
  // $$('.container-data').on('click', '.chkBox', function(e){
  //   var keyData = e.currentTarget.dataset.keyvalue;
  //   (keyData).toggle();
  // });
  
  $('.container-data').on('click', '.chkBox', function(e){
  // $('.container-data').on('click', '.display-data-item', function(e){
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



version 1.0

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?
 
  var timeStamp = function() {
      var time = new Date().getTime();
      var date = new Date(time);
      return  date.toString();
      }

  var chkBox = '<span class="chkBox">√BX</span>';
  
  $('.btn-add').on('click', function(e){
    console.log(e);
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    //var chkBox = $(<button class="check-box">√BX</button>);
        /*write to db*/
    localStorage.setItem(keyData, valueData);
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    var stickyNote = '<div class="display-data-item" data-keyValue="'+ keyData +'">'+keyData+ ' ' +valueData+ ' ' +timeStamp()+'</div>'
    
    $(stickyNote).appendTo('.container-data');
    //$('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
    $('.input-key').val(keyData);
    $('.input-value').val('');
  });


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  $('.container-data').on('click', '.input-key', function(e){
  //$('.container-data').on('click', '.display-data-item', function(e){
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