import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RedesSociais`.
 */
export type RedesSociaisProps = SliceComponentProps<Content.RedesSociaisSlice>;

/**
 * Component for "RedesSociais" Slices.
 */
const RedesSociais = ({ slice }: RedesSociaisProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for redes_sociais (variation: {slice.variation})
      Slices
    </section>
  );
};

export default RedesSociais;
