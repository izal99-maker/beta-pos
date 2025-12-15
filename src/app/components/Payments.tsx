import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import {
  CreditCard,
  Smartphone,
  Banknote,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
  Download,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function Payments() {
  const [activeTab, setActiveTab] = useState("transactions");

  const transactions = [
    {
      id: "TXN001234",
      date: "2025-12-15 10:30 AM",
      customer: "Sarah Johnson",
      amount: "Rp 450,000",
      method: "Credit Card",
      status: "Completed",
      reference: "REF-CC-001234",
    },
    {
      id: "TXN001235",
      date: "2025-12-15 10:25 AM",
      customer: "Amanda Lee",
      amount: "Rp 320,000",
      method: "Digital Wallet",
      status: "Completed",
      reference: "REF-DW-001235",
    },
    {
      id: "TXN001236",
      date: "2025-12-15 10:15 AM",
      customer: "Jessica Chen",
      amount: "Rp 680,000",
      method: "Credit Card",
      status: "Completed",
      reference: "REF-CC-001236",
    },
    {
      id: "TXN001237",
      date: "2025-12-15 10:05 AM",
      customer: "Maria Garcia",
      amount: "Rp 195,000",
      method: "Debit Card",
      status: "Completed",
      reference: "REF-DC-001237",
    },
    {
      id: "TXN001238",
      date: "2025-12-15 09:50 AM",
      customer: "Emily Davis",
      amount: "Rp 550,000",
      method: "Credit Card",
      status: "Completed",
      reference: "REF-CC-001238",
    },
    {
      id: "TXN001239",
      date: "2025-12-15 09:45 AM",
      customer: "Rachel Wong",
      amount: "Rp 285,000",
      method: "Digital Wallet",
      status: "Failed",
      reference: "REF-DW-001239",
    },
  ];

  const pendingPayments = [
    {
      id: "PND001",
      customer: "Diana Martinez",
      amount: "Rp 920,000",
      dueDate: "2025-12-16",
      daysOverdue: 0,
      status: "Pending",
    },
    {
      id: "PND002",
      customer: "Sophia Anderson",
      amount: "Rp 445,000",
      dueDate: "2025-12-14",
      daysOverdue: 1,
      status: "Overdue",
    },
    {
      id: "PND003",
      customer: "Olivia Thompson",
      amount: "Rp 589,000",
      dueDate: "2025-12-17",
      daysOverdue: 0,
      status: "Pending",
    },
  ];

  const paymentMethods = [
    {
      name: "Credit Card",
      icon: CreditCard,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      transactions: 245,
      amount: "Rp 28,450,000",
      percentage: 45,
    },
    {
      name: "Debit Card",
      icon: CreditCard,
      color: "text-green-600",
      bgColor: "bg-green-50",
      transactions: 178,
      amount: "Rp 18,320,000",
      percentage: 32,
    },
    {
      name: "Digital Wallet",
      icon: Smartphone,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      transactions: 134,
      amount: "Rp 12,670,000",
      percentage: 18,
    },
    {
      name: "Cash",
      icon: Banknote,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      transactions: 89,
      amount: "Rp 6,240,000",
      percentage: 5,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <Badge className="bg-green-100 text-green-600">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      case "Failed":
        return (
          <Badge className="bg-red-100 text-red-600">
            <XCircle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      case "Pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-600">
            <Clock className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      case "Overdue":
        return (
          <Badge className="bg-red-100 text-red-600">
            <XCircle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1>Payments</h1>
          <p className="text-gray-600">
            Kelola transaksi dan metode pembayaran.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {paymentMethods.map((method, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div
                className={`${method.bgColor} ${method.color} p-3 rounded-lg`}
              >
                <method.icon className="w-6 h-6" />
              </div>
              <span className="text-sm text-gray-600">
                {method.percentage}%
              </span>
            </div>
            <h3>{method.name}</h3>
            <p className="text-gray-600 text-sm mt-1">
              {method.transactions} transactions
            </p>
            <p className="text-green-600 mt-2">
              {method.amount}
            </p>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="transactions">
            All Transactions
          </TabsTrigger>
          <TabsTrigger value="pending">
            Pending Payments
          </TabsTrigger>
          <TabsTrigger value="methods">
            Payment Methods
          </TabsTrigger>
        </TabsList>

        {/* All Transactions */}
        <TabsContent value="transactions" className="space-y-4">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search transactions..."
                  className="pl-10"
                />
              </div>
            </div>

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        {transaction.customer}
                      </TableCell>
                      <TableCell>
                        {transaction.amount}
                      </TableCell>
                      <TableCell>
                        {transaction.method}
                      </TableCell>
                      <TableCell>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {transaction.reference}
                        </code>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(transaction.status)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        {/* Pending Payments */}
        <TabsContent value="pending" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Pending Payments</h3>
              <Badge className="bg-yellow-100 text-yellow-600">
                {pendingPayments.length} pending
              </Badge>
            </div>

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Days Overdue</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.id}</TableCell>
                      <TableCell>{payment.customer}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>{payment.dueDate}</TableCell>
                      <TableCell>
                        <span
                          className={
                            payment.daysOverdue > 0
                              ? "text-red-600"
                              : "text-gray-600"
                          }
                        >
                          {payment.daysOverdue > 0
                            ? `${payment.daysOverdue} days`
                            : "-"}
                        </span>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(payment.status)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm">
                          Process Payment
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        {/* Payment Methods Management */}
        <TabsContent value="methods" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Available Payment Methods</h3>
              <Button>Add Payment Method</Button>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`${method.bgColor} ${method.color} p-4 rounded-lg`}
                      >
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3>{method.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {method.transactions} transactions •{" "}
                          {method.amount} total
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-gray-600">
                          Market Share
                        </p>
                        <p>{method.percentage}%</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${method.color.replace("text", "bg")}`}
                        style={{
                          width: `${method.percentage}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}