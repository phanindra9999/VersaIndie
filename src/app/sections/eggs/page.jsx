import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "VersaIndie | Eggs",
  description: "VersaIndie eggs page.",
};

const page = () => {
  return (
    <SectionPage
      section="eggs"
      subtitle="Eggcellent choices: Explore freshness and variety."
      imgLink="/images/sections/eggs.webp"
    />
  );
};

export default page;
