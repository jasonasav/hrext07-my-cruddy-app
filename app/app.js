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
    return $('<span class="chkBox">| √BX |====> </span>').prependTo($(div));

  };
   
   var createMotivate = function (div) {
    return $('<span class="Motivate">   <=====|  Motiƒa†e!  |====> </span>').appendTo($(div));
    '/*Motiƒa†e!: <input type ="text" class="jason"><smal>(ft)</small>*/'

  };
  



  $('.btn-add').on('click', function(e){
    console.log(e);
    //var keyData = $('.input-key').val();
    var keyData = timeStamp();
    var valueData = $('.input-value').val();
        /*write to db*/
    localStorage.setItem(keyData, valueData);
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    var stickyNote = $('<div class="display-data-item" data-keyValue="'+ keyData +'">'+keyData+ ' ' +valueData/*+ ' ' +timeStamp()*/+'</div>');
    createChkBox(stickyNote);
    createMotivate(stickyNote);
    $(stickyNote).appendTo('.container-data');
    $('.input-key').val('');
    $('.input-value').val('');
  });

  $('.container-data').on('click', '.Motivate', function(e){
    var motivateMessage = $('.jason').val()
    console.log(e);
    $('<span>'+motivateMessage+'</span>').appendTo(e.currentTarget.parentNode);
    $('.jason').val('');
  });

 
  $('.container-data').on('click', '.chkBox', function(e){
    console.log(e.currentTarget.dataset.keyvalue);
    var keyData = e.currentTarget.dataset.keyvalue;
    e.currentTarget.parentNode.remove( e.currentTarget.parentNode); 
  });
  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });

});