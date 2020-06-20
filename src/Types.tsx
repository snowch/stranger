import { deepcopy } from "./Utils"

export interface IApplication {
  Name: string;
  Latency: string;
  Scale: string;
  Needs: string[];
  Wants: string[];
  Icon: string;
}

export interface IWorkload extends IApplication {
  Capacity?: number;
  Performance?: number;
}

export const getWorkloadFromApp = (app: IApplication) => {
  let wl: IWorkload = deepcopy(app)
  wl.Capacity = 0
  wl.Performance =0
  return wl
}

export interface ISite {
  Name: string,
  Description: string,
  Apps?: IApplication[],
  Containers?: IContainer[],
  Message?: string
}

export interface IContainer {
  Name: string,
  Systems?: ISystem[]
}

export interface ISystem {
  Name: string,
  Description?: string,
  Items?: any[]
}
