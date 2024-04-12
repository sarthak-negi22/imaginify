import MobileNav from "@/components/shared/MobileNav"
import Sidebar from "@/components/shared/Sidebar"
import { Toaster } from "@/components/ui/toaster"
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Explore an array of creative filters and enhancements to bring your visuals to life like never before",
  metadataBase : new URL('https://imaginify-delta-three.vercel.app/'),
  openGraph: {
    images: '/opengraph-image.png',
  },
};

const Layout = ({ children }: { children : React.ReactNode }) => {
    return (
      <main className = "root" >
        <Sidebar />
        <MobileNav />
        <div className = "root-container">
            <div className = "wrapper">
                { children }
            </div>
        </div>
        <Toaster />
      </main>
    )
  }
  
  export default Layout