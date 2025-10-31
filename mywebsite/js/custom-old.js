// gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.Service_content');

console.log(horizontalSection.scrollWidth);

gsap.to('.Service_content', {
    x: () => horizontalSection.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
        trigger: '.Service_content',
        start: 'center center',
        end: '+=2000px',
        pin: '.no-bottom',
        scrub: true,
        invalidateOnRefresh: true
    }
});

gsap.from("#grow_traffic #box",{
	scale:0,
	opacity:0,
	duration:1,
	scrollTrigger:{
		trigger:"#box",
		scroller:"body",
		markers:true,
		start:"top 60%",
		end:"top 30%",
		scrub:2
	}
})