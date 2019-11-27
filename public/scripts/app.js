$(function (){

  $("#paw2paw-btn").click((e)=> {
    e.preventDefault();
    $(".paw2paw-details").slideToggle();
  });

  $("#jungle-btn").click((e)=> {
    e.preventDefault();
    $(".jungle-details").slideToggle();
  });

  $("#chatty-btn").click((e)=> {
    e.preventDefault();
    $(".chatty-details").slideToggle();
  });

  $("#tweeter-btn").click((e)=> {
    e.preventDefault();
    $(".tweeter-details").slideToggle();
  });
  
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles-js config loaded');
  });
});
