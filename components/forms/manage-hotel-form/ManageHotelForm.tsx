"use client";

import { HotelFormData } from "@/types";
import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";

export default function ManageHotelForm() {
  const formMethods = useForm<HotelFormData>();

  return (
    <FormProvider {...formMethods}>
      <form className="max-w-3xl mx-auto">
        <DetailsSection />
      </form>
    </FormProvider>
  );
}
