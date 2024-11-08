import ProductsPage from "@/components/shared/ProductsPage/ProductsPage";
import { Metadata } from "next";
import CapitalizeWords from "@/components/shared/CapitalizeWords";

export async function generateMetadata({
  params,
}: {
  params: { product: string };
}): Promise<Metadata> {
  const productName = CapitalizeWords(params.product);

  return {
    title: `VersaIndie | ${productName}`,
  };
}

const CustomPage = ({ params }: { params: { product: string } }) => {
  return <ProductsPage product={params.product} section="fruits" />;
};

export default CustomPage;
