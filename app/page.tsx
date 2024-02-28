import { Suspense } from "react";
import AppointmentPage from "./components/AppointmentPage";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <main className="">
      <Suspense fallback={<Loading />}>
        <AppointmentPage />
      </Suspense>
    </main>
  );
}
