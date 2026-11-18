'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);
export function HomeMotion(){
  useGSAP(()=>{
    const media=gsap.matchMedia();
    media.add('(min-width: 1000px) and (prefers-reduced-motion: no-preference)',()=>{
      const section=document.querySelector('.bva-model-layout');
      const heading=document.querySelector('.bva-pin');
      if(section&&heading) ScrollTrigger.create({trigger:section,start:'top 130px',end:()=>`bottom ${130+(heading as HTMLElement).offsetHeight}px`,pin:heading,pinSpacing:false});
      gsap.utils.toArray<HTMLElement>('.bva-stack-card').forEach((card,i,cards)=>{
        if(i<cards.length-1) gsap.to(card,{scale:.94,transformOrigin:'top center',ease:'none',scrollTrigger:{trigger:cards[i+1],start:'top 85%',end:'top 170px',scrub:true}});
      });
    });
    return ()=>media.revert();
  },[]);
  return null;
}
