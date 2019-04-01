export default (theme) => ({
  tableWrap: {
    display: "block",
    overflowX: "auto",
    padding: "0 20px"
  },
  table: {
    width: "100%"
  },
  headRow: {
    backgroundColor: theme.palette.common.white
  },
  headCell: {
    fontSize: "14px",
    color: "#9d9d9d"
  },
  bodyRow: {
    backgroundColor: "#eaf6ff"
  },
  bodyCell: {
    paddingTop: "10px",
    paddingBottom: "10px",
    fontWeight: "500",
    color: "#3e50c7"
  },
  noTaskCell: {
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  btn: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "2px",
    "&:hover": {
      backgroundColor: "#f5f5f5"
    }
  },
  btnLabel: {
    fontWeight: "normal",
    color: "#3e50c7"
  }
});
