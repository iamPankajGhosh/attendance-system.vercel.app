import {
  BarChart,
  Wallet,
  Newspaper,
  BellRing,
  Paperclip,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5">
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              analytics
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="#"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/attendance"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Attendance</span>
            </Link>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              content
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/students"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Students</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/teachers"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Teachers</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/allusers"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">All Users</span>
            </Link>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              Customization
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="#"
            >
              <Wrench className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Setting</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
