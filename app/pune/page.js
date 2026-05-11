import CityPageTemplate, {
  buildCityMetadata,
} from "@/components/Common/CityPage/CityPageTemplate";
import { getCity } from "@/app/_data/cities";

const city = getCity("pune");

export const metadata = buildCityMetadata(city);

export default function PunePage() {
  return <CityPageTemplate city={city} />;
}
