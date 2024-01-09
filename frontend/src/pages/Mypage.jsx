import { Link } from "react-router-dom";
import { useState } from "react";

import Modal from "../components/Modal";
import Footer from "../components/Footer";
import ProfileButton from "../components/ProfileButtom";

import SettingSVG from "../assets/setting.svg";
import ProfileMoreSVG from "../assets/profile-more.svg";
import PostsTabSVG from "../assets/posts-tab.svg";
import Icon from "../components/Icon";
import ProfileMore from "../components/ProfileMore";
import { link } from "../utils/utils";
import EditProfileImg from "../components/EditProfileImg";
import Following from "../components/Following";

const data = {
  id: "clone-star",
  name: "클론스타",
  comment: `🏫 충북대학교 소프트웨어학부 신현욱, 조수빈`,
  followers: 2,
  follings: 1,
  totalContent: 1,
};

const posts = [
  {
    id: 1,
    img: "https://dummyimage.com/600x400/000/fff",
  },
  {
    id: 2,
    img: "https://dummyimage.com/600x400/000/fff",
  },
  {
    id: 3,
    img: "https://dummyimage.com/600x400/000/fff",
  },
  {
    id: 4,
    img: "https://dummyimage.com/600x400/000/fff",
  },
];

function Mypage() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(1); // 1 : editProfileImg, 2 : profileMore, 3 : followers, 4 : following

  const type = 1; // 1 - me, 2 - other ==> 토큰 검사

  return (
    <>
      {modal &&
        (modalType === 1 && type === 1 ? (
          <EditProfileImg setModal={setModal} />
        ) : modalType === 2 ? (
          <ProfileMore type={type} setModal={setModal} />
        ) : modalType === 3 ? (
          <Following type={1} setModal={setModal} />
        ) : modalType === 4 ? (
          <Following type={2} setModal={setModal} />
        ) : null)}
      <div className="pt-[30px] px-[20px] max-w-[1024px] mx-auto">
        <header className="flex mb-[40px]">
          <div className="w-[300px] flex justify-center items-center pr-[30px]">
            <div
              className="max-w-[150px] min-w-[70px] w-full cursor-pointer"
              onClick={() => {
                setModal(true);
                setModalType(1);
              }}
            >
              <div className="relative w-full pb-[100%] rounded-full overflow-hidden">
                <img
                  src={"https://dummyimage.com/600x400/000/fff"}
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
              </div>
            </div>
          </div>
          <section className="min-w-[400px] w-[calc(100%-300px)]">
            <div className="flex items-center mb-[20px]">
              <div className="text-[20px]">{data.name}</div>
              {type === 1 && (
                <div className="flex ml-[12px]">
                  <ProfileButton
                    name="프로필 편집"
                    func={() => link("/setting")}
                  />
                  <Icon
                    icon={SettingSVG}
                    alt={"setting"}
                    marginLeft={"8px"}
                    func={() => {
                      setModal(true);
                      setModalType(2);
                    }}
                  />
                </div>
              )}
              {type === 2 && (
                <div className="flex ml-[12px]">
                  <ProfileButton name="팔로잉" func={() => {}} />
                  <ProfileButton
                    name="메시지 보내기"
                    func={() => link("/massage")}
                  />
                  <Icon
                    icon={ProfileMoreSVG}
                    alt={"profile more"}
                    func={() => {
                      setModal(true);
                      setModalType(2);
                    }}
                  />
                </div>
              )}
            </div>
            <div className="flex mb-[20px]">
              <div className="flex mr-[40px] items-center text-[14px]">
                <span className="font-[400] mr-1">게시물</span>
                <span>{data.totalContent}</span>
              </div>
              <div
                className="flex mr-[40px] items-center text-[14px] cursor-pointer"
                onClick={() => {
                  setModal(true);
                  setModalType(3);
                }}
              >
                <span className="font-[400] mr-1">팔로워</span>
                <span>{data.followers}</span>
              </div>
              <div
                className="flex mr-[40px] items-center text-[14px] cursor-pointer"
                onClick={() => {
                  setModal(true);
                  setModalType(4);
                }}
              >
                <span className="font-[400] mr-1">팔로잉</span>
                <span>{data.follings}</span>
              </div>
            </div>
            <div>
              <div className="font-[700]">{data.name}</div>
              <div>{data.comment}</div>
            </div>
          </section>
        </header>
        <main>
          <div className="flex justify-center border-t h-[52px]">
            <div className="flex w-[57px] justify-between items-center border-t border-t-black">
              <img
                src={PostsTabSVG}
                alt={"posts"}
                className="w-[12px] h-[12px] mr-[6px]"
              />
              <span className="text-[14px]">게시물</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[4px]">
            {posts ? (
              posts.map((v, i) => (
                <Link
                  to={`/posts/${v.id}`}
                  key={i}
                  className="flex justify-center items-center"
                >
                  <div className="min-w-[70px] w-full">
                    <div className=" w-full relative pb-[100%]">
                      <div className="absolute w-full h-full overflow-hidden">
                        <img
                          src={v.img}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div>게시물 없음</div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Mypage;
