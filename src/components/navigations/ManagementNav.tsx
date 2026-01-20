import { managementNavItems } from "@/components/Tables/fetch";

export default function ManagementNav() {
  return (
    <div className="mb-6 border-b border-stroke pb-4 dark:border-strokedark">
      <nav className="flex flex-wrap gap-2">
        {managementNavItems.map((item) => (
          <button
            key={item}
            className="
              rounded-md
              px-4
              py-2
              text-sm
              font-medium
              text-black
              transition
              hover:bg-gray-2
              dark:text-white
              dark:hover:bg-meta-4
            "
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}