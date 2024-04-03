import { Sidebar, Table } from "../components";

export default function Attendance() {
  return (
    <div className="container flex">
      <Sidebar />
      <Table title="Attendance" removeBtn />
    </div>
  );
}
