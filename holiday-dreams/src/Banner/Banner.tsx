import './Banner.css'
import { useState } from 'react'

interface bannerObject {
    title: string
    url: string
    username: string
    portfolioUrl:string  
}

const Banner = ():JSX.Element => {

    //create place holder image for carousel with subtitle and image
    const [bannerItem, setBannerItem] = useState<bannerObject>(
        {
            title: "Holiday 1",
            url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
            username: "BogdanPasca",
            portfolioUrl:"http://example.com"
        }
    )


    return (
      <div className='flex flex-col justify-between banner h-[500px] p-2.5' style={{backgroundImage: `url(` + bannerItem.url +`)`}}>
        <h2 className='text-5xl'>{bannerItem.title}</h2>
        <a className='self-end' href={bannerItem.portfolioUrl}>Photo: {bannerItem.username} on Unsplash</a>
      </div> 
    )

}

export default Banner