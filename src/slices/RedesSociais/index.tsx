import { RedesSociaisComp } from '@/components/RedesSociaisComp'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `RedesSociais`.
 */
export type RedesSociaisProps = SliceComponentProps<Content.RedesSociaisSlice>

/**
 * Component for "RedesSociais" Slices.
 */
const RedesSociais = (props: RedesSociaisProps): JSX.Element => {
  return (
    <section
      data-slice-type={props.slice.slice_type}
      data-slice-variation={props.slice.variation}
    >
      <RedesSociaisComp {...props} />
    </section>
  )
}

export default RedesSociais
