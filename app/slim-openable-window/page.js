import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("slim-openable-window");

export const metadata = buildProductMetadata(product);

export default function SlimOpenableWindowPage() {
  return <ProductPageTemplate product={product} />;
}
