"use client";
import React, { Suspense, useEffect } from "react";
import { postCampaign } from "../../../services/authService";
import { redirect, useSearchParams } from "next/navigation";

const AngelMedia = () => {
  const searchParams = useSearchParams();

  const { clickid, partner, telco, pubid } = Object.fromEntries(
    searchParams.entries()
  );

  const onPost = async () => {
    const { data, status } = await postCampaign(
      "/api/ums/provider/angel-media",
      {
        clickid,
        partner,
        telco,
        pubid,
      }
    );

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

const AngelMediaPage = () => {
  return (
    <Suspense>
      <AngelMedia />
    </Suspense>
  );
};

export default AngelMediaPage;
