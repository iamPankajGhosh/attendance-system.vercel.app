import { Sidebar, Table } from "../components";

export default function AllUsers() {
  return (
    <div className="container flex">
      <Sidebar />
      <Table title="Users" removeBtn />
    </div>
  );
}
