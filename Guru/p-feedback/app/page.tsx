import NavBar from "@/components/navbar/NavBar";
import FilterBar from "@/components/ui/FilterBar";
import Requests from "@/components/Requests";
import {
  getCountedPlannedFeedbacks,
  getProductRequestByTagsAndStatus,
} from "@/lib/data/api";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const requests = await getProductRequestByTagsAndStatus(
    tag ? [tag] : undefined,
    "suggestion"
  );
  const plannedFeedback = await getCountedPlannedFeedbacks();

  return (
    <main
      className="a
    flex flex-col lg:flex-row md:gap-10 lg:gap-[30px]"
    >
      <header>
        <NavBar planned={plannedFeedback} />
      </header>
      <section className="w-full flex flex-col gap-8 md:gap-6 ">
        <FilterBar requests={requests} />
        <div className="mx-6 md:mx-0">
          <Requests requests={requests} />
        </div>
      </section>
    </main>
  );
}
