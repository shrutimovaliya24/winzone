import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("aluminium-slim-window");

export const metadata = buildProductMetadata(product);

export default function AluminiumSlimWindowPage() {
  return <ProductPageTemplate product={product} />;
}
