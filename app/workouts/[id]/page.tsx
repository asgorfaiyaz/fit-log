import WorkoutDetails from "@/components/WorkoutDetails";
import { getWorkoutById } from "@/lib/api";

type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function WorkoutDetailsPage({ params }: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  return (
    <div className="page-container py-8 sm:py-10 lg:py-12">
      <WorkoutDetails workout={workout} />
    </div>
  );
}

export default WorkoutDetailsPage;
