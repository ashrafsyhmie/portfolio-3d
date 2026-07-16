import { useEffect, useRef, useState } from 'react';
import thayyib from '../../../assets/16-07-2026, 01-46-18 (edited).gif';

type MarqueeMedia = {
  src: string;
  width?: number;
  fit?: 'cover' | 'contain';
};

const marqueeHeight = 270;
const marqueeGap = 12;
const defaultMediaWidth = 420;

const rowOneMedia: MarqueeMedia[] = [
  { src: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif' },
  {
    src: thayyib,
    width: Math.round(marqueeHeight * (1920 / 826)),
  },
  { src: 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif' },
  { src: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif' },
  { src: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif' },
  { src: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif' },
  { src: 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif' },
  { src: 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif' },
  { src: 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif' },
  { src: 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif' },
  { src: 'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif' },
] as const;

const rowTwoMedia: MarqueeMedia[] = [
  { src: 'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif' },
  { src: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif' },
  { src: 'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif' },
  { src: 'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif' },
  { src: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif' },
  { src: 'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif' },
  { src: 'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif' },
  { src: 'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif' },
  { src: 'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif' },
  { src: 'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif' },
] as const;

function getRepetitionWidth(media: readonly MarqueeMedia[]) {
  return (
    media.reduce((total, item) => total + (item.width ?? defaultMediaWidth), 0) +
    media.length * marqueeGap
  );
}

function isVideo(src: string) {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(src);
}

function MarqueeRow({
  media,
  transform,
  repetitionWidth,
}: {
  media: readonly MarqueeMedia[];
  transform: string;
  repetitionWidth: number;
}) {
  const repeatedMedia = [...media, ...media, ...media];

  return (
    <div
      className="flex w-max gap-3"
      style={{ marginLeft: -repetitionWidth, transform, willChange: 'transform' }}
      aria-hidden="true"
    >
      {repeatedMedia.map((item, index) => {
        const width = item.width ?? defaultMediaWidth;
        const fit = item.fit ?? 'cover';

        return (
          <div
            key={`${item.src}-${index}`}
            className="shrink-0 overflow-hidden rounded-2xl bg-[var(--button-bg)]"
            style={{ height: marqueeHeight, width }}
          >
            {isVideo(item.src) ? (
              <video
                src={item.src}
                className="h-full w-full"
                style={{ objectFit: fit }}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={item.src}
                alt=""
                className="h-full w-full"
                style={{ objectFit: fit }}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const updateOffset = () => {
      animationFrame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const nextOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(nextOffset);
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const translatedOffset = offset - 200;

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[var(--page-bg)] pb-10 pt-24 transition-colors duration-300 sm:pt-32 md:pt-40"
      aria-label="Selected motion work"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow
          media={rowOneMedia}
          repetitionWidth={getRepetitionWidth(rowOneMedia)}
          transform={`translate3d(${translatedOffset}px, 0, 0)`}
        />
        <MarqueeRow
          media={rowTwoMedia}
          repetitionWidth={getRepetitionWidth(rowTwoMedia)}
          transform={`translate3d(${-translatedOffset}px, 0, 0)`}
        />
      </div>
    </section>
  );
}
