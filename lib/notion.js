import { Client } from '@notionhq/client'


// Initializing a client
const notion = new Client({
  auth: "secret_DKC9WTWuJuKYJaljwo8K8y4Cl5bNegvzCPrHPwKTXfx", 
})

const getDatabaseNews = async () => {
  const databaseId = "6d946f9eb5274d50bc88f0f3d3cb9917"
   const res = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          "property": "Published_Date",
          "direction": "descending"
        }
      ]
   })

   return res.results
}

const getDatabaseAct = async () => {
  const databaseId = "9abbc2c925914863af8ac806f976b22a"
   const res = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          "property": "Register_Date",
          "direction": "descending"
        }
      ]
   })

   return res.results
}

const getPage = async (id) => {
  const res = await notion.pages.retrieve({ page_id: id })
  return res
}

const getBlocks = async (blockId) => {
  const { results } = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });

  return results
}

export {notion, getDatabaseNews, getDatabaseAct, getPage, getBlocks}

