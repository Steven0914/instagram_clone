import Icon from "./Icon";
import Modal from "./Modal";

import XBtnSVG from "../assets/x-btn.svg";
import { link } from "../utils/utils";

const profileList = [
  {
    id: "testtesttesttesttesttesttesttesttest",
    name: "testtesttesttesttesttesttesttesttesttesttesttest",
    img: "https://dummyimage.com/600x400/000/fff",
    follow: false,
  },
  {
    id: "cbnu_itda",
    name: "충북대학교 소프트웨어학부 제 12대 ITDA 학생회",
    img: "https://dummyimage.com/600x400/000/fff",
    follow: false,
  },
  {
    id: "cbnu_itda",
    name: "충북대학교 소프트웨어학부 제 12대 ITDA 학생회",
    img: "https://dummyimage.com/600x400/000/fff",
    follow: true,
  },
  {
    id: "cbnu_itda",
    name: "충북대학교 소프트웨어학부 제 12대 ITDA 학생회",
    img: "https://dummyimage.com/600x400/000/fff",
    follow: false,
  },
  {
    id: "cbnu_itda",
    name: "충북대학교 소프트웨어학부 제 12대 ITDA 학생회",
    img: "https://dummyimage.com/600x400/000/fff",
    follow: true,
  },
  {
    id: "cbnu_itda",
    name: "충북대학교 소프트웨어학부 제 12대 ITDA 학생회",
    img: "https://dummyimage.com/600x400/000/fff",
    follow: true,
  },
  {
    id: "cbnu_itda",
    name: "충북대학교 소프트웨어학부 제 12대 ITDA 학생회",
    img: "https://dummyimage.com/600x400/000/fff",
    follow: true,
  },
  {
    id: "cbnu_itda",
    name: "충북대학교 소프트웨어학부 제 12대 ITDA 학생회",
    img: "https://dummyimage.com/600x400/000/fff",
    follow: false,
  },
  {
    id: "cbnu_itda",
    name: "충북대학교 소프트웨어학부 제 12대 ITDA 학생회",
    img: "https://dummyimage.com/600x400/000/fff",
    follow: true,
  },
  {
    id: "cbnu_itda",
    name: "충북대학교 소프트웨어학부 제 12대 ITDA 학생회",
    img: "https://dummyimage.com/600x400/000/fff",
    follow: true,
  },
];

function Following({ type, setModal }) {
  console.log(type);

  function cancle() {
    setModal(false);
  }

  return (
    <Modal setModal={setModal} borderRadius={"10px"}>
      <div className="overflow-hidden relative rounded-[10px]">
        <div className="flex justify-center items-center h-[56px] text-xl font-medium  border-b-slate-200 border-b">
          {type === 1 && "팔로워"}
          {type === 2 && "팔로잉"}
        </div>
        <div
          className="text-white w-[24px] h-[24px] flex justify-center items-center cursor-pointer absolute top-[16px] right-[16px]"
          onClick={() => cancle()}
        >
          <Icon
            icon={XBtnSVG}
            alt={"cancle"}
            width={"18px"}
            height={"18px"}
            color={
              "invert(100%) sepia(0%) saturate(7500%) hue-rotate(66deg) brightness(97%) contrast(107%)"
            }
          />
        </div>
        <div className="mx-[16px] my-[8px]">
          <input
            placeholder="검색"
            className="bg-[#efefef] text-[rgb(115,115,115)] outline-none px-[16px] py-[8px] w-full rounded-md"
          />
        </div>
        <div className="flex flex-col h-[300px] overflow-y-scroll">
          {profileList.map((v, i) => (
            <div
              key={i}
              className="flex justify-between items-center px-[16px] py-[8px]"
            >
              <div className="flex">
                <img
                  src={v.img}
                  alt={v.id}
                  className="w-[44px] h-[44px] rounded-full m-[10px] cursor-pointer"
                  onClick={() => link("/profile")}
                />
                <div className="flex flex-col justify-center">
                  <div className="font-medium cursor-pointer w-fit">
                    <span
                      className="align-bottom inline-block whitespace-nowrap overflow-hidden text-ellipsis "
                      style={{
                        maxWidth: type === 1 && !v.follow ? "250px" : "310px",
                      }}
                      onClick={() => link("/profile")}
                    >
                      {v.id}
                    </span>
                    {type === 1 && !v.follow && (
                      <span>
                        <span>{" · "}</span>
                        <span
                          className="text-[#0095f6] hover:text-black"
                          onClick={() => {}}
                        >
                          {"팔로우"}
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="text-[#737373] inline-block whitespace-nowrap overflow-hidden text-ellipsis w-[310px]">
                    {v.name}
                  </div>
                </div>
              </div>
              {type === 1 && (
                <button className="px-[16px] py-[6px] rounded-md bg-[#efefef] font-medium cursor-pointer">
                  삭제
                </button>
              )}
              {type === 2 && (
                <button className="px-[16px] py-[6px] rounded-md bg-[#efefef] font-medium cursor-pointer">
                  팔로잉
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default Following;
