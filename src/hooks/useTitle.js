import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - News Hub`;
    },[title])

};
export default useTitle;