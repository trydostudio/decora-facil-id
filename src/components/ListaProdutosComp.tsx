import { ListaProdutosProps } from '@/slices/ListaProdutos'

export const ListaProdutosComp = (props: ListaProdutosProps) => {
  return (
    <div className={Wrapper}>
      <div className={Filter}>filtro</div>

      <div className={List}>lista</div>
    </div>
  )
}

const Wrapper = `
  container
  py-12
  px-4
  m-auto
`
const Filter = ``
const List = ``
