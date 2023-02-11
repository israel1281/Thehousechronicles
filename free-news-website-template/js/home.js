window.addEventListener("load", function () {
    function _topbarNav_One() {
        var links = [
            { title: "Monday, January 1, 2045", href: "#" },
            { title: "Advertise", href: "#" },
            { title: "Contact", href: "#" },
            { title: "Login", href: "#" }
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

    
    var images = [
        "img/image2-add.jpeg",
        "img/THE HOUSE CHRONICLES-04.jpg"
    ];
    
    var currentImageIndex = 0;
    function changeImage() {

        
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById("imageSlider").src = images[currentImageIndex];
    }

    var items = [
        { 
            src: "img/news-800x500-1.jpg",
            category: "Business",                    
            date: "Jan 01, 2045",                    
            title: "Lorem ipsum dolor sit amet elit. Proin vitae porta diam..."                
        },                
        {                    
            src: "img/news-800x500-2.jpg",                    
            category: "Business",                    
            date: "Jan 01, 2045",                    
            title: "Lorem ipsum dolor sit amet elit. Proin vitae porta diam..."                
        },                
        {                    
            src: "img/news-800x500-3.jpg",                    
            category: "Business",                    
            date: "Jan 01, 2045",                    
            title: "Lorem ipsum dolor sit amet elit. Proin vitae porta diam..."                
        }            
    ];

  
    _topbarNav_One()
    setInterval(changeImage, 3000);
});
