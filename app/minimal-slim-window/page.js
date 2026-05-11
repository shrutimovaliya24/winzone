import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("minimal-slim-window");

export const metadata = buildProductMetadata(product);

export default function MinimalSlimWindowPage() {
  return <ProductPageTemplate product={product} />;
}
