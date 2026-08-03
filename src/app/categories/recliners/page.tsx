import CategoryComingSoon from "@/app/Components/CategoryComingSoon";
import { getCategory } from "@/data/categories";

export default function ReclinersPage() {
  return <CategoryComingSoon category={getCategory("recliners")} />;
}