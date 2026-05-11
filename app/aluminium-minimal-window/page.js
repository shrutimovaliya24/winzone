import ProductPageTemplate, {
  buildProductMetadata,
} from "@/components/Common/ProductPage/ProductPageTemplate";
import { getProduct } from "@/app/_data/products";

const product = getProduct("aluminium-minimal-window");

export const metadata = buildProductMetadata(product);

export default function AluminiumMinimalWindowPage() {
  return <ProductPageTemplate product={product} />;
}
