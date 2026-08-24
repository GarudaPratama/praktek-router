import App from "@/App";
import NotFound from "@/pages/NotFound";
import Santri from "@/pages/Santri";
import SantriList from "@/pages/SantriList"; // Pastikan bikin file ini untuk daftar santri
import SantriNilai from "@/pages/SantriNilai";
import SantriAbsensi from "@/pages/SantriAbsensi";
import SantriDetail from "@/pages/SantriDetail";
import About from "@/pages/About";
import { createBrowserRouter } from "react-router";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "santri",
        element: <Santri />,
        children: [
          {
            index: true, // Halaman default saat URL /santri (Menampilkan Daftar Santri)
            element: <SantriList />,
          },
          {
            path: ":id", // Halaman detail santri (/santri/1)
            element: <SantriDetail />,
          },
          {
            path: "nilai", // Halaman nilai (/santri/nilai)
            element: <SantriNilai />,
          },
          {
            path: "absensi", // Halaman absensi (/santri/absensi)
            element: <SantriAbsensi />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);