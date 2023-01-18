import Link from "next/link";

const CreateBtn = () => {
  return (
    <Link
      href="project/create"
      className="fixed bottom-10 right-10 bg-green-500 shadow-md w-[50px] h-[50px] rounded-full flex justify-center items-center text-white text-3xl md:hidden"
    >
      +
    </Link>
  );
};

export default CreateBtn;
