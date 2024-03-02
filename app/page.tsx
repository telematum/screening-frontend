import { Suspense } from "react";
import AppointmentPage from "./components/AppointmentPage";
import Loading from "./components/Loading";
import ThemeSwitch from "./components/Switch";

export default function Home() {
  return (
    <main className="container m-auto relative ">
      <div className="absolute right-2 -top-10 md:-top-5">
        <button>
          <ThemeSwitch />
        </button>
      </div>
      <Suspense fallback={<Loading />}>
        <AppointmentPage />
      </Suspense>
    </main>
  );
}
