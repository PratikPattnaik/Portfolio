window.addEventListener('scroll',()=>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    // console.log(scrollable)
    if (Math.ceil(scrolled) === scrollable){
        window.location.href = "hello.html";
    }
});

const txt1 = document.getElementById("txt1");
setTimeout(() => {
  txt1.classList.remove("t1");
}, 3050);

const txt2 = document.getElementById("txt2")
setTimeout(() => {
    txt2.classList.remove("t2");
},5000)

const txt3 = document.getElementById("txt3")
setTimeout(() => {
    txt3.classList.remove("t3");
},8000)