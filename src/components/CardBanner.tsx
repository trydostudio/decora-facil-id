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
              />
            </div>
          )}
          {isMobile != null && !isMobile && (
            <div className={ImageBox}>
              <PrismicNextImage
                className={ImageContent}
                priority
                field={props.image_desktop}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

const Wrapper = `
  flex
  justify-center
  content-center
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
  h-[300px]
  md:h-[400px]
`
