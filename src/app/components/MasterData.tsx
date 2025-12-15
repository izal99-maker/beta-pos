import { useState } from "react";
import { Card } from "./ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Package,
  Ticket,
  Users,
  Tag,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function MasterData() {
  const [activeTab, setActiveTab] = useState("items");

  const items = [
    {
      id: "ITM001",
      name: "Facial Deep Cleansing",
      category: "Facial Treatment",
      price: "Rp 90,000",
      stock: 150,
      status: "Active",
    },
    {
      id: "ITM002",
      name: "Whitening Treatment",
      category: "Facial Treatment",
      price: "Rp 140,000",
      stock: 85,
      status: "Active",
    },
    {
      id: "ITM003",
      name: "Acne Treatment",
      category: "Facial Treatment",
      price: "Rp 120,000",
      stock: 60,
      status: "Active",
    },
    {
      id: "ITM004",
      name: "Anti-Aging Facial",
      category: "Facial Treatment",
      price: "Rp 160,000",
      stock: 45,
      status: "Active",
    },
    {
      id: "ITM005",
      name: "Laser Hair Removal",
      category: "Body Treatment",
      price: "Rp 150,000",
      stock: 120,
      status: "Active",
    },
    {
      id: "ITM006",
      name: "Body Scrub & Massage",
      category: "Body Treatment",
      price: "Rp 95,000",
      stock: 200,
      status: "Active",
    },
    {
      id: "ITM007",
      name: "Vitamin C Serum",
      category: "Skincare Product",
      price: "Rp 450,000",
      stock: 80,
      status: "Active",
    },
    {
      id: "ITM008",
      name: "Sunscreen SPF 50",
      category: "Skincare Product",
      price: "Rp 350,000",
      stock: 150,
      status: "Active",
    },
  ];

  const vouchers = [
    {
      id: "VCH001",
      code: "BEAUTY10",
      discount: "10%",
      type: "Percentage",
      validUntil: "2025-12-31",
      usage: "45/100",
      status: "Active",
    },
    {
      id: "VCH002",
      code: "NEWCLIENT20",
      discount: "Rp 20,000",
      type: "Fixed",
      validUntil: "2025-06-30",
      usage: "120/500",
      status: "Active",
    },
    {
      id: "VCH003",
      code: "FACIAL15",
      discount: "15%",
      type: "Percentage",
      validUntil: "2025-08-31",
      usage: "78/200",
      status: "Active",
    },
    {
      id: "VCH004",
      code: "FIRSTVISIT",
      discount: "Rp 25,000",
      type: "Fixed",
      validUntil: "2025-12-31",
      usage: "234/1000",
      status: "Active",
    },
    {
      id: "VCH005",
      code: "PACKAGE30",
      discount: "30%",
      type: "Percentage",
      validUntil: "2025-07-15",
      usage: "12/50",
      status: "Inactive",
    },
  ];

  const members = [
    {
      id: "MEM001",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+1234567890",
      points: 450,
      joined: "2024-01-15",
      tier: "Gold",
    },
    {
      id: "MEM002",
      name: "Amanda Lee",
      email: "amanda.lee@example.com",
      phone: "+1234567891",
      points: 1200,
      joined: "2023-11-20",
      tier: "Platinum",
    },
    {
      id: "MEM003",
      name: "Jessica Chen",
      email: "jessica.c@example.com",
      phone: "+1234567892",
      points: 280,
      joined: "2024-03-10",
      tier: "Silver",
    },
    {
      id: "MEM004",
      name: "Maria Garcia",
      email: "maria.g@example.com",
      phone: "+1234567893",
      points: 850,
      joined: "2024-02-05",
      tier: "Gold",
    },
    {
      id: "MEM005",
      name: "Emily Davis",
      email: "emily.d@example.com",
      phone: "+1234567894",
      points: 120,
      joined: "2024-05-22",
      tier: "Bronze",
    },
  ];

  const categories = [
    {
      id: "CAT001",
      name: "Facial Treatment",
      items: 45,
      icon: "✨",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "CAT002",
      name: "Body Treatment",
      items: 32,
      icon: "💆",
      color: "bg-green-100 text-green-600",
    },
    {
      id: "CAT003",
      name: "Skincare Product",
      items: 78,
      icon: "🧴",
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: "CAT004",
      name: "Treatment Package",
      items: 24,
      icon: "📦",
      color: "bg-orange-100 text-orange-600",
    },
  ];

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
      <div className="flex items-center justify-between">
        <div>
          <h1>Master Data</h1>
          <p className="text-gray-600">
            Kelola item, voucher, anggota, dan kategori Anda.
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger
            value="items"
            className="flex items-center gap-2"
          >
            <Package className="w-4 h-4" />
            Items
          </TabsTrigger>
          <TabsTrigger
            value="vouchers"
            className="flex items-center gap-2"
          >
            <Ticket className="w-4 h-4" />
            Vouchers
          </TabsTrigger>
          <TabsTrigger
            value="members"
            className="flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            Members
          </TabsTrigger>
          <TabsTrigger
            value="categories"
            className="flex items-center gap-2"
          >
            <Tag className="w-4 h-4" />
            Categories
          </TabsTrigger>
        </TabsList>

        {/* Items Tab */}
        <TabsContent value="items" className="space-y-4">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search items..."
                  className="pl-10"
                />
              </div>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Item
              </Button>
            </div>

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>
                        <span
                          className={
                            item.stock < 50
                              ? "text-red-600"
                              : "text-green-600"
                          }
                        >
                          {item.stock}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-600"
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        {/* Vouchers Tab */}
        <TabsContent value="vouchers" className="space-y-4">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search vouchers..."
                  className="pl-10"
                />
              </div>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Voucher
              </Button>
            </div>

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Voucher ID</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Discount</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead>Usage</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vouchers.map((voucher) => (
                    <TableRow key={voucher.id}>
                      <TableCell>{voucher.id}</TableCell>
                      <TableCell>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                          {voucher.code}
                        </code>
                      </TableCell>
                      <TableCell>{voucher.discount}</TableCell>
                      <TableCell>{voucher.type}</TableCell>
                      <TableCell>
                        {voucher.validUntil}
                      </TableCell>
                      <TableCell>{voucher.usage}</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={
                            voucher.status === "Active"
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-600"
                          }
                        >
                          {voucher.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        {/* Members Tab */}
        <TabsContent value="members" className="space-y-4">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search members..."
                  className="pl-10"
                />
              </div>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Member
              </Button>
            </div>

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Points</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead className="text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {members.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>{member.id}</TableCell>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>{member.phone}</TableCell>
                      <TableCell>{member.points} pts</TableCell>
                      <TableCell>
                        <Badge
                          className={getTierBadgeColor(
                            member.tier,
                          )}
                        >
                          {member.tier}
                        </Badge>
                      </TableCell>
                      <TableCell>{member.joined}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        {/* Categories Tab */}
        <TabsContent value="categories" className="space-y-4">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search categories..."
                  className="pl-10"
                />
              </div>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Category
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className="p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-2xl`}
                    >
                      {category.icon}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                  <h3>{category.name}</h3>
                  <p className="text-sm text-gray-600">
                    {category.items} items
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {category.id}
                  </p>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}