import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "VersaIndie | Cleaning",
  description: "VersaIndie cleaning page.",
};

const page = () => {
  return (
    <SectionPage
      section="cleaning"
      subtitle="Clean and shine bright like a diamond."
      imgLink="/images/sections/cleaning.webp"
    />
  );
};

export default page;
