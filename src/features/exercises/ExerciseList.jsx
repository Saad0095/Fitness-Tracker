import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteExercise } from "./exercisesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ExerciseList = () => {
  const exercises = useSelector((state) => state.exercises.exercises);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold">Tracked Exercises</h2>
      {exercises.length === 0 ? (
        <p className="text-gray-500">No exercises tracked yet.</p>
      ) : (
        <ul className="list-disc list-inside">
          {exercises.map((exercise) => (
            <li key={exercise.id} className="flex justify-between">
              <p><span className="font-semibold">{exercise.name}</span>:{" "}
              {exercise.reps} reps, {exercise.sets} set</p>
              <button onClick={()=> dispatch(deleteExercise(exercise.id))}><FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExerciseList;
