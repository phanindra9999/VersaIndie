import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "VersaIndie | Cheeses and Dairy",
  description: "VersaIndie cheeses and dairy page.",
};

const page = () => {
  return (
    <SectionPage
      section="cheeses-and-dairy"
      subtitle="Say cheeeeese while eating our cheeses!"
      imgLink="/images/sections/cheeses.webp"
    />
  );
};

export default page;
