import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "VersaIndie | Offers",
	description: "VersaIndie offers page."
};

const page = () => {
  return (
    <SectionPage
      section="offers"
      subtitle="Unbeatable prices await at our grocery sale."
      imgLink="/images/sections/sale-pic.webp"
    />
  );
};

export default page;
