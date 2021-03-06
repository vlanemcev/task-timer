export default (theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    },
    padding: "10px 15px"
  },
  taskListWrap: {
    textAlign: "center"
  },
  tabsWrap: {
    padding: "20px 0"
  }
});
