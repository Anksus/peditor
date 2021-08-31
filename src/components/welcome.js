import { signIn, signOut, useSession } from "next-auth/client";
import Navbar from "../components/navbar";

const Welcome = (props) => {
  console.log(props);
  if (props.props == undefined) {
    props = "";
  } else {
    props = "document" + "/" + props.props;
  }
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen">
      <Navbar />
      <div className=" mt-40 flex justify-center">
        <div className="flex-col">
          <h1 className="text-5xl font-bold ">
            Where teams write faster, together
          </h1>

          <h1 className="pl-24 mt-4 font-bold">
            Create, share, and get feedback with collaborative editor for rapid
            writing.
          </h1>

          <div className="flex justify-center items-center mt-20">
            <button
              className="text-2xl font-bold rounded-md  px-3 text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 hover:from-yellow-500 hover:to-pink-500 focus:outline-none"
              onClick={() =>
                signIn("google", {
                  callbackUrl: `https://peditor.anksus.me/${props}`,
                })
              }
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
