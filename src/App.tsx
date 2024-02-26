import AppointmentsList from "@components/AppointmentsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-slate-50 text-neutral-800 grid place-items-center p-4">
        <AppointmentsList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
