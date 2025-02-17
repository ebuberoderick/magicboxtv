import React from "react";
import { postCampaignMobplus } from "../../../services/authService";
import { redirect } from "next/navigation";

const MobplusPage = async ({ searchParams: searchParamsPromise }) => {
  const { clickid, partner, telco, pubid } = await searchParamsPromise;

  const { data, status } = await postCampaignMobplus({
    clickid,
    partner,
    telco,
    pubid,
  });

  if (status) {
    if (data?.action === "redirect") {
      redirect(data?.url);
    }
    if (data?.action === "homepage") {
      redirect("/");
    }
  }

  return (
    <div className="p-4">
      <h3 className="text-white text-center text-2xl">{data?.message}</h3>
    </div>
  );
};

export default MobplusPage;
