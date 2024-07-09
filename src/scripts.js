document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtns = document.getElementsByClassName("dropdown-btn");

    for (var i = 0; i < dropdownBtns.length; i++) {
        dropdownBtns[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContainer = this.nextElementSibling;
            if (dropdownContainer.style.display === "block") {
                dropdownContainer.style.display = "none";
            } else {
                dropdownContainer.style.display = "block";
            }
        });
    }

    var links = document.querySelectorAll('a[target="content-frame"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var iframe = document.querySelector('iframe[name="content-frame"]');
            iframe.src = this.href;
            iframe.style.display = 'block';
            document.querySelector('.projects').style.display = 'none';
        });
    });

    var iframe = document.querySelector('iframe[name="content-frame"]');
    iframe.addEventListener('load', function() {
        if (iframe.contentDocument.body.innerHTML.trim().length > 0) {
            iframe.classList.add('has-content');
            document.querySelector('.projects').style.display = 'none';
        } else {
            iframe.classList.remove('has-content');
            document.querySelector('.projects').style.display = 'flex';
        }
    });

    var logo = document.getElementById('nova-logo');
    logo.addEventListener('click', function(event) {
        event.preventDefault();
        location.reload();
    });
});
