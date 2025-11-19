import { OrbitProgress } from "react-loading-indicators";

function Loading() {
  return (
    <div className="mt-64 flex h-screen items-start justify-center">
      <OrbitProgress
        variant="track-disc"
        color="#1a4d7a"
        size="large"
        text=""
        textColor=""
      />
    </div>
  );
}

export default Loading;
