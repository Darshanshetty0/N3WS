'use client';



import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <div className='columns-2 lg:max-h-[1070px] flex-row sm:p-0 p-0 rounded-[32px] border-[1px] border-[#6A6A6A] relative'>
      <div className='order-0'>
        <img src="/planet-09.png" alt="planet" className='object-contain'/>
      </div>
      <div className='flex-row order-1 top-10'>
        <div className='text-4xl	text-white font-serif top-10'>
          Law sevice in the Chinese Embassy makes new riding
        </div>
        <br></br>
        <div className='text-lg	text-white font-serif top-10'>
          By: Founderguru
        </div>
        <br></br>
        <div className='text-xl	text-white font-sans top-10'>
          Under the law, service providers get to set a price per meter, but retailers can give away 
          or give a discount if they have a "trading margin." The law also limits the value of the 
          market basket, or the available supply of electrical appliances, to set pricing by the retailer.
          If you are calling overseas from Hong Kong, only the local operator may call you. You must also 
          switch off your phone if you are placing calls in mainland China or Macau from the airport.
          The consumer watchdog can ban third parties and external mobile network providers from. 
          Under the law, service providers get to set a price per meter, but retailers can give away or 
          give a discount if they have a "trading margin." The law also limits the value of the market 
          basket, or the available supply of electrical appliances, to set pricing by the retailer. If 
          you are calling overseas from Hong...(Read More)
        </div>
      </div>
    </div>
  </section>
);

export default Feedback;
