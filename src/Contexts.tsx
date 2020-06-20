import React from 'react'
import { ISite, IWorkload } from './Types'

const site: ISite = {Name: '', Description: ''}

export const SiteContext = React.createContext({
  site
})

const workload: IWorkload = { Name: '', Latency: '', Scale: '', Icon: '', Needs: [], Wants: []}

export const WorkloadContext = React.createContext({
  workload
})