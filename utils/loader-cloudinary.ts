interface CloudinaryLoader {
  src: string;
  width: number;
  quality: number;
}

const normalizeSrc = (src: string) => src[0] === '/' ? src.slice(1) : src;

export default function cloudinaryLoader({ src }: CloudinaryLoader) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER;
  const assetsVersion = process.env.NEXT_PUBLIC_CLOUDINARY_ASSETS_VERSION;

  return `https://res.cloudinary.com/${cloudName}/image/upload/${folder}/${assetsVersion}/${normalizeSrc(src)}.webp`;
}
