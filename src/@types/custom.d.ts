export {};

declare global {
  type Nullable<T> = T | null;
  type Nullish<T> = T | null | undefined;
  type Undefinable<T> = T | undefined;
  type Falsy<T> = T | Nullish<T> | false | 0 | '';

  type Prettify<T> = {
    [K in keyof T]: T[K];
  } & unknown;
}
