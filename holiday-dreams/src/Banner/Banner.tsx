import { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import Navigation from "swiper"
import Pagination from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface bannerObject {
    title: string
    url: string
    username: string
    portfolioUrl:string  
}

const Banner = ():JSX.Element => {

    //create place holder image for carousel with subtitle and image
    const [bannerItems, setBannerItems] = useState<Array<bannerObject>>([
        {
            title: "Holiday 1",
            url:"https://images.unsplash.com/photo-1553634551-300d16aa9787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
            username: "BogdanPasca",
            portfolioUrl:"http://example.com"
        }, 

        {
            title: "Holiday 2",
            url:"https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            username: "User2",
            portfolioUrl:"http://example.com"
        }, 
    ])


    return (
      <Swiper
        navigation={true}
        pagination={{
                    dynamicBullets: true,
                    clickable: true
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper">
        {bannerItems.map((bannerItem, index) => 
            <SwiperSlide key={index}>
                <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1553634551-300d16aa9787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80)`}} className='h-96'>
                    <h2>{bannerItem.title}</h2>
                    <a href={bannerItem.portfolioUrl}>{bannerItem.username}</a>
                </div>
            </SwiperSlide>
            )}


      </Swiper>         
    )

}

export default Banner