export function calcPagesNumber(totalRecords: number, recordsPerPage: number) {
  return Math.ceil(totalRecords! / recordsPerPage) || 0;
}
