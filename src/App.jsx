import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Orders from "./pages/Orders";
import GlobalStyles from "./styles/GobalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 30 * 1000,
      staleTime: 0 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="orders" />} />
            <Route path="orders" loader:orderLoader element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
