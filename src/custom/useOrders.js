import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../services/apiOrder";

export function useOrders() {
  const {
    isLoading,
    data: orderData,
    error,
  } = useQuery({
    queryKey: ["order"],
    queryFn: getOrder,
  });

  console.log(orderData);

  return { isLoading, orderData, error };
}
