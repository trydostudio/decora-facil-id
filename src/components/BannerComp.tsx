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
        className={SwiperBanner}
        wrapperClass={SwiperWrapper}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        autoplay={false}
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
  Banner
`
const SwiperBanner = `
  bannerSlider
`
const SwiperWrapper = `
  bannerSliderWrapper
`
const BannerSlide = `
  bannerSlide
`
