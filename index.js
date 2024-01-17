
var loader = document.querySelector('.loader')
var span = document.querySelector('#span')
var h3 = document.querySelector('#h3')

setTimeout(function(){
loader.style.top="-100%"
},3000)
setTimeout(function(){
h3.style.opacity="0"
},1000)
setTimeout(function(){
span.style.opacity="5"
},2000)





let tl1 = gsap.timeline({
scrollTrigger : {
trigger:'.nav-container',
scroller:"body",
start:'top -1vh',
end:'top -1vh',
scrub:2,
duration:"0.5s",
delay:2,
}
},"same")
tl1.to('.nav1 h3',{
width:"10vh",
height:"10vh",
fontSize:"7vh",
},"same")

let tl2 = gsap.timeline({
scrollTrigger : {
trigger:'.page1',
scroller:"body",
start:'top 150vh',
end:'top 0',
scrub:2,
duration:"0.5s",
delay:2,
}
},"same2")

tl2.to('.page1-top h3',{
fontSize:"15vh",
opacity:5,
},"same2")


let tl3 = gsap.timeline({
scrollTrigger : {
trigger:'.page1',
scroller:"body",
start:'top 100vh',
end:'top 0',
scrub:2,
duration:"0.5s",
delay:2,
}
},"same3")
tl3.to('.page1-top h2',{
fontSize:"10vh",
opacity:5,
},"same3")

let tl4 = gsap.timeline({
scrollTrigger : {
trigger:'.page1',
scroller:"body",
start:'top 80vh',
end:'top 0',
scrub:2,
duration:"0.5s",
delay:2,
}
},"same4")

tl4.to('.page1-bottom img',{
width:"36vh",
height:"36vh",
opacity:5,
},"same4")

tl4.to('.page2-begninng h3',{
width:"100vh",
fontSize:"3vh",
padding:"0 0",
y:"-3vh", 
opacity:5,
},"same4")

let tl6 = gsap.timeline({
scrollTrigger : {
trigger:'.page2',
scroller:"body",
start:'top 600vh',
end:'top 0',
scrub:2,
duration:"0.5s",
delay:2,
}
},"same6")


tl6.to('.page2',{
opacity:5,
},"same6")



let tl7 = gsap.timeline({
scrollTrigger : {
trigger:'.page2-nd',
scroller:"body",
start:'top 500vh',
end:'top 0',
scrub:2,
duration:"0.5s",
delay:2,

}
},"same6")
tl7.to('.page2-nd',{
opacity:5,
},"same6")


let tl8 = gsap.timeline({
scrollTrigger : {
trigger:'.page2-rd',
scroller:"body",
start:'top 450vh',
end:'top 0',
scrub:2,
duration:"0.5s",
delay:2,

}
},"same6")
tl8.to('.page2-rd',{
opacity:5,
},"same6")


let tl9 = gsap.timeline({
scrollTrigger : {
trigger:'.page2-th',
scroller:"body",
start:'top 400vh',
end:'top 0',
scrub:2,
duration:"0.5s",
delay:2,

}
},"same6")
tl9.to('.page2-th',{
opacity:5,
},"same6")


