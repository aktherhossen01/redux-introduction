/* eslint-disable @typescript-eslint/no-unused-vars */
import {  Trash2 } from "lucide-react";
import { Button } from "../../button";
import { Itask } from "@/types";
import { Checkbox } from "@radix-ui/react-checkbox";

interface IProps {
    task: Itask
}

export default function TaskCard({task}:IProps){
    return(
        <div className="border px-5 py3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="size-2 rounded-full bg-green-500">
                    </div>
                        <h1>task title</h1>

                    <div className="flex gap-3  justify-between items-center right-0">
                        <Button variant="link" className="p-0 text-red-500 ml-96 " >
                            <Trash2/>
                        </Button>
                       <Checkbox/>
                    </div>
                </div>
            </div>
        </div>
    )
}