export default theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    taskInputWrap: {
        textAlign: "center"
    },
    taskNameInput: {
        width: "250px",
        color: "#3e50c7",
        fontWeight: "500",
        textAlign: "center"
    },
    timerWrap: {
        textAlign: "center"
    },
    taskListWrap: {
        textAlign: "center"
    }
});
