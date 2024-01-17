import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ListaProdutos`.
 */
export type ListaProdutosProps =
  SliceComponentProps<Content.ListaProdutosSlice>;

/**
 * Component for "ListaProdutos" Slices.
 */
const ListaProdutos = ({ slice }: ListaProdutosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for lista_produtos (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ListaProdutos;
