import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata : Metadata =  {
  title : 'Imaginify'
}

const Home = async ({ searchParams } : SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = searchParams?.query as string || '';

  const images = await getAllImages({page, searchQuery});

  return (
    <>
      <section className = "home">
        <h1 className = "home-heading">
          Unleash your creative vision with Imaginify
        </h1>
        <ul className = "flex-center w-full gap-20">
          { navLinks.slice(1,5).map((link) => (
            <Link key = { link.route } href = { link.route } className = "flex-center flex-col gap-2">
              <li>
                <Image
                  src = { link.icon }
                  alt = "image"
                  height = { 24 }
                  width = { 24 }
                  className = "flex-center w-fit rounded-full bg-white p-4"
                />
              </li>
              <p className = "p-14-medium text-center text-white" > { link.label } </p>
            </Link>
          )) }
        </ul>
      </section>

      <section className = "sm:mt-12">
        <Collection 
            hasSearch = { true }
            images = { images?.data }
            totalPages = { images?.totalPage }
            page = { page }
        />
      </section>
    </>
  )
}

export default Home;