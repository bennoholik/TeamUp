import Image from "next/image";

const PostCard = ({ pList }) => {
  return (
    <div className="bg-white border shadow-lg w-[350px] h-[350px] rounded-2xl">
      <div className="mx-8 pt-10">
        <h2 className="font-bold text-xl truncate">{pList?.title}</h2>
        <span className="text-sm">기간 - {pList?.duration}주</span>
      </div>
      <div className="h-[120px] mx-8 mt-4 line-clamp-1 text-ellipsis overflow-hidden">
        <p className="text-sm text-gray-300">{pList?.content}</p>
      </div>

      <div className="mx-8 pt-4">
        <ul className="h-[35px] flex gap-x-3 overflow-hidden">
          {pList?.stacks.map((stack, idx) => (
            <li
              className="bg-gray-700 text-white px-3 py-1.5 rounded-3xl"
              key={idx}
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-7 mt-6">
        <div className="flex gap-x-3">
          <Image
            src={pList?.profileImg}
            alt="profileImg"
            className="w-[27px] h-[27px] rounded-full bg-gray-300"
            width={27}
            height={27}
          />
          <span className="text-sm">{pList?.nickname}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
