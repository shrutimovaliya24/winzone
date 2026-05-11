import CityPageTemplate, {
  buildCityMetadata,
} from "@/components/Common/CityPage/CityPageTemplate";
import { getCity } from "@/app/_data/cities";

const city = getCity("chennai");

export const metadata = buildCityMetadata(city);

export default function ChennaiPage() {
  return <CityPageTemplate city={city} />;
}
