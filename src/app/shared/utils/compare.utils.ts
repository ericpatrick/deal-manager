export class Compare {
  public static equalsOrIncludes(a: string | number, b: string | number): boolean {
    if (typeof a === "string" && typeof b === "string") {
      return a.toLowerCase().includes(b.toLowerCase());
    }

    if (typeof a === "number" && typeof b === "number") {
      return a === b;
    }
    return false;
  }
}