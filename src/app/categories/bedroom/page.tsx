import CategoryComingSoon from "@/app/Components/CategoryComingSoon";
import { getCategory } from "@/data/categories";

export default function BedroomPage() {
  return <CategoryComingSoon category={getCategory("bedroom")} />;
}