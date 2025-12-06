import { db } from "../../config/db";
import { tasks } from "../../drizzle/tasks";
import { CreateTaskInput,UpdateTaskInput,TaskQueryOptions, TaskStatus } from "./task.types";

const DEFAULT_PAGE=1;
const DEFAULT_LIMIT=20;
const MAX_LIMIT=100;

function normalizePagination(page?:number,limit?:number){
  const p= page && page>0 ? page:DEFAULT_PAGE;
  let l= limit && limit>0 ? limit:DEFAULT_LIMIT;
  if(l>MAX_LIMIT) l=MAX_LIMIT;
  const offset= (p-1)*l;
  return {page:p,limit:l,offset};
}

const ALLOWED_STATUSES:TaskStatus[]=["pending","in_progress","done"];

const MIN_PRIORITY=1;
const MAX_PRIORITY=3;

export async function listTasks(userId:string,options:TaskQueryOptions={})
{
  const {status,search,priority,page,limit}=options;
  const {offset,limit:finaLimit}=normalizePagination(page,limit);
}