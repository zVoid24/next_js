import HomeContent from "../../theme/components/pages/HomeContent";
import { siteData } from "../../theme/sample-site-data";

export default function Home() {
  return <HomeContent initialData={siteData} />;
}
