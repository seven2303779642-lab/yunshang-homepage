import Link from "next/link";
import type { ReactNode } from "react";
import { storeNearbyButtonAssets } from "@/data/storeNearbyButtonAssets";
import "./store-nearby-button.css";

type StoreNearbyButtonProps = {
  href: string;
  children: ReactNode;
};

export default function StoreNearbyButton({
  href,
  children,
}: StoreNearbyButtonProps) {
  return (
    <Link href={href} className="store-nearby-button">
      <img
        src={storeNearbyButtonAssets.default}
        alt=""
        aria-hidden="true"
        className="store-nearby-button__bg store-nearby-button__bg--default"
        draggable={false}
      />
      <img
        src={storeNearbyButtonAssets.hover}
        alt=""
        aria-hidden="true"
        className="store-nearby-button__bg store-nearby-button__bg--hover"
        draggable={false}
      />
      <span className="store-nearby-button__label">{children}</span>
    </Link>
  );
}
