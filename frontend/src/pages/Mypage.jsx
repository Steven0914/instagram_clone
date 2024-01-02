import Footer from "../components/Footer";

import SettingSVG from "../assets/seemore.svg";

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
    <div className="h-[2000px]">
      <div>
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
          <img
            src="https://dummyimage.com/600x400/000/fff"
            className="w-full h-full object-cover"
          />
        </div>
        <section>
          <div>
            <div>{data.name}</div>
            {type === 1 && (
              <>
                <button>프로필 편집</button>
                <img src={SettingSVG} alt={"setting"} />
              </>
            )}
            {type === 2 && (
              <>
                <button>{"팔로잉"}</button>
                <button>메시지 보내기</button>
                <img src={SettingSVG} alt={"setting"} />
              </>
            )}

            <img src={SettingSVG} alt={"setting"} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Mypage;
