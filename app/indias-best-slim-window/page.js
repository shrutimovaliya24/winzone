import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("indias-best-slim-window");

export const metadata = buildProductMetadata(product);

export default function IndiasBestSlimWindowPage() {
  return <ProductPageTemplate product={product} />;
}
