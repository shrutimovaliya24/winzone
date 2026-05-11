import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("slim-partition-system");

export const metadata = buildProductMetadata(product);

export default function SlimPartitionSystemPage() {
  return <ProductPageTemplate product={product} />;
}
