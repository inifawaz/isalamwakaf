import { Tab } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import AdminLayout from "../../../components/AdminLayout";
import axios from "../../../lib/axios";

const tabs = ["Overview", "Detail", "Informasi"];

const CampaignDetails = ({ campaign }) => {
  console.log(campaign);
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-gray-500">{campaign.name}</h1>
      <Tab.Group>
        <Tab.List className={"border-b mb-4 my-4 border-gray-300"}>
          {tabs.map((item, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                clsx({
                  "  whitespace-nowrap outline-none text-sm  py-2 px-2 font-medium  border-b-2": true,
                  "border-amber-500  text-amber-500": selected == true,
                  "border-white text-gray-400": selected == false,
                })
              }
            >
              {item}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid lg:grid-cols-3 ">
              <div className="shadow border p-4 ">
                <h3 className="text-sm text-gray-400">Terkumpul</h3>
                <h4 className="font-semibold text-lg text-gray-500">
                  Rp 450.000.000,00
                </h4>
              </div>
              <div className="shadow border p-4 ">
                <h3 className="text-sm text-gray-400">Maintenance Fee</h3>
                <h4 className="font-semibold text-lg text-gray-500">
                  Rp 500.0000,00
                </h4>
              </div>
              <div className="shadow border p-4 ">
                <h3 className="text-sm text-gray-400">Pembayaran</h3>
                <h4 className="font-semibold text-lg text-gray-500">45x</h4>
              </div>
            </div>
            <div className="my-4">
              <h2 className="text-lg font-medium text-gray-500 mb-2">
                Pembayaran Terbaru
              </h2>

              <div>
                <table className="table-auto w-full">
                  <thead className="bg-sky-900 text-white text-sm font-medium">
                    <tr>
                      <th className="text-left py-2 px-3">Tanggal</th>
                      <th className="text-left py-2 px-3">Nama</th>
                      <th className="text-left py-2 px-3">Nominal</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>Detail</Tab.Panel>
          <Tab.Panel>Informasi</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </AdminLayout>
  );
};

export async function getServerSideProps(context) {
  let campaign;
  const { id } = context.query;

  await axios.get(`/campaigns/${id}`).then((response) => {
    campaign = response.data.data;
    console.log(campaign);
  });

  return {
    props: {
      campaign,
    },
  };
}

export default CampaignDetails;
