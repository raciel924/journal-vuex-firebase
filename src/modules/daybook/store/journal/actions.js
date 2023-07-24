// export const myaction = async ( commit ) => {

import journalApi from "@/api/journalApi"

//}
 export const loadEntries = async (  {commit}  ) => {
   const {data} = await journalApi.get('/entries.json');
   const  entries = []
   for(let id of Object.keys(data)) {
    entries.push({
        id,
        ...data[id],
    })
   }
   console.log(entries);
   commit('SetEntries', entries)
}
export const updateEntry = async (  {commit} , entry ) => {

  const {date, picture, text} = entry;
  const dataSave = {date, picture, text}
 const resp = await journalApi.put(`/entries/${entry.id}.json`, dataSave)
  console.log(resp);
  commit('updateEntry',{...entry});
}
export const createEntry = async (  {commit} ,entry ) => {

  const { date, picture, text} = entry;
  const dataSave = {date, picture, text}
  const {data} = await journalApi.post(`entries.json`, dataSave)
  console.log(data);
  dataSave.id = data.name;
  commit('addEntry',dataSave);
 return data.name
}