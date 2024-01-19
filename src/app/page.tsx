import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Products } from '@/components/Products'
import { createClient } from '@/prismicio'
import Banner from '@/slices/Banner'
import { SliceZone } from '@prismicio/react'

export default async function Home() {
  const client = createClient()

  const home = await client.getSingle('home')

  const produtos = await client.getAllByType('products')

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

      <Footer />
    </main>
  )
}

const Wrapper = `
  home
  min-h-screen
  bg-[length:800px_auto]
  bg-center
  bg-[url('/images/bg.jpg')]
`
const SlicesBox = `
  sliceZone
`
