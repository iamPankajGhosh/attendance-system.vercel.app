import { useEffect, useState } from "react";
import { Sidebar } from "../components";
import axios from "axios";

export default function Attendance() {
  const [people, setPeople] = useState([]);
  const [semester, setSemester] = useState("1st");
  const [isLoading, setIsLoading] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/students/allstudents"
        );
        console.log(response.data);
        setPeople(
          response.data.filter((student) => student.semester == semester)
        );
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchPeople();
  }, [semester]);

  const markAttendance = async (studentId) => {
    console.log(studentId);

    try {
      setIsWaiting(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/students/attendance",
        { studentId }
      );

      if (response.data === "success") {
        setIsWaiting(false);
        setIsMarked(true);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsWaiting(false);
    }
  };

  return (
    <div className="container flex">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex gap-4 items-center w-full">
            <h2 className="text-lg font-semibold">All Students</h2>
            {["1st", "2nd", "3rd", "4th", "5th", "6th"].map((sem) => (
              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                key={sem}
                onClick={() => {
                  setSemester(sem);
                  console.log(semester);
                }}
              >
                {sem}
              </button>
            ))}
            <span>Semester</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col">
          {isLoading ? (
            <span className="text-center">Loading...</span>
          ) : (
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          <span>User</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Roll
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Sem
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {people.map((person) => (
                        <tr key={person.name}>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-violet-900 flex justify-center items-center">
                                  <span className="text-white font-bold">
                                    {person.name.charAt(0)}
                                  </span>
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {person.name}
                                </div>
                                <div className="text-sm text-gray-700">
                                  {person.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900 ">
                              {person.role.toUpperCase()}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900 ">
                              {person.rollNumber}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900 ">
                              {person.semester}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            {!isMarked ? (
                              <button
                                type="button"
                                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                onClick={() => {
                                  markAttendance(person._id);
                                }}
                              >
                                {!isWaiting ? "Present" : "Waiting..."}
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                              >
                                Done
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
