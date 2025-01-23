import BarComponent from "@/components/ui/barChart";
import { Component as BarHorizontal } from "@/components/barChartHorizontal";
import { Component as BarMultiple } from "@/components/barChartMultiple";
import { Component as BarMixed } from "@/components/barChartMixed";
export default function Analytics() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <BarComponent />
      <BarHorizontal />
      <BarMultiple />
      <BarMixed />
    </div>
  );
}
