import Modal from "./Modal";

function ProfileMore({ type, setModal }) {
  console.log(type);

  function cancle() {
    setModal(false);
  }

  const profileList = {
    1: [
      {
        korName: "앱 및 웹사이트",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
      {
        korName: "QR 코드",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
      {
        korName: "알림",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
      {
        korName: "설정 및 개인정보",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
      {
        korName: "Meta Verified",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
      {
        korName: "관리 감독",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
      {
        korName: "로그아웃",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
      {
        korName: "취소",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
    ],
    2: [
      {
        korName: "차단",
        engName: "",
        style: "danger",
        onclick: () => cancle(),
      },
      {
        korName: "제한",
        engName: "",
        style: "danger",
        onclick: () => cancle(),
      },
      {
        korName: "신고",
        engName: "",
        style: "danger",
        onclick: () => cancle(),
      },
      {
        korName: "공유 대상...",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
      {
        korName: "이 계정 정보",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
      {
        korName: "취소",
        engName: "",
        style: "",
        onclick: () => cancle(),
      },
    ],
  };

  return (
    <Modal setModal={setModal} borderRadius={"10px"}>
      <div className="overflow-hidden">
        {profileList[type].map((v, i) => (
          <div
            key={i}
            style={{
              fontWeight: v.style === "danger" ? "500" : "400",
              color: v.style === "danger" ? "red" : "black",
            }}
            className="flex justify-center items-center h-[48px] border-t-slate-200 border-t first:border-0 cursor-pointer"
            onClick={() => v.onclick()}
          >
            {v.korName}
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default ProfileMore;
