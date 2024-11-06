import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "VersaIndie | Rotisserie",
  description: "VersaIndie rotisserie page.",
};

const page = () => {
  return (
    <SectionPage
      section="rotisserie"
      subtitle="Irresistible rotisserie: Juicy, aromatic, and always ready."
      imgLink="/images/sections/rotisserie.webp"
    />
  );
};

export default page;
