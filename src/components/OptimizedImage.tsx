import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  width?: number;
  height?: number;
  objectPosition?: string;
  overlayClassName?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
  quality = 80,
  fill = false,
  width,
  height,
  objectPosition = "center",
  overlayClassName,
}: OptimizedImageProps) {
  if (fill) {
    return (
      <>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className={`object-cover ${className}`}
          style={{ objectPosition }}
        />
        {overlayClassName && (
          <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />
        )}
      </>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 900}
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={className}
      style={{ objectFit: "cover", objectPosition }}
    />
  );
}