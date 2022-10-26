import * as React from 'react';
import { IRepoData } from '../../../interfaces/searchRepos';
import { IUserData } from '../../../interfaces/searchUsers';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Repository from '../repository/Repository';
import User from '../user/User';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

interface SearchResultsTabsProps {
	repos: IRepoData[];
	users?: IUserData[];
}

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const SearchResultTabs: React.FC<SearchResultsTabsProps> = ({
	repos,
	users,
}) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Container>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Repositories" {...a11yProps(0)} />
						<Tab label="Users" {...a11yProps(1)} />
					</Tabs>
				</Container>
			</Box>

			<TabPanel value={value} index={0}>
				{/* <Grid container spacing={1}> */}
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					direction="row"
					justifyContent="center"
					alignItems="stretch"
				>
					{repos.map((repo) => (
						<Repository key={repo.id} repo={repo} />
					))}
				</Grid>
			</TabPanel>
			<TabPanel value={value} index={1}>
				{users?.length &&
					users.map((user) => <User key={user.id} user={user} />)}
			</TabPanel>
		</Box>
	);
};

export default SearchResultTabs;
