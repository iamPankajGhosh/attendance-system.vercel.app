import { Sidebar, Table } from "../components";

export default function Students() {
  return (
    <div className="container flex">
      <Sidebar />
      <Table title="Student" />
    </div>
  );
}
