import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 mx-5 border-t border-gray-300 py-0'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  text-sm'>
            {/*left section*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt=''/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Healing begins with trust — book your care with confidence.</p>
            </div>
            {/*center section*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/*right section*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>8899552233</li>
                    <li>BoOkSpot@gmail.com</li>
                </ul>
            </div>
        </div>

        <div className='py-5 text-sm text-center'>
            <p>© 2024 BookSpot. All rights reserved.</p>
            <p >Designed by <a href=''/>Siddharth</p>
        </div>

    </div>
  )
}

export default Footer
