import { useEffect } from "react"


export default function useCustomHook (count:any)  {

      useEffect(()=> {
            document.title = count
      }, [count])
}