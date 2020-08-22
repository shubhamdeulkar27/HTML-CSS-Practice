$(document).ready(function () {
  $("#email").click(function () {
    console.log(" Email Clicked");
  });
  $("#facebook").click(function () {
    window.location.assign(
      "https://www.facebook.com/?stype=lo&jlou=Aff5rNSXufbiH-A82ZGI3KTZJKn6vT8bm9-kL-rIvivP0D2l_9krd5gC3sebx3Pw5d8ruYsNEnHEMkPiLR8rGlA8ScfineeQnO6NxcAQIQiZeQ&smuh=52887&lh=Ac9FDWOxZJJclIyr"
    );
  });
  $("#facebook").hover(
    function () {
      $(this).css("text-shadow", "2px 2px 5px black");
    },
    function () {
      $(this).css("text-shadow", "none");
    }
  );
  $("#twitter").click(function () {
    window.location.assign("https://twitter.com/?lang=en");
  });
  $("#twitter").hover(
    function () {
      $(this).css("text-shadow", "2px 2px 5px black");
    },
    function () {
      $(this).css("text-shadow", "none");
    }
  );
  $("#google").click(function () {
    window.location.assign("https://www.google.com/");
  });
  $("#google").hover(
    function () {
      $(this).css("text-shadow", "2px 2px 5px black");
    },
    function () {
      $(this).css("text-shadow", "none");
    }
  );
  $("#linkedin").click(function () {
    window.location.assign("https://in.linkedin.com/");
  });
  $("#linkedin").hover(
    function () {
      $(this).css("text-shadow", "2px 2px 5px black");
    },
    function () {
      $(this).css("text-shadow", "none");
    }
  );
  $("#vimeo").click(function () {
    window.location.assign("https://vimeo.com/");
  });
  $("#vimeo").hover(
    function () {
      $(this).css("text-shadow", "2px 2px 5px black");
    },
    function () {
      $(this).css("text-shadow", "none");
    }
  );
  $(".nav-menu-btn").hover(
    function () {
      $(this).css("color", "rgb(255, 95, 83)");
    },
    function () {
      $(this).css("color", "white");
    }
  );
  $("#prev").hover(
    function () {
      $(this).css("color", "rgb(255, 95, 83)");
    },
    function () {
      $(this).css("color", "white");
    }
  );
  $("#prev").click(function () {
    $(".header-img").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(Images/people.jpg)"
    );
  });
  $("#next").hover(
    function () {
      $(this).css("color", "rgb(255, 95, 83)");
    },
    function () {
      $(this).css("color", "white");
    }
  );
  $("#next").click(function () {
    $(".header-img").css(
      "background-image",
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(Images/laptop.jpg)"
    );
  });
  $(".mid-content-item").hover(
    function () {
      $(this).css("color", "rgb(255, 95, 83)");
    },
    function () {
      $(this).css("color", "white");
    }
  );
});
