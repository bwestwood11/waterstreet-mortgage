import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: string;
  width: number;
  height: number;
};

// Images for the blog posts
export default function CustomImage({ src, alt, priority, width, height }: Props) {
  const prty = priority ? true : false;
  return (
    <div className="w-full h-full my-6">
      <Image src={src} alt={alt} width={width} height={height} priority={prty} className="mx-auto rounded-xl" />
    </div>
  );
}
