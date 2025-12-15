import { Card } from "./ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  BarChart3,
  TrendingUp,
  Download,
  Calendar,
  DollarSign,
  ShoppingBag,
  Users,
  Package,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function Reports() {
  const salesReport = [
    {
      date: "2025-12-15",
      transactions: 145,
      revenue: "Rp 13,245,000",
      items: 342,
      avgTransaction: "Rp 91,340",
    },
    {
      date: "2025-12-14",
      transactions: 132,
      revenue: "Rp 11,890,000",
      items: 298,
      avgTransaction: "Rp 90,080",
    },
    {
      date: "2025-12-13",
      transactions: 158,
      revenue: "Rp 14,567,000",
      items: 387,
      avgTransaction: "Rp 92,190",
    },
    {
      date: "2025-12-12",
      transactions: 167,
      revenue: "Rp 15,845,000",
      items: 412,
      avgTransaction: "Rp 94,880",
    },
    {
      date: "2025-12-11",
      transactions: 143,
      revenue: "Rp 12,620,000",
      items: 335,
      avgTransaction: "Rp 88,250",
    },
  ];

  const inventoryReport = [
    {
      item: "Facial Deep Cleansing",
      category: "Facial Treatment",
      currentStock: 150,
      minStock: 50,
      status: "Good",
    },
    {
      item: "Whitening Treatment",
      category: "Facial Treatment",
      currentStock: 45,
      minStock: 50,
      status: "Low",
    },
    {
      item: "Laser Hair Removal",
      category: "Body Treatment",
      currentStock: 120,
      minStock: 40,
      status: "Good",
    },
    {
      item: "Vitamin C Serum",
      category: "Skincare Product",
      currentStock: 25,
      minStock: 30,
      status: "Low",
    },
    {
      item: "Anti-Aging Facial",
      category: "Facial Treatment",
      currentStock: 45,
      minStock: 30,
      status: "Good",
    },
  ];

  const memberReport = [
    {
      name: "Amanda Lee",
      tier: "Platinum",
      purchases: 45,
      spent: "Rp 6,340,000",
      points: 1200,
      lastVisit: "2025-12-14",
    },
    {
      name: "Maria Garcia",
      tier: "Gold",
      purchases: 32,
      spent: "Rp 4,560,000",
      points: 850,
      lastVisit: "2025-12-15",
    },
    {
      name: "Sarah Johnson",
      tier: "Gold",
      purchases: 28,
      spent: "Rp 3,845,000",
      points: 450,
      lastVisit: "2025-12-13",
    },
    {
      name: "Jessica Chen",
      tier: "Silver",
      purchases: 18,
      spent: "Rp 2,280,000",
      points: 280,
      lastVisit: "2025-12-12",
    },
    {
      name: "Emily Davis",
      tier: "Bronze",
      purchases: 12,
      spent: "Rp 1,420,000",
      points: 120,
      lastVisit: "2025-12-11",
    },
  ];

  const paymentReport = [
    {
      method: "Credit Card",
      transactions: 245,
      amount: "Rp 28,450,000",
      percentage: "45%",
    },
    {
      method: "Debit Card",
      transactions: 178,
      amount: "Rp 18,320,000",
      percentage: "32%",
    },
    {
      method: "Digital Wallet",
      transactions: 134,
      amount: "Rp 12,670,000",
      percentage: "18%",
    },
    {
      method: "Cash",
      transactions: 89,
      amount: "Rp 6,240,000",
      percentage: "5%",
    },
  ];

  const getStockStatus = (status: string) => {
    return status === "Good"
      ? "bg-green-100 text-green-600"
      : status === "Low"
        ? "bg-yellow-100 text-yellow-600"
        : "bg-red-100 text-red-600";
  };

  const getTierBadgeColor = (tier: string) => {
    const colors: { [key: string]: string } = {
      Platinum: "bg-gray-800 text-white",
      Gold: "bg-yellow-500 text-white",
      Silver: "bg-gray-400 text-white",
      Bronze: "bg-amber-700 text-white",
    };
    return colors[tier] || "bg-gray-500 text-white";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1>Reports & Analytics</h1>
          <p className="text-gray-600">
            Pantau kinerja dan wawasan bisnis Anda.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Date Range
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                This Month
              </p>
              <h2 className="mt-2">Rp 55,327,000</h2>
              <p className="text-sm text-green-600 mt-1">
                +12.5% vs last month
              </p>
            </div>
            <div className="bg-green-50 text-green-600 p-3 rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Total Transactions
              </p>
              <h2 className="mt-2">745</h2>
              <p className="text-sm text-blue-600 mt-1">
                +8.2% vs last month
              </p>
            </div>
            <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
              <ShoppingBag className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                New Members
              </p>
              <h2 className="mt-2">134</h2>
              <p className="text-sm text-purple-600 mt-1">
                +15.3% vs last month
              </p>
            </div>
            <div className="bg-purple-50 text-purple-600 p-3 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Avg. Transaction
              </p>
              <h2 className="mt-2">Rp 91,340</h2>
              <p className="text-sm text-orange-600 mt-1">
                +3.7% vs last month
              </p>
            </div>
            <div className="bg-orange-50 text-orange-600 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="sales">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger
            value="sales"
            className="flex items-center gap-2"
          >
            <BarChart3 className="w-4 h-4" />
            Sales
          </TabsTrigger>
          <TabsTrigger
            value="inventory"
            className="flex items-center gap-2"
          >
            <Package className="w-4 h-4" />
            Inventory
          </TabsTrigger>
          <TabsTrigger
            value="members"
            className="flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            Members
          </TabsTrigger>
          <TabsTrigger
            value="payments"
            className="flex items-center gap-2"
          >
            <DollarSign className="w-4 h-4" />
            Payments
          </TabsTrigger>
        </TabsList>

        {/* Sales Report */}
        <TabsContent value="sales" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Daily Sales Report</h3>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Transactions</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Items Sold</TableHead>
                    <TableHead>Avg. Transaction</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesReport.map((report, index) => (
                    <TableRow key={index}>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>
                        {report.transactions}
                      </TableCell>
                      <TableCell className="text-green-600">
                        {report.revenue}
                      </TableCell>
                      <TableCell>{report.items}</TableCell>
                      <TableCell>
                        {report.avgTransaction}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        {/* Inventory Report */}
        <TabsContent value="inventory" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Inventory Status</h3>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Current Stock</TableHead>
                    <TableHead>Min. Stock</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryReport.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.item}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.currentStock}</TableCell>
                      <TableCell>{item.minStock}</TableCell>
                      <TableCell>
                        <Badge
                          className={getStockStatus(
                            item.status,
                          )}
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        {/* Member Report */}
        <TabsContent value="members" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Top Members</h3>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Purchases</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Points</TableHead>
                    <TableHead>Last Visit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {memberReport.map((member, index) => (
                    <TableRow key={index}>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>
                        <Badge
                          className={getTierBadgeColor(
                            member.tier,
                          )}
                        >
                          {member.tier}
                        </Badge>
                      </TableCell>
                      <TableCell>{member.purchases}</TableCell>
                      <TableCell className="text-green-600">
                        {member.spent}
                      </TableCell>
                      <TableCell>{member.points} pts</TableCell>
                      <TableCell>{member.lastVisit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        {/* Payment Report */}
        <TabsContent value="payments" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Payment Methods</h3>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Transactions</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentReport.map((payment, index) => (
                    <TableRow key={index}>
                      <TableCell>{payment.method}</TableCell>
                      <TableCell>
                        {payment.transactions}
                      </TableCell>
                      <TableCell className="text-green-600">
                        {payment.amount}
                      </TableCell>
                      <TableCell>
                        {payment.percentage}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}