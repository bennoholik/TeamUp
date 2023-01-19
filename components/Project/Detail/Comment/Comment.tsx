import Image from "next/image";
import SubComment from "./SubComment";

const EachComment = ({ comment }: any) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <Image
          src={comment.profileImage}
          alt="profileImg"
          className="w-8 h-8 rounded-full bg-gray-300"
          width={40}
          height={40}
        />
        <span className="font-bold">{comment.nickname}</span>
        {/* <span>{comment.createdAt}</span> */}
      </div>
      <div className="my-6">
        <p>{comment.content}</p>
      </div>
      {comment.subCommentList.map((subcomment: any) => (
        <SubComment key={subcomment.subCommentId} subComment={subcomment} />
      ))}
      <hr className="mb-10" />
    </div>
  );
};

export default EachComment;
