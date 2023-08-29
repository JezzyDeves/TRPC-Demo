import { trpc } from "./trpc";

function App() {
  const greeting = trpc.greeting.useQuery();
  return <>{greeting.data}</>;
}

export default App;
