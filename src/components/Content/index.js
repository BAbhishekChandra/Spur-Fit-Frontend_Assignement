import React, {useEffect} from 'react';

import { gsap } from "gsap";

import { SlowMo } from "gsap/EasePack";

import { EaselPlugin } from "gsap/EaselPlugin";

import { FaApple } from "react-icons/fa";

import { Chrono } from "react-chrono";

gsap.registerPlugin(EaselPlugin, SlowMo);

const Content = () => {
 
useEffect(() => {
  const tl = gsap.timeline();

  tl.to(".rotaties", { rotation: 360, repeat: 3, duration: 2 })
    .fromTo(".gsap-does-heading", { x: -450 }, { x: 0, duration: 3 })  
    .fromTo(".gsap-does-emoji", { x: 200 }, { x: 0, duration: 3, ease: "power4.out" })
    .to(".gsap-hat", { x: 10, y: 30 })
    .to(".gsap-green-chilli", {x: -120, y: -10})
    .to(".gsap-fireworks", {x: -20, y: 325})
    .to(".star", { y: -40 })
    .to(".gsap-mirchi-image", { y: -60} )
    .to(".gsap-second-mirchi-emoji", { x: 14, y: 70})
    .to(".gsap-new-year-emoji", { x: -30, y: 240})
    .fromTo(".gsap-emoji-container", { x: 1450 }, { x: 0, duration: 4 })
    .to(".gsap-emoji-item", { rotation: 360, repeat: 3 })
    .fromTo(".circle-red", { x: 540, y: 1040 }, { x: 100, y: -220, duration: 3 })
    .fromTo(".circle-blue", { x: -1040 }, { x: 540, y: 100, duration: 3 })
    .fromTo(".circle-yellow", { x: 1640 }, { x: -50, y: 60, duration: 3 })
    .to(".gsap-mirchi-image", { rotation: -360, repeat: 3 })
    .to(".gsap-second-mirchi-emoji", { rotation: 360, repeat: 3 })
    .to(".gsap-octo", { rotation: 360, ease: "power3.out" })
    .to(".gsap-new-year-emoji", { rotation: 360, repeat: 3 })
    .to(".star", { rotation: -360, repeat: 3 })    
    .to(".gsap-hat", {rotation: -360, repeat: 3, ease: "bounce.out"})
    .to(".gsap-green-chilli", {  rotation: -360, repeat: 3,  ease: "back.out" })
    .to(".gsap-fireworks", { rotation: -360, repeat: 3, ease: "power5.out" })
    .fromTo(".gsap-self-jellyfish", { x: 400 }, { x: -10, duration: 4, ease: "bounce.out" })
    .fromTo(".gsap-signature", { x: 100, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5, duration: 4 , delay: 2 })
    .fromTo(".gsap-button", { y: 100 }, { y: 0, duration: 3 })
    .fromTo(".gsap-paragraph", { y: 110 }, { y: 0, duration: 3 })
    .fromTo(".gsap-work-with-us", {x:1000}, { x: 20, duration: 5, delay: 2 })
    .fromTo(".gsap-ahead-logo", {x: -1000}, { x: -20, duration: 5, delay: 2 })
    .to(".doddle-image", { duration: 3, ease: "power1.out", rotation: 360, repeat: 2 })
    .fromTo(".gsap-open-vacancies", { x: -400, opacity: 0 }, { x: 0, duration: 2, opacity: 1 })
    .fromTo(".gsap-open-vacancies-emoji", { x: 400 }, { x: -10, duration: 4, ease: "power2.out" });

}, []);


    return (
        <>
  <div class="w-full relative flex justify-center align-center rounded-3xl bg-indigo-100 mt-20 mb-20 p-10">
  <img class = "absolute w-20 h-20 top-0 right-10 rotaties" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709232175/innovation-creativity-icon_iaeumv.svg" alt = "blub" />
    <div class="w-1/2 top-content-container">
      <div class="w-full p-2">
        <h1 class="font-roboto text-2xl font-normal text-black">Ahead app</h1>
        <p class="font-roboto text-7xl font-bold text-black mt-5 mb-10">Master your life<br/>by mastering<br/>emotions</p>
        <div class="w-full flex justify-start align-center">
          <button class="w-50 h-auto flex justify-center items-center text-white bg-black rounded-lg p-2">
            <FaApple class="ml-2 h-full w-10 h-10" />
            <div class="flex flex-col justify-center ml-2">
              <p class="font-roboto font-small text-white color-yellow px-4 py-2">Download on the</p>
              <p class="font-roboto text-1xl font-bold text-white pb-2">App Store</p>
            </div>
          </button>
          <div class="w-full m-2 ml-4 h-auto">
            <p>
              <span class="text-yellow-500 text-3xl">&#9733;</span>
              <span class="text-yellow-500 text-3xl">&#9733;</span>
              <span class="text-yellow-500 text-3xl">&#9733;</span>
              <span class="text-yellow-500 text-3xl">&#9733;</span>
              <span class="text-yellow-500 text-3xl">&#9733;</span>
            </p>
            <p class="font-roboto font-semibold text-black">100+ AppStore reviews</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 relative image-container flex justify-center items-center">
      <img class = "absolute w-20 h-20 left-20 top-20 rotaties" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709283814/sunflower-icon_nzgmgl.svg" alt = "sun-flower" />
      <img class = "absolute w-20 h-20 right-20 top-20 rotaties" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709283814/sunflower-icon_nzgmgl.svg" alt = "sun-flower" />
      <div class = "w-3/4 flex justify-center items-center rounded-full border-2 border-dashed border-blue-500 p-0"> 
        <img class = "w-1/2 rounded-full mt-5 mb-5 ml-0 mr-0 border-2 border-solid border-blue-500" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1708364358/12505_blzr48.jpg" alt = "mobile" />
      </div>
      <img class = "absolute w-20 h-20 left-20 bottom-20 rotaties" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709283835/daisy-flower-icon_v80kvm.svg" alt = "flower" />
      <img class = "absolute w-20 h-20 right-20 bottom-20 rotaties" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709283835/daisy-flower-icon_v80kvm.svg" alt = "flower" />
    </div>
  </div> 



<div class = "w-100 flex justify-center align-center m-5">
  <h2 class = "w-40 m-4 text-left font-roboto font-bold">EQ beats IQ</h2>
  <p class = "w-30 m-4 text-left font-roboto">People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
  <p class = "w-30 m-4 text-left font-roboto">They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
</div>

<div class = "w-100 flex-column justify-center align-center m-4">
  <div class = "w-100 flex justify-start items-center">
    <h2 class = "w-100 text-3xl font-roboto font-bold m-10 gsap-does-heading">Does this sound familiar...</h2>
    <img class = "w-10 h-10 gsap-does-emoji" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709194423/does-this-matter-emoji_xjrcak.jpg" alt = "does-sound-familiar" />
  </div>
  <div class = "w-100 flex justify-center align-center gsap-emoji-container">
    <div class = "bg-red-500 p-5 rounded-2xl m-4 gsap-emoji-item">
      <p class = "text-3xl mt-2 mb-2">😀</p>
      <p class = "font-roboto font-bold">Squabble with your partner</p>
      <p class = "font-roboto font-normal mt-3">Because them of doing that thing you they always do it!), instead of calm and addressing their. </p>
    </div>
    <div class = "bg-blue-300 p-5 rounded-2xl m-4 gsap-emoji-item">
      <p class = "text-3xl mt-2 mb-2">😠</p>
      <p class = "font-roboto font-bold">You argue with a colleague</p>
      <p class = "font-roboto font-normal mt-3">You get angry and defensive, instead of staying open and working towards common ground.</p>
    </div>
    <div class = "bg-yellow-400 p-5 rounded-2xl m-4 gsap-emoji-item gsap-slant">
      <p class = "text-3xl mt-2 mb-2">🙂</p>
      <p class = "font-roboto font-bold text-white">You get a promotion at work</p>
      <p class = "font-roboto font-normal text-white  mt-3">You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.</p>
    </div>
    <div class = "bg-green-400 p-5 rounded-2xl m-4 gsap-emoji-item">
      <p class = "text-3xl mt-2 mb-2">😊</p>
      <p class = "font-roboto font-bold">You attend a class reunion</p>
      <p class = "font-roboto font-normal mt-3">You compare yourself with your achievements, instead of making self-judgement more independent other.</p>
    </div>        
  </div>
  
  <div class = "w-100 p-10 mt-10 mr-2 ml-2 mb-10 rounded-3xl bg-blue-100 relative">
    <img class = "w-20 h-20 star absolute right-10 top-0" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709196964/stars-color-icon_ppp6i9.svg" alt = "star" />
    <img class = "w-10 h-10 gsap-mirchi-image absolute left-10" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709199055/chili-icon_gcm4dk.svg" alt = "mirchi" />
    <p class = "font-roboto font-semibold mt-2 mb-2">Built out of frustration</p>
    <h2 class = "font-roboto font-bold text-4xl mt-4 mb-8">Meet the ahead app</h2>
    <div class = "w-full flex justify-center align-center m-2">
      <div class = "w-1/2 rounded-full flex justify-center items-center pt-14 pb-14 pl-5 pr-5 m-2 border-2 border-solid border-blue-500 relative">
        <img class ="w-100 h-100 rounded-full gsap-octo" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709274673/jellyfish_fresh_wtl7y8.png" alt = "emoji"/>
        <img class = "w-20 h-20 absolute top-0 right-0 gsap-second-mirchi-emoji" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709199055/chili-icon_gcm4dk.svg" alt = "mirchi-emoji"/>
        <img class = "w-20 h-20 absolute top-0 left-0 gsap-new-year-emoji" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709230317/new-year-2024-icon_fqwa7q.svg" alt = "new-year-2024-emoji" />
        <img class = "w-20 h-20 absolute top-0 left-0 gsap-hat" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709230422/party-hat-color-icon_mdsaaf.svg" alt = "hat"/>
        <img class = "w-10 h-10 absolute top-0 right-0 gsap-green-chilli" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709230403/green-chilli-pepper-icon_nwn8xn.svg" alt = "green-chilli-emoji" />
        <img class = "w-20 h-20 absolute top-0 right-0 gsap-fireworks" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709230414/festival-fireworks-icon_xx5vdh.svg" alt = "festival-fireworks" />
      </div>
      <div class = "w-1/2 mt-10 ml-3 flex-col justify-center items-center">
      <div class = "circle-red w-40 h-50 bg-red-400 p-20 rounded-full"></div>
        <p class = "font-roboto font-normal text-lg text-black mb-3 pl-7 pr-7">A personalized pocket coach that provides bit-sized, science-driven tools to boost emotional intelligence.</p>
        <p class = "font-roboto font-normal text-lg text-black pl-7 pr-7">Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
        <div class = "circle-blue w-40 h-50 bg-blue-400 rounded-full p-20"></div>
      </div>
    </div>
    <div>
      <div class = "circle-yellow w-40 h-100 bg-yellow-300 rounded-full p-20"></div>
    </div>
  </div>

  <div class = "w-100 p-6 mt-5 mb-5 flex justify-start items-start">
    <div class = "w-100">
      <p class = "font-roboto font-semibold mt-2 mb-2">Wrong with self-improvement & how we're fixing it.</p>
      <h2 class = "font-roboto font-bold text-4xl mt-4 mb-8">Self-improvement. Ugh.</h2>
    </div>
    <img class = "w-30 h-30 ml-2 gsap-self-jellyfish" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709190672/jellyfish-emoji_pvkt44.png" alt = "jellyfish-emoji"/>
  </div>   

  <div class = "w-100 max-h-96 overflow-y-scroll overflow-x-hidden m-4">    
  <Chrono mode="VERTICAL" hideControls borderLessCards = "true">
      <div class = "border-none">
        <p class = "font-roboto font-bold text-2xl pt-2 mb-2">It's not as easy as 1-2-3</p> 
        <p class = "font-roboto font-semibold">The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p>
      </div>
      <div>
        <p class = "font-roboto font-bold text-2xl pt-2 mb-2">Old habits are hard to break.</p>
        <p class = "font-roboto font-semibold">And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.</p>
      </div>
      <div>
        <p class = "font-roboto font-bold text-2xl pt-2 mb-2">You and your motivation don't have a long-term relationship</p>
        <p class = "font-roboto font-semibold">Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memrable exercises will help you stick to your goals.</p>
      </div> 
      <div>
        <p class = "font-roboto font-bold text-2xl pt-2 mb-2">Books just don't offer practical solutions.</p>
        <p class = "font-roboto font-semibold">Remember when you learned to ride a hike just by reading? Yeah, we don't either.</p>
      </div>
    </Chrono>
    </div>

  <div class = "w-100 p-10 flex justify-center align-center mt-40 mb-40">
    <h2 class = "w-1/3 font-roboto font-bold text-2xl m-2">Be the best you with EQ</h2>
    <p class = "w-1/3 font-roboto font-normal m-2">Not having your own emotions under control might be holding you back.</p>
    <p class = "w-1/3 font-roboto font-normal m-2">Additionally, not understanding those of others stops you from being parent, friend you can be.</p>
  </div>

  <div class = "w-100 flex-column justify-center align-center text-center rounded-3xl bg-blue-100 p-10 m-4">
    <p class = "font-roboto font-normal text-1xl text-black mt-2 mb-2">Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
    <h2 class = "font-roboto font-bold text-3xl text-black mt-5 mb-4">Ever wondered what others think of you?</h2>
    <div class = "w-100 max-h-96 overflow-hidden m-4">    
      <Chrono mode="HORIZONTAL"  hideControls borderLessCards>
        <div class = "border-none p-1">
          <p class = "font-roboto font-bold text-2xl pt-2 mb-2">It's not as easy as 1-2-3</p> 
          <p class = "font-roboto font-semibold">The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p>
        </div>
        <div class = "p-1">
          <p class = "font-roboto font-bold text-2xl pt-2 mb-2">Old habits are hard to break.</p>
          <p class = "font-roboto font-semibold">And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.</p>
        </div>
        <div class = "p-1">
          <p class = "font-roboto font-bold text-2xl pt-2 mb-2">You and your motivation don't have a long-term relationship</p>
          <p class = "font-roboto font-semibold">Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memrable exercises will help you stick to your goals.</p>
        </div>
      </Chrono>
    </div>  

  </div>

  <div class = "w-100 flex-column justify-center align-center text-center mt-40 mb-40 p-10">
    <p class = "font-roboto font-semibold text-1xl  mt-2 mb-2">We take privacy seriously</p>
    <h2 class = "font-roboto font-bold text-3xl mt-2 mb-2">Before you get started</h2>
    <p class = "font-roboto font-normal text-1xl pl-10 pr-10 mt-2 mb-2">"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</p>
    <p class = "font-roboto font-semibold text-1xl">with love, <img class = "w-20 inline gsap-signature" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1708671828/signature_hk4zbk.png" alt = "signature"/></p>
    <button class = "font-roboto text-1xl text-white bg-black rounded-3xl pt-3 pr-6 pb-3 pl-6 mt-2 mb-2 gsap-button" type = "button">Start a test</button>
    <p class = "font-roboto font-normal text-1xl mt-2 mb-2 gsap-paragraph">Take only 5 minutes</p>
  </div>

  <div class = "w-100 bg-blue-100 p-10 m-4 rounded-3xl">
    <div class = "flex justify-between align-center mt-6 mb-6">
      <p class = "font-roboto font-bold text-4xl mt-2 mb-2 gsap-work-with-us">Work with us</p>
      <img class = "w-20 gsap-ahead-logo" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1708611826/ahead-high-resolution-logo-transparent_tneylb.png" alt = "ahead-logo"/>
    </div>
    <div class = "w-100 flex justify-center align-center">
      <div class = "w-1/2 bg-white rounded-3xl flex-column justify-center align-center">
        <div class = "bg-white rounded-3xl pl-5 pr-5 pt-10 pb-10">
          <img class = "w-14 doddle-image" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1708672395/doddle_image_kpghoq.jpg" alt = "emoji"/>
          <h6 class = "font-roboto font-bold text-2xl mt-2 mb-2">About</h6>
          <p  class = "font-roboto font-normal text-black">At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</p>
        </div>
        <div class = "bg-yellow-100 rounded-3xl pl-5 pr-5 pt-10 pb-10">
          <h6 class = "font-roboto font-bold text-2xl mt-2 mb-2">Product</h6>
          <p class = "font-roboto font-normal text-black mb-2">Sure, you could spend ages reading books or sittings in seminars on how to become a better spouse, parent, or manager - like we did...</p>
        </div>
      </div>

    <div class = "w-1/2 max-h-96 overflow-y-scroll overflow-x-hidden pr-4 ml-1 mr-1">
      <div class = "bg-white p-5 ml-10 mt-0 mb-4 rounded-2xl">
        <h6 class = "font-roboto font-bold mt-2 mb-2">Power through, even when the going get tough</h6>
        <p class = "font-roboto font-normal text-black">We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</p>
      </div>
      <div class = "bg-white p-5 ml-10 mt-0 mb-4 rounded-2xl">
        <h6 class = "font-roboto font-bold mt-2 mb-2">Learn more about who you are and where you want to go</h6>
        <p class = "font-roboto font-normal text-black">We ask the right questions to help you better understand why you do things the way you do.</p>
      </div>
      <div class = "bg-white p-5 ml-10 mt-0 mb-4 rounded-2xl">
        <h6 class = "font-roboto font-bold mt-2 mb-2">Play and grow together with others on the same journey</h6>
        <p class = "font-roboto font-normal text-black">Ahead feels like a game, not like a chore, See yourself grow every day towards achieving your goals!</p>
      </div>
      <div class = "bg-white p-5 ml-10 mt-0 mb-4 rounded-2xl">
        <h6 class = "font-roboto font-bold mt-2 mb-2">Power through, even when the going get tough</h6>
        <p class = "font-roboto font-normal text-black">We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</p> 
      </div>
      <div class = "bg-white p-5 ml-10 mt-0 mb-4 rounded-2xl">
        <h6 class = "font-roboto font-bold mt-2 mb-2">Learn more about who you are and where you want to go</h6>
        <p class = "font-roboto font-normal text-black">We ask the right questions to help you better understand why you do things the way you do.</p>
      </div>
      <div class = "bg-white p-5 ml-10 mt-0 mb-4 rounded-2xl">
        <h6 class = "font-roboto font-bold mt-2 mb-2">Play and grow together with others on the same journey</h6>
        <p class = "font-roboto font-normal text-black">Ahead feels like a game, not like a chore, See yourself grow every day towards achieving your goals!</p>
      </div>
    </div>
  </div>
  </div>

  <div class = "w-100 p-10 mt-2 mb-2">
    <div class = "w-100 flex justify-start items-center">
      <h2 class = "font-roboto font-bold text-4xl mt-5 mb-5 gsap-open-vacancies">Open vacancies</h2>
      <img class = "ml-10 mr-10 w-10 h-10 gsap-open-vacancies-emoji" src = "https://res.cloudinary.com/dl1iui8u1/image/upload/v1709188762/open-vacacies-emoji_ov9bim.png" alt = "open-vacancies-emoji"/>
    </div>
    <div class = "flex justify-center align-center">
      <div class = "w-1/3 bg-yellow-100 p-10 m-2 rounded-3xl">
        <p class = "font-roboto font-bold text-1xl mt-2 mb-2">Senior Full-Stack Engineer</p>
        <ul class = "list-disc">
          <li class = "font-roboto font-noraml text-black">Full-time position</li>
          <li class = "font-roboto font-noraml text-black">Berlin or remote</li>
          <li class = "font-roboto font-noraml text-black">e65-85k, 0.5-1.50% equity share options</li>
        </ul>
      </div>
      <div class = "w-1/3 bg-yellow-100 p-10 m-2 rounded-3xl">
        <p class = "font-roboto font-bold text-1xl mt-2 mb-2">Senior Designer</p>
        <ul class = "list-disc">
          <li class = "font-roboto font-noraml text-black">Full-time position</li>
          <li class = "font-roboto font-noraml text-black">Berlin or remote</li>
          <li class = "font-roboto font-noraml text-black">e40-55k, 0.25-0.50% equity share options</li>
        </ul>
      </div>
      <div class = "w-1/3 bg-yellow-100 p-10 m-2 rounded-3xl">
        <p class = "font-roboto font-bold text-1xl mt-2 mb-2">Superstar Intern</p>
        <ul class = "list-disc">
          <li class = "font-roboto font-noraml text-black">Full-time position</li>
          <li class = "font-roboto font-noraml text-black">Berlin or remote</li>
          <li class = "font-roboto font-noraml text-black">e20-24k, 0.5-1.50% equity share options</li>
        </ul>
      </div>
      
    </div>
  </div>
  <hr class="border-gray-400 my-4" />
</div>
</>
  );
};

export default Content
