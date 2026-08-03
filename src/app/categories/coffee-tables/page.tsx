import CategoryComingSoon from "@/app/Components/CategoryComingSoon";
import { getCategory } from "@/data/categories";

export default function CoffeeTablesPage() {
  return <CategoryComingSoon category={getCategory("coffee-tables")} />;
}