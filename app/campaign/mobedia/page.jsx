"use client";
import React, { Suspense, useEffect } from "react";
import { postCampaign } from "../../../services/authService";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Mobedia = () => {
  const searchParams = useSearchParams();

  const { clickid, partner, telco, pubid } = Object.fromEntries(
    searchParams.entries()
  );

  const onPost = async () => {
    const { data, status } = await postCampaign("/api/ums/provider/mobedia", {
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

  return <div />;
};

const MobediaPage = () => (
  <Suspense>
    <Mobedia />
  </Suspense>
);

export default MobediaPage;
