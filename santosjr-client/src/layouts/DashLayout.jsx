import { useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';

const drawerWidth = 260;

const navigationItems = [
  {
    label: 'Overview',
    to: '/dashboard',
    icon: <DashboardRoundedIcon />,
  },
  {
    label: 'Reports',
    to: '/dashboard/reports',
    icon: <AssessmentRoundedIcon />,
  },
  {
    label: 'Users',
    to: '/dashboard/users',
    icon: <GroupRoundedIcon />,
  },
];

const DashLayout = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const pageTitle = useMemo(() => {
    const currentItem = navigationItems.find((item) => item.to === location.pathname);
    return currentItem?.label ?? 'Dashboard';
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen((currentValue) => !currentValue);
  };

  const drawerContent = (
    <div>
      <Toolbar sx={{ px: 3 }}>
        <Box>
          <Typography variant="overline" sx={{ letterSpacing: 3, color: 'text.secondary' }}>
            Lab Activity 5
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            BulldogEx Dashboard
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List sx={{ px: 2, py: 2 }}>
        {navigationItems.map((item) => (
          <ListItemButton
            key={item.to}
            component={NavLink}
            to={item.to}
            end={item.to === '/dashboard'}
            onClick={() => setMobileOpen(false)}
            sx={{
              mb: 1,
              borderRadius: 3,
              '&.active': {
                backgroundColor: '#111827',
                color: '#ffffff',
                '& .MuiListItemIcon-root': {
                  color: '#ffffff',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
          Monitor store activity, review reports, and manage sample user data from one dashboard flow.
        </Typography>
        <ListItemButton
          component={NavLink}
          to="/"
          sx={{
            borderRadius: 999,
            border: '1px solid #d4d4d8',
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <StorefrontRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Back to Store" />
        </ListItemButton>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f7fb' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          borderBottom: '1px solid #e5e7eb',
          bgcolor: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography variant="overline" sx={{ letterSpacing: 3, color: 'text.secondary' }}>
              Dashboard
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {pageTitle}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="dashboard navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: '1px solid #e5e7eb',
              bgcolor: '#ffffff',
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashLayout;
