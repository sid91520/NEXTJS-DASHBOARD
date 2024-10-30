import Image from "next/image";
import Link from "next/link";
import React from "react";

const FollowUs = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="text-2xl sm:text-xl">
        <p>Follow us on:</p>
      </div>
      <div className="flex flex-row p-2">
        <div className="mr-1">
        <Link href={"https://www.instagram.com/"} target="_blank">
          <Image src="/instagram.png" width={50} height={50} alt="Instagram" />
        </Link></div>
        <div>
        <Link href={"https://www.facebook.com/"} target="_blank">
          <Image src="/facebook.png" width={46} height={46} alt="Instagram" />
        </Link></div>
        <div className="ml-2">
        <Link href={"https://www.youtube.com/"} target="_blank">
          <Image src="/youtube.png" width={50} height={50} alt="Instagram" />
        </Link></div>
      </div>
    </div>
  );
};

export default FollowUs;
