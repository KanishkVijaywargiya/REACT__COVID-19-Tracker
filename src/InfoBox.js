import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './InfoBox.css';

function InfoBox({ title, cases, total, active, isRed, ...props }) {
    return (
        <Card
            className={`infoBox ${active && 'infoBox--selected'} ${isRed && active && 'infoBox--red'}`}
            onClick={props.onClick}>
            <CardContent>
                {/* Title Coronavirus Cases */}
                <Typography className='infoBox__title' color='textSecondary'>
                    {title}
                </Typography>

                {/* +120K Number of cases */}
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>

                {/* 1.2M Total */}
                <Typography className='infoBox__total' color='textSecondary'>
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox

// for BEM convention `__` used for change && `--` is used for modification