export const getSingleFromUrlQuery = (parameter: string | string[] | undefined): string | undefined => {
  if (Array.isArray(parameter)) {
    return parameter[0];
  } else if (typeof parameter === "string") {
    return parameter;
  } else {
    return undefined;
  }
}