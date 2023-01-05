import React from "react";
import CampaignItem from "../../components/CampaignItem";
import axios from "../../lib/axios";

const Campaigns = ({ campaigns }) => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        {campaigns.map((item, index) => (
          <CampaignItem key={index} data={item} />
        ))}
      </div>
    </>
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
