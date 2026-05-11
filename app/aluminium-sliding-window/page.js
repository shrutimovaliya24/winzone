import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("aluminium-sliding-window");

export const metadata = buildProductMetadata(product);

export default function AluminiumSlidingWindowPage() {
  return <ProductPageTemplate product={product} />;
}
