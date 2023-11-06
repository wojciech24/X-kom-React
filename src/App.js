import Expenses from "./components/Expenses";

const expenses = [
  {
    id: 'e1',
    title: 'Brother HL‑B2080DW',
    amount: 849.00,
    img: '/images/e1.webp',
    opis1:"Technologia druku: Laserowa, monochromatyczna \n Interfejsy: USB, Wi-Fi, LAN, AirPrint \n Druk dwustronny: Automatyczny \n Szybkość druku: do 34 str./min",
  },
  {
    id: 'e2',
    title: 'Brother HL‑1223WE',
    amount: 549.00,
    img: '/images/e2.webp',
    opis1:"Technologia druku: Laserowa, monochromatyczna \n Interfejsy: USB, Wi-Fi \n Szybkość druku: do 20 str./min \nPodajnik papieru: 150 arkuszy",
  },
  {
    id: 'e3',
    title: 'Brother HL‑1110E',
    amount: 459.00,
    img: '/images/e3.webp',
    opis1:"Technologia druku: Laserowa, monochromatyczna \n Interfejsy: USB \n Szybkość druku: do 20 str./min \n Podajnik papieru: 150 arkuszy",
  },
  {
    id: 'e4',
    title: 'Brother HL‑L2312D',
    amount: 620.00,
    img: '/images/e4.webp',
    opis1:"Technologia druku: Laserowa, monochromatyczna \n Interfejsy: USB, Wi-Fi, LAN, AirPrint \n Druk dwustronny: Automatyczny \n Szybkość druku: do 34 str./min",
  },
  {
    id: 'e5',
    title: 'Canon Pixma TS705a',
    amount: 419,
    img: '/images/e5.webp',
    opis1:"Technologia druku: Atramentowa, kolorowa \n Interfejsy: USB, Wi-Fi, LAN, AirPrint, Mopria \n Druk dwustronny: Automatyczny \n Szybkość druku: do 15 str./min",
  },
  {
    id: 'e6',
    title: 'Brother HL‑L2372DN',
    amount: 999,
    img: '/images/e6.webp',
    opis1:"Technologia druku: Laserowa, monochromatyczna \n Interfejsy: USB, Wi-Fi, LAN, AirPrint \n Druk dwustronny: Automatyczny \n Szybkość druku: do 34 str./min",
  },
];

function App() {
  return (
    <div>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
