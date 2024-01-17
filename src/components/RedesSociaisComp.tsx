import { RedesSociaisProps } from '@/slices/RedesSociais'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

export const RedesSociaisComp = (props: RedesSociaisProps) => {
  return (
    <div className={Wrapper}>
      {props.slice.items.map((item, index) => (
        <div className={ItemBox} key={index}>
          <PrismicNextLink className={ItemLink} field={item.link}>
            <PrismicNextImage className={ItemImage} field={item.logo} />
          </PrismicNextLink>
        </div>
      ))}
    </div>
  )
}

const Wrapper = `
  p-4
  flex
  justify-center
  content-center
  gap-2
  bg-white
`
const ItemBox = ``
const ItemLink = ``
const ItemImage = `
  w-8
`
