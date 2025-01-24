import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

export default function Blog() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/signin');
    };

    return (
        <>
            <CssBaseline />
            <Box sx={{ 
                flexGrow: 1,
                backgroundColor: '#ffffff',
                minHeight: '100vh'
            }}>
                <AppBar 
                    position="static" 
                    elevation={0}
                    sx={{
                        backgroundColor: 'white',
                        borderBottom: '1px solid #e0e0e0'
                    }}
                >
                    <Toolbar>
                        <Typography 
                            variant="h6" 
                            component="div" 
                            sx={{ 
                                flexGrow: 1,
                                color: '#000000',
                                fontWeight: 600
                            }}
                        >
                            CVWO Web Forum
                        </Typography>
                        <Button 
                            onClick={handleLogout}
                            variant="outlined"
                            sx={{
                                color: '#1976d2',
                                borderColor: '#1976d2',
                                '&:hover': {
                                    backgroundColor: 'rgba(25, 118, 210, 0.04)',
                                    borderColor: '#1976d2'
                                }
                            }}
                        >
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box sx={{ p: 3 }}>
                    <Typography 
                        variant="h4" 
                        gutterBottom
                        sx={{ 
                            color: '#000000',
                            fontWeight: 500
                        }}
                    >
                        Welcome to the Blog
                    </Typography>
                    {/* Add your blog content here */}
                </Box>
            </Box>
        </>
    );
} 