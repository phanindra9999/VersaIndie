import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "VersaIndie | Bakery",
  description: "VersaIndie bakery page.",
};

const page = () => {
  return <SectionPage
					section="bakery"
					subtitle="My bakery delights, taste the sweet difference!"
					imgLink="/images/sections/bakery.webp"
      	/>
};

export default page;
