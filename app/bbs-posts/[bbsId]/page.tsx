import { BBSData } from "@/app/types/types";
import Link from "next/link";

async function getDetailBBSData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  const bbsDetailData: BBSData = await response.json();
  return bbsDetailData;
}

const BBSDetailPage = async ({ params }: { params: { bbsId: number } }) => {
  const BBSDetailData = await getDetailBBSData(params.bbsId);
  console.log(BBSDetailData);
  const { username, content, title } = BBSDetailData;

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="mx-auto max-w-4xl p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-700">{username}</p>
        </div>

        <div className="mb-8">
          <p className="text-gray-900">{content}</p>
        </div>
        <div className="flex justify-end">
          <Link
            href={"/"}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
          >
            戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BBSDetailPage;
