// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_SECRET });

export default async function handler(req, res) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID,
  });
  const final = response.results.map((item) => {
    const prop = item?.properties;
    let obj = {};
    obj["name"] = prop["Name"]?.title[0].plain_text;
    obj["time"] = prop["Created time"]?.created_time;
    obj["img"] = prop["Media"]?.files[0].file.url;
    obj["desc"] = prop["Description"].rich_text[0].plain_text;

    return obj;
  });
  return res.send(final);
}
