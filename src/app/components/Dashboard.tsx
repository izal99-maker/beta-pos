import { Card } from "./ui/card";
import {
  ShoppingCart,
  Users,
  FileText,
  DollarSign,
  TrendingUp,
  Package,
} from "lucide-react";

export function Dashboard() {
  const stats = [
    {
      title: "Total Sales",
      value: "Rp 24,563,000",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Transactions Today",
      value: "156",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Members",
      value: "2,345",
      change: "+5.4%",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Treatment Packages",
      value: "48",
      change: "+3.2%",
      icon: Package,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const recentTransactions = [
    {
      id: "TXN001",
      customer: "Sarah Johnson",
      amount: "Rp 450,000",
      time: "10:30 AM",
      status: "Completed",
    },
    {
      id: "TXN002",
      customer: "Amanda Lee",
      amount: "Rp 320,000",
      time: "10:25 AM",
      status: "Completed",
    },
    {
      id: "TXN003",
      customer: "Jessica Chen",
      amount: "Rp 680,000",
      time: "10:15 AM",
      status: "Completed",
    },
    {
      id: "TXN004",
      customer: "Maria Garcia",
      amount: "Rp 195,000",
      time: "10:05 AM",
      status: "Completed",
    },
    {
      id: "TXN005",
      customer: "Emily Davis",
      amount: "Rp 550,000",
      time: "09:50 AM",
      status: "Completed",
    },
  ];

  const topItems = [
    {
      name: "Facial Deep Cleansing",
      sold: 45,
      revenue: "Rp 4,050,000",
    },
    {
      name: "Whitening Treatment",
      sold: 38,
      revenue: "Rp 5,320,000",
    },
    {
      name: "Acne Treatment",
      sold: 32,
      revenue: "Rp 3,840,000",
    },
    {
      name: "Anti-Aging Facial",
      sold: 28,
      revenue: "Rp 4,480,000",
    },
    {
      name: "Laser Hair Removal",
      sold: 24,
      revenue: "Rp 3,600,000",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1>Dashboard</h1>
        <p className="text-gray-600">
          Pantau Ringkasan Bisnis Anda.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {stat.title}
                </p>
                <div className="flex items-baseline gap-2 mt-2">
                  <h2>{stat.value}</h2>
                  <span
                    className={`text-sm ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
              <div
                className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3>Recent Transactions</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p>{transaction.customer}</p>
                  <p className="text-sm text-gray-600">
                    {transaction.id} • {transaction.time}
                  </p>
                </div>
                <div className="text-right">
                  <p>{transaction.amount}</p>
                  <span className="text-xs text-green-600">
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Selling Items */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3>Top Selling Items</h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {topItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.sold} units sold
                    </p>
                  </div>
                </div>
                <p className="text-green-600">{item.revenue}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
            <ShoppingCart className="w-6 h-6 text-blue-600 mb-2" />
            <p>New Sale</p>
            <p className="text-sm text-gray-600">
              Process transaction
            </p>
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Package className="w-6 h-6 text-green-600 mb-2" />
            <p>Add Item</p>
            <p className="text-sm text-gray-600">
              Create new product
            </p>
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Users className="w-6 h-6 text-purple-600 mb-2" />
            <p>Add Member</p>
            <p className="text-sm text-gray-600">
              Register customer
            </p>
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
            <FileText className="w-6 h-6 text-orange-600 mb-2" />
            <p>View Reports</p>
            <p className="text-sm text-gray-600">
              Sales analytics
            </p>
          </button>
        </div>
      </Card>
    </div>
  );
}