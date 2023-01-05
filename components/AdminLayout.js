import Link from "next/link";
import React from "react";

const adminNavigations = [
  {
    name: "Program Wakaf",
    href: "/admin/campaigns",
  },
  {
    name: "Artikel",
    href: "/admin/articles",
  },
  {
    name: "Pembayaran",
    href: "/admin/payments",
  },
];

const AdminLayout = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      <nav className="bg-slate-900 col-span-1 rounded p-4 flex flex-col h-fit">
        {adminNavigations.map((item, index) => (
          <Link className="text-white text-sm" href={item.href}>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="col-span-3">{children}</div>
    </div>
  );
};

export default AdminLayout;
