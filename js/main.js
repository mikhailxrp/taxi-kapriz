$(document).ready(function () {});

// active menu link
const menuItems = document.querySelector(".menu").querySelectorAll("li");

for (item of menuItems) {
  item.addEventListener("click", function () {
    for (item of menuItems) {
      item.classList.remove("active");
    }
    this.classList.add("active");
  });
}

// mobile-button
const mobileNavButton = document.querySelector(".mobile-nav-btn");
const mobileNavIcon = document.querySelector(".mobile-nav-icon");
const overlay = document.querySelector(".overlay");
const mobileNavPanel = document.querySelector(".mobile-nav-panel");
const modalSuccess = document.querySelector(".modal-success")

mobileNavButton.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  overlay.classList.toggle("visible");
  mobileNavPanel.classList.toggle("visible");
  document.body.classList.toggle("no-scroll");
});

overlay.addEventListener("click", function () {
  turnOfMobileNav();
});

function turnOfMobileNav() {
  if (mobileNavIcon.classList.contains("active")) {
    mobileNavIcon.classList.remove("active");
  }
  if (overlay.classList.contains("visible")) {
    overlay.classList.remove("visible");
  }
  if (mobileNavPanel.classList.contains("visible")) {
    mobileNavPanel.classList.remove("visible");
  }
  if (modalSuccess.classList.contains("visible")) {
    modalSuccess.classList.remove("visible");
  }
  if (document.body.classList.contains("no-scroll")) {
    document.body.classList.remove("no-scroll");
  }
}

// slider
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    margin: 10,
    dots: false,
  });

  $(".slider__btn-prev").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel", [500]);
  });
  $(".slider__btn-next").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel", [500]);
  });
  

  // form-validate
  form.validate({
    rules: {
      departure: {
        required: true,
        minlength: 3,
      },
      destination: {
        required: true,
        minlength: 3,
      },
      "number-people": {
        required: true,
      },
      message: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      departure: "Необходимо заполнить это поле",
      destination: "Необходимо заполнить это поле",
      "number-people": "Необходимо заполнить это поле",
      message: "Необходимо заполнить это поле",
      phone: "Необходимо заполнить это поле",
    },
  });
});
