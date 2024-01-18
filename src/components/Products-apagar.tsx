import { ProductsDocument, ProductsDocumentData } from '../../prismicio-types'
import { CardProducts } from './CardProducts'

interface ProductsProps {
  items: ProductsDocument[]
}

export const Products = (props: ProductsProps) => {
  return (
    <div className={Wrapper}>
      <ul className={ListBox}>
        {props.items.map((item) => (
          <li className={ItemBox} key={item.data.title}>
            <CardProducts {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const Wrapper = `
  container
  py-12
  m-auto
`
const ListBox = `
  grid
  grid-cols-3
  gap-8
`
const ItemBox = `
  flex-1
  min-w-[0px]
`
