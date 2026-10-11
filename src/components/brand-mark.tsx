import Image from "next/image";

export function BrandMark() {
  return (
    <span className="brand-mark">
      <Image alt="" aria-hidden height={40} src="/icon.png" width={40} />
    </span>
  );
}