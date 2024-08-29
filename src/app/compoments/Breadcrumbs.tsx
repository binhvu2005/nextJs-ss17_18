"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumbs() {
  const pathName = usePathname();
  const pathParts = pathName.split("/").filter((part) => part);

  return (
    <nav aria-label="breadcrumb">
      <Link href="/">home</Link>
      {pathParts.map((part, index) => {
        const href = "/" + pathParts.slice(0, index + 1).join("/");
        return (
          <span key={index}>
            {" / "}
            <Link href={href}>{part}</Link>
          </span>
        );
      })}
    </nav>
  );
}
