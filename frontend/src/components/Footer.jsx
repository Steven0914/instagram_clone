// import { useEffect } from "react";

import { Link } from "react-router-dom";

const item = {
  0: [
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
  ],
  1: [
    // { name: "신현욱", link: "https://github.com/Steven0914" },
    // { name: "조수빈", link: "https://github.com/github-jademon" },
    // { name: "프로젝트", link: "https://github.com/Steven0914/instagram_clone" },
    { name: "소개", link: "#" },
    { name: "도움말", link: "#" },
    { name: "홍보 센터", link: "#" },
    { name: "API", link: "#" },
    { name: "채용 정보", link: "#" },
    { name: "개인정보처리방침", link: "#" },
    { name: "약관", link: "#" },
    { name: "위치", link: "#" },
    { name: "언어", link: "#" },
    { name: "Meta Verified", link: "#" },
  ],
};

function Footer({ type }) {
  return (
    <footer className="h-[135px] px-16px font-[300]">
      <div className="flex flex-col mb-[52px]">
        <div
          className={
            "flex mt-[24px] text-[14px] flex-wrap " +
            (!type && "justify-center")
          }
        >
          {item[type].map((v, i) => (
            <div key={i}>
              <Link
                to={v.link}
                className={
                  type !== 0
                    ? "hover:border-b-gray-400 border-b border-b-white text-gray-500 text-[13px]"
                    : "mb-[12px] mx-[8px]"
                }
              >
                {v.name}
              </Link>
              {type !== 0 && (
                <span className="after:content-['·'] after:mx-[3px] last:after:content-none"></span>
              )}
            </div>
          ))}
        </div>
        <div
          className={
            "flex my-[12px] h-[12px] text-[14px] flex-wrap " +
            (type === 0 ? "justify-center" : "text-[13px] text-gray-500")
          }
        >
          {type === 0 && <div className="mr-[16px]">한국어</div>}
          {/* <div className="ml-[16px]">© 2024 clone-star from 신현욱, 조수빈</div> */}
          <div>© 2024 Instagram from Meta</div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  type: 0,
};

export default Footer;
