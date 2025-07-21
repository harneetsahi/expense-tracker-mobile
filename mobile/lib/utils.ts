export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatWithCommas(numeric: any) {
  return new Intl.NumberFormat("en-US").format(numeric);
}
