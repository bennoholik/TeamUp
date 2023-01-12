import Image from "next/image";

const EachComment = ({ comment }) => {
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
      <hr className="" />
    </div>
  );
};

export default EachComment;
