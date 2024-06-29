import React from 'react';
import { Grid, Box } from '@mui/material';

interface DotGridProps {
    rows?: number;
    columns?: number;
    dotSize?: number;
    spacing?: number;
}

const DotGrid: React.FC<DotGridProps> = ({
    rows = 10,
    columns = 8,
    dotSize = 8,
    spacing = 3,
}) => {
    const dots = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            dots.push(
                <Grid item key={`${i}-${j}`}>
                    <Box
                        sx={{
                            width: dotSize,
                            height: dotSize,
                            borderRadius: '50%',
                            backgroundColor: '#F9423A',
                        }}
                    />
                </Grid>
            );
        }
    }

    return (
        <Grid container spacing={spacing}>
            {dots}
        </Grid>
    );
};

export default DotGrid;
