import Modal from "./Modal";

function EditProfileImg({ type, setModal }) {
  console.log(type);

  function cancle() {
    setModal(false);
  }

  const profileList = [
    {
      korName: "사진 업로드",
      engName: "",
      style: "primary",
      onclick: () => cancle(),
    },
    {
      korName: "현재 사진 삭제",
      engName: "",
      style: "danger",
      onclick: () => cancle(),
    },
    {
      korName: "취소",
      engName: "",
      style: "",
      onclick: () => cancle(),
    },
  ];

  return (
    <Modal setModal={setModal} borderRadius={"10px"}>
      <div className="overflow-hidden">
        <div className="flex justify-center items-center h-[56px] text-xl font-medium">
          프로필 사진 바꾸기
        </div>
        {profileList.map((v, i) => (
          <div
            key={i}
            style={{
              fontWeight:
                v.style === "danger" || v.style === "primary" ? "500" : "400",
              color:
                v.style === "danger"
                  ? "red"
                  : v.style === "primary"
                  ? "#0095f6"
                  : "black",
            }}
            className="flex justify-center items-center h-[48px] border-t-slate-200 border-t cursor-pointer"
            onClick={() => v.onclick()}
          >
            {v.korName}
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default EditProfileImg;
