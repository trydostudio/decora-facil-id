import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { HomeDocument } from '../../prismicio-types'

export interface HeaderProps extends HomeDocument {}

export const Header = (props: HeaderProps) => {
  return (
    <>
      {props.data.logo && (
        <header className={Wrapper}>
          {props.data.logo_link ? (
            <PrismicNextLink className={LogoLink} field={props.data.logo_link}>
              <PrismicNextImage
                priority
                className={LogoImage}
                field={props.data.logo}
                fallbackAlt=""
              />
            </PrismicNextLink>
          ) : (
            <PrismicNextImage
              priority
              className={LogoImage}
              field={props.data.logo}
              fallbackAlt=""
            />
          )}
        </header>
      )}
    </>
  )
}

const Wrapper = `
  p-4
  flex
  justify-center
  content-center
  bg-white
`
const LogoLink = ``
const LogoImage = `
  w-32
`
