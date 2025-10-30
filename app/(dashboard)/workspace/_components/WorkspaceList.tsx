import { Button } from "@/components/ui/button";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Workspaces = [
    {
        id:"1",
        name:"TeamFlow",
        avatar:"TF"
    },
    {
        id:"2",
        name:"TeamFlow2",
        avatar:"TF2"
    },
    {
        id:"3",
        name:"TeamFlow3",
        avatar:"TF3"
    },
    
]

export function WorkspaceList(){
    return (
        <TooltipProvider>
            <div className="flex flex-col gap-2">
                {
                    Workspaces.map((ws) =>(
                        <Tooltip key={ws.id}>
                            <TooltipTrigger>
                                <Button size="icon" className="size-12">

                                <span className="text-sm font-semibold">{ws.avatar}</span>
                                </Button>

                            </TooltipTrigger>

                        </Tooltip>
                    ))
                }

            </div>

        </TooltipProvider>
    )
}