import { HiOutlineVideoCamera } from "react-icons/hi";

function VideoCall({ video }) {
  if (video) {
    return (
      <button className="text-gray-400 flex justify-center items-center flex-col py-2 px-4">
        <HiOutlineVideoCamera className="text-2xl" />
        <p className="mt-1">Videollamada</p>
      </button>
    );
  }

  return (
    <button>
      <HiOutlineVideoCamera />
    </button>
  );
}

export default VideoCall;
