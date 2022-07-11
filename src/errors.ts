export type error = {
  code: string;
  message: string;
  data: object;
};

export function isError(a: unknown): a is error {
  if (typeof a !== "object") {
    return false;
  }

  if (
    (a as error).code === undefined &&
    (a as error).message === undefined &&
    (a as error).data === undefined
  ) {
    return false;
  }

  const { code, message, data } = a as error;
  return (
    typeof code === "string" &&
    typeof message === "string" &&
    typeof data === "object"
  );
}

export type Unstable<T> = T | error;

export function run<V, R>(value: Unstable<V>, method: (arg: V) => Unstable<R>){
    if (isError(value)){
        return value
    }

    return method(value)
}
