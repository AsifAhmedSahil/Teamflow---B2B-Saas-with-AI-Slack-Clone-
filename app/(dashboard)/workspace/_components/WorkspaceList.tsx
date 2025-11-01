import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const Workspaces = [
  {
    id: "1",
    name: "TeamFlow",
    avatar: "TF",
  },
  {
    id: "2",
    name: "TeamFlow2",
    avatar: "TF2",
  },
  {
    id: "3",
    name: "TeamFlow3",
    avatar: "TF3",
  },
];

const colorCombinations = [
    'bg-blue-500 hover:bg-blue-600 text-white',
    'bg-emerald-500 hover:bg-emerald-600 text-white',
    'bg-purple-500 hover:bg-purple-600 text-white',
    'bg-amber-500 hover:bg-amber-600 text-white',
    'bg-rose-500 hover:bg-rose-600 text-white',
    'bg-indigo-500 hover:bg-indigo-600 text-white',
    'bg-cyan-500 hover:bg-cyan-600 text-white',
    'bg-pink-500 hover:bg-pink-600 text-white',
  
]

const getWorkspaceColor = (id:string) =>{
    const charSum = id.split("").reduce((sum,char) => sum + char.charCodeAt(0),0)

    const colorIndex = charSum % colorCombinations.length;

    return colorCombinations[colorIndex]
    
}



export function WorkspaceList() {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-2">
        {Workspaces.map((ws) => (
          <Tooltip key={ws.id}>
            <TooltipTrigger>
              <Button size="icon"
            //    className="size-12 transition-all duration-200"
            className={cn("size-12 transition-all duration-200",getWorkspaceColor(ws.id))}
               >
                <span className="text-sm font-semibold cursor-pointer">{ws.avatar}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
                <p>{ws.name}</p>

            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
