import CartContextProvider from "@/context/CardContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
