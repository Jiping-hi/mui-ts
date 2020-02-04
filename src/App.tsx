import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles, CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AllMails from './Elements/AllMails';
import Trash from './Elements/Trash';
import P1 from './P1';
import { HiGrid } from './HiGrid';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
const InboxIcon = <i className="material-icons">inbox</i>
const MailIcon = <i className="material-icons">mail</i>

// import { MyList } from './List';
const drawerWidth = 240;

const item0 = <div data-about='palceholder'>...</div>
const item2 = <Trash />

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //      display: 'flex',
      height: '100%',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function PersistentDrawerLeft() {
  console.debug('function PersistentDrawerLeft')
  const v1 = 'v1'

  console.log('Drawer2')
  const v2 = v1?.length
  console.log(`v2, ${v2}`)
  const trashElement = React.useMemo(() => <Trash />, [])
  const menuItems: { [key: string]: JSX.Element } = {
    'All mail': <AllMails />,
    'Trash': trashElement,
    'Ag-Grid': <HiGrid></HiGrid>,
    'P1': <P1 />,
  }

  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [view, setView] = React.useState(menuItems['P1'])
  const [selectedIndex, setSelectedIndex] = React.useState(-1)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          //[classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {
            open ?
              <IconButton onClick={handleDrawerClose} color="inherit">
                <i className="material-icons">chevron_left</i>
              </IconButton>
              : <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <i className="material-icons">menu</i>
              </IconButton>

          }


          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='d-flex flex-row'>
        <Drawer
          className={`${classes.drawer} `}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}></div>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Ag-Grid', 'P1'].map((text, index) => (
              <ListItem button key={text} selected={selectedIndex === index}
                onClick={event => {
                  console.debug('click', text)
                  setSelectedIndex(index)
                  setView(menuItems[text])
                }}
              >
                <ListItemIcon>{index % 2 === 0 ? InboxIcon : MailIcon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          }, 'flex-grow-1')}
          style={{ height: '100%' }}
        >
          <div className={classes.drawerHeader} />
          {view}
          {/* {selectedIndex === 1 ? item2 : item0} */}

          {/* <MyList id={333} /> */}
        </main>
      </div>
    </div>
  );
}