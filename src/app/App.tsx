import { useState } from "react";
import { 
  LayoutDashboard, 
  Database, 
  FileText, 
  CreditCard, 
  Users, 
  Menu,
  X,
  Store
} from "lucide-react";
import { Dashboard } from "./components/Dashboard";
import { MasterData } from "./components/MasterData";
import { Reports } from "./components/Reports";
import { Payments } from "./components/Payments";
import { UserRoles } from "./components/UserRoles";
import { Button } from "./components/ui/button";

export default function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "masterdata", label: "Master Data", icon: Database },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "userroles", label: "User Roles", icon: Users },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <Dashboard />;
      case "masterdata":
        return <MasterData />;
      case "reports":
        return <Reports />;
      case "payments":
        return <Payments />;
      case "userroles":
        return <UserRoles />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-sm">Beauty Clinic POS</h1>
                <p className="text-xs text-gray-600">Point of Sale System</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <div className="text-right">
                <p className="text-sm">Store #001</p>
                <p className="text-xs text-gray-600">Main Branch</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-[73px] left-0 h-[calc(100vh-73px)] bg-white border-r border-gray-200 
            transition-transform duration-300 ease-in-out z-30
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            w-64
          `}
        >
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id);
                  setSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${
                    activeMenu === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-900">Need Help?</p>
              <p className="text-xs text-blue-700 mt-1">
                Check our documentation or contact support
              </p>
              <Button variant="outline" size="sm" className="w-full mt-3 border-blue-200 text-blue-600 hover:bg-blue-100">
                Get Support
              </Button>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}