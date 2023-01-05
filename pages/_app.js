import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import { AppProvider } from "../context/AppContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        {" "}
        <Component {...pageProps} />
        <Toaster
          toastOptions={{
            duration: 3000,
            style: {
              color: "white",
              backgroundColor: "#0f172a",
            },
          }}
        />
      </Layout>
    </AppProvider>
  );
}
