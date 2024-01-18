'use client'

import { ProductsDocument } from '../../prismicio-types'
import { SliderPhotos } from './SliderPhotos'
import { NumberField } from '@prismicio/client'

export const CardProducts = (props: ProductsDocument) => {
  const handleCurrency = (price: number | NumberField) => {
    if (!price) return

    return price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <div className={Wrapper}>
      <h2 className={StoreBox}>{props.data.store}</h2>

      <div className={PhotosBox}>
        <SliderPhotos {...props} />
      </div>

      <h3 className={TitleBox}>{props.data.title}</h3>

      <div className={PriceFullBox}>
        De {handleCurrency(props.data.price_full)}
      </div>

      <div className={PriceDiscountBox}>
        Por {handleCurrency(props.data.price_discount)}
      </div>

      <div className={ButtonBox}>
        <a className={ButtonContent} href="">
          Quero Comprar
        </a>
      </div>
    </div>
  )
}

const Wrapper = `
 cardProducts
 bg-white
 rounded-[2rem]
`
const StoreBox = `
  px-2
  py-4
  text-center
  text-lg
`
const PhotosBox = `
  w-full
`
const TitleBox = `
  px-2
  py-4
  text-center
`
const PriceFullBox = `
  px-4
  py-1
`
const PriceDiscountBox = `
  px-4
  py-1
  text-green-500
  font-bold
  text-lg
`
const ButtonBox = `
  pt-8
  pb-4
  px-4
`
const ButtonContent = `
  py-4
  flex
  justify-center
  text-white
  rounded-full
  text-xl
  text-center
  bg-green-500
  font-bold
`
