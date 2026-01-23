import React, { useEffect, useState } from 'react'
import OfferCardSection from '../OfferCardSection/OfferCardSection'
export default function OfferSecondSection() {
    const data = [
      {
        title:"Starter",
        text:"Perfect for individual agents or small operations",
        price:"$6",
        best: false,
        agents:"1 Caller",
        list:[
          "One dedicated trained agent",
          "Flexible scheduling",
          "Real-time call reporting",
          "Basic lead qualification",
          "Email support",
          "Monthly performance reviews",
        ],
      },
      {
        title:"Professional",
        text:"Ideal for growing brokerages and teams",
        price:"$5",
        best: true,
        agents:"2 Callers",
        list:[
          "Two dedicated trained agents",
          "Priority scheduling",
          "Advanced call analytics",
          "Enhanced lead qualification",
          "Priority email & phone support",
          "Weekly performance reviews",
          "Custom script development",
          "Team coordination",
        ],
      },
      {
        title:"Enterprise",
        text:"Maximum capacity for high-volume operations",
        price:"$4",
        best: false,
        agents:"3 Callers",
        list:[
          "Three dedicated trained agents",
          "Premium scheduling flexibility",
          "Comprehensive analytics dashboard",
          "Advanced lead qualification & scoring",
          "Dedicated account manager",
          "Daily performance reviews",
          "Custom script development",
          "CRM integration support",
          "Strategy consultation sessions",
        ],
      }
    ]  


  return <>
      <div className='container mx-auto my-10'>
        <div className='text-center md:max-w-[45%] px-10 md:mx-auto md:px-0'>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-900 mb-2'>Simple, Hourly Pricing</h1>
            <p className='text-gray-600 text-lg'>No long-term contracts. No hidden fees. Just straightforward pricing that scales with your needs. All prices are per hour, per caller.</p>
        </div>
        
          <OfferCardSection data={data}/>
          
        

      </div>
    </>
}