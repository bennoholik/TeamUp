const PostCard = ({ pList }) => {
  return (
    <div className="bg-gray-300 w-[400px] h-[400px] rounded-2xl">
      {pList?.title}
    </div>
  );
};

export default PostCard;
