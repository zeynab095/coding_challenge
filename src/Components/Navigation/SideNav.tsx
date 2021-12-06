import { DashboardOutlined, FlightTakeoff } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Theme, useTheme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    list_item__active: {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
  })
);
const drawerWidth = 240;

interface SideNavProps {
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  setActiveItem: (value: string) => void;
  activeItem: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function SideNav(props: SideNavProps): ReactElement {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.open,
        [classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={props.handleDrawerClose} size="large">
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <NavLink
          to={"/"}
          exact
          activeClassName={classes.list_item__active}
          onClick={() => props.setActiveItem("Home")}
        >
          <ListItem>
            <ListItemIcon>
              <DashboardOutlined
                htmlColor={
                  props.activeItem === "Home"
                    ? theme.palette.primary.main
                    : theme.palette.text.primary
                }
              />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </NavLink>
        <NavLink
          to={"/startups"}
          exact
          activeClassName={classes.list_item__active}
          onClick={() => props.setActiveItem("Startups")}
        >
          <ListItem>
            <ListItemIcon>
              <FlightTakeoff
                htmlColor={
                  props.activeItem === "Startups"
                    ? theme.palette.primary.main
                    : theme.palette.text.primary
                }
              />
            </ListItemIcon>
            <ListItemText primary={"Startups"} />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
}
