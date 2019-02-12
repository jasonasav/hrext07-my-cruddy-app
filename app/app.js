/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?

  // maybe load all of our old todo lists when the page loads
  //  <script>window.onload = function() {
  // $( "p" ).prepend( $( "b" ) );
  //  };</script>
   //http://api.jquery.com/prepend/ 
  
//   window.onload = function() {
//   $('.display-data-item').prepend('.container-data');
// };

  var timeStamp = function() {
      var time = new Date().getTime();
      var date = new Date(time);
      return  date.toString();
      }
 
  
  var createChkBox = function (div) {
    return $('<span class="chkBox">√BX  </span>').prependTo($(div));

  };
   
   var createMotivate = function (div) {
    return $('<span class="Motivate">  Motiƒa†e!: <input type ="text" class="jason"><smal>(ft)</small></span>').appendTo($(div));

  };
  



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

    //$('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
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
  
  // $('.container-data').on('click', '.Motivate', function(event){
  //     console.log(event);
  //   });
   //var mtv = $(this).next('.Motivate');

//   EXAMPLE $(function(){
//  $(document).on('click','.user',function(){
//      alert($(this).text());
// });
// });
  $('.container-data').on('click', '.Motivate', function(e){
    var motivateMessage = $('.jason').val()
    console.log(e);
    //var now = e.currentTarget.parentNode
    //var keyData = e.currentTarget.dataset.keyvalue;
    $('<span>'+motivateMessage+'</span>').appendTo(e.currentTarget.parentNode);
    //$('.jason').val('');

  });
//example 
// $(".list-item").each(function () {    //loop over each list item
//     myYear= $(".year", this);         //get the year of the current list item
//     $(".item-information", this).append(myYear); //append it to the item information
// });
 
  $('.container-data').on('click', '.chkBox', function(e){
  // // $('.container-data').on('click', '.display-data-item', function(e){
    
    

    console.log(e.currentTarget.dataset.keyvalue);
    var keyData = e.currentTarget.dataset.keyvalue;
    //localStorage.removeItem(keyData);
    e.currentTarget.parentNode.remove( e.currentTarget.parentNode);
    //$('.container-data').text('');
  });
  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });

});