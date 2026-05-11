import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("minimal-partition-system");

export const metadata = buildProductMetadata(product);

export default function MinimalPartitionSystemPage() {
  return <ProductPageTemplate product={product} />;
}
