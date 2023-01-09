import Image from "next/image";
import { useRouter } from "next/router";
import { projectQueries } from "../../../core/api/projectQueries";

const ProjectDetail = () => {
  const router = useRouter();

  const { projectId } = router.query;

  const { data: projectDetail } = projectQueries.useGetProjectDetail(
    String(projectId)
  );

  return (
    <div className="max-w-[700px] w-full mx-auto py-8 px-6">
      <h1 className="font-bold text-2xl"> {projectDetail?.title}</h1>
      <div className="flex justify-between  mt-6">
        <div className="flex gap-x-3">
          <Image
            src={projectDetail ? projectDetail.profileImg : ""}
            alt="profileImg"
            className="w-10 h-10 rounded-full bg-gray-300"
            width={40}
            height={40}
          />
          <span>{projectDetail?.nickname}</span>
        </div>
        <span>2023-01-04</span>
      </div>

      <div className="mt-10 flex flex-col gap-y-8">
        <div className="grid grid-cols-2">
          <span>작업기간 : {projectDetail?.duration}주</span>
          <span>시작예정 : 2023.01.04</span>
        </div>
        <div className="flex">
          <span className="mr-4 w-[200px]">기술 스택</span>
          <ul className="flex gap-1 flex-wrap">
            {projectDetail?.stacks.map((stack, idx) => (
              <li
                className="bg-gray-700 inline-block text-white whitespace-nowrap px-3 py-1.5 rounded-3xl"
                key={idx}
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h3>모집 현황</h3>
        <ul className="grid gap-2 w-full grid-cols-2 mt-6">
          <li className="grid gap-2 grid-cols-2">
            <p>프론트엔드</p>
            <p>
              :
              <span className="font-bold">
                {projectDetail?.classes.frontend}
              </span>
              명
            </p>
          </li>
          <li className="grid gap-2 grid-cols-2">
            <p>백엔드 </p>
            <p>
              :
              <span className="font-bold">
                {projectDetail?.classes.backend}
              </span>
              명
            </p>
          </li>
          <li className="grid gap-2 grid-cols-2">
            <p>디자이너 </p>
            <p>
              :
              <span className="font-bold">
                {projectDetail?.classes.designer}
              </span>
              명
            </p>
          </li>
          <li className="grid gap-2 grid-cols-2">
            <p>풀스택 </p>
            <p>
              :
              <span className="font-bold">
                {projectDetail?.classes.fullstack}
              </span>
              명
            </p>
          </li>
        </ul>

        <div className=" w-full mt-10">
          <h2>소개글</h2>
          <span className="whitespace-pre-line break-all">
            {projectDetail?.content}
          </span>
        </div>

        <button className=" bg-gray-300 p-4">참가신청</button>
      </div>
    </div>
  );
};

export default ProjectDetail;
