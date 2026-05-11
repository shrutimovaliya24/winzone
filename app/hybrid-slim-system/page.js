import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("hybrid-slim-system");

export const metadata = buildProductMetadata(product);

export default function HybridSlimSystemPage() {
  return <ProductPageTemplate product={product} />;
}
