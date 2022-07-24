$(document).ready(function () {
  $(".carousel-1").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["<img src='./assets/images/slider/carrot-left.png'>", "<img src='./assets/images/slider/carrot-right.png'>"],
    center: true,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1,
      },
      960: {
        items: 3,
      },
    },
  });
  $(".carousel-2").owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 50,
      },
      365: {
        items: 1,
        stagePadding: 50,
      },
      390: {
        items: 1,
        stagePadding: 65,
      },
      425: {
        items: 1.2,
        stagePadding: 65,
      },
      960: {
        items: 3,
        margin: 50,
        stagePadding: 0,
      },
    },
  });

  // $(".toggle").each(function () {
  //   $(this).click(function () {
  //     var elem = $(this).text();
  //     if (elem == "Learn More +") {
  //       $(this).text("Read Less -");
  //       $(this).next().slideDown();
  //     } else {
  //       $(this).text("Learn More +");
  //       $(this).next().slideUp();
  //     }
  //   });
  // });

  // .click(function () {
  //   var elem = $(".toggle").text();
  //   if (elem == "Learn More +") {
  //     $(".toggle").text("Read Less -");
  //     $("#speakerBio").slideDown();
  //   } else {
  //     $(".toggle").text("Learn More +");
  //     $("#speakerBio").slideUp();
  //   }
  // });
});

$(".toggle").each(function () {
  $(this).click(function () {
    var elem = $(this).text();
    if (elem == "Learn More +") {
      $(this).text("Read Less -");
      $(this).next().slideDown();
    } else {
      $(this).text("Learn More +");
      $(this).next().slideUp();
    }
  });
});

window.onload = function () {
  if (window.LottieInteractivity) {
    LottieInteractivity.create({
      player: "#topicsLottieM",
      mode: "scroll",
      container: "#topicsAnimationPlay",
      actions: [
        {
          visibility: [0, 1],
          type: "play",
          frames: [0, 300],
        },
      ],
    });

    LottieInteractivity.create({
      player: "#topicsLottieD",
      mode: "scroll",
      markers: true,
      container: "#topicsAnimationPlay",
      actions: [
        {
          visibility: [0, 1],
          type: "play",
          frames: [0, 300],
        },
      ],
    });
  }
};
