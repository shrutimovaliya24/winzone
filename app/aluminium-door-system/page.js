import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("aluminium-door-system");

export const metadata = buildProductMetadata(product);

export default function AluminiumDoorSystemPage() {
  return <ProductPageTemplate product={product} />;
}
