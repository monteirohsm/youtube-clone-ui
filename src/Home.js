import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  ListSubheader,
  Grid,
  Hidden,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AddCircle from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

const useStyles = makeStyles((theme) => ({
  root: {
    heigth: '100vh',
    flexGrow: 1,
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  searchInput: {
    width: '50vh',
    height: '27px',
    border: '1px solid #ccc',
    borderRadius: '2px 0 0 2px',
    boxShadow: 'insent 0 1px 2px',
    padding: '2px 6px',
    marginRight: 0,
  },
  searchDiv: {
    border: '1px solid #ccc',
    height: '27px',
    boxShadow: 'insent 0 1px 1px',
    borderRadius: '2px 0 0 2px',
    width: '58px',
    display: 'flex',
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    marginLeft: -1,
  },
  searchButton: {
    borderRadius: '2px 0 0 2px',
    width: '65px',
    height: '24px',
    color: '#333',
    opacity: 0.6,
  },
  audioDiv: {
    display: 'flex',
    align: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '100px',
    width: '36px',
    justifyContent: 'center',
    height: '27px',
    marginLeft: '4px',
  },
  audioButton: {
    color: '#606060',
  },
  loginBtn: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    borderRadius: '3px',
    padding: '8px',
  },
  icons: {
    paddingRight: theme.spacing(2),
  },
  logo: {
    height: '25px',
  },
  listItemText: {
    fontSize: '14px',
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

const videos = [
  {
    id: 1,
    title:
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. IN VIVERRA TINCIDUNT',
    channel: 'Matheus Monteiro',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube-logo.jpg',
  },
  {
    id: 2,
    title:
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. IN VIVERRA TINCIDUNT',
    channel: 'Matheus Monteiro',
    views: '957 mil visualizações',
    date: 'há 2 semanas',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube-logo.jpg',
  },
  {
    id: 3,
    title:
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. IN VIVERRA TINCIDUNT',
    channel: 'Matheus Monteiro',
    views: '106 mil visualizações',
    date: 'há 5 horas',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube-logo.jpg',
  },
  {
    id: 4,
    title:
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. IN VIVERRA TINCIDUNT',
    channel: 'Matheus Monteiro',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube-logo.jpg',
  },
  {
    id: 5,
    title:
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. IN VIVERRA TINCIDUNT',
    channel: 'Matheus Monteiro',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube-logo.jpg',
  },
  {
    id: 6,
    title:
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. IN VIVERRA TINCIDUNT',
    channel: 'Matheus Monteiro',
    views: '233 mil visualizações',
    date: 'há 8 horas',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube-logo.jpg',
  },
  {
    id: 7,
    title:
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. IN VIVERRA TINCIDUNT',
    channel: 'Matheus Monteiro',
    views: '118 mil visualizações',
    date: 'há 3 dias',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube-logo.jpg',
  },
  {
    id: 8,
    title:
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. IN VIVERRA TINCIDUNT',
    channel: 'Matheus Monteiro',
    views: '1,9 mi de visualizações',
    date: 'há 2 semanas',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube-logo.jpg',
  },
];

export function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" className={classes.menuIcon}>
            <MenuIcon />
          </IconButton>
          <img src="/images/preto.png" alt="logo" className={classes.logo} />
          <div className={classes.grow}>
            <input
              type="text"
              className={classes.searchInput}
              placeholder="Pesquisar"
            />
            <div className={classes.searchDiv}>
              <IconButton color="inherit" className={classes.searchButton}>
                <SearchIcon style={{ width: '19px' }} />
              </IconButton>
            </div>
            <div className={classes.audioDiv}>
              <IconButton color="inherit">
                <MicIcon className={classes.audioButton} />
              </IconButton>
            </div>
          </div>
          <IconButton className={classes.icons} color="inherit">
            <AppsIcon />
          </IconButton>{' '}
          <IconButton className={classes.icons} color="inherit">
            <MoreVertIcon />
          </IconButton>
          <Button
            startIcon={<AccountCircleIcon />}
            variant="outlined"
            color="inherit"
            className={classes.loginBtn}
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={'Início'}
                    classes={{
                      primary: classes.listItemText,
                    }}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ExploreIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={'Explorar'}
                    classes={{
                      primary: classes.listItemText,
                    }}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SubscriptionsIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={'Inscrições'}
                    classes={{
                      primary: classes.listItemText,
                    }}
                  />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibraryIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={'Biblioteca'}
                    classes={{
                      primary: classes.listItemText,
                    }}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <HistoryIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={'Histórico'}
                    classes={{
                      primary: classes.listItemText,
                    }}
                  />
                </ListItem>
              </List>
              <Divider />
              <Box p={7}>
                <Typography variant="body2">
                  Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountCircleIcon />}
                  >
                    Fazer login
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360'}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Procurar canais'}
                />
              </ListItem>
              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    MAIS DO YOUTUBE
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Youtube Premium'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
              </List>
              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    MAIS DO YOUTUBE
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Configurações'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Histórico de denúnci...'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ajuda'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Enviar feedback'}
                  />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>

        <Box p={8}>
          <Toolbar />
          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%', cursor: 'pointer' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Divider style={{ margin: '20px 0' }} />
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ fontWeight: 600, marginBottom: '15px' }}
          >
            Em alta
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%', cursor: 'pointer' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
