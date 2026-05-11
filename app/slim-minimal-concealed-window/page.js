import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("slim-minimal-concealed-window");

export const metadata = buildProductMetadata(product);

export default function SlimMinimalConcealedWindowPage() {
  return <ProductPageTemplate product={product} />;
}
