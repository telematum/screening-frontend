import { Suspense } from "react";
import Final from "./components/Final";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <main className="">
      <Suspense fallback={<Loading />}>
        <Final />
      </Suspense>
    </main>
  );
}
