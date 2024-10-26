export default function FormField({
  id,
  label,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-lg font-medium dark:text-gray-200 text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="mt-1 p-2 w-full border dark:border-gray-600 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-700 outline-none"
      />
    </div>
  );
}
