'use client'

import { BannerProps } from '@/slices/Banner'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardBanner } from './CardBanner'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css'

export const BannerComp = (props: BannerProps) => {
  return (
    <div className={Wrapper}>
      <Swiper
        className="swiperBanner"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        autoplay
        pagination={{ clickable: true }}
        loop={true}
      >
        {props.slice.items.map((item, index) => (
          <SwiperSlide className={BannerSlide} key={index}>
            <CardBanner {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const Wrapper = `
`
const BannerSlide = `
  bannerSlide
`
