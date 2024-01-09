import { useEffect, useState } from "react";
import Mypage from "./Mypage";
import Modal from "../components/Modal";

import XBtnSVG from "../assets/x-btn.svg";
import Icon from "../components/Icon";

function PostDetail() {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    if (!modal) {
      window.location.href = "/profile";
      // history.pushState({}, null, "/profile");
      // setModal(false);
    }
  }, [modal]);

  return (
    <>
      <Modal
        setModal={setModal}
        maxWidth={"1568px"}
        maxHeight={"850px"}
        marginX={"100px"}
      >
        <div
          className="fixed top-10 right-10 text-white w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
          onClick={() => setModal(false)}
        >
          <Icon
            icon={XBtnSVG}
            alt={"cancle"}
            width={"18px"}
            height={"18px"}
            marginRight={"6px"}
          />
        </div>
        <div
          id="postDetail"
          className=" h-full max-h-[850px] w-[calc(100vw-48px)]  max-w-[1562px] flex"
        >
          <div className="bg-white flex items-center max-w-[850px] min-w-[500px] w-[calc(100vh-48px)]">
            <div className="relative w-full overflow-hidden pb-[100%]">
              <img
                src={"https://dummyimage.com/600x400/000/fff"}
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </div>
          </div>
          <div className="min-w-[500px]">post</div>
        </div>
      </Modal>
      <Mypage />
    </>
  );
}

export default PostDetail;
