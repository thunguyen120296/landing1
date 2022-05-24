var tl = gsap.timeline();
tl.from('.navbar', {duration: 1, y: -100, ease: "power2.out"});
tl.fromTo('.banner__left',{opacity: 0}, {duration: 1, opacity: 1});
tl.fromTo('.banner__right', {opacity: 0, x: 100}, {duration: 1, opacity: 1, x: 0});
tl.fromTo('.slider__left', {opacity: 0, x: -100}, {duration: 1, opacity: 1, x: 0});
tl.fromTo('.slider__right', {opacity: 0, x: 100}, {duration: 1, opacity: 1, x: 0});
tl.fromTo('.slider__center', {opacity: 0, y: 100}, {duration: 1, opacity: 1, y: 0});