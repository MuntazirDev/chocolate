gsap.registerPlugin(ScrollTrigger);

let mm=gsap.matchMedia();

mm.add("(max-width:500px)",()=>{
 
let tl1=gsap.timeline({
    scrollTrigger:{
        trigger:'.tow',
        start:'top 90%',
        end:'43% center',
        scrub:true,
        // markers:true,
        
    }
  })

    tl1.to('#chocolate',{
        top:'122%',
        left:'28%',
        width: '80%',

    },'chocolate')

    tl1.to('#can',{
        top:'105%',
        left:'55%',
        rotate:'30deg',
    },'chocolate')

    tl1.to('#beans',{
        top:'190%',
        left:'70%',
        width:'25%',
    },'chocolate')

    tl1.to('#almonds1',{
        top:'108%',
        left:'75%',
        rotate:'180deg',
    },'chocolate')

    tl1.to('#almonds2',{
        top:'110%',
        left:'7%',
        rotate:'80deg',
    },'chocolate')


    
    let tl2=gsap.timeline({
        scrollTrigger:{
            trigger:'.three',
            start:'top 90%',
            end:'43% center',
            scrub:true,
        // markers:true,

        }
    })

    tl2.to('#chocolate',{
        top:'224%',
        left:'-5%'
    },'can')

    tl2.to('#can',{
        top:'235%',
        left:'42%',
        rotate:'0deg'
    },'can')

    tl2.to('#beans',{
        top:'272%',
        left:'45%',
        // width:'10%',
    },'can')
})

mm.add("(min-width:501px)",()=>{
    let tl1=gsap.timeline({
        scrollTrigger:{
            trigger:'.tow',
            start:'top 90%',
            end:'43% center',
            scrub:true,
        }
    })



    tl1.to('#chocolate',{
        top:'138%',
        left:'22%'
    },'chocolate')

    tl1.to('#can',{
        top:'103%',
        left:'32%',
        rotate:'30deg'
    },'chocolate')

    tl1.to('#beans',{
        top:'170%',
        left:'70%',
        width:'20%',
    },'chocolate')

    tl1.to('#almonds1',{
        top:'120%',
        left:'70%',
        rotate:'180deg',
    },'chocolate')

    tl1.to('#almonds2',{
        top:'116%',
        left:'7%',
        rotate:'80deg',
    },'chocolate')


        
    let tl2=gsap.timeline({
        scrollTrigger:{
            trigger:'.three',
            start:'top 90%',
            end:'43% center',
            scrub:true,
        }
    })

    tl2.to('#chocolate',{
        top:'195%',
        left:'26%'
    },'can')

    tl2.to('#can',{
        top:'210%',
        left:'45%',
        rotate:'0deg'
    },'can')

    tl2.to('#beans',{
        top:'280%',
        left:'45%',
        width:'10%',
    },'can')
    
 
})
// let tl1=gsap.timeline({
//     scrollTrigger:{
//         trigger:'.tow',
//         start:'top 90%',
//         end:'43% center',
//         scrub:true,
//     }
// })



// tl1.to('#chocolate',{
//     top:'138%',
//     left:'22%'
// },'chocolate')

// tl1.to('#can',{
//     top:'103%',
//     left:'32%',
//     rotate:'30deg'
// },'chocolate')

// tl1.to('#beans',{
//     top:'170%',
//     left:'70%',
//     width:'20%',
// },'chocolate')

// tl1.to('#almonds1',{
//     top:'120%',
//     left:'70%',
//     rotate:'180deg',
// },'chocolate')

// tl1.to('#almonds2',{
//     top:'116%',
//     left:'7%',
//     rotate:'80deg',
// },'chocolate')



// let tl2=gsap.timeline({
//     scrollTrigger:{
//         trigger:'.three',
//         start:'top 90%',
//         end:'43% center',
//         scrub:true,
//     }
// })

// tl2.to('#chocolate',{
//     top:'195%',
//     left:'26%'
// },'can')

// tl2.to('#can',{
//     top:'210%',
//     left:'45%',
//     rotate:'0deg'
// },'can')

// tl2.to('#beans',{
//     top:'280%',
//     left:'45%',
//     width:'10%',
// },'can')