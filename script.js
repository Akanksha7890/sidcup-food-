// Cursor movement
document.addEventListener("mousemove", function (dets) {
    var crsr = document.querySelector("#cursor");
    var blur = document.querySelector("#cursor-blur");

    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";

    blur.style.left = dets.x - 35 + "px";
    blur.style.top = dets.y - 35 + "px";
});

// GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.to("#nav", {
    backgroundColor: "#000000ff", 
    duration: 0.5,
    height: "40px",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top -2%",
        end: "top -5%",
        scrub: 2,
        // markers: true
    }
});

// Main section background change
gsap.to("#main", {
    backgroundColor: "#000000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -90%",
        scrub: 2,
        // markers: true
    }
});

// About-us section animation
gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 1, // ek ek karke aaye
    scrollTrigger: {
        trigger: "#about-us img",
        scroller: "body",
        // markers: true, // testing ke liye
        start: "top 60%", // jab about-us ka top viewport ke 80% height par aaye
        end: "top 50%",
        scrub: 2,
    }
});

// Cards animation
gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: card,
      scroller: "body",
      start: "top 85%",
      end: "top 60%",
      scrub: 1
    }
  });
});


  gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 1,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 1,
  },
});
