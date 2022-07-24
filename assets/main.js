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
    loop: true,
    margin: 20,
    center: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 50,
      },
      375: {
        margin: 20,
        items: 1.2,
        stagePadding: 50,
      },
      960: {
        items: 3,
        margin: 50,
        stagePadding: 0,
      },
    },
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
