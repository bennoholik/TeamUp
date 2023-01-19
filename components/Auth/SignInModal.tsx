import Link from "next/link";
import ModalPortal from "../MordalPortal";

const SignInModal = ({ setModalState }: any) => {
  return (
    <ModalPortal selector="#portal">
      <div className="w-full h-screen fixed flex justify-center items-center z-40 ">
        <div
          className="w-full h-screen absolute z-40 bg-black opacity-30"
          onClick={() => setModalState(false)}
        />
        <div className="bg-white z-50 w-[300px] h-[400px] p-4">
          <div className="text-center bg-yellow-300 h-14">
            <span>Kakao Login</span>
          </div>
          <div className="text-center bg-green-400 h-14">
            <span>Naver Login</span>
          </div>
          <div className="text-center bg-white h-14 border">
            <span>Google Login</span>
          </div>

          <div className="flex justify-between mt-10">
            <Link href="signin" onClick={() => setModalState(false)}>
              Email로 로그인하기
            </Link>

            <h1 className="text-black" onClick={() => setModalState(false)}>
              취소
            </h1>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default SignInModal;
