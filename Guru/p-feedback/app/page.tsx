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
import FilterBar from "@/components/ui/FilterBar";
import Requests from "@/components/Requests";
export default async function Home() {
  return (
    <main
      className="
    flex flex-col lg:flex-row md:gap-10 lg:gap-[30px]"
    >
      <header>
        <NavBar />
      </header>
      <section className="w-full flex flex-col gap-8 md:gap-6 ">
        <FilterBar />
        <div className="mx-6 md:mx-0">
          <Requests />
        </div>
      </section>
    </main>
  );
}
