// Generated by CoffeeScript 1.12.7
(function() {
  var carousel, getID;

  getID = document.getElementById;

  carousel = getID("carousel");

  carousel.children.forEach(function(child) {
    if (!child.classList.has(active)) {
      return child.classList.add("is-hidden");
    }
  });

}).call(this);