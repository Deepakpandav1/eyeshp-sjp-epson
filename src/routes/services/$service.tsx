import { useParams } from "@tanstack/react-router";
import React from "react";
import { useMemo } from "react";
import { servicesDetails } from "../../utils/appUtils/servicePageConst";
import ServicePageCard from "../../components/shared/ServicePageCard";
// import ChildServiceCard from "../../components/shared/ChildServiceCard";

export default function Service() {
  const { service } = useParams({ from: "/services/$service" });
  const currentService = useMemo(
    () => servicesDetails.filter((item) => item.id === service),
    []
  );

  return (
    <div className="">
      {currentService.map((node) => (
        <div>
          <ServicePageCard item={node} key={node.id} />
        </div>
      ))}
    </div>
  );
}
