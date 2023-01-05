import React from "react";
import Link from "next/link";
import { BiTimer, BiGroup } from "react-icons/bi";

const CampaignItemAdmin = ({ data }) => {
  return (
    <Link href={`/admin/campaigns/${data.id}`}>
      <div className=" rounded shadow border flex">
        <div className="aspect-square h-auto w-40 shrink-0 bg-red-500 relative">
          <div className="py-1 px-2 text-xs bg-black/50 text-white absolute bottom-2 left-2">
            {data.category}
          </div>
        </div>
        <div className="p-4 grow">
          <div className="space-x-4 flex items-center">
            <div className="flex items-center space-x-1">
              <BiTimer className="text-gray-500 h-5 w-5" />
              <span className="text-xs text-gray-500 font-medium">
                26 Hari Lagi
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <BiGroup className="text-gray-500 h-4 w-4" />
              <span className="text-xs text-gray-500 font-medium">
                500 Pewakaf
              </span>
            </div>
          </div>
          <h1 className="text-amber-600 font-semibold line-clamp-2 my-2">
            {data.name}
          </h1>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400">Terkumpul 50%</p>
              <p className="text-sm font-semibold text-emerald-500">
                Rp 45.000.000
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Target</p>
              <p className="text-sm font-semibold text-amber-500">
                Rp 500.000.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignItemAdmin;
