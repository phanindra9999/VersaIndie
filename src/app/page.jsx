import Homepage from './homepage';

export const metadata = {
  title: "VersaIndie| Fresh Produce For Your Family",
  description: "VersaIndie grocery shopping online wherever you are.",
	keywords: ["Indian grocery store online", "grocery", "buy food online", "buy food"]
};

export default function Home() {
  return (
    <main
      className={`max-w-[2560px] flex min-h-screen flex-col items-center gap-12 xl:gap-6 mx-auto w-full pb-36`}  
		>
      <Homepage />
    </main>
  );
}
