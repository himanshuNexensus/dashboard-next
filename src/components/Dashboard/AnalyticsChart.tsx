'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import data from "@/data/analytics";

const AnalyticsChart = () => {
  return (
    <>
      <Card className="mt-6">
        <CardHeader>
            <CardTitle>Analytics For This Year</CardTitle>
             <CardDescription>Views Per Month</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="w-100 h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={1100}
                        height={300}
                        data={data}
                    >
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />

                    </LineChart>
                 </ResponsiveContainer>
            </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsChart;
