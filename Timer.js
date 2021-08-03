let strt = document.getElementById("start");
let stp = document.getElementById("stop");
let rst = document.getElementById("reset");
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

var interval;
stp.disabled = true;
var h = 0,m = 0,s = 0;

strt.addEventListener('click',()=>{
        h=parseInt(hr.value);
        m=parseInt(min.value);
        s=parseInt(sec.value);

        if(isNaN(m))
            m = 0;
        if(isNaN(h))
            h = 0;
        if(isNaN(s))
            s = 0;

        if(s>59)
        {
            m += parseInt(s/60);
            sec.value= s%60;
            min.value = m;
        }
        if(m>59)
        {
            h += parseInt(m/60);
            min.value= m%60;
            hr.value = h;
        }
        
        interval = setInterval(()=>{
        h=parseInt(hr.value);
        m=parseInt(min.value);
        s=parseInt(sec.value);

        if(sec.value != 0){
            sec.value = --s;
        }
        else{
            if(min.value!=0){
                sec.value=59;
                min.value = --m;
            }
            else{
                if(hr.value!=0){
                    min.value=59;
                    sec.value=59;
                    hr.value = --h;
                }
                else{
                    stop();
                }
            }
        }
    },1000);

    strt.disabled = true;
    stp.disabled = false;
});

stp.addEventListener("click",()=>{
    clearInterval(interval);
    strt.disabled = false;
    stp.disabled = true;
})

hr.addEventListener("click",()=>{
    hr.select();
})
min.addEventListener("click",()=>{
    min.select();
})
sec.addEventListener("click",()=>{
    sec.select();
})
rst.addEventListener("click",()=>{
    hr.value = "00";
    min.value = "00";
    sec.value = "00";
})
