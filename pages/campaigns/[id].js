import React, { Fragment } from "react";
import axios from "../../lib/axios";
import CampaignItem from "../../components/CampaignItem";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

const tabs = ["Deskripsi", "Pewakaf", "Informasi"];

const CampaignDetails = ({ campaign }) => {
  return (
    <div className="grid lg:grid-cols-5 lg:gap-8">
      <div className="lg:col-span-3">
        <CampaignItem data={campaign} />
        <Tab.Group as={"div"} className="shadow border my-4">
          <Tab.List className={"bg-amber-50 shadow border-b"}>
            {tabs.map((item, index) => (
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={clsx({
                      "py-4 px-4 font-medium": true,
                      "text-amber-500 border-b-2 border-amber-500":
                        selected == true,
                      "text-gray-500": selected == false,
                    })}
                  >
                    {item}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className={"p-4 bg-white"}>
            <Tab.Panel>
              <article className="prose prose-slate">
                {campaign.content}
              </article>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="lg:col-span-2">s</div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let campaign = [];
  const { id } = context.query;
  await axios.get(`/campaigns/${id}`).then((response) => {
    console.log(response.data.data);
    campaign = response.data.data;
  });
  console.log(campaign);

  return {
    props: {
      campaign,
    },
  };
}

export default CampaignDetails;
