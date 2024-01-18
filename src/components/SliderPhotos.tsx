import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { PrismicNextImage } from '@prismicio/next'
import { ProductProps } from './Products'

import 'swiper/css/pagination'
import 'swiper/css'

export const SliderPhotos = (props: ProductProps) => {
  return (
    <div className={Wrapper}>
      <Swiper
        className={`${SliderBox} swiperPhotos`}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        autoplay
        pagination={{ clickable: true }}
        loop={true}
      >
        {props.photo_1 && (
          <SwiperSlide>
            <div className={ImageBox}>
              <PrismicNextImage
                className={ImageContent}
                field={props.photo_1}
              />
            </div>
          </SwiperSlide>
        )}
        {props.photo_2 && (
          <SwiperSlide>
            <div className={ImageBox}>
              <PrismicNextImage
                className={ImageContent}
                field={props.photo_2}
              />
            </div>
          </SwiperSlide>
        )}
        {props.photo_3 && (
          <SwiperSlide>
            <div className={ImageBox}>
              <PrismicNextImage
                className={ImageContent}
                field={props.photo_3}
              />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

const Wrapper = `
  w-full
  h-[200px]
  group
`
const SliderBox = `
  h-full
`
const ImageBox = `
  w-full
  h-full
  overflow-hidden
`
const ImageContent = `
  w-full
  h-full
  object-cover
  group-hover:scale-[1.1]
  transition
  duration-500
`
