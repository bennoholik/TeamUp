import Link from "next/link";

const CreateBtn = () => {
  return (
    <Link
      href="project/create"
      className="fixed bottom-10 right-10 bg-white shadow-md"
    >
      작성하기
    </Link>
  );
};

export default CreateBtn;
