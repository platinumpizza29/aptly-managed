import Navbar from "../components/navbar";
import { RiMenu2Fill } from "react-icons/ri";
import Stats from "../components/stats";
import { BsCalendar2Day } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { RxDoubleArrowRight } from "react-icons/rx";

export default function HomePage() {
  return (
    <main className="min-w-screen min-h-screen overflow-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="flex flex-row justify-between">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-outline drawer-button lg:hidden"
            >
              <RiMenu2Fill className="text-xl" />
            </label>
            <div className="flex-1">
              <Navbar />
            </div>
          </div>
          <section className="p-4">
            <Stats />
          </section>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>
                <LuLayoutDashboard className="text-xl" />
                Dashboard
                <RxDoubleArrowRight className="text-xl" />
              </a>
            </li>
            <li>
              <a>
                <BsCalendar2Day className="text-xl" />
                Calender
                <RxDoubleArrowRight className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
