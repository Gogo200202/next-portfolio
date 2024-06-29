import Cards from "./components/Cards";
import MeOnHome from "./components/MeOnHome";
export default function Home() {
  return (
    <div>
      <MeOnHome></MeOnHome>
      <p className=" p-11 text-2xl">My projects:</p>
      <Cards></Cards>
    </div>
  );
}
