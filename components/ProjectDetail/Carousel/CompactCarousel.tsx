'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/project/apehex-lcp.png',
  '/project/compact-lcp.png',
  '/project/apehex-resource.png',
  '/project/compact-resources.png',
  '/project/compact-api-document-1.png',
  '/project/compact-api-document-2.png',
];
const texts: Record<(typeof images)[number], string> = {
  '/project/apehex-lcp.png': '↑ APEHEX - 관리자 페이지 LCP',
  '/project/compact-lcp.png': '↑ Compact-Machine - 관리자 페이지 LCP',
  '/project/apehex-resource.png': '↑ APEHEX - 관리자 페이지 리소스 요청 - 약 1,400건',
  '/project/compact-resources.png': '↑ Compact-Machine - 관리자 페이지 리소스 요청 - 약 40건',
  '/project/compact-api-document-1.png': '↑ Compact-Machine - API 문서화 당시 사용 사례',
  '/project/compact-api-document-2.png': '↑ Compact-Machine - API 문서화 당시 사용 사례',
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
  const currentText = texts[currentImage];

  return (
    <>
      <div className="w-full max-w-md mx-auto my-2 text-center space-y-4">
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
          {images.map((src, i) => (
            <div key={i} className="keen-slider__slide flex justify-center items-center w-full">
              <Image src={src} alt={`슬라이더`} width={600} height={200} className="m-auto" />
            </div>
          ))}
        </div>

        <p className="text-base font-bold dark:text-white">{currentText}</p>
      </div>
    </>
  );
}
