import { ref } from "vue"
import { fetchData } from "@/hooks/fetch"
export async function menuData():Promise<any> {
  const loading = ref<boolean>(false)
  const { response:data, request } = fetchData('./data/users.json')
  if (!loading.value) {
    await request()
    loading.value = true
  }
  return { data }
}