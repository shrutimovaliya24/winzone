import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("bi-fold-door-system");

export const metadata = buildProductMetadata(product);

export default function BiFoldDoorSystemPage() {
  return <ProductPageTemplate product={product} />;
}
