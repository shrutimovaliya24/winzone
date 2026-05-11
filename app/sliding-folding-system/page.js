import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("sliding-folding-system");

export const metadata = buildProductMetadata(product);

export default function SlidingFoldingSystemPage() {
  return <ProductPageTemplate product={product} />;
}
