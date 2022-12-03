import { Web3Storage } from "web3.storage";

interface Props {
  info: any;
  author: string;
}

export const uploadFile = async ({ info, author }: Props) => {
  console.log(info);
  const token = process.env.WEB3_STORAGE_TOKEN as string;
  const web3storage = new Web3Storage({ token });
  const file = info.file as File;
  const cid = await web3storage.put([file]);
  console.log(cid);
  if (cid) {
    const res = await fetch(`${process.env.API_HOST}/api/rest/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          cId: cid,
          author: author,
        },
      }),
      credentials: "include",
    });
    if (res.ok) {
      const data = await res.json();
      return true;
    } else {
      return false;
    }
  }
};
