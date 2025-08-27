"use client";
import React from "react";
import { Button } from "./ui/Button";

const BackButton = ({
  variant,
  className,
}: {
  variant?: "arrow" | "arrowdark";
  className?: string;
}) => {
  return (
    <Button
      variant={variant || "arrowdark"}
      className={className}
      onClick={() => window.history.back()}
    >
      Go Back
    </Button>
  );
};

export default BackButton;
