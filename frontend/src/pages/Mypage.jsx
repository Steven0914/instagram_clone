import Footer from "../components/Footer";

import SettingSVG from "../assets/setting.svg";
import ProfileMoreSVG from "../assets/profile-more.svg";
import ProfileButton from "../components/ProfileButtom";

const data = {
  id: "clone-star",
  name: "클론스타",
  comment: `🏫 충북대학교 소프트웨어학부
  `,
  followers: 2,
  follings: 1,
  totalContent: 1,
};

function Mypage() {
  const type = 1; // 1 - me, 2 - other ==> 토큰 검사

  return (
    <div className="h-[2000px] pt-[30px] px-[20px] max-w-[1064px] mx-auto">
      <header className="flex mb-[40px]">
        <div className="w-[300px] flex justify-center items-center pr-[30px]">
          <div className="max-w-[150px] min-w-[70px] w-full">
            <div className=" w-full relative pb-[100%]">
              <div className="absolute w-full h-full rounded-full overflow-hidden">
                <img
                  src="https://dummyimage.com/600x400/000/fff"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="min-w-[400px] w-[calc(100%-300px)]">
          <div className="flex items-center mb-[20px]">
            <div className="text-[20px]">{data.name}</div>
            {type === 1 && (
              <div className="flex ml-[12px]">
                <ProfileButton name="프로필 편집" />
                <img className="ml-[5px]" src={SettingSVG} alt={"setting"} />
              </div>
            )}
            {type === 2 && (
              <div className="flex ml-[12px]">
                <ProfileButton name="팔로잉" />
                <ProfileButton name="메시지 보내기" />
                <img src={ProfileMoreSVG} alt={"profile more"} />
              </div>
            )}
          </div>
          <div className="flex">
            <div className="flex mr-[40px]">
              <span className="text-[14px] font-[400]">게시물</span>
              <span>{data.totalContent}</span>
            </div>
            <div className="flex mr-[40px]">
              <span>팔로워</span>
              <span>{data.followers}</span>
            </div>
            <div className="flex mr-[40px]">
              <span>팔로잉</span>
              <span>{data.follings}</span>
            </div>
          </div>
        </section>
      </header>
      <Footer />
    </div>
  );
}

export default Mypage;
