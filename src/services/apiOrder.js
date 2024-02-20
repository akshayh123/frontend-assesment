// const API_URL = "http://localhost:8000";

import supabase from "./supabase";

// export async function getOrders() {
//   const res = await fetch(`${API_URL}/orders`);

//   // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
//   if (!res.ok) throw Error("Failed getting menu");

//   const { data } = await res.json();
//   //   const orderData = Object.assign({}, data);
//   console.log(data);
//   return data;
// }

export async function getOrder() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) {
    console.error(error);
    throw new Error("Orders could not be found");
  }

  console.log(data);
  return data;
}
