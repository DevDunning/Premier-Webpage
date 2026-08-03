import CategoryComingSoon from "@/app/Components/CategoryComingSoon";
import { getCategory } from "@/data/categories";

export default function LivingRoomPage() {
  return <CategoryComingSoon category={getCategory("living-room")} />;
}