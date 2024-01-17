import { ListaProdutosComp } from '@/components/ListaProdutosComp'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `ListaProdutos`.
 */
export type ListaProdutosProps = SliceComponentProps<Content.ListaProdutosSlice>

/**
 * Component for "ListaProdutos" Slices.
 */
const ListaProdutos = (props: ListaProdutosProps): JSX.Element => {
  return (
    <section
      data-slice-type={props.slice.slice_type}
      data-slice-variation={props.slice.variation}
    >
      <ListaProdutosComp {...props} />
    </section>
  )
}

export default ListaProdutos
