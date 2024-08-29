
import Breadcrumbs from "@/app/compoments/Breadcrumbs";
import React from "react";
type PropTypes = {
  params: {
    id: string;
  };
};
export default function id({ params }: PropTypes) {
    return (
        <>
            <Breadcrumbs/>
            <div>post id: {params.id}</div>
        </>
    )
}
