import { Separator } from "@/components/ui/separator";
import { BookOpenText } from "lucide-react";
import BarComponent from "@/components/ui/barChart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PieComponent from "@/components/ui/pieChart";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  //-> no. of trainers , no. of courses, no. of videos, no. of students enrolled, no. of batches,
  const cards = [
    {
      title: "Courses",
      noOfValue: 500,
    },
    {
      title: "Videos",
      noOfValue: 500,
    },
    {
      title: "Batches",
      noOfValue: 500,
    },
    {
      title: "Trainers",
      noOfValue: 500,
    },
    {
      title: "Students",
      noOfValue: 500,
    },
  ];

  const courses = [
    {
      title: "Mern Stack Developer",
      totalPurchases: 2000,
    },
    {
      title: "Mern Stack Developer",
      totalPurchases: 2000,
    },
    {
      title: "Mern Stack Developer",
      totalPurchases: 2000,
    },
    {
      title: "Mern Stack Developer",
      totalPurchases: 2000,
    },
    {
      title: "Mern Stack Developer",
      totalPurchases: 2000,
    },
    {
      title: "Mern Stack Developer",
      totalPurchases: 2000,
    },
    {
      title: "Mern Stack Developer",
      totalPurchases: 2000,
    },
    {
      title: "Mern Stack Developer",
      totalPurchases: 2000,
    },
    {
      title: "Mern Stack Developer",
      totalPurchases: 2000,
    },
    {
      title: "Mern Stack Developer",
      totalPurchases: 2000,
    },
  ];
  return (
    <main className="p-5 h-full   w-full   border border-border  rounded-lg">
      <div className=" text-primary text-xl">Dashboard</div>

      <Separator className="mt-1 mb-4 h-[2px] bg-border" />
      <ul className="w-full flex flex-row   justify-between gap-4">
        {cards.map((card, index) => (
          <li
            key={index}
            className="w-full border  border-border p-2  px-5 rounded-lg flex flex-col"
          >
            <Button className="text-lg bg-chart-5 text-primary rounded-sm ">
              {card?.title}
            </Button>
            <Separator className="my-2 bg-border " />
            <p className=" text-3xl ">{card?.noOfValue}</p>
          </li>
        ))}
      </ul>

      <div className="flex w-full gap-4 my-4  items-center">
        <Card className="w-full h-96  overflow-y-scroll     scrollbar">
          <CardHeader className="p-3 rounded-lg  bg-chart-5 text-lg m-1 text-primary font-semibold">
            Top 10 Courses
          </CardHeader>

          <CardContent className="px-3">
            <ul className="flex flex-col gap-y-1">
              {courses?.map((course, index) => (
                <li
                  key={index}
                  className=" flex flex-row border-b border-border rounded-sm  items-center gap-x-2"
                >
                  <div className="flex  aspect-square size-8 items-center justify-center rounded-lg bg-chart-1 text-primary">
                    <BookOpenText className="size-6" />
                  </div>
                  <Separator orientation="vertical" className="h-10" />
                  <div>
                    <p className="text-primary">{course?.title}</p>
                    <p className="text-sky-300">{course?.totalPurchases}</p>
                    <p></p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <BarComponent dimensions="w-full h-96" />
        <PieComponent />
      </div>
    </main>
  );
}
