import CalendarCompnent from "@/components/calendar";
export default function Schedule() {
  return (
    <div className="h-screen w-full text-black bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Class Schedule
      </h1>
      <CalendarCompnent />
    </div>
  );
}
