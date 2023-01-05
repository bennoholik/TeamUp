const ProjectDetail = () => {
  return (
    <div className="max-w-[700px] w-full mx-auto py-8 px-6 bg-yellow-300">
      <h1 className="font-bold text-2xl">
        {" "}
        팀빌딩 사이드프로젝트 인원 구해요!
      </h1>
      <div className="flex justify-between  mt-6">
        <div className="flex gap-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <span>BeNNY</span>
        </div>
        <span>2023-01-04</span>
      </div>

      <div className="mt-10 flex flex-col gap-y-8">
        <div className="grid grid-cols-2">
          <span>작업기간 : 12주</span>
          <span>시작예정 : 2023.01.04</span>
        </div>
        <div className="flex">
          <span className="mr-4">기술 스택</span>
          <ul className="flex gap-x-3 flex-wrap">
            <li className="bg-green-300 px-3 py-1.5 rounded-xl">Python</li>
            <li className="bg-green-300 px-3 py-1.5 rounded-xl">Python</li>
            <li className="bg-green-300 px-3 py-1.5 rounded-xl">Python</li>
            <li className="bg-green-300 px-3 py-1.5 rounded-xl">Python</li>
            <li className="bg-green-300 px-3 py-1.5 rounded-xl">Python</li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h3>모집 현황</h3>
        <ul className="grid gap-2 w-full grid-cols-2 mt-6">
          <li className="grid gap-2 grid-cols-2">
            <p>프론트엔드</p>{" "}
            <p>
              : <span className="font-bold">12</span> 명
            </p>
          </li>
          <li className="grid gap-2 grid-cols-2">
            <p>백엔드 </p>{" "}
            <p>
              : <span className="font-bold">12</span> 명
            </p>
          </li>
          <li className="grid gap-2 grid-cols-2">
            <p>디자이너 </p>{" "}
            <p>
              : <span className="font-bold">12</span> 명
            </p>
          </li>
          <li className="grid gap-2 grid-cols-2">
            <p>풀스택 </p>{" "}
            <p>
              : <span className="font-bold">12</span> 명
            </p>
          </li>
        </ul>

        <div className=" w-full mt-10">
          <h2>소개글</h2>
          <span className="whitespace-pre-line break-all">
            🎇실제로 구함 (테스트 아님)🎇 실전프로젝트 끝마치시면 이력서에
            기입할 프로젝트 수가 적어 많은 어려움을 겪으실거에요. 이를 방지하기
            위해 저(현직 백엔드 주니어 개발자)와 함께 토이프로젝트 짧게 하실분
            모십니다.(길게 해도 상관 없음) 실무에서 많이 사용되는 GraphQL을 모든
            api는 아니더라도 필수적으로 도입 할 생각입니다. 자격요건 (실력은
            전혀 자격요건에 포함되지 않습니다.) ✨ 의사소통에 자신 있고,
            적극적이신 분 ✨ 실전프로젝트 끝나고 번아웃 안 올 자신 있으신 분 ✨
            시간 약속 잘 지키시는 분 (데드라인이 아니라 회의 시간입니다.)
            타입스크립트, next.js 도입해보고 싶으시면 하셔도 됩니다. 본인과 합이
            잘맞았던 팀원도 함께 모셔와도 됩니다.(백엔드, 디자이너 상관없음)
            프로젝트 종료가 오래 걸려도 상관없어요. 많관부~
          </span>
        </div>

        <button className=" bg-gray-300 p-4">참가신청</button>
      </div>
    </div>
  );
};

export default ProjectDetail;
