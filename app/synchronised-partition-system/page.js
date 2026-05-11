import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("synchronised-partition-system");

export const metadata = buildProductMetadata(product);

export default function SynchronisedPartitionSystemPage() {
  return <ProductPageTemplate product={product} />;
}
