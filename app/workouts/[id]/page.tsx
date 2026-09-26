import { getWorkoutById } from "@/lib/api";
import WorkoutDetails from "./_components/WorkoutDetails";

type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function WorkoutDetailsPage({ params }: WorkoutDetailsPageProps) {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkoutById(id);
  } catch (error) {
    console.error("Failed to load workout:", error);

    return (
      <div className="page-container py-12 text-center">
        <p className="text-sm text-muted-foreground">
          Failed to load workout. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="page-container py-8 sm:py-10 lg:py-12">
      <WorkoutDetails workout={workout} />
    </div>
  );
}

export default WorkoutDetailsPage;
