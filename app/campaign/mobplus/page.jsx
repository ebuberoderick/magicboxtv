import React from "react";
import { postCampaign } from "../../../services/authService";
import { redirect } from "next/navigation";

const MobplusPage = async ({ searchParams: searchParamsPromise }) => {
  const { clickid, partner, telco, pubid } = await searchParamsPromise;

  console.log(`processing for ${clickid}`);

  const { data, status } = await postCampaign("/api/ums/provider/mobplus", {
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
