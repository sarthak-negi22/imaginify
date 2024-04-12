import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | Imaginify",
  description: "Explore an array of creative filters and enhancements to bring your visuals to life like never before",
  metadataBase : new URL('https://imaginify-delta-three.vercel.app/'),
  openGraph: {
    images: '/opengraph-image.png',
  },
};
const Layout = ({ children }: { children : React.ReactNode }) => {
  return (
    <main className = "auth" >
        { children }
    </main>
  )
}

export default Layout