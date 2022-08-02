import React from 'react'
import {
    TextField,
    Checkbox,
    Button,
    FormControlLabel,
    Link,
    Grid,
    Typography,
    Avatar,
    Box,
    Container
} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";

function login() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
              marginTop:8,
              display:'flex',
              flexDirection: 'column',
              alignItems:'center',
          }}
      >
      <Avatar sx={{m:1, bgcolor:'secondary.main'}}>
        <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            margin = "normal"
            label = "Email Address"
            required
            fullWidth
            name = "email"
            autoComplete = "email"
            autoFocus
          />
          <TextField
            margin = "normal"
            label = "Password"
            type = "password"
            required
            fullWidth
            name = "password"
            autoComplete = "current-password"
          />
          <FormControlLabel
              control={<Checkbox
              value = "remember"
              color = "primary"
          />}
              label="Remember me"
          />

          <Button
              type = "submit"
              fullWidth
              variant = "contained"
              xs={{mt: 3, mb:2}}
           // mt : margin-top
          >Sign In</Button>
          <Grid container>
            <Grid item xs>
              <Link>Forgot Password?</Link>
            </Grid>
            <Grid item>
              <Link>Sign Up</Link>
            </Grid>
          </Grid>
      </Box>
    </Container>
  )
}

export default login