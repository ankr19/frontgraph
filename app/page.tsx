"use client"
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BarChart2, Package, ShoppingCart, Users,
  ArrowUpRight, ArrowDownRight, Settings,
  Menu, X
} from 'lucide-react';
import {
  LineChart, Line, PieChart, Pie, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell
} from 'recharts';
import { CardComponent2 } from '@/components/CardComponents2';
import { useMediaQuery } from '@/components/hooks/useMediaQuery';
// import { useMediaQuery } from '@/hooks/useMediaQuery'./; // We'll create this custom hook



export default function Dashboard() {
  const [mounted, isMobile] = useMediaQuery('(max-width: 768px)');
  const [selectedPeriod, setSelectedPeriod] = React.useState('month');
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [activeChart, setActiveChart] = React.useState('all');

  // Don't render anything until mounted
  if (!mounted) {
    return null;
  }

  // Stats data (moved inside component but outside render)
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,563",
      increase: "+14.2%",
      icon: BarChart2,
      trend: "up"
    },
    {
      title: "Active Users",
      value: "8,346",
      increase: "+5.4%",
      icon: Users,
      trend: "up"
    },
    {
      title: "Total Sales",
      value: "2,433",
      increase: "-2.1%",
      icon: ShoppingCart,
      trend: "down"
    },
    {
      title: "Products",
      value: "1,259",
      increase: "+8.7%",
      icon: Package,
      trend: "up"
    }
  ];

  // Chart data (moved inside component but outside render)
  const revenueData = [
    { month: 'Jan', revenue: 65000, users: 1200 },
    { month: 'Feb', revenue: 72000, users: 1350 },
    { month: 'Mar', revenue: 68000, users: 1400 },
    { month: 'Apr', revenue: 85000, users: 1600 },
    { month: 'May', revenue: 95000, users: 1800 },
    { month: 'Jun', revenue: 98000, users: 2000 },
  ];

  const salesDistribution = [
    { name: 'Electronics', value: 35 },
    { name: 'Clothing', value: 25 },
    { name: 'Food', value: 20 },
    { name: 'Books', value: 15 },
    { name: 'Other', value: 5 },
  ];

  const monthlyComparison = [
    { name: 'Jan', current: 4000, previous: 3500 },
    { name: 'Feb', current: 4500, previous: 4000 },
    { name: 'Mar', current: 5000, previous: 4200 },
    { name: 'Apr', current: 4700, previous: 4800 },
    { name: 'May', current: 5500, previous: 5000 },
    { name: 'Jun', current: 6000, previous: 5200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const MobileHeader = () => (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="flex justify-between items-center p-4">
        <button 
          type="button" 
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold">Dashboard</h1>
        <Settings className="h-6 w-6" />
      </div>
    </div>
  );

  const MobileSidebar = () => (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
        sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className={`absolute top-0 left-0 bottom-0 w-64 bg-white transform transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold">Menu</h2>
          <button 
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <select
            className="w-full p-2 rounded border mb-4"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <div className="space-y-2">
            {['all', 'revenue', 'sales'].map((chart) => (
              <button
                key={chart}
                type="button"
                className={`w-full p-2 rounded text-left ${
                  activeChart === chart ? 'bg-blue-50 text-blue-600' : ''
                }`}
                onClick={() => setActiveChart(chart)}
              >
                {chart.charAt(0).toUpperCase() + chart.slice(1)} Charts
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ChartContainer = ({ title, children, type }) => {
    if (activeChart !== 'all' && activeChart !== type) return null;

    return (
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`h-${isMobile ? '60' : '80'}`}>
            <ResponsiveContainer width="100%" height={isMobile ? 240 : 320}>
              {children}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isMobile && <MobileHeader />}
      {isMobile && <MobileSidebar />}

      <div className={`${isMobile ? 'pt-16' : 'p-6'}`}>
        {/* Desktop Header */}
        {!isMobile && (
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <div className="flex gap-2">
              <select
                className="px-4 py-2 rounded border bg-white"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
              <button 
                type="button"
                className="p-2 rounded bg-white border"
                aria-label="Settings"
              >
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-xl lg:text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center mt-1">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <span 
                    className={`text-sm ${
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {stat.increase}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <ChartContainer title="Revenue Trend" type="revenue">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </LineChart>
          </ChartContainer>

          <ChartContainer title="Sales Distribution" type="sales">
            <PieChart>
              <Pie
                data={salesDistribution}
                cx="50%"
                cy="50%"
                innerRadius={isMobile ? 40 : 60}
                outerRadius={isMobile ? 60 : 80}
                paddingAngle={5}
                dataKey="value"
              >
                {salesDistribution.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ChartContainer>

          <ChartContainer title="Monthly Comparison" type="comparison">
            <BarChart data={monthlyComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="current" fill="#8884d8" name="Current Year" />
              <Bar dataKey="previous" fill="#82ca9d" name="Previous Year" />
            </BarChart>
          </ChartContainer>
          <CardComponent2 />
        </div>

        <div className="w-[450px] p-4">
        </div>
      </div>
    </div>
  );
}