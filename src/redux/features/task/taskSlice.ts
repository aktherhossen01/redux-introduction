import { Itask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface Initialize {
    tasks : Itask[]
}

const initialState:Initialize={
    tasks:[
        {
        id:"asdkfeif78",
        title:"Initialize frontend",
        description:"Create home page, and",
        dueDate: "2025",
        isCompleted:false,
        priority: 'High',
    },
    
        {
        id:"asdkfeif7hg8",
        title:"Initialize backend",
        description:"Create home page, and",
        dueDate: "2025",
        isCompleted:false,
        priority: 'High',
    },
    
]
};

const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{}
})

export default taskSlice.reducer