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
  $(".header-bottom-top-content").hover(
    function () {
      $(this).css("border-right", "solid gray 1px");
      $(this).css("border-left", "solid gray 1px");
    },
    function () {
      $(this).css("border", "white 1px solid");
    }
  );
  $(".aboutus-btn").hover(
    function () {
      $(this).css("box-shadow", "2px 2px 5px black");
    },
    function () {
      $(this).css("box-shadow", "none");
    }
  );
  $("#about-btn").click(function () {
    window.location.assign("#about-us");
  });
  $(".service-content-item").hover(
    function () {
      $(this).css("background-color", "rgb(255, 95, 83)");
      $(this).css("color", "white");
    },
    function () {
      $(this).css("background-color", "white");
      $(this).css("color", "black");
    }
  );
  $("#service-btn").click(function () {
    window.location.assign("#serivce-main");
  });
  $("#project-btn").click(function () {
    window.location.assign("#project-main");
  });
  $(".project-options-btn").hover(
    function () {
      $(this).css("background-color", "rgb(255, 95, 83)");
      $(this).css("color", "white");
      $(this).css("border-bottom", "solid white 1px");
    },
    function () {
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $(this).css("border-bottom", "solid black 1px");
    }
  );
});
