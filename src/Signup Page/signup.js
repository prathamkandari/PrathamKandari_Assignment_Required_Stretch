import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Switch from '@mui/material/Switch';


const defaultTheme = createTheme();
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const techStackOptions = [
    { label: 'Java' },
    { label: 'Python' },
    { label: 'C/Cpp' },
    { label: 'HTML' },
];

export default function SignUp() {
    const [hireable, setHireable] = React.useState(false);

    const handleHireableToggle = () => {
        setHireable((prevHireable) => !prevHireable);
    };
    const [selectedTechStack, setSelectedTechStack] = React.useState([]);

    const handleSubmit = (event) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            reEnterPassword: data.get('reEnterPassword'),
            dateOfGraduation: data.get('dateOfGraduation'),
            githubURL: data.get('githubURL'),
            websiteURL: data.get('websiteURL'),
            bio: data.get('bio'),
            picture: data.get('picture'),
            fieldOfInterest: data.get('fieldOfInterest'),
            seeking: data.get('seeking'),
            techStack: data.getAll('techStack'), // Use getAll to get all selected values
            hireable: data.get('hireable'), // Fetch the hireable value

        });


        const handleSubmit = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);

            // Check if the password and re-entered password match
            const password = data.get('password');
            const reEnterPassword = data.get('reEnterPassword');

            if (password !== reEnterPassword) {
                // Display an error message or take appropriate action
                console.error("Passwords do not match");
                return;
            }
        };
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Academy Student Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={hireable}
                                            onChange={handleHireableToggle}
                                            name="hireable"
                                            color="primary"
                                        />
                                    }
                                    label="Hireable"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="reEnterPassword"
                                    label="Re-enter Password"
                                    type="password"
                                    id="reEnterPassword"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="dateOfGraduation"
                                    label="Date of Graduation"
                                    type="date"
                                    id="dateOfGraduation"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="githubURL"
                                    label="GitHub URL"
                                    id="githubURL"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="websiteURL"
                                    label="Website URL"
                                    id="websiteURL"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="bio"
                                    label="Bio"
                                    multiline
                                    rows={4}
                                    id="bio"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="picture"
                                    label="Upload Picture"
                                    type="file"
                                    id="picture"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel htmlFor="fieldOfInterest">Field of Interest</InputLabel>
                                    <Select
                                        name="fieldOfInterest"
                                        label="Field of Interest"
                                        id="fieldOfInterest"
                                    >
                                        <MenuItem value="Security">Security</MenuItem>
                                        <MenuItem value="Cloud">Cloud</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel htmlFor="fieldOfInterest">Field of Interest</InputLabel>
                                    <Select
                                        name="seekings"
                                        label="Seeking"
                                        id="seeking"
                                    >
                                        <MenuItem value="intern">Intern</MenuItem>
                                        <MenuItem value="fresher">Fresher</MenuItem>
                                        <MenuItem value="remote">Remote</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    multiple
                                    id="techStack"
                                    options={techStackOptions}
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.label}
                                    value={selectedTechStack}
                                    onChange={(event, newValue) => setSelectedTechStack(newValue)}
                                    isOptionEqualToValue={(option, value) => option.label === value.label}
                                    renderOption={(props, option, { selected }) => (
                                        <li {...props}>
                                            <Checkbox
                                                icon={icon}
                                                checkedIcon={checkedIcon}
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                            />
                                            {option.label}
                                        </li>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            required
                                            fullWidth
                                            label="Tech Stack"
                                            variant="outlined"
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}