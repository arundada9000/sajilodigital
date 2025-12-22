import SvgLoader from "../components/ui/SvgLoader/SvgLoader";

export default function Loading() {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-black z-100 fixed top-0">
      <SvgLoader size={160} />
    </div>
  );
}
