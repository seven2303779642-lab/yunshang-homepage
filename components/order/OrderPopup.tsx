"use client";

import BrandButton from "@/components/ui/BrandButton";
import { useOrderPopup } from "@/components/order/OrderPopupContext";
import { orderPopupAssets } from "@/data/orderPopupAssets";
import {
  enContent,
  getLanguageFromPathname,
  zhContent,
} from "@/data/siteContent";
import { ORDER_LANDING_HREF, ORDER_PICKUP_URL } from "@/data/orderLinks";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function OrderPopup() {
  const pathname = usePathname();
  const language = getLanguageFromPathname(pathname);
  const content = language === "en" ? enContent : zhContent;
  const popup = content.orderPopup;
  const waveImage =
    language === "en" ? orderPopupAssets.waveEn : orderPopupAssets.waveZh;
  const { isOpen, closeOrderPopup } = useOrderPopup();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeOrderPopup();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOrderPopup]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="order-popup-overlay"
      role="presentation"
      onClick={closeOrderPopup}
    >
      <div
        className="order-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-popup-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="order-popup__close"
          aria-label={popup.closeAriaLabel}
          onClick={closeOrderPopup}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="order-popup__body">
          <h2 id="order-popup-title" className="order-popup__title">
            {popup.title}
          </h2>

          <div className="order-popup__actions">
            <BrandButton
              href={ORDER_PICKUP_URL}
              onClick={closeOrderPopup}
              className="order-popup__action-button"
            >
              {popup.pickupButton}
            </BrandButton>
            <BrandButton
              href={ORDER_LANDING_HREF}
              onClick={closeOrderPopup}
              className="order-popup__action-button"
            >
              {popup.deliveryButton}
            </BrandButton>
          </div>
        </div>

        <div className="order-popup__wave" aria-hidden="true">
          <img src={waveImage} alt="" draggable={false} />
        </div>
      </div>
    </div>
  );
}
