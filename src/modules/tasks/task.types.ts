export type TaskStatus= "pending" | "in_progress" | "done";

export type CreateTaskInput={
  title:string,
  description?:string,
  status?:TaskStatus,
  priority?:number
};

export type UpdateTaskInput={
  title:string,
  description?:string,
  status?:TaskStatus,
  priority?:number
};

export type TaskQueryOptions={
  status?:TaskStatus,
  search?:string,
  priority?:number,
  page?:number,
  limit?:number
}