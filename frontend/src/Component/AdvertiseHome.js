import React from 'react'
import '../assets/Style/Advertise.css'
import addimg from '../assets/Images/addimg.png'
import motor from '../assets/Images/motor.png'
import pickup from '../assets/Images/bag.png'
import location from '../assets/Images/location.png'
import search from '../assets/Images/search.png'

export default function Advertise() {
    return (
        <>
            <div className='advertise-main1st'>
                <div className='advertise-search'>
                    <h1 className='search-head'>Are You Straving?</h1>
                    <p className='search-para' >Within a few clicks , find meals that are accessible near you</p>
                    <div className='advertise-address'>
                        <div className='address-flex'>
                            <div className='address-delivery-1'>
                                <img src={motor} className='address-dimg' />
                                <h3 className='address-head1'>Delivery</h3>
                            </div>
                            <div className='address-delivery-2'>
                                <img src={pickup} className='address-pimg' />
                                <h3 className='address-head2'>Pickup</h3>
                            </div>
                        </div>
                        <hr className='advertise-hr' />
                        <img src={location} className='search-locationimg' />
                        <input type='search' placeholder='Enter Your Address' className='search-input' />
                        <img src={search} className='search-searchimg' /><button className='search-btn'>Find Food</button>
                    </div>
                </div>
                <img className='advertise-img' src={addimg} />

            </div>
        </>
    )
}
