function openUrl(url) {
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

$('#getQuot').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent($('.block').text() + " - " + $('.author').text()));

$('#getQuot').on('click', function(){
  openUrl('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent($('.block').text() + " - " + $('.author').text()));
});

$('#getQuote').on('click', function() {
  $.ajaxSetup({cache: false});
  
  var color = Math.floor(Math.random() * colors.length);   
  
  $('html body').animate({
    backgroundColor: colors[color]  
  }, 1900);
  
  $('#getQuote').animate({
    color: colors[color]
  });
  
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
    $('.block').animate({
      opacity: 0,
    }, 300,
      function() {
        $(this).animate({
          opacity: 1,
          color: colors[color]
        }, 500);
        
        $('.block').html("<h3>" + data[0].content + "</h3>");
    });
    
    $('.author').animate({
      opacity: 0
    }, 300,
    function() {
      $(this).animate({
        opacity: 1,
        color: colors[color]
      }, 500);
      
      $('.author').html("<h4>" + data[0].title + "</h4>");
    });
  });
});