import Image from "next/image";

const SubComment = ({ subComment }: any) => {
  return (
    <div className="flex">
      <div className="w-4 h-4 border-l-2 border-b-2 mr-4"></div>
      <div>
        <div className="flex gap-2 items-center">
          <Image
            src={subComment.profileImage}
            alt="profileImg"
            className="w-8 h-8 rounded-full bg-gray-300"
            width={40}
            height={40}
          />
          <span className="font-bold">{subComment.nickname}</span>
          {/* <span>{subComment.createdAt}</span> */}
        </div>
        <div className="my-6">
          <p>{subComment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SubComment;
