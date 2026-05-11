import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("telescopic-partition-system");

export const metadata = buildProductMetadata(product);

export default function TelescopicPartitionSystemPage() {
  return <ProductPageTemplate product={product} />;
}
