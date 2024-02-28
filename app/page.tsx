import { Suspense } from "react";
import AppointmentPage from "./components/AppointmentPage";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <main className="container m-auto">
      <Suspense fallback={<Loading />}>
        <AppointmentPage />
      </Suspense>
    </main>
  );
}
