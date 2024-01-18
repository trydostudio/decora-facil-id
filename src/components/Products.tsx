'use client'

import { useEffect, useState } from 'react'
import { ProductsDocument, ProductsDocumentData } from '../../prismicio-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CardProducts } from './CardProducts'

interface ProductsProps {
  items: ProductsDocument[]
}

export const Products = (props: ProductsProps) => {
  const [pageSize, setPageSize] = useState(3)
  const [listFiltered, setListFiltered] = useState(false)
  const [listLast, setListLast] = useState<null | ProductsDocument[]>(null)
  const [listProduct, setListProducts] = useState<null | ProductsDocument[]>(
    null
  )

  useEffect(() => {
    function paginate(
      array: ProductsDocument[],
      page_size: number,
      page_number: number
    ) {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return array.slice((page_number - 1) * page_size, page_number * page_size)
    }
    setListLast(paginate(props.items, 6, 1))
    setListProducts(paginate(props.items, pageSize, 1))
  }, [pageSize])

  return (
    <div className={Wrapper}>
      <div
        className={FilterBarBox}
        onClick={() => setListFiltered(!listFiltered)}
      >
        <input
          className={InputContent}
          type="text"
          placeholder="filtrar por produto"
        />
      </div>

      {!listFiltered && (
        <div className={ListLastBox}>
          <ul className={ListBox}>
            {listLast &&
              listLast.map((item, index) => (
                <div className={ItemBox} key={item.data.title}>
                  <CardProducts {...item} />
                </div>
              ))}
          </ul>
        </div>
      )}

      {listFiltered && (
        <div className={ListFilteredBox}>
          {listProduct && (
            <InfiniteScroll
              dataLength={listProduct.length - 1}
              next={() => setPageSize(pageSize + 3)}
              hasMore={true}
              loader={``}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <ul className={ListBox}>
                {listProduct.map((item, index) => (
                  <div className={ItemBox} key={item.data.title}>
                    <CardProducts {...item} />
                  </div>
                ))}
              </ul>
            </InfiniteScroll>
          )}
        </div>
      )}
    </div>
  )
}

const Wrapper = `
  container
  py-12
  px-4
  m-auto
`
const FilterBarBox = `
  mb-10
  flex
  justify-center
  content-center
`
const InputContent = `
  w-[300px]
  h-12
  px-4
  border
  border-black
  rounded-full
  bg-transparent
  text-center
`
const ListLastBox = ``
const ListFilteredBox = ``
const ListBox = `
  flex
  flex-col
  md:grid
  md:grid-cols-3
  gap-8
`
const ItemBox = `
  w-full
  flex-1
  min-w-[0px]
`
