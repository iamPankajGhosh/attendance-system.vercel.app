import { Link } from "react-router-dom";

function UserData({ name, image, email, title, department, isActive, roll }) {
  return (
    <tr key={name}>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={image}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-700">{email}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4">
        <div className="text-sm text-gray-900 ">{title}</div>
        <div className="text-sm text-gray-700">{department}</div>
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <button className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          {isActive ? "Active" : "Inactive"}
        </button>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
        {roll}
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
        <Link to="#" className="text-gray-700">
          Edit
        </Link>
      </td>
    </tr>
  );
}

export default UserData;
