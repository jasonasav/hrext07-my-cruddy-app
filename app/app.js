/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){

  var kolor = function randomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  };

  var timeStamp = function() {
      var time = new Date().getTime();
      var date = new Date(time);
      return  date.toString();
  };
 
  
  var createChkBox = function (div) {
    return $('<span class="chkBox">| √BX |====> </span>').prependTo($(div));

  };
   
   var createMotivate = function (div) {
    return $('<span class="Motivate">   <=====|  Motiƒa†e!  |====> </span>').appendTo($(div));
    '/*Motiƒa†e!: <input type ="text" class="jason"><smal>(ft)</small>*/'

  };

    var loadFunc = function() {
      var existing = localStorage.getItem('savedMotivation');
      var loadMotivation = $('<div class="display-data-item" data-keyValue="savedMotivation">'+"Past Motivation"+existing+'</div>');
      if(existing) {
        $(loadMotivation).appendTo('.motivation-container')
      }
    for( var i = 0; i < localStorage.length; i++) {
      var loadKeyData = localStorage.key(i);
      var loadValueData = localStorage.getItem(localStorage.key(i));
      var loadStickyNote = $('<div class="display-data-item" data-keyValue="'+ loadKeyData +'">'+loadKeyData+ ' ' +loadValueData+'</div>');
      createChkBox(loadStickyNote);
      createMotivate(loadStickyNote);
      $(loadStickyNote).appendTo('.container-data');
    }
   };
  
 window.onload = loadFunc();


  $('.btn-add').on('click', function(e){
    console.log(e);
    var keyData = timeStamp();
    var valueData = $('.input-value').val();
    localStorage.setItem(keyData, valueData);
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    var stickyNote = $('<div class="display-data-item" data-keyValue="'+ keyData +'">'+keyData+ ' ' +valueData+'</div>');
    createChkBox(stickyNote);
    createMotivate(stickyNote);
    $(stickyNote).appendTo('.container-data');
    $('.input-key').val('');
    $('.input-value').val('');
    
  });

  $('.container-data').on('click', '.Motivate', function(e){
    var motivateMessage = $('.jason').val()
    var existing = localStorage.getItem('savedMotivation')
      if(existing){
        localStorage.setItem('savedMotivation', (existing + '  Motivation: ' + motivateMessage))
      } else {
        localStorage.setItem('savedMotivation', motivateMessage);
      }
    var theData = e.currentTarget.dataset.keyValue;
    console.log(theData);
    var keyData = localStorage.key('.data-keyValue');
    $('<span style="color:'+kolor()+'">'+motivateMessage+'</span>').appendTo(e.currentTarget.parentNode);
    $('.jason').val('');

  });

 
  $('.container-data').on('click', '.chkBox', function(e){
    var target = e.currentTarget.parentNode
    var keyData = e.currentTarget.dataset.keyvalue;
    $(target).css({ "background-color": 'grey' });
  });
  

  $('.check-box').on('click', function() {
    $('.display-data-item').css({ "background-color": 'white' });

  });

  $('.btn-delete').on('click', function(){
   

  });
  
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
    $('.motivation-container').text('');
  });

});