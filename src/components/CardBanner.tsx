import { useEffect, useState } from 'react'
import { BannerSliceDefaultItem } from '../../prismicio-types'
import { PrismicNextImage } from '@prismicio/next'
import { VideoBG } from './VideoBG'

export const CardBanner = (props: BannerSliceDefaultItem) => {
  const [isMobile, setIsMobile] = useState<null | boolean>(null)
  const [haveVideo, setHaveVideo] = useState<null | boolean>(null)
  const [linkVideo, setLinkVideo] = useState<null | string>(null)

  useEffect(() => {
    const verifyIsMobile = () => {
      const windowWith = window.innerWidth

      if (windowWith >= 769) {
        setIsMobile(false)
        return
      }

      setIsMobile(true)
      return
    }

    verifyIsMobile()

    window.addEventListener('resize', verifyIsMobile)

    return () => {
      window.removeEventListener('resize', verifyIsMobile)
      setIsMobile(null)
    }
  }, [])

  useEffect(() => {
    const setVideo = () => {
      //@ts-ignore
      if (props.video_background.url) {
        setHaveVideo(true)
        //@ts-ignore
        setLinkVideo(props.video_background.url)
        return
      }
      setHaveVideo(false)
      setLinkVideo(null)
    }
    setVideo()
  }, [])

  useEffect(() => {
    if (haveVideo === false) return

    const setHeightVideoCard = () => {
      const baseHeight = document.querySelector(`.bannerImageBox`)?.clientHeight
      const videoBoxes = document.querySelectorAll(
        `.videoBox`
      ) as NodeListOf<HTMLDivElement>

      videoBoxes.forEach((videoBox, index) => {
        if (baseHeight) {
          videoBox.setAttribute('style', `height:${baseHeight}px`)
        } else {
          videoBox.setAttribute(
            'style',
            `height:${isMobile ? `300px` : `400px`}`
          )
        }
      })
    }

    setTimeout(() => {
      setHeightVideoCard()
    }, 100)

    window.addEventListener('resize', setHeightVideoCard)

    return () => {
      window.removeEventListener('resize', setHeightVideoCard)
    }
  }, [haveVideo])

  return (
    <div
      className={Wrapper}
      style={{ backgroundColor: 'rgba(255,255,255, 0.4)' }}
    >
      {haveVideo ? (
        <div className={VideoBox}>
          <VideoBG videoUrl={linkVideo} />
        </div>
      ) : (
        <>
          {isMobile != null && isMobile && (
            <div className={ImageBox}>
              <PrismicNextImage
                className={ImageContent}
                priority
                field={props.image_mobile}
                fallbackAlt=""
              />
            </div>
          )}
          {isMobile != null && !isMobile && (
            <div className={ImageBox}>
              <PrismicNextImage
                className={ImageContent}
                priority
                field={props.image_desktop}
                fallbackAlt=""
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

const Wrapper = `
  w-full
  h-full
  flex
  justify-center
  content-center
  bg-red-500
`
const ImageBox = `
  bannerImageBox
`
const ImageContent = `
  bannerImageContent
`
const VideoBox = `
  videoBox
  w-full
  h-full
  bg-red-500
`
