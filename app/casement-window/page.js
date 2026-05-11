import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("casement-window");

export const metadata = buildProductMetadata(product);

export default function CasementWindowPage() {
  return <ProductPageTemplate product={product} />;
}
