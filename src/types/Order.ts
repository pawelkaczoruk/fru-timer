import { Result } from './Timer';

export enum OrderBy {
  ASC_DATE = 'asc-date',
  ASC_SINGLE = 'asc-single',
  ASC_MO3 = 'asc-mo3',
  ASC_AO5 = 'asc-ao5',
  ASC_AO12 = 'asc-ao12',
  ASC_COMMENT = 'asc_comment',
  DESC_DATE = 'desc-date',
  DESC_SINGLE = 'desc-single',
  DESC_MO3 = 'desc-mo3',
  DESC_AO5 = 'desc-ao5',
  DESC_AO12 = 'desc-ao12',
  DESC_COMMENT = 'desc_comment',
}

export interface SortableListItem {
  id: string;
  number: number;
  result: Result;
  single: number;
  mo3: number;
  ao5: number;
  ao12: number;
}

export type SortingProps = 'single' | 'mo3' | 'ao5' |'ao12' | 'comment'
export type SortableList = Array<SortableListItem>