// import { useEffect } from "react";

import { Link } from "react-router-dom";

const item = [
  // { name: "신현욱", link: "https://github.com/Steven0914" },
  // { name: "조수빈", link: "https://github.com/github-jademon" },
  // { name: "프로젝트", link: "https://github.com/Steven0914/instagram_clone" },
  { name: "Meta", link: "#" },
  { name: "소개", link: "#" },
  { name: "블로그", link: "#" },
  { name: "채용정보", link: "#" },
  { name: "도움말", link: "#" },
  { name: "API", link: "#" },
  { name: "개인정보처리방침", link: "#" },
  { name: "약관", link: "#" },
  { name: "위치", link: "#" },
  { name: "Instagram Lite", link: "#" },
  { name: "Threads", link: "#" },
  { name: "연락처 업로드 & 비사용자", link: "#" },
  { name: "Meta Verified", link: "#" },
];

function Footer() {
  return (
    <footer className="h-[135px] px-16px">
      <div className="flex flex-col mb-[52px]">
        <div className="flex mt-[24px] text-[14px] justify-center flex-wrap ">
          {item.map((v, i) => (
            <Link key={i} to={v.link} className="mb-[12px] mx-[8px]">
              {v.name}
            </Link>
          ))}
        </div>
        <div className="flex my-[12px] justify-center h-[12px] text-[14px] flex-wrap">
          <div>한국어</div>
          {/* <div className="ml-[16px]">© 2024 clone-star from 신현욱, 조수빈</div> */}
          <div className="ml-[16px]">© 2024 Instagram from Meta</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
