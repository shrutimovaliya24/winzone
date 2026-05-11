import CityPageTemplate, {
  buildCityMetadata,
} from "@/components/Common/CityPage/CityPageTemplate";
import { getCity } from "@/app/_data/cities";

const city = getCity("bangalore");

export const metadata = buildCityMetadata(city);

export default function BangalorePage() {
  return <CityPageTemplate city={city} />;
}
