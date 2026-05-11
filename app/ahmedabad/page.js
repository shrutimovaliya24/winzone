import CityPageTemplate, {
  buildCityMetadata,
} from "@/components/Common/CityPage/CityPageTemplate";
import { getCity } from "@/app/_data/cities";

const city = getCity("ahmedabad");

export const metadata = buildCityMetadata(city);

export default function AhmedabadPage() {
  return <CityPageTemplate city={city} />;
}
