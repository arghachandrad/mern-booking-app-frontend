import ManageHotelForm from "@/components/forms/manage-hotel-form/ManageHotelForm";
import RedirectIfNotLoggedIn from "@/layouts/RedirectIfNotLoggedIn";

export default function AddHotelPage() {
  return (
    <RedirectIfNotLoggedIn>
      <ManageHotelForm />
    </RedirectIfNotLoggedIn>
  );
}
