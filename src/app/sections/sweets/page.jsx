import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "VersaIndie | Sweets",
  description: "VersaIndie sweets page.",
};

const page = () => {
  return (
    <SectionPage
      section="sweets"
      subtitle="Indulge in sweet bliss exploring our sweets."
      imgLink="/images/sections/sweets.webp"
    />
  );
};

export default page;
