const Postingform = () => {
  return (
    <div className="max-w-[992px] w-full mx-auto py-8 px-6 bg-yellow-300">
      <div>
        <h1 className="text-2xl font-bold">프로젝트의 정보를 입력해주세요.</h1>

        <div className="">
          <h2 className="text-xl font-semibold">직군별 모집인원</h2>
        </div>

        <div>
          <h2 className="text-xl font-semibold">직군별 스택</h2>
        </div>
        <div>
          <h2 className="text-xl font-semibold">기간</h2>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">프로젝트에 대해 소개 해주세요.</h1>

        <div className="">
          <label>제목</label>
          <input />
        </div>

        <div>
          <label>내용</label>
          <textarea />
        </div>
      </div>

      <button>등록하기</button>
    </div>
  );
};

export default Postingform;
