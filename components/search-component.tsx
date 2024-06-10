"use client";

import { Input } from "@material-tailwind/react";
import { useState } from "react";

export default function SearchComponent({ searchInput, setSearchInput }) {
  return (
    <Input
      variant="outlined"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      label=""
      className="border-white"
      icon={<i className="fa-solid fa-magnifying-glass" />}
    />
  );
}
