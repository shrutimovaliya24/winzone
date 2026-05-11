import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("slim-casement-system");

export const metadata = buildProductMetadata(product);

export default function SlimCasementSystemPage() {
  return <ProductPageTemplate product={product} />;
}
