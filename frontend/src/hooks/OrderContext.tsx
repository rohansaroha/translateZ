import React, { createContext, useState } from "react";

export const OrderContext = createContext({
  qty: 0
});

export const OrderProvider = ({ children }:{children:React.ReactNode})=>{
  const providerValue = useProviderQty();
  return <OrderContext.Provider value={providerValue}>{children}</OrderContext.Provider>;
};

const useProviderQty = ():any=>{
  const [qty,setQty] = useState<number>(0);
  return [qty,setQty];
};
