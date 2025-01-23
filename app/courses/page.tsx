import BarComponent from "@/components/ui/barChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Course() {
  const courses = [
    {
      title: "Mern Stack",
      noOfSales: 3000,
      duration: "5 Months",
      noOfLectures: 30,
      rating: 5,
    },
    {
      title: "Mern Stack",
      noOfSales: 3000,
      duration: "5 Months",
      noOfLectures: 30,
      rating: 5,
    },
    {
      title: "Mern Stack",
      noOfSales: 3000,
      duration: "5 Months",
      noOfLectures: 30,
      rating: 5,
    },
    {
      title: "Mern Stack",
      noOfSales: 3000,
      duration: "5 Months",
      noOfLectures: 30,
      rating: 5,
    },
    {
      title: "Mern Stack",
      noOfSales: 3000,
      duration: "5 Months",
      noOfLectures: 30,
      rating: 5,
    },
    {
      title: "Mern Stack",
      noOfSales: 3000,
      duration: "5 Months",
      noOfLectures: 30,
      rating: 5,
    },
  ];
  return (
    <main className="p-5 h-full   w-full   border border-border  rounded-lg">
      <div className=" text-primary text-xl">Courses</div>

      <Separator className="mt-1 mb-4 h-[2px] bg-border" />
      <div className="flex  gap-x-4 my-2">
        <Input
          type="search"
          className=" text-primary"
          placeholder="Search Course"
        />
        <Button className="bg-chart-5 text-primary">Search</Button>
        <Button className="bg-chart-5 text-primary">Add Course</Button>
      </div>
      <div className="border rounded-lg p-3">
        <div className="bg-chart-5 text-primary p-2 rounded-md text-xl font-semibold">
          Courses
        </div>

        <ul className="flex flex-col gap-y-1 mt-3">
          {courses?.map((course, index) => (
            <li key={index} className="border p-3 rounded-lg">
              <p className="text-xl text-primary bg-chart-5 p-1 ps-2 rounded-sm">
                {course?.title}
              </p>

              <p className="">
                <span>Total Sales</span> : {course?.noOfSales}
              </p>
              <p>Duration : {course?.duration}</p>
              <p>Lectures : {course?.noOfLectures}</p>
              <p>Rating : {course?.rating}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* <BarComponent dimensions="w-96 h-96" /> */}
    </main>
  );
}
