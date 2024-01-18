import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css/pagination'
import 'swiper/css'
import { ProductsDocument } from '../../prismicio-types'
import { PrismicNextImage } from '@prismicio/next'

export const SliderPhotos = (props: ProductsDocument) => {
  const { data } = props

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
        {data.photo_1 && (
          <SwiperSlide>
            <div className={ImageBox}>
              <PrismicNextImage className={ImageContent} field={data.photo_1} />
            </div>
          </SwiperSlide>
        )}
        {data.photo_2 && (
          <SwiperSlide>
            <div className={ImageBox}>
              <PrismicNextImage className={ImageContent} field={data.photo_2} />
            </div>
          </SwiperSlide>
        )}
        {data.photo_3 && (
          <SwiperSlide>
            <div className={ImageBox}>
              <PrismicNextImage className={ImageContent} field={data.photo_3} />
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
`
