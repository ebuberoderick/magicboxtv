"use client";
import React, { Suspense, useEffect } from "react";
import { postCampaign } from "../../../services/authService";
import { redirect, useSearchParams } from "next/navigation";

const Moblus = () => {
  // const { clickid, partner, telco, pubid } = await searchParamsPromise;
  const searchParams = useSearchParams();

  const { clickid, partner, telco, pubid } = Object.fromEntries(
    searchParams.entries()
  );

  console.log(`processing for ${clickid}`);

  const onPost = async () => {
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
  };

  useEffect(() => {
    onPost();
  }, []);

  return (
    <div className="p-4">
      {/* <h3 className="text-white text-center text-2xl">{data?.message}</h3> */}
    </div>
  );
};

const MobplusPage = () => {
  return (
    <Suspense>
      <Moblus />
    </Suspense>
  );
};

export default MobplusPage;
