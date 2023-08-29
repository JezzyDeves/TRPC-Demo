import { trpc } from "./trpc";

function App() {
  const greeting = trpc.greeting.useQuery();
  const customGreeting = trpc.customGreeting.useMutation();
  return (
    <>
      {greeting.data} <br />{" "}
      <button onClick={() => customGreeting.mutate("Hello world!!!")}>
        Custom
      </button>{" "}
      <br />
      {customGreeting.data}
    </>
  );
}

export default App;
