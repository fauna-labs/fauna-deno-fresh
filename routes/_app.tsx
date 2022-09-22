import { AppProps } from "$fresh/server.ts";
import NavComponent from "../components/Navbar.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <NavComponent />
      <Component />
    </>
  );
}