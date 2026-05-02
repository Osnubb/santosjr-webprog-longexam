import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';

const summaryCards = [
  { label: 'Total Orders', value: '248', note: '+18 this week' },
  { label: 'Revenue', value: 'PHP 42,680', note: '+12.4% growth' },
  { label: 'Active Users', value: '93', note: '12 new sign-ups' },
  { label: 'Pending Pickups', value: '16', note: '4 due today' },
];

const topCategories = [
  { name: 'Daily Essentials', progress: 82, sales: '84 sales' },
  { name: 'Study Supplies', progress: 70, sales: '67 sales' },
  { name: 'Campus Apparel', progress: 58, sales: '41 sales' },
  { name: 'Desk Setup', progress: 45, sales: '29 sales' },
];

const recentActivities = [
  'Campus Tote Bag restocked for the new week.',
  'Exam Week Care Pack received the highest clicks today.',
  'Three new users signed up before noon.',
  'Wireless Study Lamp orders increased after the product update.',
];

const DashboardPage = () => {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="overline" sx={{ letterSpacing: 3, color: 'text.secondary' }}>
          Overview
        </Typography>
        <Typography variant="h4" sx={{ mt: 1, fontWeight: 700 }}>
          Store summary dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760, lineHeight: 1.8 }}>
          This overview page brings together the key store metrics in one place, making it easier
          to monitor orders, revenue, users, and product activity across the shop.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {summaryCards.map((card) => (
          <Grid key={card.label} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Paper sx={{ p: 3, borderRadius: 4, height: '100%' }}>
              <Typography variant="body2" color="text.secondary">
                {card.label}
              </Typography>
              <Typography variant="h4" sx={{ mt: 1.5, fontWeight: 700 }}>
                {card.value}
              </Typography>
              <Chip label={card.note} size="small" sx={{ mt: 2, borderRadius: 999 }} />
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Paper sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Top performing categories
            </Typography>
            <Stack spacing={3} sx={{ mt: 3 }}>
              {topCategories.map((category) => (
                <div key={category.name}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.sales}
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={category.progress}
                    sx={{
                      height: 10,
                      borderRadius: 999,
                    }}
                  />
                </div>
              ))}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <Paper sx={{ p: 3, borderRadius: 4, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Recent activity
            </Typography>
            <Stack spacing={2} sx={{ mt: 3 }}>
              {recentActivities.map((activity) => (
                <Paper
                  key={activity}
                  variant="outlined"
                  sx={{ p: 2, borderRadius: 3, bgcolor: '#fafafa' }}
                >
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {activity}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default DashboardPage;
