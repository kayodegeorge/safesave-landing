import Image from "next/image";
import React from "react";
// import { AnimationWrapper } from 'react-hover-animation'

export default function AppStoreButton() {
  return (
    <div>
      <a href="https://apps.apple.com">
        <Image
          alt="App store image"
          src={"/assets/appstore-dn.svg"}
          width={150}
          height={50}
        ></Image>
      </a>
    </div>
  );
}
