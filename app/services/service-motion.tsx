'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);
export function ServiceMotion(){
  useGSAP(()=>{
    const media=gsap.matchMedia();
    media.add('(min-width: 1000px) and (prefers-reduced-motion: no-preference)',()=>{
      const title=document.querySelector<HTMLElement>('.sv-process-title');
      const section=document.querySelector('.sv-process-grid');
      if(title && section) ScrollTrigger.create({trigger:section,start:'top 120px',end:()=>`bottom ${120+title.offsetHeight}px`,pin:title,pinSpacing:false,invalidateOnRefresh:true});
      gsap.from('.sv-reveal',{opacity:.45,y:20,ease:'none',scrollTrigger:{trigger:'.sv-reveal',start:'top 90%',end:'top 60%',scrub:true}});
    });
    return ()=>media.revert();
  },[]);
  return null;
}
