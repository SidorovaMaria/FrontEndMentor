import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

import Input from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import data from "../data/data.json";
import { getCountedPlannedFeedbacks } from "@/lib/data-utils";
import NavBar from "@/components/ui/navbar/NavBar";
export default async function Home({ params }: { params: { tags: string } }) {
  const searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  return (
    <main
      className="
    flex flex-col lg:flex-row md:gap-10 lg:gap-[30px]"
    >
      <header>
        <NavBar />
      </header>
      <section>
        <h1>Feedback</h1>
        <p>Here is the feedback section.</p>
      </section>
    </main>
  );
}
