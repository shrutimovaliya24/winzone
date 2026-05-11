import CityPageTemplate, {
  buildCityMetadata,
} from "@/components/Common/CityPage/CityPageTemplate";
import { getCity } from "@/app/_data/cities";

const city = getCity("vadodara");

export const metadata = buildCityMetadata(city);

export default function VadodaraPage() {
  return <CityPageTemplate city={city} />;
}
