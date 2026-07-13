// components/ui/picture.tsx
//
// Responsive <picture> component serving AVIF and WebP sources, with a
// `next/image` fallback element that still works in `output: 'export'` mode.
//
// Assets are pre-optimized by scripts/optimize-images.mjs into /public.

import Image from "next/image";

type Source = {
  width: number;
  avif: string;
  webp: string;
};

export interface PictureProps {
  srcBase: string; // e.g. "/portrait" — files live at /public/${srcBase}.avif|.webp
  sources: Source[]; // ordered responsive widths, e.g. [480, 768, 960]
  fallbackSrc: string; // e.g. "/portrait.webp"
  alt: string;
  width: number; // intrinsic px (for aspect-ratio / CLS control)
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "auto" | "sync";
  style?: React.CSSProperties;
}

export function Picture({
  srcBase,
  sources,
  fallbackSrc,
  alt,
  width,
  height,
  sizes = "100vw",
  priority = false,
  className,
  loading,
  decoding = "async",
  style,
}: PictureProps) {
  const avifSrcSet = sources
    .map((s) => `${s.avif} ${s.width}w`)
    .join(", ");
  const webpSrcSet = sources
    .map((s) => `${s.webp} ${s.width}w`)
    .join(", ");

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <Image
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        loading={loading ?? (priority ? "eager" : "lazy")}
        unoptimized
        decoding={decoding}
        className={className}
        style={style}
      />
    </picture>
  );
}
