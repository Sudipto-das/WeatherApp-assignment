import WeatherDetails from "./components/weather";


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <WeatherDetails />
    </main>
  );
}
