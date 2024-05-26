export default function InputBox({ label, placeholder }) {
  return (
    <div>
      <label htmlFor="name" className="text-base font-medium text-violet-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-fuchsia-1000 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder={placeholder}
          id="name"
        ></input>
      </div>
    </div>
  );
}
