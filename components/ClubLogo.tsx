/**
 * Club logo — renders /logo.png when available.
 * Save your logo to public/logo.png to replace the placeholder asterisk.
 */

import Image from "next/image";

interface ClubLogoProps {
  /** Pixel size of the containing square */
  size?: number;
  className?: string;
}

export default function ClubLogo({ size = 28, className = "" }: ClubLogoProps) {
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="Claude Builder Club UNILAG"
        width={size}
        height={size}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}
