import {ref} from "vue"
export function fetchData(url:RequestInfo, options?:RequestInit){
  const response = ref(null)
  const request = async () => {
    const res = await fetch(url, options)
    response.value = await res.json()
  }
  return {response, request}
}