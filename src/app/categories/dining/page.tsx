import CategoryComingSoon from "@/app/Components/CategoryComingSoon";
import { getCategory } from "@/data/categories";

export default function DiningPage() {
  return <CategoryComingSoon category={getCategory("dining")} />;
}