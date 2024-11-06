import React from "react";

function MyApp4(props) {
  // fsx 작성 시 주의할 점
  // root component 있어야 함 (최상위 컴포넌트)
  // 종료 태그가 꼭 있어야 함
  // javascript keyword 사용 불가
  //    html attribute 를 대체 사용
  //      : class -> className
  //      : for -> htmlFor
  // style 은 객체로 주어야 함
  // 주석 {/* 주석내용 */}

  return (
    <div>
      {/* 주석내용 작성 */}
      {/* 단축키 : ctrl + / */}
      <div
        style={{
          color: "yellow",
          backgroundColor: "blue",
        }}
      >
        hello 4번째 앱
      </div>
      <div>another component</div>
      <div className="note">hello</div>
      <div>
        <label htmlFor="input2"></label>
      </div>
    </div>
  );
}

export default MyApp4;
