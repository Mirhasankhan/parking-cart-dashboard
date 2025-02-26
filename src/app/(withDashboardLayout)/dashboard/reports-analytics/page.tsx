"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample Data
const bookingTrends = [
  { name: "Jan", bookings: 200 },
  { name: "Feb", bookings: 340 },
  { name: "Mar", bookings: 250 },
  { name: "Apr", bookings: 400 },
  { name: "May", bookings: 600 },
];

const revenueTrends = [
  { name: "Jan", revenue: 5000 },
  { name: "Feb", revenue: 8000 },
  { name: "Mar", revenue: 7200 },
  { name: "Apr", revenue: 9600 },
  { name: "May", revenue: 12500 },
];

const cancellationRate = [
  { month: "Jan", completed: 180, canceled: 20 },
  { month: "Feb", completed: 310, canceled: 30 },
  { month: "Mar", completed: 220, canceled: 30 },
  { month: "Apr", completed: 350, canceled: 50 },
  { month: "May", completed: 540, canceled: 60 },
];

const topParkingSpots = [
  { spotName: "Downtown Garage", totalBookings: 320, averageRating: 4.8 },
  { spotName: "Airport Lot A", totalBookings: 280, averageRating: 4.5 },
  { spotName: "Mall Parking B", totalBookings: 210, averageRating: 4.7 },
];

const ReportsAnalytics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-3xl font-bold"> Reports & Analytics</h1>
    
      <Card>
        <CardHeader>
          <CardTitle>Most Booked Parking Spots</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Spot Name</TableHead>
                <TableHead>Total Bookings</TableHead>
                <TableHead>Average Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topParkingSpots.map((spot, index) => (
                <TableRow key={index}>
                  <TableCell>{spot.spotName}</TableCell>
                  <TableCell>{spot.totalBookings}</TableCell>
                  <TableCell>⭐ {spot.averageRating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">    
        <Card>
          <CardHeader>
            <CardTitle>📅 Booking Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bookingTrends}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="bookings" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>💰 Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueTrends}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cancellation Rate */}
        <Card>
          <CardHeader>
            <CardTitle>📉 Cancellation Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cancellationRate}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completed" fill="#22c55e" name="Completed" />
                <Bar dataKey="canceled" fill="#ef4444" name="Canceled" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
