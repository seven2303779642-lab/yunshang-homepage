/** Shared online-order URLs (match yunshang.ca behavior). */

export const ORDER_PICKUP_URL =
  "https://order.mrsdigi.com/020614203001010/22ecd35b-ddaa-5250-b4c8-bf37fd3fc984#/stores";

export const ORDER_DELIVERY_URL = "https://yunshang.ca/";

/** In-app language entry landing (replaces yunshang.ca for popup delivery CTA). */
export const ORDER_LANDING_HREF = "/";

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
