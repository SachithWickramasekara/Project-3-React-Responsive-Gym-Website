import React from 'react'
import { plansData } from '../data/plansData'
const Plans = () => {
  return (
<section class="text-white body-font overflow-hidden">
  <div class="container px-5 py-8 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-6xl text-3xl font-bold title-font mb-2 text-gray-900">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
    </div>
    <div class="flex flex-wrap mx-auto ">
    {plansData.map((plan,i)=>(
         <div class="p-4 xl:w-1/4 md:w-1/2 w-full relative sm:left-[160px]">
         <div class="h-full p-6 rounded-lg border-2 hover:border-[#f48915] border-[#fa5042] flex flex-col relative overflow-hidden">
           <span class="bg-gradient-to-r from-[#fa5042] to-[#ffa739] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">{plan.name}</span>
           <h2 class="text-sm tracking-widest title-font mb-1 font-medium">{plan.name}</h2>
           {plan.icon}
           <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
             <span>$38</span>
             <span class="text-lg ml-1 font-normal text-white">/mo</span>
           </h1>
           <p class="flex items-center text-white mb-2">
             <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                 <path d="M20 6L9 17l-5-5"></path>
               </svg>
             </span>Vexillologist pitchfork
           </p>
           <p class="flex items-center text-white mb-2">
             <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                 <path d="M20 6L9 17l-5-5"></path>
               </svg>
             </span>Tumeric plaid portland
           </p>
           <p class="flex items-center text-white mb-2">
             <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                 <path d="M20 6L9 17l-5-5"></path>
               </svg>
             </span>Hexagon neutra unicorn
           </p>
           <p class="flex items-center text-white mb-6">
             <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                 <path d="M20 6L9 17l-5-5"></path>
               </svg>
             </span>Mixtape chillwave tumeric
           </p>
           <button class="flex items-center justify-center mt-auto text-white bg-[#464D53] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#3c3f45] rounded">Join
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
               <path d="M5 12h14M12 5l7 7-7 7"></path>
             </svg>
           </button>
           <p class="text-xs text-white mt-3">{plan.features}</p>
         </div>
       </div>
    ))}
     
    </div>
  </div>
</section>
  )
}

export default Plans