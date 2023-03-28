import Image from "next/image";
import React from "react";

export default function GooglePlayButton() {
  return (
    <div>
      <a href="/https://play.google.com/store/apps/details?id=com.safesave&hl=en">
        <Image
          alt="Google play store image"
          src={"/assets/googleplay-dn.svg"}
          width={150}
          height={50}
        />
      </a>
    </div>
  );
}
