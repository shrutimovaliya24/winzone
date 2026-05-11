import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("slimest-window");

export const metadata = buildProductMetadata(product);

export default function SlimestWindowPage() {
  return <ProductPageTemplate product={product} />;
}
