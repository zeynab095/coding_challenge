import { Fragment, ReactElement, useState, useEffect } from "react";
import { StartupHttpService } from '../../Http/Startup/Startup.http.service'
import { Startup } from "../../Types/Startup";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
    data: Startup;
    index: string
};
const StartupItem: React.FC<Props> = (props: Props) => {

    return <Fragment>
        <Card sx={{ minWidth: 275, my: 2 }}>
            <CardContent key={props.index}>
                <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                    {props.data.name}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Founded: {props.data.dateFounded.getFullYear()}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.data.employees} Employees
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.data.totalFunding} $
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.data.currentInvestmentStage}
                    </Typography>
                </Box>
                <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                    {props.data.shortDescription}
                </Typography>
            </CardContent>

        </Card>
    </Fragment>;
}


export default StartupItem