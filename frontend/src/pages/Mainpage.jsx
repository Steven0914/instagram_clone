import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";

import heartSVG from "../assets/post/heart.svg";
import chatSVG from "../assets/post/chat.svg";
import dmSVG from "../assets/post/dm.svg";
import bookmarkSVG from "../assets/post/bookmark.svg";

const DummyData = [
  {
    id: 1,
    author: "작성자1",
    authorImage:
      "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    postImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq75DiUEnXV_lTKsYK7oLxdoj0cyTeSp6329bGs93wHQ&s",
    postContent: "리액트 너무 어려워",
    time: "1h ago",
    commentAuthor: "댓글 작성자1",
    comment: "인정!",
  },
  {
    id: 2,
    author: "작성자2",
    authorImage:
      "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    postImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq75DiUEnXV_lTKsYK7oLxdoj0cyTeSp6329bGs93wHQ&s",
    postContent: "리액트 진짜 재밌어",
    time: "2h ago",
    commentAuthor: "댓글 작성자2",
    comment: "재밌다고?",
  },
];

function Mainpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch("http://127.0.0.1:8000/hello", {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
    })
      .then((response) => {
        response.json().then((json) => {
          console.log(json);
          setData(json);
        });
      })
      .catch((err) => {
        console.log(err);
        setData(DummyData);
      });
  };

  return (
    <>
      <div className="pt-[30px] px-[20px] max-w-[1024px] mx-auto flex">
        <div className="w-[calc(100%-300px)]">
          {/* 스토리 부분 */}

          {data.map((data1) => (
            <div key={data1.id} className="max-w-xl mx-auto">
              <div className="border-b border-gray-200">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={data1.authorImage}
                      alt="Profile"
                      className="w-9 h-9 rounded-full"
                    />
                    <p className="font-semibold">{data1.author}</p>
                  </div>
                  <p className="text-sm text-gray-500 flex items-center space-x-2">
                    <span>•</span>
                    <span>{data1.time}</span>
                    <span>•</span>
                    <button className="text-blue-500">Follow</button>
                  </p>
                </div>
              </div>
              <img
                alt="Post content"
                className="w-full"
                height="500"
                src={data1.postImage}
                style={{
                  aspectRatio: "768/500",
                  objectFit: "cover",
                }}
                width="768"
              />
              <div className="flex items-center justify-between p-3">
                <div className="flex space-x-4">
                  <img className="ml-[5px]" src={heartSVG} alt={"heart"} />
                  <img className="ml-[5px]" src={chatSVG} alt={"comment"} />
                  <img className="ml-[5px]" src={dmSVG} alt={"dm"} />
                </div>
                <img className="ml-[5px]" src={bookmarkSVG} alt={"bookmark"} />
              </div>
              <div className="px-3 pb-2">
                <p className="font-semibold">liked_by_user and others</p>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">{data1.author} </span>
                    <span>{data1.postContent}</span>
                  </div>
                  <div>
                    <span className="font-semibold">{data1.commentAuthor}</span>
                    <span>{data1.comment}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 pt-2">View all comments</p>
              </div>
              <div className="border-t border-gray-200 px-3 py-2" />
            </div>
          ))}
        </div>
        <div className="w-[300px]">
          {/*오른쪽 부분*/}
          <div className="flex items-center justify-between pt-3">
            <div className="flex">
              <img
                src="https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-2">
                <h2 className="text-lg font-bold">insta_id</h2>
                <p className="text-sm text-gray-500">name</p>
              </div>
            </div>
            <div className="text-blue-500 ml-10">전환</div>
          </div>
          <Footer type={1} />
        </div>
      </div>
    </>
  );
}

export default Mainpage;
