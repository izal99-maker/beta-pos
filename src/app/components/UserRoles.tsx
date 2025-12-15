import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import {
  Shield,
  Users,
  Search,
  Plus,
  Edit,
  Trash2,
  Crown,
  User,
  UserCog,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function UserRoles() {
  const roles = [
    {
      id: "ROLE001",
      name: "Administrator",
      description: "Full system access with all permissions",
      users: 3,
      icon: Crown,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: "ROLE002",
      name: "Manager",
      description: "Can manage inventory, reports, and staff",
      users: 8,
      icon: UserCog,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "ROLE003",
      name: "Cashier",
      description: "Process sales and handle transactions",
      users: 15,
      icon: User,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "ROLE004",
      name: "Inventory Staff",
      description: "Manage stock and inventory updates",
      users: 6,
      icon: User,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const users = [
    {
      id: "USR001",
      name: "Dr. Lisa Anderson",
      email: "lisa@beautyclinic.com",
      role: "Administrator",
      status: "Active",
      lastLogin: "2025-12-15 10:30",
    },
    {
      id: "USR002",
      name: "Sarah Manager",
      email: "sarah@beautyclinic.com",
      role: "Manager",
      status: "Active",
      lastLogin: "2025-12-15 09:15",
    },
    {
      id: "USR003",
      name: "Jessica Therapist",
      email: "jessica@beautyclinic.com",
      role: "Cashier",
      status: "Active",
      lastLogin: "2025-12-15 08:00",
    },
    {
      id: "USR004",
      name: "Emily Stock",
      email: "emily@beautyclinic.com",
      role: "Inventory Staff",
      status: "Active",
      lastLogin: "2025-12-14 16:30",
    },
    {
      id: "USR005",
      name: "Amanda Receptionist",
      email: "amanda@beautyclinic.com",
      role: "Cashier",
      status: "Inactive",
      lastLogin: "2025-12-10 14:20",
    },
  ];

  const permissions = {
    Administrator: [
      {
        module: "Dashboard",
        view: true,
        create: true,
        edit: true,
        delete: true,
      },
      {
        module: "Master Data",
        view: true,
        create: true,
        edit: true,
        delete: true,
      },
      {
        module: "Reports",
        view: true,
        create: true,
        edit: true,
        delete: true,
      },
      {
        module: "Payments",
        view: true,
        create: true,
        edit: true,
        delete: true,
      },
      {
        module: "User Roles",
        view: true,
        create: true,
        edit: true,
        delete: true,
      },
    ],
    Manager: [
      {
        module: "Dashboard",
        view: true,
        create: false,
        edit: false,
        delete: false,
      },
      {
        module: "Master Data",
        view: true,
        create: true,
        edit: true,
        delete: false,
      },
      {
        module: "Reports",
        view: true,
        create: true,
        edit: true,
        delete: false,
      },
      {
        module: "Payments",
        view: true,
        create: false,
        edit: true,
        delete: false,
      },
      {
        module: "User Roles",
        view: true,
        create: false,
        edit: false,
        delete: false,
      },
    ],
    Cashier: [
      {
        module: "Dashboard",
        view: true,
        create: false,
        edit: false,
        delete: false,
      },
      {
        module: "Master Data",
        view: true,
        create: false,
        edit: false,
        delete: false,
      },
      {
        module: "Reports",
        view: true,
        create: false,
        edit: false,
        delete: false,
      },
      {
        module: "Payments",
        view: true,
        create: true,
        edit: false,
        delete: false,
      },
      {
        module: "User Roles",
        view: false,
        create: false,
        edit: false,
        delete: false,
      },
    ],
  };

  const getRoleBadge = (role: string) => {
    const colors: { [key: string]: string } = {
      Administrator: "bg-purple-100 text-purple-600",
      Manager: "bg-blue-100 text-blue-600",
      Cashier: "bg-green-100 text-green-600",
      "Inventory Staff": "bg-orange-100 text-orange-600",
    };
    return colors[role] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1>User Roles & Permissions</h1>
          <p className="text-gray-600">
            Kelola akses pengguna dan peran.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Role
        </Button>
      </div>

      {/* Roles Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {roles.map((role) => (
          <Card
            key={role.id}
            className="p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`${role.bgColor} ${role.color} p-3 rounded-lg`}
              >
                <role.icon className="w-6 h-6" />
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </Button>
              </div>
            </div>
            <h3>{role.name}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {role.description}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {role.users} users
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Users Table */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search users..."
              className="pl-10"
            />
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add User
          </Button>
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge className={getRoleBadge(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        user.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-600"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
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

      {/* Permissions Matrix */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3>Role Permissions</h3>
            <p className="text-sm text-gray-600 mt-1">
              Configure access rights for each role
            </p>
          </div>
          <Button variant="outline">Save Changes</Button>
        </div>

        <div className="space-y-6">
          {Object.entries(permissions).map(([role, perms]) => (
            <div key={role} className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-gray-400" />
                <h3>{role}</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">
                        Module
                      </th>
                      <th className="text-center py-2 px-4">
                        View
                      </th>
                      <th className="text-center py-2 px-4">
                        Create
                      </th>
                      <th className="text-center py-2 px-4">
                        Edit
                      </th>
                      <th className="text-center py-2 px-4">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {perms.map((perm, index) => (
                      <tr
                        key={index}
                        className="border-b last:border-0"
                      >
                        <td className="py-3 px-4">
                          {perm.module}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Switch checked={perm.view} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Switch checked={perm.create} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Switch checked={perm.edit} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Switch checked={perm.delete} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}