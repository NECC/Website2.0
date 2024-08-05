import About from "./components/About";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Team from "./components/Team";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <About />
      <Team />
      <Partners />
    </div>
  );
}
