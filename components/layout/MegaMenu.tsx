import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { categorizedServices } from "@/data/cgt-services";
import { ServiceIcon } from "@/components/icons/ServiceIcon";

export function MegaMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-max max-w-5xl mt-2 rounded-2xl border border-zinc-200 bg-white shadow-2xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categorizedServices.map((category) => (
              <div key={category.title} className="flex flex-col space-y-4">
                <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-3 rounded-lg hover:bg-zinc-50 p-2 transition-colors"
                      >
                        <div className="mt-0.5 flex-shrink-0 text-zinc-500 group-hover:text-blue-600 transition-colors">
                          <ServiceIcon name={item.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-800 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
