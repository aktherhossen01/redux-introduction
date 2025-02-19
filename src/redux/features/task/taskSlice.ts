import { createSlice } from "@reduxjs/toolkit";

const initialState={
    task:[{
        id:"asdkfeif78",
        title:"Initialize frontend",
        description:"Create home page, and",
        dueDate: "2025",
        isCompleted:false,
        priority: 'High',
    },
    {
        id:"asdkfeif78",
        title:"Initialize bakend",
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