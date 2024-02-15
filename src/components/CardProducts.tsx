'use client'

import { PrismicNextImage } from '@prismicio/next'
import { SliderPhotos } from './SliderPhotos'
import { NumberField } from '@prismicio/client'
import { IconClose } from '@/svgs/IconClose'
import { useEffect, useState } from 'react'
import { ProductProps } from './Products'

export const CardProducts = (props: ProductProps) => {
  const [currentPhoto, setCurrentPhoto] = useState(1)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    const body = document.body
    if (modalIsOpen) {
      body.classList.add('modal-open')
    } else {
      body.classList.remove('modal-open')
    }
  }, [modalIsOpen])

  const handleCurrency = (price: number | NumberField) => {
    if (!price) return

    return price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <>
      <div className={Wrapper}>
        <h2 className={StoreBox}>{props.store}</h2>

        <div
          className={PhotosBox}
          onClick={() => {
            setModalIsOpen(true)
            console.log(`abrir`)
          }}
        >
          <SliderPhotos {...props} />
        </div>

        <h3 className={TitleBox}>{props.title}</h3>

        <div className={PriceFullBox}>
          De {handleCurrency(props.price_full)}
        </div>

        <div className={PriceDiscountBox}>
          Por {handleCurrency(props.price_discount)}
        </div>

        <div className={`${ButtonBox} px-4`}>
          <a
            className={ButtonContent}
            target="blank"
            href={`https://api.whatsapp.com/send?phone=${props.phone}&text=Ol%C3%A1,%20eu%20tenho%20interesse%20no%20produto%20${props.title},%20encontrei%20no%20site%20Decora%20F%C3%A1cil!`}
          >
            Quero Comprar
          </a>
        </div>
      </div>

      <div
        className={`${Modal} ${modalIsOpen ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className={ModalContainer}>
          <div
            className={ModalButtonClose}
            onClick={() => {
              setModalIsOpen(false)
            }}
          >
            <IconClose className="w-6" />
          </div>

          <div className={ModalPhotos}>
            <div className={ModalPhoto}>
              <div className={ImageBox}>
                <PrismicNextImage
                  className={ImageContent}
                  fallbackAlt=""
                  field={
                    currentPhoto === 1
                      ? props.photo_1
                      : currentPhoto === 2
                        ? props.photo_2
                        : props.photo_3
                  }
                />
              </div>
            </div>

            <div className={ModalThumbs}>
              <div className={ModalThumb}>
                <div className={ImageBox} onClick={() => setCurrentPhoto(1)}>
                  <PrismicNextImage
                    className={ImageContent}
                    field={props.photo_1}
                    fallbackAlt=""
                  />
                </div>
              </div>

              {props.photo_2.url && (
                <div className={ModalThumb}>
                  <div className={ImageBox} onClick={() => setCurrentPhoto(2)}>
                    <PrismicNextImage
                      className={ImageContent}
                      field={props.photo_2}
                      fallbackAlt=""
                    />
                  </div>
                </div>
              )}

              {props.photo_3.url && (
                <div className={ModalThumb}>
                  <div className={ImageBox} onClick={() => setCurrentPhoto(3)}>
                    <PrismicNextImage
                      className={ImageContent}
                      field={props.photo_3}
                      fallbackAlt=""
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={ModalInfos}>
            <p>
              <span className="text-sm text-gray-500">Loja</span>
              <span className="block mb-2  md:mb-4">{props.store}</span>
            </p>

            <p>
              <span className="text-sm text-gray-500">Produto</span>
              <span className="block mb-2 md:mb-4">
                <strong>{props.title}</strong>
              </span>
            </p>

            <p>
              <span className="line-through md:text-xl">
                De {handleCurrency(props.price_full)}
              </span>

              <span className="block md:mb-6 text-green-500 text-lg md:text-2xl">
                <strong>Por {handleCurrency(props.price_discount)}</strong>
              </span>
            </p>

            <div className={ButtonBox}>
              <a
                target="blank"
                className={ButtonContent}
                href={`https://api.whatsapp.com/send?phone=${props.phone}&text=Ol%C3%A1,%20eu%20tenho%20interesse%20no%20produto%20${props.title},%20encontrei%20no%20site%20Decora%20F%C3%A1cil!`}
              >
                Quero Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Wrapper = `
  cardProducts
  bg-white
  rounded-[2rem]
  shadow-2xl
  hover:shadow-md
  transition
  duration-500
  border
  hover:border
  hover:bg-gray-100
`
const StoreBox = `
  px-2
  py-4
  text-center
  text-lg
`
const PhotosBox = `
  w-full
  cursor-pointer
`
const TitleBox = `
  px-2
  py-4
  text-center
`
const PriceFullBox = `
  px-4
  py-1
  line-through
`
const PriceDiscountBox = `
  px-4
  py-1
  text-green-500
  font-bold
  text-lg
`
const ButtonBox = `
  pt-4
  pb-4
`
const ButtonContent = `
  py-3
  md:py-4
  flex
  justify-center
  text-white
  md:text-xl
  rounded-full
  text-center
  bg-green-500
  font-bold
  cursor-pointer
  hover:bg-green-600
  transition
  duration-200
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
const Modal = `
  w-full
  h-full
  px-4
  flex
  flex-col
  justify-center
  content-center
  fixed
  top-0
  left-0
  bg-black
  bg-opacity-[0.7]
  z-20
`
const ModalContainer = `
  w-full
  md:max-w-[760px]
  m-auto
  p-4
  pt-12
  md:py-8
  md:px-6
  md:grid
  md:grid-cols-2
  relative
  rounded-[2rem]
  bg-white
`
const ModalButtonClose = `
  absolute
  top-[1rem]
  right-[1rem]
  cursor-pointer
`
const ModalPhotos = `
  grid
  grid-cols-[80%_20%]
  md:flex
  md:flex-col
  gap-1
`
const ModalPhoto = `
  w-full
  mb-1
  border
  rounded-[1rem]
  overflow-hidden
`
const ModalThumbs = `
  flex
  flex-col
  md:grid
  md:grid-cols-3
  gap-1
`
const ModalThumb = `
  border
  rounded-[0.5rem]
  overflow-hidden
`
const ModalInfos = `
  md:pl-8
`
