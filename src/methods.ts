import { Unstable } from "./errors";

export function appendWorld(value: unknown): Unstable<string> {
  if (typeof value !== "string") {
    return {
      code: "TYPE_ERROR",
      message: "You tried to append 'World' to something that isn't a string",
      data: { str: value },
    };
  }
  return value + "World";
}

