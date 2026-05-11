import CityPageTemplate, {
  buildCityMetadata,
} from "@/components/Common/CityPage/CityPageTemplate";
import { getCity } from "@/app/_data/cities";

const city = getCity("rajkot");

export const metadata = buildCityMetadata(city);

export default function RajkotPage() {
  return <CityPageTemplate city={city} />;
}
