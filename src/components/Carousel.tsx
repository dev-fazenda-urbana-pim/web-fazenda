import Autoplay from "embla-carousel-autoplay"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"

// Importe suas imagens
import imagem1 from "./imagens/Screenshot_1.png"
import imagem2 from "./imagens/Screenshot_2.png"
import imagem3 from "./imagens/Screenshot_3.png"
import imagem4 from "./imagens/Screenshot_4.png"


// Adicione mais imagens conforme necessário

export function CarouselHome() {
  // Array de imagens para mapear
  const images = [imagem1, imagem2, imagem3, imagem4] // Adicione mais imagens conforme necessário

  return (
    <Carousel
      className="w-full max-w-[1500px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl" // Configurações responsivas de largura
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img 
                src={image} 
                alt={`Imagem ${index + 1}`} 
                className="aspect-square object-cover w-full h-full" 
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
