import Image from "next/image";
import TodoTable from "./components/todotable";

export default function Home() {
  return (
    <div>
      <div className="text-4xl font-bold flex justify-center text-center mx-5">
        Welcome To The TODO App
      </div>
      <TodoTable />
    </div>
  );
}
