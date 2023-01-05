import React from "react";
import AdminLayout from "../../../components/AdminLayout";
import CampaignItemAdmin from "../../../components/CampaignItemAdmin";
import axios from "../../../lib/axios";

const Campaigns = ({ campaigns }) => {
  return (
    <AdminLayout>
      <div className="space-y-6 flex flex-col">
        {campaigns.map((item, index) => (
          <CampaignItemAdmin key={index} data={item} />
        ))}
      </div>
    </AdminLayout>
  );
};

export async function getServerSideProps(context) {
  let campaigns = [];

  await axios.get("/campaigns").then((response) => {
    console.log(response.data.data);
    campaigns = response.data.data;
  });

  return {
    props: {
      campaigns,
    },
  };
}

export default Campaigns;
