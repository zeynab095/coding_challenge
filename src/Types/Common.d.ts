export interface SelectOption {
  id: number | string;
  name: string;
}

export type FilterOption<Type> = {
  key: Type;
  type: "checkbox" | "select";
  active: boolean;
  value: string | number;
  selectValues: SelectOption[];
  labelText: string;
};
