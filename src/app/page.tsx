import { Metadata } from 'next'
import * as prismic from '@prismicio/client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Products } from '@/components/Products'
import { createClient } from '@/prismicio'
import Banner from '@/slices/Banner'
import { SliceZone } from '@prismicio/react'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const home = await client.getSingle('home')

  return {
    // @ts-ignore
    title: home.data.meta_title,
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      type: 'website',
      images: [
        {
          url: home.data.meta_image.url || ''
        }
      ]
    }
  }
}

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
