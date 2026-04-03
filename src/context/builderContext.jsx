import { createContext, useEffect, useState } from "react";

export const BuilderContext = createContext();
export const BuilderProvider = ({children}) => {
const [blocks,setBlocks] = useState([])
const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const savedBlocks = localStorage.getItem("blocks");
    if (savedBlocks) {
      setBlocks(JSON.parse(savedBlocks))
    }
    setLoaded(true)
  }, []);


  useEffect(() => {
    if (loaded) {
      localStorage.setItem("blocks", JSON.stringify(blocks));
    }
  }, [blocks, loaded])

const handleAddBlock = (type) => {
const newBlock = {
    id: Date.now(),
    type,
    content:""
}
setBlocks((prev)=>[...prev,newBlock])
}


const handleUpdateBlock = (id, value) => {
    setBlocks((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, content: value } : b
      )
    )
  }

const handleReorderBlocks = (newBlocks) => {
  setBlocks(newBlocks);
};

return(
    <BuilderContext.Provider value={{handleAddBlock,blocks,handleUpdateBlock,handleReorderBlocks}}>
        {children}
    </BuilderContext.Provider>
)

}