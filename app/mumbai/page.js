import CityPageTemplate, {
  buildCityMetadata,
} from "@/components/Common/CityPage/CityPageTemplate";
import { getCity } from "@/app/_data/cities";

const city = getCity("mumbai");

export const metadata = buildCityMetadata(city);

export default function MumbaiPage() {
  return <CityPageTemplate city={city} />;
}
