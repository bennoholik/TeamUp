import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { projectQueries } from "../../../core/api/projectQueries";

const ProjectDetail = () => {
  const router = useRouter();

  const { projectId } = router.query;

  const { data: projectDetail } = projectQueries.useGetProjectDetail(
    String(projectId)
  );
  const queryClient = useQueryClient();
  const { mutateAsync: deleteProject } = projectQueries.useDeleteProject();

  const onDeleteProject = () => {
    if (!projectId) return;
    deleteProject(String(projectId)).then(() => {
      queryClient.invalidateQueries(["projectList"]);
      router.push("/project");
    });
  };

  return (
    <div className="max-w-[700px] min-h-screen w-full mx-auto py-8 px-6">
      <div className="flex justify-between">
        <h1 className="font-bold text-[35px] max_sm:text-[20px]">
          {" "}
          {projectDetail?.title}
        </h1>
        <button onClick={onDeleteProject}>삭제</button>
      </div>

      <div className="flex justify-between content-center mt-6">
        <div className="flex gap-x-3 h-[40px]">
          <Image
            src={projectDetail ? projectDetail.profileImg : ""}
            alt="profileImg"
            className="w-8 h-8 rounded-full bg-gray-300"
            width={40}
            height={40}
          />
          <span className="mt-1 font-bold ">{projectDetail?.nickname}</span>
        </div>
        <span className="text-gray-400 mt-1">2023-01-04</span>
      </div>
      <hr className="mt-3 border" />

      <div className="mt-20 ">
        <h2 className="text-2xl font-bold text-gray-800">프로젝트 일정</h2>
        <div className="grid grid-cols-2 mt-6 p-6 border border-gray-100 rounded-lg bg-gray-50">
          <p>
            <span className="font-bold text-gray-800">작업기간 :</span>{" "}
            {projectDetail?.duration}주
          </p>
          <p>
            <span className="font-bold text-gray-800">시작예정 :</span>{" "}
            2023.01.04
          </p>
        </div>
      </div>

      <div className="mt-20">
        <span className="text-2xl font-bold text-gray-800">기술 스택</span>
        <ul className="flex mt-6 gap-1 flex-wrap ">
          {projectDetail?.stacks.map((stack, idx) => (
            <li
              className="bg-gray-600 inline-block text-white whitespace-nowrap px-3 py-1.5 rounded-3xl"
              key={idx}
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20">
        <h3 className="font-bold text-gray-800 text-2xl">모집 현황</h3>
        <ul className="grid gap-2 w-full grid-cols-2 mt-6 p-6 border border-gray-100 rounded-lg bg-gray-50">
          <li className="grid gap-2 grid-cols-3">
            <p>프론트엔드 </p>
            <p>
              <span className="font-bold">
                {projectDetail?.classes.frontend}
              </span>
              명
            </p>
          </li>
          <li className="grid gap-2 grid-cols-3">
            <p>백엔드 </p>
            <p>
              <span className="font-bold">
                {projectDetail?.classes.backend}
              </span>
              명
            </p>
          </li>
          <li className="grid gap-2 grid-cols-3">
            <p>디자이너 </p>
            <p>
              <span className="font-bold">
                {projectDetail?.classes.designer}
              </span>
              명
            </p>
          </li>
          <li className="grid gap-2 grid-cols-3">
            <p>풀스택 </p>
            <p>
              <span className="font-bold">
                {projectDetail?.classes.fullstack}
              </span>
              명
            </p>
          </li>
        </ul>

        <div className=" w-full mt-20">
          <h2 className="font-bold text-gray-800 text-2xl mb-8">소개글</h2>

          <div
            className="whitespace-pre-line break-all"
            dangerouslySetInnerHTML={{ __html: projectDetail?.content }}
          ></div>
        </div>

        {/* <button className=" bg-gray-300 p-4">참가신청</button> */}
      </div>
    </div>
  );
};

export default ProjectDetail;
