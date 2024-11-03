import { type APISpaceXResponse, type Doc } from "../types/api";

export const getLaunchBy = async ({ id }: { id: string }): Promise<Doc> => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

  const data = await res.json();

  return data
}

export const getLaunches = async (): Promise<APISpaceXResponse> => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });

  const data = await res.json();

  return data
}
