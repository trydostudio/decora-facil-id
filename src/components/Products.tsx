'use client'

import { useEffect, useState } from 'react'
import { ProductsDocument } from '../../prismicio-types'
import { CardProducts } from './CardProducts'
import { ImageField, KeyTextField, NumberField } from '@prismicio/client'
import { IconFilter } from '@/svgs/IconFilter'
import InfiniteScroll from 'react-infinite-scroll-component'

interface ProductsProps {
  items: ProductsDocument[]
}

export interface ProductProps {
  id: string
  tags: string
  title: string | undefined
  titleClean: string | undefined
  store: KeyTextField
  phone: KeyTextField
  price_full: NumberField
  price_discount: NumberField
  photo_1: ImageField<never>
  photo_2: ImageField<never>
  photo_3: ImageField<never>
}

export const Products = (props: ProductsProps) => {
  const [search, setSearch] = useState('')
  const [filterActive, setFilterActive] = useState(false)
  const [pageSize, setPageSize] = useState(6)
  const [showFilterBar, setShowFilterBar] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setShowFilterBar(true)
      } else {
        setShowFilterBar(false)
      }
    })

    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 600) {
          setShowFilterBar(true)
        } else {
          setShowFilterBar(false)
        }
      })
    }
  }, [])

  useEffect(() => {
    search.length > 0 ? setFilterActive(true) : setFilterActive(false)
  }, [search])

  function paginate(
    array: ProductProps[],
    page_size: number,
    page_number: number
  ) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }

  const searchLower = search
    .toLocaleLowerCase()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  const cleanList = props.items.map((item) => {
    return {
      id: item.id,
      tags: item.tags
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''),
      title: item.data.title,
      titleClean: item.data.title
        ?.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''),
      store: item.data.store,
      phone: item.data.phone,
      price_full: item.data.price_full,
      price_discount: item.data.price_discount,
      photo_1: item.data.photo_1,
      photo_2: item.data.photo_2,
      photo_3: item.data.photo_3
    }
  })

  const filteredList = cleanList.filter(
    (item) =>
      item.titleClean?.includes(searchLower) || item.tags.includes(searchLower)
  )

  // @ts-ignore
  const pagedFilteredList = paginate(filteredList, pageSize, 1)

  return (
    <div className={Wrapper}>
      <div className={FilterBox}>
        <div className={FilterContentBox}>
          <IconFilter className={FilterIconBox} />

          <input
            className={FilterInput}
            type="text"
            placeholder="Filtrar por produto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div
        className={`${FilterBarBox} ${showFilterBar ? 'opacity-1' : 'opacity-0'}`}
      >
        <div className={FilterBarContentBox}>
          <IconFilter className={FilterBarIconBox} />

          <input
            className={FilterBarInput}
            type="text"
            placeholder="Filtrar por produto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {!filterActive && (
        <ul className={ListBox}>
          {pagedFilteredList.map((item) => (
            <li className={ListItemBox} key={item.title}>
              <CardProducts {...item} />
            </li>
          ))}
        </ul>
      )}

      {filterActive && (
        <InfiniteScroll
          dataLength={pagedFilteredList.length}
          next={() => setPageSize(pageSize + 3)}
          hasMore
          loader={``}
        >
          <ul className={ListBox}>
            {pagedFilteredList.map((item) => (
              <li className={ListItemBox} key={item.title}>
                <CardProducts {...item} />
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      )}
    </div>
  )
}

const Wrapper = `
  max-w-[1392px]
  pb-12
  px-4
  m-auto
`
const FilterBox = `
  py-12
  flex
  justify-center
  content-center
`
const FilterContentBox = `
  relative
`
const FilterIconBox = `
  w-6
  absolute
  top-3
  left-3
`
const FilterInput = `
  w-[300px]
  h-12
  pr-12
  pl-12
  border
  border-black
  rounded-full
  bg-transparent
  text-center
  placeholder:text-black
`
const FilterBarBox = `
  w-full
  py-4
  flex
  justify-center
  content-center
  fixed
  top-0
  bg-white
  z-10
`
const FilterBarContentBox = `
  relative
`
const FilterBarIconBox = `
  w-6
  absolute
  top-3
  left-3
`
const FilterBarInput = `
  w-[300px]
  h-12
  pr-12
  pl-12
  border
  border-black
  rounded-full
  bg-transparent
  text-center
  placeholder:text-black
`
const ListBox = `
  flex
  flex-col
  lg:grid
  lg:grid-cols-3
  gap-8
`
const ListItemBox = ``
