import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("minimalist-system-window");

export const metadata = buildProductMetadata(product);

export default function MinimalistSystemWindowPage() {
  return <ProductPageTemplate product={product} />;
}
