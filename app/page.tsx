import { Suspense } from "react";
import Final from "./components/Final";

export default function Home() {
  return (
    <main className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Final />
      </Suspense>
    </main>
  );
}
