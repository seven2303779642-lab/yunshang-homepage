"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type OrderPopupContextValue = {
  isOpen: boolean;
  openOrderPopup: () => void;
  closeOrderPopup: () => void;
};

const OrderPopupContext = createContext<OrderPopupContextValue | null>(null);

export function OrderPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openOrderPopup = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeOrderPopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, openOrderPopup, closeOrderPopup }),
    [isOpen, openOrderPopup, closeOrderPopup],
  );

  return (
    <OrderPopupContext.Provider value={value}>
      {children}
    </OrderPopupContext.Provider>
  );
}

export function useOrderPopup() {
  const context = useContext(OrderPopupContext);

  if (!context) {
    throw new Error("useOrderPopup must be used within OrderPopupProvider");
  }

  return context;
}
