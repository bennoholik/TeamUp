import { useRouter } from "next/router";
import React from "react";
import { commentQueries } from "../../../../core/api/commentQueries";
import EachComment from "./Comment";

const CommentSection = () => {
  const router = useRouter();

  const { projectId } = router.query;
  const { data: commentList } = commentQueries.useGetCommentList(
    String(projectId)
  );

  console.log(commentList);

  return (
    <div className="max-w-[700px] w-full mx-auto py-8 px-6 ">
      <div>
        <p className="font-bold text-lg mb-4">댓글 {commentList?.length}개</p>
        <input
          className="rounded-md h-[60px] px-2.5 w-full border border-gray-300"
          placeholder="댓글을 입력해주세요."
          maxLength={255}
        />
        <div className="flex justify-end">
          <button className="mt-4 bg-gray-600 text-white px-3 py-1.5 rounded-md">
            등록
          </button>
        </div>
      </div>

      <div className="mt-8">
        {commentList?.map((comment) => (
          <EachComment key={comment.commentId} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
