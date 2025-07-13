'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = ['/project/12345.jpg', '/project/temp.jpg', '/project/afo-logo.png'];
const texts: Record<(typeof images)[number], string> = {
  '/project/12345.jpg': 'A 텍스트',
  '/project/temp.jpg': 'B 텍스트',
  '/project/afo-logo.png': 'C 텍스트',
};
export default function CompactCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  const currentImage = images[currentSlide];
  const currentText = texts[currentImage] ;

  return (
    <>
      <div className="w-full max-w-md mx-auto text-center space-y-4">
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
          {images.map((src, i) => (
            <div key={i} className="keen-slider__slide flex justify-center items-center">
              <Image src={src} alt={`슬라이더`} width={200} height={200} className="m-auto" />
            </div>
          ))}
        </div>

        <p className="text-lg font-medium">{currentText}</p>
      </div>
    </>
  );
}
