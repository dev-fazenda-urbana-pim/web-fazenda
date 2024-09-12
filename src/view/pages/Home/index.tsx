import { CarouselHome } from "@/components/Carousel";
import Header from "@/components/Header";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Navbar />

        <div className="flex flex-col justify-center items-center">
        <CarouselHome />
        </div>
      </main>
    </>
  )
}
