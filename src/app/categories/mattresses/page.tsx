import CategoryComingSoon from "@/app/Components/CategoryComingSoon";
import { getCategory } from "@/data/categories";

export default function MattressesPage() {
  return <CategoryComingSoon category={getCategory("mattresses")} />;
}