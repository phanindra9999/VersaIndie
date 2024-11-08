import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "VersaIndie | Dietary",
  description: "VersaIndie dietary page.",
};

const page = () => {
  return (
    <SectionPage
      section="dietary"
      subtitle="Nourish your health journey with our dietary discoveries."
      imgLink="/images/sections/dietary.webp"
    />
  );
};

export default page;
