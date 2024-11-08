import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "VersaIndie | Fruits",
  description: "VersaIndie fruits page.",
};

const page = () => {
  return (
    <SectionPage
      section="fruits"
      subtitle="Explore nature's sweetness in our fresh fruit!"
      imgLink="/images/sections/fruits.webp"
    />
  );
};

export default page;
