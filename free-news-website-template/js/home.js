window.addEventListener("load", function () {
  function _topbarNav_One() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate =
      dayOfWeek + ", " + month + " " + dayOfMonth + ", " + year;
    var links = [
      { title: formattedDate, href: "#" },
      // { title: "Advertise", href: "#" },
      { title: "Contact us", href: "/contact" },
      // { title: "Login", href: "#" }
    ];

    var nav = "";

    for (var i = 0; i < links.length; i++) {
      nav +=
        '<li class="nav-item border-right border-secondary">' +
        '<a class="nav-link text-body small" href="' +
        links[i].href +
        '">' +
        links[i].title +
        "</a>" +
        "</li>";
    }

    document.getElementById("navLinks").innerHTML = nav;
  }

  var images = ["img/image2-add.jpeg", "img/THE HOUSE CHRONICLES-04.jpg"];

  var currentImageIndex = 0;
  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("imageSlider").src = images[currentImageIndex];
  }

  _topbarNav_One();
  setInterval(changeImage, 3000);
});
