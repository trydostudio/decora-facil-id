import { Header } from '@/components/Header'
import { Products } from '@/components/Products'
import { createClient } from '@/prismicio'
import Banner from '@/slices/Banner'
import ListaProdutos from '@/slices/ListaProdutos'
import RedesSociais from '@/slices/RedesSociais'
import { SliceZone } from '@prismicio/react'

export default async function Home() {
  const client = createClient()

  const home = await client.getSingle('home')

  const produtos = await client.getAllByType('products')

  console.log(produtos)

  return (
    <main className={Wrapper}>
      <Header {...home} />

      <div className={SlicesBox}>
        <SliceZone
          slices={home.data.slices}
          components={{
            banner: Banner
          }}
        />
      </div>

      <Products items={produtos} />
    </main>
  )
}

const Wrapper = `
  home
  min-h-screen
  bg-contain
  bg-center
  bg-[url('/images/bg.jpg')]
`
const SlicesBox = `
  sliceZone
`
