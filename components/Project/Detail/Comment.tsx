import { useRouter } from "next/router";
import { commentQueries } from "../../../core/api/commentQueries";

const CommentSection = () => {
  const router = useRouter();

  const { projectId } = router.query;
  const { data } = commentQueries.useGetCommentList(String(projectId));
  console.log(data);
  return <>yallo</>;
};

export default CommentSection;
