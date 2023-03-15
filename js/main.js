//const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    //entries.forEach(entry => {
      // If the element is visible
      //if (entry.isIntersecting) {
        // Add the animation class
        //entry.target.classList.add('fadeinup');
     // }
   // });
 // });
  //observer.observe(document.querySelector('.job1'));

  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  