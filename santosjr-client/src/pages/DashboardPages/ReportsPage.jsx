import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

const monthlySales = [3200, 4100, 3800, 5200, 6100, 7200];
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const categoryDistribution = [
  { id: 0, value: 34, label: 'Daily Essentials' },
  { id: 1, value: 26, label: 'Study Supplies' },
  { id: 2, value: 22, label: 'Campus Apparel' },
  { id: 3, value: 18, label: 'Desk Setup' },
];

const weeklyTraffic = [18, 24, 22, 28, 31, 35, 29];
const weeklyOrders = [12, 16, 14, 20, 21, 25, 23];
const weekLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const ReportsPage = () => {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="overline" sx={{ letterSpacing: 3, color: 'text.secondary' }}>
          Reports
        </Typography>
        <Typography variant="h4" sx={{ mt: 1, fontWeight: 700 }}>
          Charts and data visualization
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760, lineHeight: 1.8 }}>
          This page presents sample charts using MUI X so the dashboard can quickly show sales patterns,
          category performance, and weekly platform activity.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Paper sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Monthly sales
            </Typography>
            <BarChart
              xAxis={[{ scaleType: 'band', data: monthLabels }]}
              series={[{ data: monthlySales, label: 'Sales', color: '#111827' }]}
              height={320}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <Paper sx={{ p: 3, borderRadius: 4, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Category share
            </Typography>
            <PieChart
              series={[
                {
                  data: categoryDistribution,
                  innerRadius: 55,
                  outerRadius: 110,
                  paddingAngle: 3,
                  cornerRadius: 4,
                },
              ]}
              height={320}
            />
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Weekly traffic vs orders
        </Typography>
        <LineChart
          xAxis={[{ scaleType: 'point', data: weekLabels }]}
          series={[
            { data: weeklyTraffic, label: 'Traffic', color: '#2563eb' },
            { data: weeklyOrders, label: 'Orders', color: '#f97316' },
          ]}
          height={320}
        />
      </Paper>
    </Stack>
  );
};

export default ReportsPage;
